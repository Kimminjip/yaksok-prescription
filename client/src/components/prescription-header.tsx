import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ClipboardList, Copy, Star } from "lucide-react";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { isReadOnly } from "@/lib/auth";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import type { Prescription } from "@shared/schema";

interface PrescriptionHeaderProps {
  prescription: Prescription;
  onCopied?: (newId: number) => void;
}

export function PrescriptionHeader({ prescription, onCopied }: PrescriptionHeaderProps) {
  const [copying, setCopying] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    setCopying(true);
    try {
      const res = await apiRequest("POST", `/api/prescriptions/${prescription.id}/copy`);
      const copy = await res.json();
      queryClient.invalidateQueries({ queryKey: ["/api/prescriptions"] });
      toast({ title: "처방 복사 완료", description: `"${copy.name}" 생성됨` });
      if (onCopied) onCopied(copy.id);
    } catch {
      toast({ title: "복사 실패", variant: "destructive" });
    } finally {
      setCopying(false);
    }
  };

  return (
    <Card className="p-4">
      <div className="flex items-center gap-3 flex-wrap">
        <ClipboardList className="h-5 w-5 text-muted-foreground shrink-0" />
        <h2 className="text-lg font-semibold" data-testid="text-prescription-name">
          {prescription.name}
        </h2>
        {!isReadOnly() && (
          <div className="ml-auto flex items-center gap-1">
            <Button
              size="sm"
              variant="outline"
              onClick={handleCopy}
              disabled={copying}
              data-testid="button-copy-prescription"
            >
              <Copy className="h-4 w-4 mr-1" />
              {copying ? "복사 중..." : "복사"}
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}
