import { validateInput, categoryValidation, prescriptionValidation, prescriptionItemValidation } from "./validation";

describe("Validation", () => {
  describe("categoryValidation", () => {
    it("should validate valid category name", () => {
      const result = validateInput(categoryValidation, { name: "내과" });
      expect(result.valid).toBe(true);
      if (result.valid) {
        expect(result.data.name).toBe("내과");
      }
    });

    it("should reject empty name", () => {
      const result = validateInput(categoryValidation, { name: "" });
      expect(result.valid).toBe(false);
    });

    it("should reject name longer than 100 chars", () => {
      const longName = "a".repeat(101);
      const result = validateInput(categoryValidation, { name: longName });
      expect(result.valid).toBe(false);
    });

    it("should trim whitespace", () => {
      const result = validateInput(categoryValidation, { name: "  내과  " });
      expect(result.valid).toBe(true);
      if (result.valid) {
        expect(result.data.name).toBe("내과");
      }
    });
  });

  describe("prescriptionItemValidation", () => {
    it("should validate valid item", () => {
      const item = {
        productName: "아스피린",
        ingredientName: "Aspirin",
        dosage: "500mg",
        unit: "mg",
        frequency: "Qd",
        route: "po",
        note: "식후 30분",
        type: "약",
        mixGroup: null,
      };
      const result = validateInput(prescriptionItemValidation, item);
      expect(result.valid).toBe(true);
    });

    it("should reject missing productName", () => {
      const item = {
        productName: "",
        type: "약",
      };
      const result = validateInput(prescriptionItemValidation, item);
      expect(result.valid).toBe(false);
    });

    it("should accept nullable optional fields", () => {
      const item = {
        productName: "약품명",
        type: "약",
        ingredientName: null,
        dosage: null,
        unit: null,
        frequency: null,
        route: null,
        note: null,
        mixGroup: null,
      };
      const result = validateInput(prescriptionItemValidation, item);
      expect(result.valid).toBe(true);
    });
  });
});
