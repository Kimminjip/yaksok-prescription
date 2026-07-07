import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { CategorySidebar } from "@/components/category-sidebar";
import { PrescriptionTable } from "@/components/prescription-table";
import { PrescriptionHeader } from "@/components/prescription-header";
import { DosageCalculator } from "@/components/dosage-calculator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { FileText, Moon, Sun } from "lucide-react";
import type { Category, Prescription, PrescriptionItem } from "@shared/schema";

function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => setDark(d => !d)}
      data-testid="button-theme-toggle"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}

export default function Home() {
  const [selectedPrescriptionId, setSelectedPrescriptionId] = useState<number | null>(null);

  const { data: categories = [], isLoading: categoriesLoading } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const { data: prescriptions = [], isLoading: prescriptionsLoading } = useQuery<Prescription[]>({
    queryKey: ["/api/prescriptions"],
  });

  const { data: items = [], isLoading: itemsLoading } = useQuery<PrescriptionItem[]>({
    queryKey: ["/api/prescriptions", selectedPrescriptionId, "items"],
    enabled: !!selectedPrescriptionId,
  });

  const selectedPrescription = prescriptions.find(p => p.id === selectedPrescriptionId);

  const style = {
    "--sidebar-width": "22rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <CategorySidebar
          categories={categories}
          prescriptions={prescriptions}
          selectedPrescriptionId={selectedPrescriptionId}
          onSelectPrescription={setSelectedPrescriptionId}
          isLoading={categoriesLoading || prescriptionsLoading}
        />
        <div className="flex flex-col flex-1 min-w-0">
          <header className="flex items-center gap-2 p-3 border-b bg-background sticky top-0 z-10">
            <SidebarTrigger data-testid="button-sidebar-toggle" />
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-muted-foreground" />
              <h1 className="text-lg font-semibold">약속처방 관리</h1>
            </div>
            <div className="ml-auto flex items-center gap-1">
              <DosageCalculator />
              <ThemeToggle />
            </div>
          </header>
          <main className="flex-1 overflow-auto p-3 md:p-4">
            {selectedPrescription ? (
              <div className="space-y-4">
                <PrescriptionHeader prescription={selectedPrescription} onCopied={setSelectedPrescriptionId} />
                <PrescriptionTable items={items} isLoading={itemsLoading} prescriptionId={selectedPrescriptionId!} />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                <FileText className="h-16 w-16 mb-4 opacity-30" />
                <p className="text-lg font-medium">처방을 선택해주세요</p>
                <p className="text-sm mt-1">좌측 메뉴에서 분류를 열고 처방명을 클릭하세요</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
