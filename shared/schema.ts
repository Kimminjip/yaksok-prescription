import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  parentId: integer("parent_id"),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const insertCategorySchema = createInsertSchema(categories).omit({ id: true });
export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type Category = typeof categories.$inferSelect;

export const prescriptions = pgTable("prescriptions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  categoryId: integer("category_id").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const insertPrescriptionSchema = createInsertSchema(prescriptions).omit({ id: true });
export type InsertPrescription = z.infer<typeof insertPrescriptionSchema>;
export type Prescription = typeof prescriptions.$inferSelect;

export const prescriptionItems = pgTable("prescription_items", {
  id: serial("id").primaryKey(),
  prescriptionId: integer("prescription_id").notNull(),
  type: text("type").notNull(),
  productName: text("product_name").notNull(),
  ingredientName: text("ingredient_name"),
  dosage: text("dosage"),
  unit: text("unit"),
  frequency: text("frequency"),
  route: text("route"),
  duration: text("duration"),
  note: text("note"),
  mixGroup: text("mix_group"),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const insertPrescriptionItemSchema = createInsertSchema(prescriptionItems).omit({ id: true });
export type InsertPrescriptionItem = z.infer<typeof insertPrescriptionItemSchema>;
export type PrescriptionItem = typeof prescriptionItems.$inferSelect;

export const favoriteItems = pgTable("favorite_items", {
  id: serial("id").primaryKey(),
  type: text("type").notNull(),
  productName: text("product_name").notNull(),
  ingredientName: text("ingredient_name"),
  dosage: text("dosage"),
  unit: text("unit"),
  frequency: text("frequency"),
  route: text("route"),
  note: text("note"),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const insertFavoriteItemSchema = createInsertSchema(favoriteItems).omit({ id: true });
export type InsertFavoriteItem = z.infer<typeof insertFavoriteItemSchema>;
export type FavoriteItem = typeof favoriteItems.$inferSelect;

export const prescriptionTypeOptions = ["약", "혈액검사", "영상검사", "지시처방", "추가설명", "퇴원약"] as const;
export const unitOptions = ["A", "mg", "ml", "T", "Bag"] as const;
export const mixGroupOptions = ["", "M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9"] as const;
export const routeOptions = ["iv", "im", "po", "nebul", "ivs", "IV infusion"] as const;
export const frequencyOptions = ["1", "Qd", "Bid", "Tid"] as const;
