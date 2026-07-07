import { useState } from "react";
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
import { Calculator } from "lucide-react";

type RawConcUnit = "mg/mL" | "mcg/mL";
type TargetUnit = "mcg/kg/min" | "mcg/min" | "mg/kg/hr" | "mg/hr" | "mg/kg/min" | "mg/min";

const targetUnitOptions: { value: TargetUnit; label: string; perKg: boolean }[] = [
  { value: "mcg/kg/min", label: "mcg/kg/min", perKg: true },
  { value: "mcg/min", label: "mcg/min", perKg: false },
  { value: "mg/kg/hr", label: "mg/kg/hr", perKg: true },
  { value: "mg/hr", label: "mg/hr", perKg: false },
  { value: "mg/kg/min", label: "mg/kg/min", perKg: true },
  { value: "mg/min", label: "mg/min", perKg: false },
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

function RateCalculator() {
  const [rawConcValue, setRawConcValue] = useState("");
  const [rawConcUnit, setRawConcUnit] = useState<RawConcUnit>("mg/mL");
  const [drawnVolume, setDrawnVolume] = useState("");
  const [mixVolume, setMixVolume] = useState("");
  const [weight, setWeight] = useState("");
  const [targetRate, setTargetRate] = useState("");
  const [targetUnit, setTargetUnit] = useState<TargetUnit>("mcg/kg/min");

  const rawConc = toNumber(rawConcValue);
  const drawn = toNumber(drawnVolume);
  const mix = toNumber(mixVolume);
  const wt = toNumber(weight);
  const rate = toNumber(targetRate);

  const unitMeta = targetUnitOptions.find(o => o.value === targetUnit)!;
  const needsWeight = unitMeta.perKg;

  let concentrationMcgPerMl: number | null = null;
  let totalVolume: number | null = null;
  if (rawConc !== null && drawn !== null && mix !== null && drawn + mix > 0) {
    const totalDrugMcg = rawConcUnit === "mg/mL" ? rawConc * drawn * 1000 : rawConc * drawn;
    totalVolume = drawn + mix;
    concentrationMcgPerMl = totalDrugMcg / totalVolume;
  }

  let doseRateMcgPerMin: number | null = null;
  const canCompute = rate !== null && concentrationMcgPerMl !== null && (!needsWeight || (wt !== null && wt > 0));
  if (canCompute) {
    const w = wt ?? 0;
    switch (targetUnit) {
      case "mcg/kg/min": doseRateMcgPerMin = rate! * w; break;
      case "mcg/min": doseRateMcgPerMin = rate!; break;
      case "mg/kg/hr": doseRateMcgPerMin = (rate! * w * 1000) / 60; break;
      case "mg/hr": doseRateMcgPerMin = (rate! * 1000) / 60; break;
      case "mg/kg/min": doseRateMcgPerMin = rate! * w * 1000; break;
      case "mg/min": doseRateMcgPerMin = rate! * 1000; break;
    }
  }

  const rateMlPerHr = doseRateMcgPerMin !== null && concentrationMcgPerMl ? (doseRateMcgPerMin * 60) / concentrationMcgPerMl : null;
  const rateMlPerMin = rateMlPerHr !== null ? rateMlPerHr / 60 : null;
  const mcgPerMin = doseRateMcgPerMin;
  const mcgPerHr = doseRateMcgPerMin !== null ? doseRateMcgPerMin * 60 : null;
  const mgPerMin = doseRateMcgPerMin !== null ? doseRateMcgPerMin / 1000 : null;
  const mgPerHr = doseRateMcgPerMin !== null ? (doseRateMcgPerMin * 60) / 1000 : null;
  const mcgPerKgPerMin = doseRateMcgPerMin !== null && wt ? doseRateMcgPerMin / wt : null;
  const mgPerKgPerHr = doseRateMcgPerMin !== null && wt ? (doseRateMcgPerMin * 60) / 1000 / wt : null;

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
          <Select value={rawConcUnit} onValueChange={(v) => setRawConcUnit(v as RawConcUnit)}>
            <SelectTrigger data-testid="select-calc-raw-conc-unit"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="mg/mL">mg/mL</SelectItem>
              <SelectItem value="mcg/mL">mcg/mL</SelectItem>
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

      {concentrationMcgPerMl !== null && (
        <p className="text-xs text-muted-foreground" data-testid="text-calc-derived-conc">
          총 {fmt(totalVolume, 1)}mL 중 농도: {fmt(concentrationMcgPerMl, 2)} mcg/mL ({fmt((concentrationMcgPerMl ?? 0) / 1000, 4)} mg/mL)
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
              {targetUnitOptions.map(o => (
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
          <div className="flex justify-between"><span className="text-muted-foreground">mcg/min</span><span className="tabular-nums">{fmt(mcgPerMin, 2)}</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">mcg/hr</span><span className="tabular-nums">{fmt(mcgPerHr, 1)}</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">mg/hr</span><span className="tabular-nums">{fmt(mgPerHr, 3)}</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">mg/min</span><span className="tabular-nums">{fmt(mgPerMin, 4)}</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">mcg/kg/min</span><span className="tabular-nums">{fmt(mcgPerKgPerMin, 2)}</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">mg/kg/hr</span><span className="tabular-nums">{fmt(mgPerKgPerHr, 3)}</span></div>
        </div>
      </div>
    </div>
  );
}

function DoseCalculator() {
  const [weight, setWeight] = useState("");
  const [dosePerKg, setDosePerKg] = useState("");
  const [concentration, setConcentration] = useState("");

  const wt = toNumber(weight);
  const dpk = toNumber(dosePerKg);
  const conc = toNumber(concentration);

  const totalDoseMg = wt !== null && dpk !== null ? wt * dpk : null;
  const volumeMl = totalDoseMg !== null && conc !== null && conc > 0 ? totalDoseMg / conc : null;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1">
          <Label htmlFor="dose-weight" className="text-xs font-medium text-muted-foreground">환자 체중 (kg)</Label>
          <Input
            id="dose-weight"
            type="number"
            inputMode="decimal"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            data-testid="input-calc-dose-weight"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="dose-per-kg" className="text-xs font-medium text-muted-foreground">용량 기준 (mg/kg)</Label>
          <Input
            id="dose-per-kg"
            type="number"
            inputMode="decimal"
            value={dosePerKg}
            onChange={(e) => setDosePerKg(e.target.value)}
            data-testid="input-calc-dose-per-kg"
          />
        </div>
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
        <div className="flex items-baseline justify-between">
          <span className="text-xs text-muted-foreground">총 용량</span>
          <span className="text-2xl font-bold tabular-nums" data-testid="text-calc-result-dose">
            {fmt(totalDoseMg, 2)} <span className="text-sm font-normal text-muted-foreground">mg</span>
          </span>
        </div>
        {concentration.trim() !== "" && (
          <div className="flex items-baseline justify-between pt-2 border-t">
            <span className="text-xs text-muted-foreground">필요 용액량</span>
            <span className="text-lg font-semibold tabular-nums" data-testid="text-calc-result-volume">
              {fmt(volumeMl, 2)} <span className="text-sm font-normal text-muted-foreground">mL</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export function DosageCalculator() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"dose" | "rate">("rate");

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
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>약물 계산기</DialogTitle>
        </DialogHeader>
        <Tabs value={mode} onValueChange={(v) => setMode(v as "dose" | "rate")}>
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="dose" data-testid="tab-calc-dose">용량</TabsTrigger>
            <TabsTrigger value="rate" data-testid="tab-calc-rate">속도</TabsTrigger>
          </TabsList>
          <TabsContent value="dose" className="mt-4">
            <DoseCalculator />
          </TabsContent>
          <TabsContent value="rate" className="mt-4">
            <RateCalculator />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
