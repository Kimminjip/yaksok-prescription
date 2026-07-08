import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calculator, Pencil } from "lucide-react";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { isReadOnly } from "@/lib/auth";
import type { DosagePreset } from "@shared/schema";

type ConcKind = "mass" | "unit";
type RawConcUnit = "mg/mL" | "mcg/mL" | "unit/mL";
type TargetUnit = "mcg/kg/min" | "mcg/min" | "mg/kg/hr" | "mg/hr" | "mg/kg/min" | "mg/min" | "unit/min" | "unit/kg/hr";

function concKindOf(u: RawConcUnit): ConcKind {
  return u === "unit/mL" ? "unit" : "mass";
}

const targetUnitOptions: { value: TargetUnit; label: string; perKg: boolean; kind: ConcKind }[] = [
  { value: "mcg/kg/min", label: "mcg/kg/min", perKg: true, kind: "mass" },
  { value: "mcg/min", label: "mcg/min", perKg: false, kind: "mass" },
  { value: "mg/kg/hr", label: "mg/kg/hr", perKg: true, kind: "mass" },
  { value: "mg/hr", label: "mg/hr", perKg: false, kind: "mass" },
  { value: "mg/kg/min", label: "mg/kg/min", perKg: true, kind: "mass" },
  { value: "mg/min", label: "mg/min", perKg: false, kind: "mass" },
  { value: "unit/min", label: "unit/min", perKg: false, kind: "unit" },
  { value: "unit/kg/hr", label: "unit/kg/hr", perKg: true, kind: "unit" },
];

function toNumber(val: string): number | null {
  if (val.trim() === "") return null;
  const n = Number(val);
  return Number.isFinite(n) ? n : null;
}

function fmt(n: number | null, digits = 2): string {
  if (n === null || !Number.isFinite(n)) return "-";
  return n.toLocaleString("ko-KR", { maximumFractionDigits: digits, minimumFractionDigits: 0 });
}

interface RateCalculatorProps {
  rawConcValue: string; setRawConcValue: (v: string) => void;
  rawConcUnit: RawConcUnit; setRawConcUnit: (v: RawConcUnit) => void;
  drawnVolume: string; setDrawnVolume: (v: string) => void;
  mixVolume: string; setMixVolume: (v: string) => void;
  targetRate: string; setTargetRate: (v: string) => void;
  targetUnit: TargetUnit; setTargetUnit: (v: TargetUnit) => void;
}

function RateCalculator({
  rawConcValue, setRawConcValue,
  rawConcUnit, setRawConcUnit,
  drawnVolume, setDrawnVolume,
  mixVolume, setMixVolume,
  targetRate, setTargetRate,
  targetUnit, setTargetUnit,
}: RateCalculatorProps) {
  const [weight, setWeight] = useState("60");

  const rawConc = toNumber(rawConcValue);
  const drawn = toNumber(drawnVolume);
  const mix = toNumber(mixVolume);
  const wt = toNumber(weight);
  const rate = toNumber(targetRate);

  const concKind = concKindOf(rawConcUnit);
  const visibleTargetUnitOptions = targetUnitOptions.filter(o => o.kind === concKind);
  const unitMeta = targetUnitOptions.find(o => o.value === targetUnit)!;
  const needsWeight = unitMeta.perKg;

  let concentrationPerMl: number | null = null;
  let totalVolume: number | null = null;
  if (rawConc !== null && drawn !== null && mix !== null && drawn + mix > 0) {
    totalVolume = drawn + mix;
    if (concKind === "unit") {
      const totalDrugUnits = rawConc * drawn;
      concentrationPerMl = totalDrugUnits / totalVolume;
    } else {
      const totalDrugMcg = rawConcUnit === "mg/mL" ? rawConc * drawn * 1000 : rawConc * drawn;
      concentrationPerMl = totalDrugMcg / totalVolume;
    }
  }

  let doseRatePerMin: number | null = null;
  const canCompute = rate !== null && concentrationPerMl !== null && (!needsWeight || (wt !== null && wt > 0));
  if (canCompute) {
    const w = wt ?? 0;
    switch (targetUnit) {
      case "mcg/kg/min": doseRatePerMin = rate! * w; break;
      case "mcg/min": doseRatePerMin = rate!; break;
      case "mg/kg/hr": doseRatePerMin = (rate! * w * 1000) / 60; break;
      case "mg/hr": doseRatePerMin = (rate! * 1000) / 60; break;
      case "mg/kg/min": doseRatePerMin = rate! * w * 1000; break;
      case "mg/min": doseRatePerMin = rate! * 1000; break;
      case "unit/min": doseRatePerMin = rate!; break;
      case "unit/kg/hr": doseRatePerMin = (rate! * w) / 60; break;
    }
  }

  const rateMlPerHr = doseRatePerMin !== null && concentrationPerMl ? (doseRatePerMin * 60) / concentrationPerMl : null;
  const rateMlPerMin = rateMlPerHr !== null ? rateMlPerHr / 60 : null;
  const mcgPerMin = concKind === "mass" ? doseRatePerMin : null;
  const mcgPerHr = concKind === "mass" && doseRatePerMin !== null ? doseRatePerMin * 60 : null;
  const mgPerMin = concKind === "mass" && doseRatePerMin !== null ? doseRatePerMin / 1000 : null;
  const mgPerHr = concKind === "mass" && doseRatePerMin !== null ? (doseRatePerMin * 60) / 1000 : null;
  const mcgPerKgPerMin = concKind === "mass" && doseRatePerMin !== null && wt ? doseRatePerMin / wt : null;
  const mgPerKgPerHr = concKind === "mass" && doseRatePerMin !== null && wt ? (doseRatePerMin * 60) / 1000 / wt : null;
  const unitPerMin = concKind === "unit" ? doseRatePerMin : null;
  const unitPerHr = concKind === "unit" && doseRatePerMin !== null ? doseRatePerMin * 60 : null;

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="calc-weight" className="text-xs font-medium text-muted-foreground">
          환자 체중 (kg){needsWeight ? "" : " (선택)"}
        </Label>
        <Input
          id="calc-weight"
          type="number"
          inputMode="decimal"
          step={5}
          className="w-24"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          data-testid="input-calc-weight"
        />
      </div>

      <div className="grid grid-cols-[1fr_80px_1fr] gap-2">
        <div className="space-y-1">
          <Label htmlFor="calc-raw-conc" className="text-xs font-medium text-muted-foreground">약물 농도 (원액)</Label>
          <Input
            id="calc-raw-conc"
            type="number"
            inputMode="decimal"
            value={rawConcValue}
            onChange={(e) => setRawConcValue(e.target.value)}
            data-testid="input-calc-raw-conc"
          />
        </div>
        <div className="space-y-1">
          <Label className="text-xs font-medium text-transparent select-none">단위</Label>
          <Select
            value={rawConcUnit}
            onValueChange={(v) => {
              const newUnit = v as RawConcUnit;
              setRawConcUnit(newUnit);
              const newKind = concKindOf(newUnit);
              if (concKindOf(rawConcUnit) !== newKind) {
                setTargetUnit(targetUnitOptions.find(o => o.kind === newKind)!.value);
              }
            }}
          >
            <SelectTrigger data-testid="select-calc-raw-conc-unit"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="mg/mL">mg/mL</SelectItem>
              <SelectItem value="mcg/mL">mcg/mL</SelectItem>
              <SelectItem value="unit/mL">unit/mL</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1">
          <Label htmlFor="calc-drawn-volume" className="text-xs font-medium text-muted-foreground">사용 용량 (mL)</Label>
          <Input
            id="calc-drawn-volume"
            type="number"
            inputMode="decimal"
            value={drawnVolume}
            onChange={(e) => setDrawnVolume(e.target.value)}
            data-testid="input-calc-drawn-volume"
          />
        </div>
      </div>

      <div className="space-y-1">
        <Label htmlFor="calc-mix-volume" className="text-xs font-medium text-muted-foreground">믹스 수액량 (mL)</Label>
        <Input
          id="calc-mix-volume"
          type="number"
          inputMode="decimal"
          value={mixVolume}
          onChange={(e) => setMixVolume(e.target.value)}
          data-testid="input-calc-mix-volume"
        />
      </div>

      {concentrationPerMl !== null && (
        <p className="text-xs text-muted-foreground" data-testid="text-calc-derived-conc">
          {concKind === "unit"
            ? <>총 {fmt(totalVolume, 1)}mL 중 농도: {fmt(concentrationPerMl, 2)} unit/mL</>
            : <>총 {fmt(totalVolume, 1)}mL 중 농도: {fmt(concentrationPerMl, 2)} mcg/mL ({fmt(concentrationPerMl / 1000, 4)} mg/mL)</>}
        </p>
      )}

      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1">
          <Label htmlFor="calc-target-rate" className="text-xs font-medium text-muted-foreground">목표 속도</Label>
          <Input
            id="calc-target-rate"
            type="number"
            inputMode="decimal"
            value={targetRate}
            onChange={(e) => setTargetRate(e.target.value)}
            data-testid="input-calc-target-rate"
          />
        </div>
        <div className="space-y-1">
          <Label className="text-xs font-medium text-muted-foreground">목표 속도 단위</Label>
          <Select value={targetUnit} onValueChange={(v) => setTargetUnit(v as TargetUnit)}>
            <SelectTrigger data-testid="select-calc-target-unit"><SelectValue /></SelectTrigger>
            <SelectContent>
              {visibleTargetUnitOptions.map(o => (
                <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      {needsWeight && !wt && (
        <p className="text-xs text-destructive -mt-2">이 단위는 체중 입력이 필요합니다</p>
      )}

      <div className="rounded-md border bg-muted/30 p-3 space-y-2">
        <div className="flex items-baseline justify-between">
          <span className="text-xs text-muted-foreground">주입 속도 (펌프 설정값)</span>
          <span className="text-2xl font-bold tabular-nums" data-testid="text-calc-result-mlhr">
            {fmt(rateMlPerHr, 1)} <span className="text-sm font-normal text-muted-foreground">mL/hr</span>
          </span>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs pt-2 border-t">
          <div className="flex justify-between"><span className="text-muted-foreground">mL/min</span><span className="tabular-nums">{fmt(rateMlPerMin, 3)}</span></div>
          {concKind === "mass" ? (
            <>
              <div className="flex justify-between"><span className="text-muted-foreground">mcg/min</span><span className="tabular-nums">{fmt(mcgPerMin, 2)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">mcg/hr</span><span className="tabular-nums">{fmt(mcgPerHr, 1)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">mg/hr</span><span className="tabular-nums">{fmt(mgPerHr, 3)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">mg/min</span><span className="tabular-nums">{fmt(mgPerMin, 4)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">mcg/kg/min</span><span className="tabular-nums">{fmt(mcgPerKgPerMin, 2)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">mg/kg/hr</span><span className="tabular-nums">{fmt(mgPerKgPerHr, 3)}</span></div>
            </>
          ) : (
            <>
              <div className="flex justify-between"><span className="text-muted-foreground">unit/min</span><span className="tabular-nums">{fmt(unitPerMin, 3)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">unit/hr</span><span className="tabular-nums">{fmt(unitPerHr, 2)}</span></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

type DoseUnit = "mg/kg" | "mg/kg/day" | "mcg/kg" | "mcg/kg/day";
type Frequency = "QD" | "BID" | "TID" | "QID";

const frequencyCounts: Record<Frequency, number> = { QD: 1, BID: 2, TID: 3, QID: 4 };

function DoseCalculator() {
  const [weight, setWeight] = useState("10");
  const [dosePerKg, setDosePerKg] = useState("");
  const [doseUnit, setDoseUnit] = useState<DoseUnit>("mg/kg");
  const [frequency, setFrequency] = useState<Frequency>("QD");
  const [concentration, setConcentration] = useState("");

  const wt = toNumber(weight);
  const dpk = toNumber(dosePerKg);
  const conc = toNumber(concentration);

  const isPerDay = doseUnit === "mg/kg/day" || doseUnit === "mcg/kg/day";
  const isMcg = doseUnit === "mcg/kg" || doseUnit === "mcg/kg/day";

  const mgPerKg = dpk !== null ? (isMcg ? dpk / 1000 : dpk) : null;
  const totalDoseMg = wt !== null && mgPerKg !== null ? wt * mgPerKg : null;
  const perDoseMg = totalDoseMg !== null ? (isPerDay ? totalDoseMg / frequencyCounts[frequency] : totalDoseMg) : null;
  const volumeMl = perDoseMg !== null && conc !== null && conc > 0 ? perDoseMg / conc : null;

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="dose-weight" className="text-xs font-medium text-muted-foreground">환자 체중 (kg)</Label>
        <Input
          id="dose-weight"
          type="number"
          inputMode="decimal"
          className="w-24"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          data-testid="input-calc-dose-weight"
        />
      </div>

      <div className="grid grid-cols-[1fr_110px] gap-2">
        <div className="space-y-1">
          <Label htmlFor="dose-per-kg" className="text-xs font-medium text-muted-foreground">투여량</Label>
          <Input
            id="dose-per-kg"
            type="number"
            inputMode="decimal"
            value={dosePerKg}
            onChange={(e) => setDosePerKg(e.target.value)}
            data-testid="input-calc-dose-per-kg"
          />
        </div>
        <div className="space-y-1">
          <Label className="text-xs font-medium text-muted-foreground">투여량 단위</Label>
          <Select value={doseUnit} onValueChange={(v) => setDoseUnit(v as DoseUnit)}>
            <SelectTrigger data-testid="select-calc-dose-unit"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="mg/kg">mg/kg</SelectItem>
              <SelectItem value="mg/kg/day">mg/kg/day</SelectItem>
              <SelectItem value="mcg/kg">mcg/kg</SelectItem>
              <SelectItem value="mcg/kg/day">mcg/kg/day</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-1">
        <Label className={`text-xs font-medium ${isPerDay ? "text-muted-foreground" : "text-muted-foreground/50"}`}>1일 투여횟수</Label>
        <Select value={frequency} onValueChange={(v) => setFrequency(v as Frequency)} disabled={!isPerDay}>
          <SelectTrigger data-testid="select-calc-dose-frequency"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="QD">QD (1일 1회)</SelectItem>
            <SelectItem value="BID">BID (1일 2회)</SelectItem>
            <SelectItem value="TID">TID (1일 3회)</SelectItem>
            <SelectItem value="QID">QID (1일 4회)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <Label htmlFor="dose-conc" className="text-xs font-medium text-muted-foreground">약물 농도 (mg/mL, 선택)</Label>
        <Input
          id="dose-conc"
          type="number"
          inputMode="decimal"
          value={concentration}
          onChange={(e) => setConcentration(e.target.value)}
          data-testid="input-calc-dose-conc"
        />
      </div>

      <div className="rounded-md border bg-muted/30 p-3 space-y-2">
        {isPerDay && (
          <div className="flex items-baseline justify-between text-xs">
            <span className="text-muted-foreground">총 1일 용량</span>
            <span className="tabular-nums">{fmt(totalDoseMg, 2)} mg</span>
          </div>
        )}
        <div className="flex items-baseline justify-between">
          <span className="text-xs text-muted-foreground">1회 투여량</span>
          <span className="text-2xl font-bold tabular-nums" data-testid="text-calc-result-dose">
            {fmt(perDoseMg, 2)} <span className="text-sm font-normal text-muted-foreground">mg</span>
          </span>
        </div>
        {concentration.trim() !== "" && (
          <div className="flex items-baseline justify-between pt-2 border-t">
            <span className="text-xs text-muted-foreground">필요 용액량 (1회분)</span>
            <span className="text-lg font-semibold tabular-nums" data-testid="text-calc-result-volume">
              {fmt(volumeMl, 2)} <span className="text-sm font-normal text-muted-foreground">mL</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

interface RatePresetFields {
  rawConcValue: string;
  rawConcUnit: RawConcUnit;
  drawnVolume: string;
  mixVolume: string;
  targetRate: string;
  targetUnit: TargetUnit;
}

const PRESET_SLOT_COUNT = 12;

function PresetEditDialog({
  slotIndex,
  existing,
  initialValues,
  onClose,
}: {
  slotIndex: number;
  existing: DosagePreset | null;
  initialValues: RatePresetFields;
  onClose: () => void;
}) {
  const [name, setName] = useState(existing?.name ?? "");
  const [rawConcValue, setRawConcValue] = useState(existing?.rawConcValue ?? initialValues.rawConcValue);
  const [rawConcUnit, setRawConcUnit] = useState<RawConcUnit>((existing?.rawConcUnit as RawConcUnit) ?? initialValues.rawConcUnit);
  const [drawnVolume, setDrawnVolume] = useState(existing?.drawnVolume ?? initialValues.drawnVolume);
  const [mixVolume, setMixVolume] = useState(existing?.mixVolume ?? initialValues.mixVolume);
  const [targetRate, setTargetRate] = useState(existing?.targetRate ?? initialValues.targetRate);
  const [targetUnit, setTargetUnit] = useState<TargetUnit>((existing?.targetUnit as TargetUnit) ?? initialValues.targetUnit);

  const concKind = concKindOf(rawConcUnit);
  const visibleTargetUnitOptions = targetUnitOptions.filter(o => o.kind === concKind);

  const saveMutation = useMutation({
    mutationFn: async () => {
      await apiRequest("POST", `/api/dosage-presets/${slotIndex}`, {
        name: name.trim(),
        rawConcValue, rawConcUnit, drawnVolume, mixVolume, targetRate, targetUnit,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/dosage-presets"] });
      onClose();
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async () => {
      await apiRequest("DELETE", `/api/dosage-presets/${slotIndex}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/dosage-presets"] });
      onClose();
    },
  });

  return (
    <Dialog open onOpenChange={(next) => { if (!next) onClose(); }}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>{existing ? "프리셋 수정" : "프리셋 저장"}</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <div className="space-y-1">
            <Label htmlFor="preset-name" className="text-xs font-medium text-muted-foreground">약물 이름</Label>
            <Input id="preset-name" value={name} onChange={(e) => setName(e.target.value)} data-testid="input-preset-name" />
          </div>
          <div className="grid grid-cols-[1fr_80px_1fr] gap-2">
            <div className="space-y-1">
              <Label className="text-xs font-medium text-muted-foreground">약물 농도 (원액)</Label>
              <Input type="number" inputMode="decimal" value={rawConcValue} onChange={(e) => setRawConcValue(e.target.value)} data-testid="input-preset-raw-conc" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-medium text-transparent select-none">단위</Label>
              <Select
                value={rawConcUnit}
                onValueChange={(v) => {
                  const newUnit = v as RawConcUnit;
                  setRawConcUnit(newUnit);
                  const newKind = concKindOf(newUnit);
                  if (concKindOf(rawConcUnit) !== newKind) {
                    setTargetUnit(targetUnitOptions.find(o => o.kind === newKind)!.value);
                  }
                }}
              >
                <SelectTrigger data-testid="select-preset-raw-conc-unit"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="mg/mL">mg/mL</SelectItem>
                  <SelectItem value="mcg/mL">mcg/mL</SelectItem>
                  <SelectItem value="unit/mL">unit/mL</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-medium text-muted-foreground">사용 용량 (mL)</Label>
              <Input type="number" inputMode="decimal" value={drawnVolume} onChange={(e) => setDrawnVolume(e.target.value)} data-testid="input-preset-drawn-volume" />
            </div>
          </div>
          <div className="space-y-1">
            <Label className="text-xs font-medium text-muted-foreground">믹스 수액량 (mL)</Label>
            <Input type="number" inputMode="decimal" value={mixVolume} onChange={(e) => setMixVolume(e.target.value)} data-testid="input-preset-mix-volume" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <Label className="text-xs font-medium text-muted-foreground">목표 속도</Label>
              <Input type="number" inputMode="decimal" value={targetRate} onChange={(e) => setTargetRate(e.target.value)} data-testid="input-preset-target-rate" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-medium text-muted-foreground">목표 속도 단위</Label>
              <Select value={targetUnit} onValueChange={(v) => setTargetUnit(v as TargetUnit)}>
                <SelectTrigger data-testid="select-preset-target-unit"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {visibleTargetUnitOptions.map(o => (
                    <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2">
            {existing ? (
              <Button
                type="button"
                variant="destructive"
                size="sm"
                onClick={() => deleteMutation.mutate()}
                disabled={deleteMutation.isPending}
                data-testid="button-preset-delete"
              >
                삭제
              </Button>
            ) : <span />}
            <div className="flex gap-2">
              <Button type="button" variant="outline" size="sm" onClick={onClose}>취소</Button>
              <Button
                type="button"
                size="sm"
                onClick={() => saveMutation.mutate()}
                disabled={saveMutation.isPending || !name.trim()}
                data-testid="button-preset-save"
              >
                저장
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function PresetPanel({ current, onApply }: { current: RatePresetFields; onApply: (preset: DosagePreset) => void }) {
  const readOnly = isReadOnly();
  const { data: presets = [] } = useQuery<DosagePreset[]>({ queryKey: ["/api/dosage-presets"] });
  const [editSlot, setEditSlot] = useState<number | null>(null);

  const slots = Array.from({ length: PRESET_SLOT_COUNT }, (_, i) => presets.find(p => p.slotIndex === i) ?? null);
  const editingPreset = editSlot !== null ? presets.find(p => p.slotIndex === editSlot) ?? null : null;

  return (
    <div className="w-28 shrink-0 flex flex-col gap-1.5 border-l pl-3">
      {slots.map((preset, i) => (
        <div key={i} className="relative group">
          <Button
            type="button"
            variant={preset ? "secondary" : "outline"}
            size="sm"
            className="w-full h-8 text-xs truncate px-1"
            disabled={!preset && readOnly}
            onClick={() => {
              if (preset) onApply(preset);
              else if (!readOnly) setEditSlot(i);
            }}
            data-testid={`button-preset-slot-${i}`}
          >
            {preset ? preset.name : "+"}
          </Button>
          {preset && !readOnly && (
            <button
              type="button"
              className="absolute -top-1.5 -right-1.5 hidden group-hover:flex items-center justify-center w-4 h-4 rounded-full bg-muted border hover:bg-accent"
              onClick={(e) => { e.stopPropagation(); setEditSlot(i); }}
              data-testid={`button-preset-edit-${i}`}
            >
              <Pencil className="w-2.5 h-2.5" />
            </button>
          )}
        </div>
      ))}
      {editSlot !== null && (
        <PresetEditDialog
          slotIndex={editSlot}
          existing={editingPreset}
          initialValues={current}
          onClose={() => setEditSlot(null)}
        />
      )}
    </div>
  );
}

export function DosageCalculator() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"dose" | "rate">("rate");

  const [rawConcValue, setRawConcValue] = useState("");
  const [rawConcUnit, setRawConcUnit] = useState<RawConcUnit>("mg/mL");
  const [drawnVolume, setDrawnVolume] = useState("");
  const [mixVolume, setMixVolume] = useState("");
  const [targetRate, setTargetRate] = useState("");
  const [targetUnit, setTargetUnit] = useState<TargetUnit>("mcg/kg/min");

  const applyPreset = (preset: DosagePreset) => {
    setRawConcValue(preset.rawConcValue);
    setRawConcUnit(preset.rawConcUnit as RawConcUnit);
    setDrawnVolume(preset.drawnVolume);
    setMixVolume(preset.mixVolume);
    setTargetRate(preset.targetRate);
    setTargetUnit(preset.targetUnit as TargetUnit);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (next) setMode("rate");
      }}
    >
      <DialogTrigger asChild>
        <Button size="icon" variant="ghost" data-testid="button-calculator">
          <Calculator className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className={mode === "rate" ? "max-w-2xl" : "max-w-md"}>
        <DialogHeader>
          <DialogTitle>약물 계산기</DialogTitle>
        </DialogHeader>
        <div className="flex gap-4 items-start">
          <div className="flex-1 min-w-0">
            <Tabs value={mode} onValueChange={(v) => setMode(v as "dose" | "rate")}>
              <TabsList className="grid grid-cols-2 w-full">
                <TabsTrigger value="dose" data-testid="tab-calc-dose">용량</TabsTrigger>
                <TabsTrigger value="rate" data-testid="tab-calc-rate">속도</TabsTrigger>
              </TabsList>
              <TabsContent value="dose" className="mt-4">
                <DoseCalculator />
              </TabsContent>
              <TabsContent value="rate" className="mt-4">
                <RateCalculator
                  rawConcValue={rawConcValue} setRawConcValue={setRawConcValue}
                  rawConcUnit={rawConcUnit} setRawConcUnit={setRawConcUnit}
                  drawnVolume={drawnVolume} setDrawnVolume={setDrawnVolume}
                  mixVolume={mixVolume} setMixVolume={setMixVolume}
                  targetRate={targetRate} setTargetRate={setTargetRate}
                  targetUnit={targetUnit} setTargetUnit={setTargetUnit}
                />
              </TabsContent>
            </Tabs>
          </div>
          {mode === "rate" && (
            <PresetPanel
              current={{ rawConcValue, rawConcUnit, drawnVolume, mixVolume, targetRate, targetUnit }}
              onApply={applyPreset}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
