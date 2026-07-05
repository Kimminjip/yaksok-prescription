import { useState, useCallback, useRef, useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { ClipboardList, Plus, GripVertical, Trash2, Star, StarOff, Copy, ClipboardPaste, Check } from "lucide-react";
import { DragDropContext, Droppable, Draggable, type DropResult } from "@hello-pangea/dnd";
import { apiRequest, queryClient, optimisticUpdateItems, getErrorMessage } from "@/lib/queryClient";
import { validateInput, prescriptionItemValidation } from "@/lib/validation";
import { useToast } from "@/hooks/use-toast";
import type { PrescriptionItem, FavoriteItem } from "@shared/schema";
import { prescriptionTypeOptions, unitOptions, mixGroupOptions, routeOptions, frequencyOptions } from "@shared/schema";

function FixedDropdown({ anchorRef, open, onClose, children, minWidth = 80, navigateOnSelect = false }: {
  anchorRef: React.RefObject<HTMLElement | null>;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  minWidth?: number;
  navigateOnSelect?: boolean;
}) {
  const [pos, setPos] = useState({ top: 0, left: 0, openUp: false });
  const menuRef = useRef<HTMLDivElement>(null);
  const [focusIdx, setFocusIdx] = useState(-1);

  useLayoutEffect(() => {
    if (open && anchorRef.current) {
      const rect = anchorRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const openUp = spaceBelow < 200;
      setPos({
        top: openUp ? rect.top : rect.bottom + 2,
        left: rect.left,
        openUp,
      });
      setFocusIdx(-1);
    }
  }, [open, anchorRef]);

  const getOptionButtons = useCallback(() => {
    if (!menuRef.current) return [];
    return Array.from(menuRef.current.querySelectorAll("button")) as HTMLButtonElement[];
  }, []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const btns = getOptionButtons();
        const activeEl = document.activeElement as HTMLElement;
        const idx = btns.indexOf(activeEl as HTMLButtonElement);
        if (idx >= 0) {
          btns[idx]?.click();
        } else {
          onClose();
        }
        setTimeout(() => {
          if (anchorRef.current) {
            navigateTabToNextCell(anchorRef.current);
          }
        }, 0);
        return;
      }
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        anchorRef.current?.focus();
        return;
      }
      const btns = getOptionButtons();
      if (btns.length === 0) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusIdx(prev => {
          const next = prev < btns.length - 1 ? prev + 1 : 0;
          btns[next]?.focus();
          return next;
        });
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusIdx(prev => {
          const p = prev > 0 ? prev - 1 : btns.length - 1;
          btns[p]?.focus();
          return p;
        });
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose, anchorRef, getOptionButtons]);

  const handleMenuClick = useCallback((e: React.MouseEvent) => {
    if (!navigateOnSelect) return;
    const btn = (e.target as HTMLElement).closest("button");
    if (btn && menuRef.current?.contains(btn)) {
      setTimeout(() => {
        if (anchorRef.current) {
          navigateTabToNextCell(anchorRef.current);
        }
      }, 0);
    }
  }, [navigateOnSelect, anchorRef]);

  if (!open) return null;

  return createPortal(
    <>
      <div className="fixed inset-0 z-[9998]" onClick={onClose} />
      <div
        ref={menuRef}
        className="fixed z-[9999] bg-popover border rounded-md shadow-md py-1"
        style={{
          left: pos.left,
          ...(pos.openUp
            ? { bottom: window.innerHeight - pos.top + 2 }
            : { top: pos.top }),
          minWidth,
        }}
        onClick={handleMenuClick}
      >
        {children}
      </div>
    </>,
    document.body
  );
}

function navigateTabToNextCell(currentElement: HTMLElement) {
  const cell = currentElement.closest("[data-tab-row]") as HTMLElement;
  if (!cell) return;

  const currentRow = parseInt(cell.getAttribute("data-tab-row") || "0");
  const currentCol = parseInt(cell.getAttribute("data-tab-col") || "0");

  setTimeout(() => {
    const allCells = Array.from(document.querySelectorAll("[data-tab-row][data-tab-col]"));
    const parsed = allCells.map(el => ({
      el: el as HTMLElement,
      row: parseInt(el.getAttribute("data-tab-row") || "-1"),
      col: parseInt(el.getAttribute("data-tab-col") || "-1"),
    }));

    const sameRow = parsed
      .filter(c => c.row === currentRow && c.col > currentCol)
      .sort((a, b) => a.col - b.col);

    if (sameRow.length > 0) {
      const clickable = sameRow[0].el.querySelector("button, [data-testid^='text-'], [data-testid^='select-']") as HTMLElement;
      if (clickable) clickable.click();
      return;
    }

    const nextRow = parsed
      .filter(c => c.row === currentRow + 1)
      .sort((a, b) => a.col - b.col);

    if (nextRow.length > 0) {
      const clickable = nextRow[0].el.querySelector("button, [data-testid^='text-'], [data-testid^='select-']") as HTMLElement;
      if (clickable) clickable.click();
      return;
    }

    document.dispatchEvent(new CustomEvent("tab-add-item", { detail: { row: currentRow + 1 } }));
  }, 50);
}

interface PrescriptionTableProps {
  items: PrescriptionItem[];
  isLoading: boolean;
  prescriptionId: number;
}

const typeColorMap: Record<string, string> = {
  "약": "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  "혈액검사": "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
  "영상검사": "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
  "지시처방": "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  "추가설명": "bg-gray-200 text-gray-700 dark:bg-gray-700/50 dark:text-gray-300",
  "퇴원약": "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
};

function EditableCell({
  value,
  itemId,
  field,
  prescriptionId,
  className = "",
  multiline = false,
}: {
  value: string | null;
  itemId: number;
  field: string;
  prescriptionId: number;
  className?: string;
  multiline?: boolean;
}) {
  const [editing, setEditing] = useState(false);
  const [localVal, setLocalVal] = useState(value || "");
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    setLocalVal(value || "");
  }, [value]);

  useEffect(() => {
    if (editing) {
      if (multiline && textareaRef.current) {
        textareaRef.current.focus();
        textareaRef.current.select();
      } else if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  }, [editing, multiline]);

  const save = async () => {
    setEditing(false);
    const newVal = localVal.trimEnd() || null;
    if (newVal !== (value || null)) {
      // 간단한 검증: 길이 체크
      const maxLengths: Record<string, number> = {
        productName: 500,
        ingredientName: 100,
        dosage: 50,
        duration: 30,
        note: 500,
      };
      const maxLen = maxLengths[field];
      if (maxLen && newVal && newVal.length > maxLen) {
        toast({ title: `${maxLen}자를 초과하여 저장되지 않았습니다`, variant: "destructive" });
        setLocalVal(value || "");
        return; // 검증 실패, 저장 안 함
      }

      const itemsKey = ["/api/prescriptions", prescriptionId, "items"] as const;
      const previous = optimisticUpdateItems(itemsKey, items =>
        items.map(item => item.id === itemId ? { ...item, [field]: newVal } : item)
      );
      try {
        await apiRequest("PATCH", `/api/prescription-items/${itemId}`, { [field]: newVal });
      } catch {
        if (previous) queryClient.setQueryData(itemsKey, previous);
      }
    }
  };

  if (editing) {
    if (multiline) {
      return (
        <textarea
          ref={textareaRef}
          spellCheck={false}
          value={localVal}
          onChange={(e) => setLocalVal(e.target.value)}
          onBlur={save}
          onKeyDown={(e) => {
            if (e.key === "Tab") { e.preventDefault(); save(); navigateTabToNextCell(e.currentTarget); return; }
            if (e.key === "Escape") { setLocalVal(value || ""); setEditing(false); }
          }}
          rows={Math.max(2, localVal.split("\n").length)}
          className={`w-full bg-transparent border border-ring outline-none text-sm px-1 py-0.5 rounded resize-none ${className}`}
          data-testid={`input-${field}-${itemId}`}
        />
      );
    }
    return (
      <input
        ref={inputRef}
        spellCheck={false}
        value={localVal}
        onChange={(e) => setLocalVal(e.target.value)}
        onBlur={save}
        onKeyDown={(e) => {
          if (e.key === "Tab") { e.preventDefault(); save(); navigateTabToNextCell(e.currentTarget); return; }
          if (e.key === "Enter") save();
          if (e.key === "Escape") { setLocalVal(value || ""); setEditing(false); }
        }}
        className={`w-full bg-transparent border-b border-ring outline-none text-sm px-0 py-0 ${className}`}
        data-testid={`input-${field}-${itemId}`}
      />
    );
  }

  return (
    <span
      tabIndex={0}
      onClick={() => setEditing(true)}
      onKeyDown={(e) => {
        if (e.key === "Tab") { e.preventDefault(); navigateTabToNextCell(e.currentTarget); return; }
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setEditing(true); }
      }}
      className={`cursor-pointer hover:bg-accent/50 rounded px-1 py-0.5 -mx-1 inline-block min-w-[2rem] min-h-[1.25rem] whitespace-pre-wrap ${className}`}
      data-testid={`text-${field}-${itemId}`}
    >
      {value || "\u00A0"}
    </span>
  );
}

function SelectableCell({
  value,
  itemId,
  field,
  prescriptionId,
  options,
  className = "",
}: {
  value: string | null;
  itemId: number;
  field: string;
  prescriptionId: number;
  options: readonly string[];
  className?: string;
}) {
  const [editing, setEditing] = useState(false);
  const [customInput, setCustomInput] = useState(false);
  const [localVal, setLocalVal] = useState(value || "");
  const inputRef = useRef<HTMLInputElement>(null);
  const anchorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setLocalVal(value || "");
  }, [value]);

  useEffect(() => {
    if (customInput && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [customInput]);

  const saveValue = async (newVal: string | null) => {
    setEditing(false);
    setCustomInput(false);
    if (newVal !== (value || null)) {
      await apiRequest("PATCH", `/api/prescription-items/${itemId}`, { [field]: newVal });
      queryClient.invalidateQueries({ queryKey: ["/api/prescriptions", prescriptionId, "items"] });
    }
  };

  if (customInput) {
    return (
      <input
        ref={inputRef}
        spellCheck={false}
        value={localVal}
        onChange={(e) => setLocalVal(e.target.value)}
        onBlur={() => saveValue(localVal.trim() || null)}
        onKeyDown={(e) => {
          if (e.key === "Tab") { e.preventDefault(); saveValue(localVal.trim() || null); navigateTabToNextCell(e.currentTarget); return; }
          if (e.key === "Enter") saveValue(localVal.trim() || null);
          if (e.key === "Escape") { setLocalVal(value || ""); setCustomInput(false); setEditing(false); }
        }}
        className={`w-full bg-transparent border-b border-ring outline-none text-sm px-0 py-0 ${className}`}
        data-testid={`input-${field}-${itemId}`}
      />
    );
  }

  return (
    <>
      <span
        ref={anchorRef}
        tabIndex={0}
        onClick={() => setEditing(true)}
        onKeyDown={(e) => {
          if (e.key === "Tab") { e.preventDefault(); setEditing(false); navigateTabToNextCell(e.currentTarget); return; }
        }}
        className={`cursor-pointer hover:bg-accent/50 rounded px-1 py-0.5 -mx-1 inline-block min-w-[2rem] min-h-[1.25rem] ${className}`}
        data-testid={`text-${field}-${itemId}`}
      >
        {value || "\u00A0"}
      </span>
      <FixedDropdown anchorRef={anchorRef} open={editing} onClose={() => setEditing(false)} minWidth={80} navigateOnSelect>
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => saveValue(opt)}
            className={`w-full text-left text-xs px-3 py-1.5 hover-elevate ${value === opt ? "bg-accent font-medium" : ""}`}
            data-testid={`option-${field}-${opt}-${itemId}`}
          >
            {opt}
          </button>
        ))}
        <button
          onClick={() => setCustomInput(true)}
          className="w-full text-left text-xs px-3 py-1.5 hover-elevate text-muted-foreground border-t"
          data-testid={`option-${field}-custom-${itemId}`}
        >
          직접입력
        </button>
      </FixedDropdown>
    </>
  );
}

function TypeSelect({ value, itemId, prescriptionId, hideLabel = false }: { value: string; itemId: number; prescriptionId: number; hideLabel?: boolean }) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleChange = async (newVal: string) => {
    setOpen(false);
    if (newVal !== value) {
      const itemsKey = ["/api/prescriptions", prescriptionId, "items"] as const;
      const previous = optimisticUpdateItems(itemsKey, items =>
        items.map(item => item.id === itemId ? { ...item, type: newVal } : item)
      );
      try {
        await apiRequest("PATCH", `/api/prescription-items/${itemId}`, { type: newVal });
      } catch {
        if (previous) queryClient.setQueryData(itemsKey, previous);
      }
    }
  };

  return (
    <>
      <button
        ref={anchorRef}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => {
          if (e.key === "Tab") { e.preventDefault(); setOpen(false); navigateTabToNextCell(e.currentTarget); }
        }}
        data-testid={`select-type-${itemId}`}
        className="cursor-pointer"
      >
        {hideLabel ? (
          <span className="inline-block min-w-[2rem] min-h-[1.25rem]">{"\u00A0"}</span>
        ) : (
          <Badge
            variant="secondary"
            className={`text-xs whitespace-nowrap no-default-hover-elevate no-default-active-elevate ${typeColorMap[value] || ""}`}
          >
            {value}
          </Badge>
        )}
      </button>
      <FixedDropdown anchorRef={anchorRef} open={open} onClose={() => setOpen(false)} minWidth={90} navigateOnSelect>
        {[...prescriptionTypeOptions].sort((a, b) => {
          const bottom = ["지시처방", "추가설명"];
          const ai = bottom.indexOf(a), bi = bottom.indexOf(b);
          if (ai >= 0 && bi >= 0) return ai - bi;
          if (ai >= 0) return 1;
          if (bi >= 0) return -1;
          return 0;
        }).map((opt) => (
          <button
            key={opt}
            onClick={() => handleChange(opt)}
            className={`w-full text-left text-xs px-3 py-1.5 hover-elevate ${value === opt ? "bg-accent font-medium" : ""}`}
            data-testid={`option-type-${opt}`}
          >
            <Badge
              variant="secondary"
              className={`text-xs no-default-hover-elevate no-default-active-elevate ${typeColorMap[opt] || ""}`}
            >
              {opt}
            </Badge>
          </button>
        ))}
      </FixedDropdown>
    </>
  );
}

function UnitSelect({ value, itemId, prescriptionId }: { value: string | null; itemId: number; prescriptionId: number }) {
  const [open, setOpen] = useState(false);
  const [customInput, setCustomInput] = useState(false);
  const [localVal, setLocalVal] = useState(value || "");
  const anchorRef = useRef<HTMLSpanElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setLocalVal(value || "");
  }, [value]);

  useEffect(() => {
    if (customInput && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [customInput]);

  const handleChange = async (newVal: string | null) => {
    setOpen(false);
    setCustomInput(false);
    if (newVal !== value) {
      const itemsKey = ["/api/prescriptions", prescriptionId, "items"] as const;
      const previous = optimisticUpdateItems(itemsKey, items =>
        items.map(item => item.id === itemId ? { ...item, unit: newVal } : item)
      );
      try {
        await apiRequest("PATCH", `/api/prescription-items/${itemId}`, { unit: newVal });
      } catch {
        if (previous) queryClient.setQueryData(itemsKey, previous);
      }
    }
  };

  if (customInput) {
    return (
      <input
        ref={inputRef}
        spellCheck={false}
        value={localVal}
        onChange={(e) => setLocalVal(e.target.value)}
        onBlur={() => handleChange(localVal.trim() || null)}
        onKeyDown={(e) => {
          if (e.key === "Tab") { e.preventDefault(); handleChange(localVal.trim() || null); navigateTabToNextCell(e.currentTarget); return; }
          if (e.key === "Enter") handleChange(localVal.trim() || null);
          if (e.key === "Escape") { setLocalVal(value || ""); setCustomInput(false); setOpen(false); }
        }}
        className="w-full bg-transparent border-b border-ring outline-none text-sm px-0 py-0 text-center"
        data-testid={`input-unit-${itemId}`}
      />
    );
  }

  return (
    <>
      <span
        ref={anchorRef}
        tabIndex={0}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => {
          if (e.key === "Tab") { e.preventDefault(); setOpen(false); navigateTabToNextCell(e.currentTarget); }
        }}
        className="cursor-pointer hover:bg-accent/50 rounded px-1 py-0.5 -mx-1 inline-block min-w-[2rem] min-h-[1.25rem] text-sm"
        data-testid={`select-unit-${itemId}`}
      >
        {value || "\u00A0"}
      </span>
      <FixedDropdown anchorRef={anchorRef} open={open} onClose={() => setOpen(false)} minWidth={50} navigateOnSelect>
        {unitOptions.map((opt) => (
          <button
            key={opt}
            onClick={() => handleChange(opt)}
            className={`w-full text-left text-xs px-3 py-1.5 hover-elevate ${value === opt ? "bg-accent font-medium" : ""}`}
            data-testid={`option-unit-${opt}`}
          >
            {opt}
          </button>
        ))}
        <button
          onClick={() => { setOpen(false); setCustomInput(true); }}
          className="w-full text-left text-xs px-3 py-1.5 hover-elevate text-muted-foreground border-t"
          data-testid={`option-unit-custom-${itemId}`}
        >
          직접입력
        </button>
      </FixedDropdown>
    </>
  );
}

function MixSelect({ value, itemId, prescriptionId }: { value: string | null; itemId: number; prescriptionId: number }) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLSpanElement>(null);

  const handleChange = async (newVal: string | null) => {
    setOpen(false);
    if (newVal !== value) {
      const itemsKey = ["/api/prescriptions", prescriptionId, "items"] as const;
      const previous = optimisticUpdateItems(itemsKey, items =>
        items.map(item => item.id === itemId ? { ...item, mixGroup: newVal } : item)
      );
      try {
        await apiRequest("PATCH", `/api/prescription-items/${itemId}`, { mixGroup: newVal });
      } catch {
        if (previous) queryClient.setQueryData(itemsKey, previous);
      }
    }
  };

  return (
    <>
      <span
        ref={anchorRef}
        tabIndex={0}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => {
          if (e.key === "Tab") { e.preventDefault(); setOpen(false); navigateTabToNextCell(e.currentTarget); }
        }}
        className="cursor-pointer hover:bg-accent/50 rounded px-1 py-0.5 -mx-1 inline-block min-w-[2rem] min-h-[1.25rem] text-sm"
        data-testid={`select-mix-${itemId}`}
      >
        {value || "\u00A0"}
      </span>
      <FixedDropdown anchorRef={anchorRef} open={open} onClose={() => setOpen(false)} minWidth={50} navigateOnSelect>
        <button
          onClick={() => handleChange(null)}
          className={`w-full text-left text-xs px-3 py-1.5 hover-elevate ${!value ? "bg-accent" : ""}`}
        >
          (없음)
        </button>
        {mixGroupOptions.filter(o => o !== "").map((opt) => (
          <button
            key={opt}
            onClick={() => handleChange(opt)}
            className={`w-full text-left text-xs px-3 py-1.5 hover-elevate ${value === opt ? "bg-accent font-medium" : ""}`}
            data-testid={`option-mix-${opt}`}
          >
            {opt}
          </button>
        ))}
      </FixedDropdown>
    </>
  );
}

function FavoritesPanel({ prescriptionId }: { prescriptionId: number }) {
  const { toast } = useToast();
  const { data: favorites = [] } = useQuery<FavoriteItem[]>({
    queryKey: ["/api/favorites"],
  });

  const addMutation = useMutation({
    mutationFn: async (favId: number) => {
      await apiRequest("POST", `/api/favorites/${favId}/add-to-prescription`, { prescriptionId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/prescriptions", prescriptionId, "items"] });
      toast({ title: "즐겨찾기 항목이 추가되었습니다" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (favId: number) => {
      await apiRequest("DELETE", `/api/favorites/${favId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/favorites"] });
    },
  });

  if (favorites.length === 0) {
    return (
      <div className="text-xs text-muted-foreground p-3 text-center">
        즐겨찾기가 비어있습니다.
        <br />
        처방항목을 우클릭하여 즐겨찾기에 추가하세요.
      </div>
    );
  }

  return (
    <div className="p-2 space-y-1 max-h-[200px] overflow-y-auto">
      {favorites.map((fav) => (
        <div key={fav.id} className="flex items-center gap-1 text-xs px-2 py-1.5 rounded-md hover-elevate group">
          <Badge
            variant="secondary"
            className={`text-[10px] shrink-0 no-default-hover-elevate no-default-active-elevate ${typeColorMap[fav.type] || ""}`}
          >
            {fav.type}
          </Badge>
          <button
            onClick={() => addMutation.mutate(fav.id)}
            className="flex-1 text-left truncate"
            disabled={addMutation.isPending}
            data-testid={`button-add-favorite-${fav.id}`}
          >
            {fav.productName}
            {fav.ingredientName ? ` (${fav.ingredientName})` : ""}
          </button>
          <button
            onClick={() => deleteMutation.mutate(fav.id)}
            className="invisible group-hover:visible p-0.5 text-muted-foreground/50 hover:text-destructive rounded-md shrink-0"
            data-testid={`button-delete-favorite-${fav.id}`}
          >
            <StarOff className="h-3 w-3" />
          </button>
        </div>
      ))}
    </div>
  );
}

const clipboardStore = { items: null as PrescriptionItem[] | null };

export function PrescriptionTable({ items, isLoading, prescriptionId }: PrescriptionTableProps) {
  const [showFavorites, setShowFavorites] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());
  const [clipboardCount, setClipboardCount] = useState(clipboardStore.items?.length || 0);
  const lastClickedIndex = useRef<number | null>(null);
  const { toast } = useToast();
  const [bulkDeleting, setBulkDeleting] = useState(false);

  const handleDeleteItem = async (itemId: number) => {
    if (!window.confirm("이 항목을 삭제하시겠습니까?")) return;
    const itemsKey = ["/api/prescriptions", prescriptionId, "items"] as const;
    const previous = optimisticUpdateItems(itemsKey, items => items.filter(i => i.id !== itemId));
    try {
      await apiRequest("DELETE", `/api/prescription-items/${itemId}`);
    } catch (error) {
      if (previous) queryClient.setQueryData(itemsKey, previous);
      toast({ title: getErrorMessage(error), variant: "destructive" });
    }
  };

  const handleBulkDelete = async () => {
    const ids = Array.from(selectedIds);
    if (ids.length === 0) return;
    if (!window.confirm(`선택한 ${ids.length}개 항목을 삭제하시겠습니까?`)) return;
    setBulkDeleting(true);
    const itemsKey = ["/api/prescriptions", prescriptionId, "items"] as const;
    const previous = optimisticUpdateItems(itemsKey, items => items.filter(i => !ids.includes(i.id)));
    try {
      const res = await apiRequest("POST", "/api/prescription-items/batch-delete", { ids });
      const data = await res.json();
      toast({ title: `${data.deleted}개 항목이 삭제되었습니다` });
    } catch {
      if (previous) queryClient.setQueryData(itemsKey, previous);
      toast({ title: "삭제 중 오류가 발생했습니다", variant: "destructive" });
    } finally {
      setSelectedIds(new Set());
      setBulkDeleting(false);
    }
  };

  const handleDragEnd = useCallback(async (result: DropResult) => {
    if (!result.destination) return;
    if (result.source.index === result.destination.index) return;

    const reordered = Array.from(items);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    const reorderedWithSort = reordered.map((item, i) => ({ ...item, sortOrder: i }));
    const orderItems = reorderedWithSort.map((item, i) => ({ id: item.id, sortOrder: i }));

    const itemsKey = ["/api/prescriptions", prescriptionId, "items"] as const;
    const previous = optimisticUpdateItems(itemsKey, () => reorderedWithSort);
    try {
      await apiRequest("POST", "/api/prescription-items/reorder", { items: orderItems });
    } catch {
      if (previous) queryClient.setQueryData(itemsKey, previous);
    }
  }, [items, prescriptionId]);

  const handleAddItem = async () => {
    const maxOrder = items.length > 0 ? Math.max(...items.map(i => i.sortOrder)) + 1 : 0;
    const newItem: PrescriptionItem = {
      id: Math.max(...items.map(i => i.id), 0) + 1,
      prescriptionId,
      type: "약",
      productName: "새 처방",
      ingredientName: undefined,
      dosage: undefined,
      unit: undefined,
      frequency: undefined,
      route: undefined,
      duration: undefined,
      note: undefined,
      mixGroup: undefined,
      sortOrder: maxOrder,
    };
    const itemsKey = ["/api/prescriptions", prescriptionId, "items"] as const;
    const previous = optimisticUpdateItems(itemsKey, items => [...items, newItem]);
    try {
      await apiRequest("POST", `/api/prescriptions/${prescriptionId}/items`, {
        type: "약",
        productName: "새 처방",
        sortOrder: maxOrder,
      });
    } catch {
      if (previous) queryClient.setQueryData(itemsKey, previous);
    }
  };

  const handleInsertBelow = async (afterIndex: number) => {
    const newItems = [...items];
    const insertOrder = items[afterIndex].sortOrder + 1;
    for (let i = afterIndex + 1; i < newItems.length; i++) {
      newItems[i] = { ...newItems[i], sortOrder: newItems[i].sortOrder + 1 };
    }
    const newItem: PrescriptionItem = {
      id: Math.max(...items.map(i => i.id), 0) + 1,
      prescriptionId,
      type: "약",
      productName: "새 처방",
      ingredientName: undefined,
      dosage: undefined,
      unit: undefined,
      frequency: undefined,
      route: undefined,
      duration: undefined,
      note: undefined,
      mixGroup: undefined,
      sortOrder: insertOrder,
    };
    newItems.splice(afterIndex + 1, 0, newItem);

    const itemsKey = ["/api/prescriptions", prescriptionId, "items"] as const;
    const previous = optimisticUpdateItems(itemsKey, () => newItems);
    try {
      const reorderIds = newItems.slice(afterIndex + 2).map(i => i.id);
      if (reorderIds.length > 0) {
        await apiRequest("POST", "/api/prescription-items/reorder", {
          items: newItems.slice(afterIndex + 2).map((i, idx) => ({ id: i.id, sortOrder: insertOrder + 1 + idx })),
        });
      }
      await apiRequest("POST", `/api/prescriptions/${prescriptionId}/items`, {
        type: "약",
        productName: "새 처방",
        sortOrder: insertOrder,
      });
    } catch {
      if (previous) queryClient.setQueryData(itemsKey, previous);
    }
  };

  const handleAddToFavorites = async (item: PrescriptionItem) => {
    const favoritesKey = ["/api/favorites"] as const;
    const newFav: FavoriteItem = {
      id: Math.max(...(queryClient.getQueryData<FavoriteItem[]>(favoritesKey) || []).map(f => f.id), 0) + 1,
      type: item.type,
      productName: item.productName,
      ingredientName: item.ingredientName,
      dosage: item.dosage,
      unit: item.unit,
      frequency: item.frequency,
      route: item.route,
      note: item.note,
      sortOrder: 0,
    };
    const previous = optimisticUpdateItems(favoritesKey, favs => [...favs, newFav]);
    try {
      await apiRequest("POST", "/api/favorites", {
        type: item.type,
        productName: item.productName,
        ingredientName: item.ingredientName,
        dosage: item.dosage,
        unit: item.unit,
        frequency: item.frequency,
        route: item.route,
        note: item.note,
        sortOrder: 0,
      });
      toast({ title: "즐겨찾기에 추가되었습니다", description: item.productName });
    } catch {
      if (previous) queryClient.setQueryData(favoritesKey, previous);
    }
  };

  const handleRowClick = useCallback((e: React.MouseEvent, index: number, itemId: number) => {
    if ((e.target as HTMLElement).closest("input, textarea, [data-testid^='drag-']")) {
      return;
    }

    if (e.ctrlKey || e.metaKey) {
      setSelectedIds(prev => {
        const next = new Set(prev);
        if (next.has(itemId)) next.delete(itemId);
        else next.add(itemId);
        return next;
      });
      lastClickedIndex.current = index;
    } else if (e.shiftKey && lastClickedIndex.current !== null) {
      const start = Math.min(lastClickedIndex.current, index);
      const end = Math.max(lastClickedIndex.current, index);
      const rangeIds = items.slice(start, end + 1).map(i => i.id);
      setSelectedIds(prev => {
        const next = new Set(prev);
        rangeIds.forEach(id => next.add(id));
        return next;
      });
    } else {
      setSelectedIds(new Set([itemId]));
      lastClickedIndex.current = index;
    }
  }, [items]);

  const handleCopy = useCallback(() => {
    if (selectedIds.size === 0) return;
    const selected = items.filter(i => selectedIds.has(i.id));
    clipboardStore.items = selected;
    setClipboardCount(selected.length);
    toast({ title: `${selected.length}개 항목이 복사되었습니다` });
  }, [items, selectedIds, toast]);

  const handlePaste = useCallback(async () => {
    if (!clipboardStore.items || clipboardStore.items.length === 0) return;
    const maxOrder = items.length > 0 ? Math.max(...items.map(i => i.sortOrder)) + 1 : 0;
    const newItems = clipboardStore.items.map((item, idx) => ({
      type: item.type,
      productName: item.productName,
      ingredientName: item.ingredientName,
      dosage: item.dosage,
      unit: item.unit,
      frequency: item.frequency,
      route: item.route,
      duration: item.duration,
      note: item.note,
      mixGroup: item.mixGroup,
      sortOrder: maxOrder + idx,
    }));
    await apiRequest("POST", `/api/prescriptions/${prescriptionId}/items/batch`, { items: newItems });
    queryClient.invalidateQueries({ queryKey: ["/api/prescriptions", prescriptionId, "items"] });
    toast({ title: `${newItems.length}개 항목이 붙여넣기 되었습니다` });
  }, [items, prescriptionId, toast]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if ((e.ctrlKey || e.metaKey) && e.key === "c") {
        if (selectedIds.size > 0) {
          e.preventDefault();
          handleCopy();
        }
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "v") {
        if (clipboardStore.items && clipboardStore.items.length > 0) {
          e.preventDefault();
          handlePaste();
        }
      }
      if (e.key === "Escape") {
        setSelectedIds(new Set());
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [selectedIds, handleCopy, handlePaste]);

  const pendingFocusRow = useRef<number | null>(null);

  useEffect(() => {
    if (pendingFocusRow.current !== null) {
      const row = pendingFocusRow.current;
      pendingFocusRow.current = null;
      setTimeout(() => {
        const cells = document.querySelectorAll(`[data-tab-row="${row}"]`);
        if (cells.length > 0) {
          const sorted = Array.from(cells).sort((a, b) =>
            parseInt(a.getAttribute("data-tab-col") || "0") - parseInt(b.getAttribute("data-tab-col") || "0")
          );
          const target = sorted[0].querySelector("button, [data-testid^='text-'], [data-testid^='select-']") as HTMLElement;
          if (target) target.click();
        }
      }, 100);
    }
  }, [items]);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      pendingFocusRow.current = detail.row;
      handleAddItem();
    };
    document.addEventListener("tab-add-item", handler);
    return () => document.removeEventListener("tab-add-item", handler);
  }, [handleAddItem]);

  if (isLoading) {
    return (
      <Card className="overflow-hidden">
        <div className="p-4 space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-full" />
          ))}
        </div>
      </Card>
    );
  }

  const hasDuration = items.some(i => i.type === "퇴원약");
  const colCount = hasDuration ? 11 : 10;

  if (items.length === 0) {
    return (
      <Card className="overflow-hidden">
        <div className="p-8 text-center">
          <ClipboardList className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">처방 항목이 없습니다</p>
          <p className="text-xs text-muted-foreground mt-1">항목을 추가하여 처방을 작성하세요</p>
          <Button size="sm" className="mt-4" onClick={handleAddItem}>
            <Plus className="h-4 w-4 mr-1" />
            첫 항목 추가
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <>
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between gap-2 p-3 border-b">
        <span className="text-sm font-medium text-muted-foreground">
          처방 항목 ({items.length})
        </span>
        <div className="flex items-center gap-1 flex-wrap">
          {selectedIds.size > 0 && (
            <>
              <span className="text-xs text-muted-foreground mr-1">{selectedIds.size}개 선택</span>
              <Button size="sm" variant="outline" onClick={handleCopy} data-testid="button-copy-items">
                <Copy className="h-4 w-4 mr-1" />
                복사
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-destructive"
                onClick={handleBulkDelete}
                disabled={bulkDeleting}
                data-testid="button-bulk-delete"
              >
                <Trash2 className="h-4 w-4 mr-1" />
                {bulkDeleting ? "삭제 중..." : "삭제"}
              </Button>
            </>
          )}
          {clipboardCount > 0 && (
            <Button size="sm" variant="outline" onClick={handlePaste} data-testid="button-paste-items">
              <ClipboardPaste className="h-4 w-4 mr-1" />
              붙여넣기 ({clipboardCount})
            </Button>
          )}
          <Button
            size="sm"
            variant={showFavorites ? "default" : "outline"}
            onClick={() => setShowFavorites(!showFavorites)}
            data-testid="button-toggle-favorites"
          >
            <Star className="h-4 w-4 mr-1" />
            즐겨찾기
          </Button>
          <Button size="sm" onClick={handleAddItem} data-testid="button-add-item">
            <Plus className="h-4 w-4 mr-1" />
            항목 추가
          </Button>
        </div>
      </div>
      {showFavorites && (
        <div className="border-b bg-muted/30">
          <FavoritesPanel prescriptionId={prescriptionId} />
        </div>
      )}
      {items.length === 0 ? (
        <div className="p-8 flex flex-col items-center justify-center text-muted-foreground">
          <ClipboardList className="h-10 w-10 mb-3 opacity-30" />
          <p className="text-sm font-medium">등록된 처방 항목이 없습니다</p>
          <p className="text-xs mt-1">상단의 항목 추가 버튼을 클릭하세요</p>
        </div>
      ) : (
        <div className="overflow-x-auto max-h-[calc(100vh-180px)]">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Table>
              <TableHeader className="sticky top-0 z-20 bg-background">
                <TableRow className="bg-muted/50">
                  <TableHead className="w-[32px]"></TableHead>
                  <TableHead className="w-[80px] font-semibold text-xs">처방분류</TableHead>
                  <TableHead className="w-[44px] font-semibold text-xs text-center">Mix</TableHead>
                  <TableHead className="font-semibold text-xs w-[288px]">상품명</TableHead>
                  <TableHead className="font-semibold text-xs w-[200px]">성분명</TableHead>
                  <TableHead className="w-[56px] font-semibold text-xs text-right">용량</TableHead>
                  <TableHead className="w-[50px] font-semibold text-xs text-center">단위</TableHead>
                  <TableHead className="w-[60px] font-semibold text-xs">횟수</TableHead>
                  {hasDuration && <TableHead className="w-[56px] font-semibold text-xs">일수</TableHead>}
                  <TableHead className="w-[64px] font-semibold text-xs">투약경로</TableHead>
                  <TableHead className="font-semibold text-xs min-w-[180px]">비고</TableHead>
                </TableRow>
              </TableHeader>
              <Droppable droppableId="items-list" type="TABLE_ITEM">
                {(provided) => (
                  <TableBody ref={provided.innerRef} {...provided.droppableProps}>
                    {items.map((item, index) => (
                      <Draggable key={item.id} draggableId={`item-${item.id}`} index={index}>
                        {(dragProvided, dragSnapshot) => (
                          <ContextMenu>
                            <ContextMenuTrigger asChild>
                              <TableRow
                                ref={dragProvided.innerRef}
                                {...dragProvided.draggableProps}
                                data-testid={`row-item-${item.id}`}
                                onClick={(e) => handleRowClick(e, index, item.id)}
                                className={`group/row ${index % 2 === 0 ? "" : "bg-muted/20"} ${dragSnapshot.isDragging ? "bg-accent shadow-md" : ""} ${selectedIds.has(item.id) ? "bg-blue-100 dark:bg-blue-900/30" : ""}`}
                              >
                                <TableCell className="px-1">
                                  <div
                                    {...dragProvided.dragHandleProps}
                                    className="cursor-grab active:cursor-grabbing text-muted-foreground p-1 hover-elevate rounded-md invisible group-hover/row:visible"
                                    data-testid={`drag-item-${item.id}`}
                                  >
                                    <GripVertical className="h-3.5 w-3.5" />
                                  </div>
                                </TableCell>
                                <TableCell className="px-1" data-tab-row={index} data-tab-col={0}>
                                  <TypeSelect value={item.type} itemId={item.id} prescriptionId={prescriptionId} hideLabel={item.type === "추가설명"} />
                                </TableCell>
                                {item.type === "지시처방" ? (
                                  <>
                                    <TableCell className="px-1 text-center">
                                      <span className="text-xs text-muted-foreground">{"\u00A0"}</span>
                                    </TableCell>
                                    <TableCell colSpan={colCount - 3} className="px-2" data-tab-row={index} data-tab-col={1}>
                                      <EditableCell value={item.productName} itemId={item.id} field="productName" prescriptionId={prescriptionId} className="font-medium text-green-700 dark:text-green-400" multiline />
                                    </TableCell>
                                  </>
                                ) : item.type === "추가설명" ? (
                                  <>
                                    <TableCell colSpan={colCount - 2} className="px-2" data-tab-row={index} data-tab-col={1}>
                                      <EditableCell value={item.productName} itemId={item.id} field="productName" prescriptionId={prescriptionId} className="font-medium text-blue-900 dark:text-blue-300" multiline />
                                    </TableCell>
                                  </>
                                ) : item.type === "혈액검사" || item.type === "영상검사" ? (
                                  <>
                                    <TableCell className="px-1 text-center">
                                      <span className="text-xs text-muted-foreground">{"\u00A0"}</span>
                                    </TableCell>
                                    <TableCell colSpan={hasDuration ? 7 : 6} className="px-2" data-tab-row={index} data-tab-col={1}>
                                      <EditableCell value={item.productName} itemId={item.id} field="productName" prescriptionId={prescriptionId} className="font-medium" />
                                    </TableCell>
                                    <TableCell className="px-2" data-tab-row={index} data-tab-col={2}>
                                      <EditableCell value={item.note} itemId={item.id} field="note" prescriptionId={prescriptionId} className="text-muted-foreground" multiline />
                                    </TableCell>
                                  </>
                                ) : (
                                  <>
                                    <TableCell className="px-1 text-center" data-tab-row={index} data-tab-col={1}>
                                      {item.type === "약" ? (
                                        <MixSelect value={item.mixGroup} itemId={item.id} prescriptionId={prescriptionId} />
                                      ) : (
                                        <span className="text-xs text-muted-foreground">{"\u00A0"}</span>
                                      )}
                                    </TableCell>
                                    <TableCell className="px-2" data-tab-row={index} data-tab-col={2}>
                                      <EditableCell value={item.productName} itemId={item.id} field="productName" prescriptionId={prescriptionId} className="font-medium" />
                                    </TableCell>
                                    <TableCell className="px-2" data-tab-row={index} data-tab-col={3}>
                                      <EditableCell value={item.ingredientName} itemId={item.id} field="ingredientName" prescriptionId={prescriptionId} className="text-muted-foreground" />
                                    </TableCell>
                                    <TableCell className="px-2 text-right" data-tab-row={index} data-tab-col={4}>
                                      <EditableCell value={item.dosage} itemId={item.id} field="dosage" prescriptionId={prescriptionId} className="text-right tabular-nums" />
                                    </TableCell>
                                    <TableCell className="px-1 text-center" data-tab-row={index} data-tab-col={5}>
                                      <UnitSelect value={item.unit} itemId={item.id} prescriptionId={prescriptionId} />
                                    </TableCell>
                                    <TableCell className="px-2" data-tab-row={index} data-tab-col={6}>
                                      <SelectableCell value={item.frequency} itemId={item.id} field="frequency" prescriptionId={prescriptionId} options={frequencyOptions} />
                                    </TableCell>
                                    {hasDuration && (
                                      <TableCell className="px-2" data-tab-row={index} data-tab-col={7}>
                                        {item.type === "퇴원약" ? (
                                          <EditableCell value={item.duration} itemId={item.id} field="duration" prescriptionId={prescriptionId} />
                                        ) : (
                                          <span className="text-xs text-muted-foreground">{" "}</span>
                                        )}
                                      </TableCell>
                                    )}
                                    <TableCell className="px-2" data-tab-row={index} data-tab-col={hasDuration ? 8 : 7}>
                                      <SelectableCell value={item.route} itemId={item.id} field="route" prescriptionId={prescriptionId} options={routeOptions} />
                                    </TableCell>
                                    <TableCell className="px-2" data-tab-row={index} data-tab-col={hasDuration ? 9 : 8}>
                                      <EditableCell value={item.note} itemId={item.id} field="note" prescriptionId={prescriptionId} className="text-muted-foreground" multiline />
                                    </TableCell>
                                  </>
                                )}
                              </TableRow>
                            </ContextMenuTrigger>
                            <ContextMenuContent>
                              <ContextMenuItem
                                onClick={() => {
                                  if (selectedIds.has(item.id) && selectedIds.size > 1) {
                                    const selected = items.filter(i => selectedIds.has(i.id));
                                    clipboardStore.items = selected;
                                    setClipboardCount(selected.length);
                                    toast({ title: `${selected.length}개 항목이 복사되었습니다` });
                                  } else {
                                    clipboardStore.items = [item];
                                    setClipboardCount(1);
                                    setSelectedIds(new Set([item.id]));
                                    toast({ title: "1개 항목이 복사되었습니다" });
                                  }
                                }}
                                data-testid={`context-copy-item-${item.id}`}
                              >
                                <Copy className="h-4 w-4 mr-2" />
                                {selectedIds.has(item.id) && selectedIds.size > 1
                                  ? `${selectedIds.size}개 항목 복사`
                                  : "항목 복사"}
                              </ContextMenuItem>
                              {clipboardCount > 0 && (
                                <ContextMenuItem
                                  onClick={handlePaste}
                                  data-testid={`context-paste-item-${item.id}`}
                                >
                                  <ClipboardPaste className="h-4 w-4 mr-2" />
                                  붙여넣기 ({clipboardCount}개)
                                </ContextMenuItem>
                              )}
                              <ContextMenuItem
                                onClick={() => handleInsertBelow(index)}
                                data-testid={`context-insert-below-${item.id}`}
                              >
                                <Plus className="h-4 w-4 mr-2" />
                                아래 행 추가
                              </ContextMenuItem>
                              <ContextMenuItem
                                onClick={() => handleAddToFavorites(item)}
                                data-testid={`context-favorite-item-${item.id}`}
                              >
                                <Star className="h-4 w-4 mr-2" />
                                즐겨찾기에 추가
                              </ContextMenuItem>
                              <ContextMenuItem
                                onClick={() => handleDeleteItem(item.id)}
                                className="text-destructive focus:text-destructive"
                                data-testid={`context-delete-item-${item.id}`}
                              >
                                <Trash2 className="h-4 w-4 mr-2" />
                                항목 삭제
                              </ContextMenuItem>
                            </ContextMenuContent>
                          </ContextMenu>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </TableBody>
                )}
              </Droppable>
            </Table>
          </DragDropContext>
        </div>
      )}
    </Card>
    {items.length > 0 && (
      <div
        className="group/addrow relative h-7 cursor-pointer"
        onClick={handleAddItem}
        data-testid="button-add-item-bottom"
      >
        <div
          className="absolute top-1 left-1 invisible group-hover/addrow:visible flex items-center gap-1 px-1 py-0.5 text-muted-foreground hover:text-foreground transition-colors z-10"
        >
          <Plus className="h-3.5 w-3.5" />
          <span className="text-xs">항목 추가</span>
        </div>
      </div>
    )}

    </>
  );
}
