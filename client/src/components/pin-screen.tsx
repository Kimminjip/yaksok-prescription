import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

interface PinScreenProps {
  onSuccess: (role: "admin" | "viewer") => void;
}

export function PinScreen({ onSuccess }: PinScreenProps) {
  const [digits, setDigits] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  useEffect(() => {
    inputRefs[0].current?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newDigits = [...digits];
    newDigits[index] = value.slice(-1);
    setDigits(newDigits);
    setError("");

    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }

    if (value && index === 3) {
      const pin = newDigits.join("");
      if (pin.length === 4) {
        submitPin(pin);
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 4);
    if (pasted.length === 4) {
      const newDigits = pasted.split("");
      setDigits(newDigits);
      submitPin(pasted);
    }
  };

  const submitPin = async (pin: string) => {
    setLoading(true);
    try {
      const res = await apiRequest("POST", "/api/verify-pin", { pin });
      const { role } = await res.json();
      onSuccess(role === "viewer" ? "viewer" : "admin");
    } catch {
      setError("PIN 번호가 올바르지 않습니다");
      setDigits(["", "", "", ""]);
      setTimeout(() => inputRefs[0].current?.focus(), 100);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="p-8 w-full max-w-sm">
        <div className="flex flex-col items-center gap-6">
          <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center">
            <Lock className="h-7 w-7 text-muted-foreground" />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-semibold" data-testid="text-pin-title">약속처방 관리</h1>
            <p className="text-sm text-muted-foreground mt-1">PIN 번호를 입력해주세요</p>
          </div>
          <div className="flex gap-3" onPaste={handlePaste}>
            {digits.map((digit, i) => (
              <input
                key={i}
                ref={inputRefs[i]}
                type="password"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                disabled={loading}
                className="w-12 h-14 text-center text-2xl font-bold border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
                data-testid={`input-pin-${i}`}
              />
            ))}
          </div>
          {error && (
            <p className="text-sm text-destructive" data-testid="text-pin-error">{error}</p>
          )}
          <Button
            onClick={() => submitPin(digits.join(""))}
            disabled={digits.some(d => !d) || loading}
            className="w-full"
            data-testid="button-pin-submit"
          >
            {loading ? "확인 중..." : "확인"}
          </Button>
        </div>
      </Card>
    </div>
  );
}
