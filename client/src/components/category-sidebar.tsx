import { useState, useCallback, useRef, useEffect } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ChevronRight, Pill, FolderOpen, Layers, GripVertical, Plus, X, Search, Copy, ClipboardPaste } from "lucide-react";
import { DragDropContext, Droppable, Draggable, type DropResult } from "@hello-pangea/dnd";
import { apiRequest, queryClient, optimisticUpdateItems } from "@/lib/queryClient";
import { isReadOnly } from "@/lib/auth";
import type { Category, Prescription } from "@shared/schema";

interface CategorySidebarProps {
  categories: Category[];
  prescriptions: Prescription[];
  selectedPrescriptionId: number | null;
  onSelectPrescription: (id: number | null) => void;
  isLoading: boolean;
}

function InlineInput({ onSubmit, onCancel, placeholder }: { onSubmit: (val: string) => void; onCancel: () => void; placeholder: string }) {
  const [val, setVal] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const handleSubmit = () => {
    const trimmed = val.trim();
    if (trimmed) onSubmit(trimmed);
    else onCancel();
  };

  return (
    <input
      ref={ref}
      spellCheck={false}
      value={val}
      onChange={(e) => setVal(e.target.value)}
      onBlur={handleSubmit}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleSubmit();
        if (e.key === "Escape") onCancel();
      }}
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-ring outline-none text-sm px-1.5 py-1"
      data-testid="input-inline-add"
    />
  );
}

function EditableLabel({ value, onSave, className, disabled }: { value: string; onSave: (newVal: string) => void; className?: string; disabled?: boolean }) {
  const [editing, setEditing] = useState(false);
  const [editVal, setEditVal] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing) {
      setEditVal(value);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [editing, value]);

  const handleSave = () => {
    setEditing(false);
    const trimmed = editVal.trim();
    if (trimmed && trimmed !== value) {
      onSave(trimmed);
    }
  };

  if (editing) {
    return (
      <input
        ref={inputRef}
        spellCheck={false}
        value={editVal}
        onChange={(e) => setEditVal(e.target.value)}
        onBlur={handleSave}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSave();
          if (e.key === "Escape") setEditing(false);
        }}
        onClick={(e) => e.stopPropagation()}
        className="bg-transparent border-b border-ring outline-none text-inherit font-inherit px-0 py-0 w-full min-w-0"
        data-testid="input-edit-label"
      />
    );
  }

  return (
    <span
      className={`truncate ${className || ""}`}
      onDoubleClick={(e) => {
        if (disabled) return;
        e.stopPropagation();
        setEditing(true);
      }}
      title={disabled ? undefined : "더블클릭하여 수정"}
    >
      {value}
    </span>
  );
}

type SearchMode = "name" | "drug";
type ChildNode =
  | { kind: "rx"; sortOrder: number; rx: Prescription }
  | { kind: "sub"; sortOrder: number; sub: Category };

export function CategorySidebar({
  categories,
  prescriptions,
  selectedPrescriptionId,
  onSelectPrescription,
  isLoading,
}: CategorySidebarProps) {
  const readOnly = isReadOnly();
  const [openMajor, setOpenMajor] = useState<Set<number>>(new Set());
  const [openSub, setOpenSub] = useState<Set<number>>(new Set());
  const [addingCategory, setAddingCategory] = useState(false);
  const [addingSubFor, setAddingSubFor] = useState<number | null>(null);
  const [addingPrescriptionFor, setAddingPrescriptionFor] = useState<number | null>(null);
  const [clipboard, setClipboard] = useState<{ id: number; name: string } | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchMode, setSearchMode] = useState<SearchMode>("name");
  const [drugSearchResults, setDrugSearchResults] = useState<number[] | null>(null);
  const [drugSearchLoading, setDrugSearchLoading] = useState(false);
  const searchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const majorCategories = categories.filter(c => !c.parentId).sort((a, b) => a.sortOrder - b.sortOrder);
  const getSubCategories = (majorId: number) =>
    categories.filter(c => c.parentId === majorId).sort((a, b) => a.sortOrder - b.sortOrder);
  const getPrescriptions = (categoryId: number) =>
    prescriptions.filter(p => p.categoryId === categoryId).sort((a, b) => a.sortOrder - b.sortOrder);

  const isSearching = searchQuery.trim().length > 0;

  useEffect(() => {
    if (searchMode === "drug" && searchQuery.trim()) {
      if (searchTimerRef.current) clearTimeout(searchTimerRef.current);
      setDrugSearchLoading(true);
      searchTimerRef.current = setTimeout(async () => {
        try {
          const res = await fetch(`/api/search/items?q=${encodeURIComponent(searchQuery.trim())}`);
          const ids: number[] = await res.json();
          setDrugSearchResults(ids);
        } catch {
          setDrugSearchResults([]);
        } finally {
          setDrugSearchLoading(false);
        }
      }, 300);
    } else {
      setDrugSearchResults(null);
      setDrugSearchLoading(false);
    }
    return () => {
      if (searchTimerRef.current) clearTimeout(searchTimerRef.current);
    };
  }, [searchQuery, searchMode]);

  const getFilteredPrescriptions = (categoryId: number) => {
    const all = getPrescriptions(categoryId);
    if (!isSearching) return all;
    if (searchMode === "name") {
      const q = searchQuery.trim().toLowerCase();
      return all.filter(p => p.name.toLowerCase().includes(q));
    }
    if (searchMode === "drug" && drugSearchResults) {
      return all.filter(p => drugSearchResults.includes(p.id));
    }
    return all;
  };

  const hasVisiblePrescriptions = (majorId: number) => {
    if (!isSearching) return true;
    if (getFilteredPrescriptions(majorId).length > 0) return true;
    const subs = getSubCategories(majorId);
    return subs.some(sub => getFilteredPrescriptions(sub.id).length > 0);
  };

  const hasVisibleInSub = (subId: number) => {
    if (!isSearching) return true;
    return getFilteredPrescriptions(subId).length > 0;
  };

  const getMajorChildren = (majorId: number): ChildNode[] => {
    const rxs = getPrescriptions(majorId).map(rx => ({ kind: "rx" as const, sortOrder: rx.sortOrder, rx }));
    const subs = getSubCategories(majorId).map(sub => ({ kind: "sub" as const, sortOrder: sub.sortOrder, sub }));
    return [...rxs, ...subs].sort((a, b) => a.sortOrder - b.sortOrder);
  };

  const toggleMajor = (id: number) => {
    setOpenMajor(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        const subIds = getSubCategories(id).map(s => s.id);
        if (subIds.length > 0) {
          setOpenSub(prevSub => {
            const nextSub = new Set(prevSub);
            subIds.forEach(sid => nextSub.delete(sid));
            return nextSub;
          });
        }
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleSub = (id: number) => {
    setOpenSub(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleAddCategory = async (name: string) => {
    setAddingCategory(false);
    const maxOrder = majorCategories.length > 0 ? Math.max(...majorCategories.map(c => c.sortOrder)) + 1 : 0;
    const newCat: Category = { id: Math.max(...categories.map(c => c.id), 0) + 1, name, parentId: null, sortOrder: maxOrder };
    const catsKey = ["/api/categories"] as const;
    const previous = optimisticUpdateItems(catsKey, cats => [...cats, newCat]);
    try {
      await apiRequest("POST", "/api/categories", { name, sortOrder: maxOrder });
    } catch {
      if (previous) queryClient.setQueryData(catsKey, previous);
    }
  };

  const handleAddSubCategory = async (majorId: number, name: string) => {
    setAddingSubFor(null);
    const subs = getSubCategories(majorId);
    const maxOrder = subs.length > 0 ? Math.max(...subs.map(c => c.sortOrder)) + 1 : 0;
    await apiRequest("POST", "/api/categories", { name, parentId: majorId, sortOrder: maxOrder });
    queryClient.invalidateQueries({ queryKey: ["/api/categories"] });
    setOpenMajor(prev => new Set(prev).add(majorId));
  };

  const handleDeleteCategory = async (id: number) => {
    const cat = categories.find(c => c.id === id);
    if (!window.confirm(`"${cat?.name || ""}" 분류와 하위 항목을 모두 삭제하시겠습니까?`)) return;
    const catsKey = ["/api/categories"] as const;
    const rxKey = ["/api/prescriptions"] as const;
    const prevCats = optimisticUpdateItems(catsKey, cats => cats.filter(c => c.id !== id && c.parentId !== id));
    const prevRx = optimisticUpdateItems(rxKey, rxs => rxs.filter(r => {
      const cat = categories.find(c => c.id === r.categoryId);
      return cat && cat.id !== id && cat.parentId !== id;
    }));
    try {
      await apiRequest("DELETE", `/api/categories/${id}`);
      if (selectedPrescriptionId) {
        const rx = prescriptions.find(p => p.id === selectedPrescriptionId);
        if (rx) {
          const sub = categories.find(c => c.id === rx.categoryId);
          if (sub && (sub.id === id || sub.parentId === id)) onSelectPrescription(null);
        }
      }
    } catch {
      if (prevCats) queryClient.setQueryData(catsKey, prevCats);
      if (prevRx) queryClient.setQueryData(rxKey, prevRx);
    }
  };

  const handleAddPrescription = async (categoryId: number, name: string) => {
    setAddingPrescriptionFor(null);
    const catRxs = getPrescriptions(categoryId);
    const maxOrder = catRxs.length > 0 ? Math.max(...catRxs.map(p => p.sortOrder)) + 1 : 0;
    const newRx: Prescription = { id: Math.max(...prescriptions.map(p => p.id), 0) + 1, name, categoryId, sortOrder: maxOrder };
    const rxKey = ["/api/prescriptions"] as const;
    const previous = optimisticUpdateItems(rxKey, rxs => [...rxs, newRx]);
    try {
      await apiRequest("POST", "/api/prescriptions", { name, categoryId, sortOrder: maxOrder });
    } catch {
      if (previous) queryClient.setQueryData(rxKey, previous);
    }
  };

  const handleDeletePrescription = async (id: number) => {
    const rx = prescriptions.find(p => p.id === id);
    if (!window.confirm(`"${rx?.name || ""}" 처방 세트를 삭제하시겠습니까?`)) return;
    const rxKey = ["/api/prescriptions"] as const;
    const previous = optimisticUpdateItems(rxKey, rxs => rxs.filter(p => p.id !== id));
    try {
      if (selectedPrescriptionId === id) onSelectPrescription(null);
      await apiRequest("DELETE", `/api/prescriptions/${id}`);
    } catch {
      if (previous) queryClient.setQueryData(rxKey, previous);
    }
  };

  const handleCopyPrescription = (id: number, name: string) => {
    setClipboard({ id, name });
  };

  const handlePastePrescription = async (targetCategoryId: number) => {
    if (!clipboard) return;
    const rxKey = ["/api/prescriptions"] as const;
    try {
      await apiRequest("POST", `/api/prescriptions/${clipboard.id}/copy`, { categoryId: targetCategoryId });
      queryClient.invalidateQueries({ queryKey: rxKey });
      const target = categories.find(c => c.id === targetCategoryId);
      if (target) {
        if (target.parentId) {
          setOpenMajor(prev => new Set(prev).add(target.parentId as number));
          setOpenSub(prev => new Set(prev).add(target.id));
        } else {
          setOpenMajor(prev => new Set(prev).add(target.id));
        }
      }
    } catch {
      // no optimistic state to roll back; server is source of truth for the new copy
    }
  };

  const handleRenameCategory = async (id: number, name: string) => {
    const catsKey = ["/api/categories"] as const;
    const previous = optimisticUpdateItems(catsKey, cats =>
      cats.map(cat => cat.id === id ? { ...cat, name } : cat)
    );
    try {
      await apiRequest("PATCH", `/api/categories/${id}`, { name });
    } catch {
      if (previous) queryClient.setQueryData(catsKey, previous);
    }
  };

  const handleRenamePrescription = async (id: number, name: string) => {
    const rxKey = ["/api/prescriptions"] as const;
    const previous = optimisticUpdateItems(rxKey, rxs =>
      rxs.map(rx => rx.id === id ? { ...rx, name } : rx)
    );
    try {
      await apiRequest("PATCH", `/api/prescriptions/${id}`, { name });
    } catch {
      if (previous) queryClient.setQueryData(rxKey, previous);
    }
  };

  // Moves/reorders a prescription or sub-category so it becomes child #`index` (or last, if
  // index is null — used for header drops) of the given container. Handles same-container
  // reordering and cross-container moves uniformly by recomputing the destination's full order.
  const handleNodeDrop = async (
    draggedKind: "rx" | "sub",
    draggedId: number,
    destContainerId: number,
    destIsMajor: boolean,
    destIndex: number | null,
  ) => {
    if (draggedKind === "sub" && !destIsMajor) return; // a sub-category can't nest under another sub-category

    const catsKey = ["/api/categories"] as const;
    const rxKey = ["/api/prescriptions"] as const;

    const rxChildren = getPrescriptions(destContainerId).map(r => ({ kind: "rx" as const, id: r.id, sortOrder: r.sortOrder }));
    const subChildren = destIsMajor ? getSubCategories(destContainerId).map(s => ({ kind: "sub" as const, id: s.id, sortOrder: s.sortOrder })) : [];
    let children = [...rxChildren, ...subChildren].sort((a, b) => a.sortOrder - b.sortOrder);
    children = children.filter(c => !(c.kind === draggedKind && c.id === draggedId));
    const insertAt = destIndex === null ? children.length : Math.max(0, Math.min(destIndex, children.length));
    children.splice(insertAt, 0, { kind: draggedKind, id: draggedId, sortOrder: 0 });
    const withSort = children.map((c, i) => ({ ...c, sortOrder: i }));

    const subUpdates = withSort.filter(c => c.kind === "sub").map(c => ({ id: c.id, sortOrder: c.sortOrder, parentId: destContainerId }));
    const rxUpdates = withSort.filter(c => c.kind === "rx").map(c => ({ id: c.id, sortOrder: c.sortOrder, categoryId: destContainerId }));

    const prevCats = subUpdates.length > 0 ? optimisticUpdateItems(catsKey, cats => cats.map(cat => {
      const u = subUpdates.find(s => s.id === cat.id);
      return u ? { ...cat, sortOrder: u.sortOrder, parentId: u.parentId } : cat;
    })) : undefined;
    const prevRx = rxUpdates.length > 0 ? optimisticUpdateItems(rxKey, rxs => rxs.map(rx => {
      const u = rxUpdates.find(r => r.id === rx.id);
      return u ? { ...rx, sortOrder: u.sortOrder, categoryId: u.categoryId } : rx;
    })) : undefined;

    try {
      if (subUpdates.length > 0) await apiRequest("POST", "/api/categories/reorder", { items: subUpdates });
      if (rxUpdates.length > 0) await apiRequest("POST", "/api/prescriptions/reorder", { items: rxUpdates });
    } catch {
      if (prevCats) queryClient.setQueryData(catsKey, prevCats);
      if (prevRx) queryClient.setQueryData(rxKey, prevRx);
    }
  };

  const handleDragEnd = useCallback(async (result: DropResult) => {
    if (readOnly) return;

    if (result.combine) {
      // Dropped directly onto another node's row (e.g. a collapsed sub-category's header) —
      // file the dragged node into it, regardless of whether that target is expanded.
      const draggedIsRx = result.draggableId.startsWith("rx-");
      const draggedKind: "rx" | "sub" = draggedIsRx ? "rx" : "sub";
      const draggedId = parseInt(result.draggableId.replace(draggedIsRx ? "rx-" : "sub-", ""), 10);
      const combineIsSub = result.combine.draggableId.startsWith("sub-");
      if (!combineIsSub) return; // filing something "into" a prescription row doesn't mean anything
      const targetSubId = parseInt(result.combine.draggableId.replace("sub-", ""), 10);
      await handleNodeDrop(draggedKind, draggedId, targetSubId, false, null);
      return;
    }

    if (!result.destination) return;
    const { source, destination, type } = result;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    const catsKey = ["/api/categories"] as const;

    if (type === "MAJOR") {
      const reordered = Array.from(majorCategories);
      const [moved] = reordered.splice(source.index, 1);
      reordered.splice(destination.index, 0, moved);
      const reorderedWithSort = reordered.map((c, i) => ({ ...c, sortOrder: i }));
      const items = reorderedWithSort.map((c, i) => ({ id: c.id, sortOrder: i }));

      const prevCats = optimisticUpdateItems(catsKey, cats =>
        cats.map(cat => {
          const reord = reorderedWithSort.find(r => r.id === cat.id);
          return reord ? { ...cat, sortOrder: reord.sortOrder } : cat;
        })
      );
      try {
        await apiRequest("POST", "/api/categories/reorder", { items });
      } catch {
        if (prevCats) queryClient.setQueryData(catsKey, prevCats);
      }
    } else if (type === "NODE") {
      const draggedIsRx = result.draggableId.startsWith("rx-");
      const draggedKind: "rx" | "sub" = draggedIsRx ? "rx" : "sub";
      const draggedId = parseInt(result.draggableId.replace(draggedIsRx ? "rx-" : "sub-", ""), 10);

      const destId = destination.droppableId;
      let destContainerId: number | null = null;
      let destIsMajor = false;
      let destIndex: number | null = destination.index;

      if (destId.startsWith("header-major-")) {
        destContainerId = parseInt(destId.replace("header-major-", ""), 10);
        destIsMajor = true;
        destIndex = null;
      } else if (destId.startsWith("children-")) {
        destContainerId = parseInt(destId.replace("children-", ""), 10);
        destIsMajor = true;
      } else if (destId.startsWith("subrx-")) {
        destContainerId = parseInt(destId.replace("subrx-", ""), 10);
        destIsMajor = false;
      }

      if (destContainerId === null) return;
      await handleNodeDrop(draggedKind, draggedId, destContainerId, destIsMajor, destIndex);
    }
  }, [readOnly, majorCategories, categories, prescriptions]);

  if (isLoading) {
    return (
      <Sidebar>
        <SidebarHeader className="p-4">
          <div className="flex items-center gap-2">
            <Pill className="h-5 w-5 text-muted-foreground" />
            <span className="font-semibold text-sm">처방 분류</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <div className="space-y-3 p-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-8 w-full" />
            ))}
          </div>
        </SidebarContent>
      </Sidebar>
    );
  }

  return (
    <Sidebar>
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2 flex-wrap">
          <Pill className="h-5 w-5" />
          <span className="font-semibold text-sm">처방 분류</span>
          {!readOnly && (
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setAddingCategory(true)}
              className="ml-auto text-muted-foreground"
              data-testid="button-add-category"
            >
              <Plus className="h-4 w-4" />
            </Button>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <div className="p-2">
          {isSearching && drugSearchLoading && (
            <div className="text-xs text-muted-foreground text-center py-2">검색 중...</div>
          )}
          {isSearching && !drugSearchLoading && searchMode === "drug" && drugSearchResults && drugSearchResults.length === 0 && (
            <div className="text-xs text-muted-foreground text-center py-4">검색 결과가 없습니다</div>
          )}
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="major-list" type="MAJOR">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {majorCategories.map((major, majorIdx) => {
                    if (isSearching && !hasVisiblePrescriptions(major.id)) return null;

                    const subCategories = getSubCategories(major.id);
                    const isMajorOpen = isSearching || openMajor.has(major.id);
                    const totalRxCount = getPrescriptions(major.id).length + subCategories.reduce((sum, sub) => sum + getPrescriptions(sub.id).length, 0);

                    const visibleMajorRxs = isSearching ? getFilteredPrescriptions(major.id) : getPrescriptions(major.id);
                    const visibleSubCategories = subCategories.filter(sub => !isSearching || hasVisibleInSub(sub.id));
                    const majorChildren: ChildNode[] = [
                      ...visibleMajorRxs.map(rx => ({ kind: "rx" as const, sortOrder: rx.sortOrder, rx })),
                      ...visibleSubCategories.map(sub => ({ kind: "sub" as const, sortOrder: sub.sortOrder, sub })),
                    ].sort((a, b) => a.sortOrder - b.sortOrder);

                    return (
                      <Draggable key={major.id} draggableId={`major-${major.id}`} index={majorIdx} isDragDisabled={isSearching || readOnly}>
                        {(dragProvided, dragSnapshot) => (
                          <div
                            ref={dragProvided.innerRef}
                            {...dragProvided.draggableProps}
                            className={`mb-1 rounded-md ${dragSnapshot.isDragging ? "bg-accent shadow-md" : ""}`}
                          >
                            <Collapsible open={isMajorOpen} onOpenChange={() => !isSearching && toggleMajor(major.id)}>
                              <Droppable droppableId={`header-major-${major.id}`} type="NODE">
                                {(headerProvided) => (
                                  <div ref={headerProvided.innerRef} {...headerProvided.droppableProps}>
                                    <div className="flex items-center group">
                                      {!isSearching && !readOnly && (
                                        <div
                                          {...dragProvided.dragHandleProps}
                                          className="p-1 cursor-grab active:cursor-grabbing text-muted-foreground hover-elevate rounded-md invisible group-hover:visible"
                                          data-testid={`drag-major-${major.id}`}
                                        >
                                          <GripVertical className="h-3.5 w-3.5" />
                                        </div>
                                      )}
                                      <CollapsibleTrigger asChild>
                                        <button
                                          data-testid={`button-major-category-${major.id}`}
                                          className="flex items-center gap-1.5 flex-1 px-1.5 py-1.5 text-sm font-medium rounded-md hover-elevate active-elevate-2"
                                        >
                                          <ChevronRight
                                            className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${isMajorOpen ? "rotate-90" : ""}`}
                                          />
                                          <FolderOpen className="h-3.5 w-3.5 shrink-0" />
                                          <EditableLabel value={major.name} onSave={(name) => handleRenameCategory(major.id, name)} disabled={readOnly} />
                                          <span className="ml-auto text-xs text-muted-foreground">
                                            {totalRxCount}
                                          </span>
                                        </button>
                                      </CollapsibleTrigger>
                                      {!isSearching && !readOnly && (
                                        <button
                                          onClick={(e) => { e.stopPropagation(); handleDeleteCategory(major.id); }}
                                          className="invisible group-hover:visible p-0.5 text-muted-foreground/50 hover:text-destructive rounded-md"
                                          data-testid={`button-delete-category-${major.id}`}
                                        >
                                          <X className="h-3 w-3" />
                                        </button>
                                      )}
                                    </div>
                                    {headerProvided.placeholder}
                                  </div>
                                )}
                              </Droppable>
                              <CollapsibleContent>
                                <div className="ml-5 border-l border-border pl-1">
                                  <Droppable droppableId={`children-${major.id}`} type="NODE" isCombineEnabled>
                                    {(childProvided) => (
                                      <div ref={childProvided.innerRef} {...childProvided.droppableProps}>
                                        {majorChildren.map((child, childIdx) => {
                                          if (child.kind === "rx") {
                                            const rx = child.rx;
                                            return (
                                              <Draggable key={`rx-${rx.id}`} draggableId={`rx-${rx.id}`} index={childIdx} isDragDisabled={isSearching || readOnly}>
                                                {(rxDragProvided, rxDragSnapshot) => (
                                                  <div
                                                    ref={rxDragProvided.innerRef}
                                                    {...rxDragProvided.draggableProps}
                                                    className={`flex items-center mb-0.5 rounded-md group/rx ${rxDragSnapshot.isDragging ? "bg-accent shadow-md" : ""}`}
                                                  >
                                                    {!isSearching && !readOnly && (
                                                      <div
                                                        {...rxDragProvided.dragHandleProps}
                                                        className="p-0.5 cursor-grab active:cursor-grabbing text-muted-foreground hover-elevate rounded-md invisible group-hover/rx:visible"
                                                        data-testid={`drag-rx-${rx.id}`}
                                                      >
                                                        <GripVertical className="h-3 w-3" />
                                                      </div>
                                                    )}
                                                    <button
                                                      data-testid={`button-prescription-${rx.id}`}
                                                      onClick={() => onSelectPrescription(rx.id)}
                                                      className={`flex-1 text-left text-xs px-1.5 py-1 rounded-md hover-elevate active-elevate-2 ${
                                                        selectedPrescriptionId === rx.id
                                                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                                                          : ""
                                                      }`}
                                                    >
                                                      <EditableLabel value={rx.name} onSave={(name) => handleRenamePrescription(rx.id, name)} disabled={readOnly} />
                                                    </button>
                                                    {!isSearching && !readOnly && (
                                                      <button
                                                        onClick={(e) => { e.stopPropagation(); handleCopyPrescription(rx.id, rx.name); }}
                                                        className="invisible group-hover/rx:visible p-0.5 text-muted-foreground/50 hover:text-foreground rounded-md"
                                                        data-testid={`button-copy-prescription-${rx.id}`}
                                                      >
                                                        <Copy className="h-3 w-3" />
                                                      </button>
                                                    )}
                                                    {!isSearching && !readOnly && (
                                                      <button
                                                        onClick={(e) => { e.stopPropagation(); handleDeletePrescription(rx.id); }}
                                                        className="invisible group-hover/rx:visible p-0.5 text-muted-foreground/50 hover:text-destructive rounded-md"
                                                        data-testid={`button-delete-prescription-${rx.id}`}
                                                      >
                                                        <X className="h-3 w-3" />
                                                      </button>
                                                    )}
                                                  </div>
                                                )}
                                              </Draggable>
                                            );
                                          }

                                          const sub = child.sub;
                                          const subRxs = isSearching ? getFilteredPrescriptions(sub.id) : getPrescriptions(sub.id);
                                          const isSubOpen = isSearching || openSub.has(sub.id);

                                          return (
                                            <Draggable key={`sub-${sub.id}`} draggableId={`sub-${sub.id}`} index={childIdx} isDragDisabled={isSearching || readOnly}>
                                              {(subDragProvided, subDragSnapshot) => (
                                                <div
                                                  ref={subDragProvided.innerRef}
                                                  {...subDragProvided.draggableProps}
                                                  className={`mb-0.5 rounded-md ${subDragSnapshot.isDragging ? "bg-accent shadow-md" : ""}`}
                                                >
                                                  <Collapsible open={isSubOpen} onOpenChange={() => !isSearching && toggleSub(sub.id)}>
                                                    <div className="flex items-center group/sub">
                                                      {!isSearching && !readOnly && (
                                                        <div
                                                          {...subDragProvided.dragHandleProps}
                                                          className="p-0.5 cursor-grab active:cursor-grabbing text-muted-foreground hover-elevate rounded-md invisible group-hover/sub:visible"
                                                          data-testid={`drag-sub-${sub.id}`}
                                                        >
                                                          <GripVertical className="h-3 w-3" />
                                                        </div>
                                                      )}
                                                      <CollapsibleTrigger asChild>
                                                        <button
                                                          data-testid={`button-sub-category-${sub.id}`}
                                                          className="flex items-center gap-1 flex-1 px-1 py-1 text-xs font-medium rounded-md hover-elevate active-elevate-2"
                                                        >
                                                          <ChevronRight
                                                            className={`h-3 w-3 shrink-0 transition-transform duration-200 ${isSubOpen ? "rotate-90" : ""}`}
                                                          />
                                                          <Layers className="h-3 w-3 shrink-0" />
                                                          <EditableLabel value={sub.name} onSave={(name) => handleRenameCategory(sub.id, name)} disabled={readOnly} />
                                                          <span className="ml-auto text-xs text-muted-foreground">
                                                            {getPrescriptions(sub.id).length}
                                                          </span>
                                                        </button>
                                                      </CollapsibleTrigger>
                                                      {!isSearching && !readOnly && (
                                                        <button
                                                          onClick={(e) => { e.stopPropagation(); handleDeleteCategory(sub.id); }}
                                                          className="invisible group-hover/sub:visible p-0.5 text-muted-foreground/50 hover:text-destructive rounded-md"
                                                          data-testid={`button-delete-sub-${sub.id}`}
                                                        >
                                                          <X className="h-3 w-3" />
                                                        </button>
                                                      )}
                                                    </div>
                                                    <CollapsibleContent>
                                                      <Droppable droppableId={`subrx-${sub.id}`} type="NODE">
                                                        {(rxProvided) => (
                                                          <div
                                                            ref={rxProvided.innerRef}
                                                            {...rxProvided.droppableProps}
                                                            className="ml-4 border-l border-border/50 pl-1"
                                                          >
                                                            {subRxs.map((rx, rxIdx) => (
                                                              <Draggable key={`rx-${rx.id}`} draggableId={`rx-${rx.id}`} index={rxIdx} isDragDisabled={isSearching || readOnly}>
                                                                {(rxDragProvided, rxDragSnapshot) => (
                                                                  <div
                                                                    ref={rxDragProvided.innerRef}
                                                                    {...rxDragProvided.draggableProps}
                                                                    className={`flex items-center mb-0.5 rounded-md group/rx ${rxDragSnapshot.isDragging ? "bg-accent shadow-md" : ""}`}
                                                                  >
                                                                    {!isSearching && !readOnly && (
                                                                      <div
                                                                        {...rxDragProvided.dragHandleProps}
                                                                        className="p-0.5 cursor-grab active:cursor-grabbing text-muted-foreground hover-elevate rounded-md invisible group-hover/rx:visible"
                                                                        data-testid={`drag-rx-${rx.id}`}
                                                                      >
                                                                        <GripVertical className="h-3 w-3" />
                                                                      </div>
                                                                    )}
                                                                    <button
                                                                      data-testid={`button-prescription-${rx.id}`}
                                                                      onClick={() => onSelectPrescription(rx.id)}
                                                                      className={`flex-1 text-left text-xs px-1.5 py-1 rounded-md hover-elevate active-elevate-2 ${
                                                                        selectedPrescriptionId === rx.id
                                                                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                                                                          : ""
                                                                      }`}
                                                                    >
                                                                      <EditableLabel value={rx.name} onSave={(name) => handleRenamePrescription(rx.id, name)} disabled={readOnly} />
                                                                    </button>
                                                                    {!isSearching && !readOnly && (
                                                                      <button
                                                                        onClick={(e) => { e.stopPropagation(); handleCopyPrescription(rx.id, rx.name); }}
                                                                        className="invisible group-hover/rx:visible p-0.5 text-muted-foreground/50 hover:text-foreground rounded-md"
                                                                        data-testid={`button-copy-prescription-${rx.id}`}
                                                                      >
                                                                        <Copy className="h-3 w-3" />
                                                                      </button>
                                                                    )}
                                                                    {!isSearching && !readOnly && (
                                                                      <button
                                                                        onClick={(e) => { e.stopPropagation(); handleDeletePrescription(rx.id); }}
                                                                        className="invisible group-hover/rx:visible p-0.5 text-muted-foreground/50 hover:text-destructive rounded-md"
                                                                        data-testid={`button-delete-prescription-${rx.id}`}
                                                                      >
                                                                        <X className="h-3 w-3" />
                                                                      </button>
                                                                    )}
                                                                  </div>
                                                                )}
                                                              </Draggable>
                                                            ))}
                                                            {!isSearching && addingPrescriptionFor === sub.id && (
                                                              <div className="ml-4 mb-1">
                                                                <InlineInput
                                                                  onSubmit={(name) => handleAddPrescription(sub.id, name)}
                                                                  onCancel={() => setAddingPrescriptionFor(null)}
                                                                  placeholder="세트처방명 입력"
                                                                />
                                                              </div>
                                                            )}
                                                            {!isSearching && !readOnly && clipboard && (
                                                              <button
                                                                onClick={() => handlePastePrescription(sub.id)}
                                                                className="flex items-center gap-1 text-xs text-muted-foreground px-2 py-1 rounded-md hover-elevate active-elevate-2 w-full"
                                                                data-testid={`button-paste-prescription-${sub.id}`}
                                                              >
                                                                <ClipboardPaste className="h-3 w-3" />
                                                                <span className="truncate">"{clipboard.name}" 붙여넣기</span>
                                                              </button>
                                                            )}
                                                            {!isSearching && !readOnly && (
                                                              <button
                                                                onClick={() => setAddingPrescriptionFor(sub.id)}
                                                                className="flex items-center gap-1 text-xs text-muted-foreground px-2 py-1 rounded-md hover-elevate active-elevate-2 w-full"
                                                                data-testid={`button-add-prescription-${sub.id}`}
                                                              >
                                                                <Plus className="h-3 w-3" />
                                                                <span>세트처방 추가</span>
                                                              </button>
                                                            )}
                                                            {rxProvided.placeholder}
                                                          </div>
                                                        )}
                                                      </Droppable>
                                                    </CollapsibleContent>
                                                  </Collapsible>
                                                </div>
                                              )}
                                            </Draggable>
                                          );
                                        })}
                                        {!isSearching && addingPrescriptionFor === major.id && (
                                          <div className="mb-1">
                                            <InlineInput
                                              onSubmit={(name) => handleAddPrescription(major.id, name)}
                                              onCancel={() => setAddingPrescriptionFor(null)}
                                              placeholder="세트처방명 입력"
                                            />
                                          </div>
                                        )}
                                        {!isSearching && addingSubFor === major.id && (
                                          <div className="ml-3 mb-1">
                                            <InlineInput
                                              onSubmit={(name) => handleAddSubCategory(major.id, name)}
                                              onCancel={() => setAddingSubFor(null)}
                                              placeholder="중분류명 입력"
                                            />
                                          </div>
                                        )}
                                        {childProvided.placeholder}
                                      </div>
                                    )}
                                  </Droppable>
                                  {!isSearching && !readOnly && (
                                    <DropdownMenu>
                                      <DropdownMenuTrigger asChild>
                                        <button
                                          className="flex items-center gap-1 text-xs text-muted-foreground px-2 py-1 rounded-md hover-elevate active-elevate-2 w-full"
                                          data-testid={`button-add-major-${major.id}`}
                                        >
                                          <Plus className="h-3 w-3" />
                                          <span>추가</span>
                                        </button>
                                      </DropdownMenuTrigger>
                                      <DropdownMenuContent align="start">
                                        <DropdownMenuItem
                                          onClick={() => setAddingSubFor(major.id)}
                                          data-testid={`menuitem-add-sub-${major.id}`}
                                        >
                                          중분류 추가
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                          onClick={() => setAddingPrescriptionFor(major.id)}
                                          data-testid={`menuitem-add-prescription-${major.id}`}
                                        >
                                          세트처방 추가
                                        </DropdownMenuItem>
                                        {clipboard && (
                                          <DropdownMenuItem
                                            onClick={() => handlePastePrescription(major.id)}
                                            data-testid={`menuitem-paste-prescription-${major.id}`}
                                          >
                                            <ClipboardPaste className="h-3.5 w-3.5 mr-1.5" />
                                            "{clipboard.name}" 붙여넣기
                                          </DropdownMenuItem>
                                        )}
                                      </DropdownMenuContent>
                                    </DropdownMenu>
                                  )}
                                </div>
                              </CollapsibleContent>
                            </Collapsible>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          {!isSearching && addingCategory && (
            <div className="mt-1 px-1">
              <InlineInput
                onSubmit={handleAddCategory}
                onCancel={() => setAddingCategory(false)}
                placeholder="대분류명 입력"
              />
            </div>
          )}
          {isSearching && searchMode === "name" && (() => {
            const allFiltered = majorCategories.filter(m => hasVisiblePrescriptions(m.id));
            if (allFiltered.length === 0) {
              return <div className="text-xs text-muted-foreground text-center py-4">검색 결과가 없습니다</div>;
            }
            return null;
          })()}
        </div>
      </SidebarContent>
      <SidebarFooter className="p-3 border-t border-sidebar-border space-y-2">
        {clipboard && (
          <div className="flex items-center justify-between gap-1 text-xs bg-muted/50 rounded-md px-2 py-1.5" data-testid="clipboard-indicator">
            <span className="flex items-center gap-1 truncate text-muted-foreground">
              <ClipboardPaste className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">"{clipboard.name}" 복사됨</span>
            </span>
            <button
              onClick={() => setClipboard(null)}
              className="shrink-0 text-muted-foreground/50 hover:text-foreground rounded-md"
              data-testid="button-clear-clipboard"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        )}
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <input
            type="text"
            spellCheck={false}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={searchMode === "name" ? "세트처방명 검색..." : "약품명/성분명 검색..."}
            className="w-full pl-7 pr-2 py-1.5 text-xs bg-muted/50 border rounded-md outline-none focus:ring-1 focus:ring-ring"
            data-testid="input-sidebar-search"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-3 w-3" />
            </button>
          )}
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => { setSearchMode("name"); setSearchQuery(""); }}
            className={`text-[10px] px-2 py-0.5 rounded-md ${searchMode === "name" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover-elevate"}`}
            data-testid="button-search-mode-name"
          >
            처방명
          </button>
          <button
            onClick={() => { setSearchMode("drug"); setSearchQuery(""); }}
            className={`text-[10px] px-2 py-0.5 rounded-md ${searchMode === "drug" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover-elevate"}`}
            data-testid="button-search-mode-drug"
          >
            약품/성분명
          </button>
        </div>
      </SidebarFooter>

    </Sidebar>
  );
}
