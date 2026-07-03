import { z } from "zod";
import { prescriptionTypeOptions, unitOptions, routeOptions, frequencyOptions } from "@shared/schema";

export const categoryValidation = z.object({
  name: z.string()
    .min(1, "분류명은 필수입니다")
    .max(100, "분류명은 100자 이하여야 합니다")
    .trim(),
});

export const prescriptionValidation = z.object({
  name: z.string()
    .min(1, "처방명은 필수입니다")
    .max(100, "처방명은 100자 이하여야 합니다")
    .trim(),
});

export const prescriptionItemValidation = z.object({
  productName: z.string()
    .min(1, "상품명은 필수입니다")
    .max(100, "상품명은 100자 이하여야 합니다")
    .trim(),
  ingredientName: z.string().max(100, "성분명은 100자 이하여야 합니다").nullable(),
  dosage: z.string().max(50, "용량은 50자 이하여야 합니다").nullable(),
  unit: z.enum(unitOptions).nullable(),
  frequency: z.string().max(30).nullable(),
  route: z.string().max(30).nullable(),
  duration: z.string().max(30).nullable(),
  note: z.string().max(500, "비고는 500자 이하여야 합니다").nullable(),
  type: z.enum(prescriptionTypeOptions),
  mixGroup: z.string().max(10).nullable(),
});

export function validateInput<T>(
  schema: z.ZodType<T>,
  data: unknown
): { valid: true; data: T } | { valid: false; error: string } {
  try {
    const validated = schema.parse(data);
    return { valid: true, data: validated };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { valid: false, error: error.errors[0]?.message || "입력값이 유효하지 않습니다" };
    }
    return { valid: false, error: "검증 실패" };
  }
}
