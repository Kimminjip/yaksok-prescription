import {
  type Category, type InsertCategory,
  type Prescription, type InsertPrescription,
  type PrescriptionItem, type InsertPrescriptionItem,
  type FavoriteItem, type InsertFavoriteItem,
  categories, prescriptions, prescriptionItems, favoriteItems,
} from "@shared/schema";
import { db } from "./db";
import { eq, asc, ilike, or, inArray } from "drizzle-orm";

export interface IStorage {
  getCategories(): Promise<Category[]>;
  createCategory(data: InsertCategory): Promise<Category>;
  updateCategory(id: number, data: Partial<InsertCategory>): Promise<Category>;
  updateCategoryOrders(items: { id: number; sortOrder: number; parentId?: number | null }[]): Promise<void>;

  getPrescriptions(): Promise<Prescription[]>;
  createPrescription(data: InsertPrescription): Promise<Prescription>;
  updatePrescription(id: number, data: Partial<InsertPrescription>): Promise<Prescription>;
  updatePrescriptionOrders(items: { id: number; sortOrder: number; categoryId?: number }[]): Promise<void>;
  copyPrescription(id: number, targetCategoryId?: number): Promise<Prescription>;

  deleteCategory(id: number): Promise<void>;
  deletePrescription(id: number): Promise<void>;

  getPrescriptionItems(prescriptionId: number): Promise<PrescriptionItem[]>;
  createPrescriptionItem(data: InsertPrescriptionItem): Promise<PrescriptionItem>;
  updatePrescriptionItem(id: number, data: Partial<InsertPrescriptionItem>): Promise<PrescriptionItem>;
  updatePrescriptionItemOrders(items: { id: number; sortOrder: number }[]): Promise<void>;
  deletePrescriptionItem(id: number): Promise<void>;
  deletePrescriptionItems(ids: number[]): Promise<number>;

  getFavoriteItems(): Promise<FavoriteItem[]>;
  createFavoriteItem(data: InsertFavoriteItem): Promise<FavoriteItem>;
  deleteFavoriteItem(id: number): Promise<void>;
  addFavoriteToPresciption(favoriteId: number, prescriptionId: number): Promise<PrescriptionItem>;

  searchPrescriptionsByItem(query: string): Promise<number[]>;
}

export class DatabaseStorage implements IStorage {
  async getCategories(): Promise<Category[]> {
    return db.select().from(categories).orderBy(asc(categories.sortOrder));
  }

  async createCategory(data: InsertCategory): Promise<Category> {
    const [cat] = await db.insert(categories).values(data).returning();
    return cat;
  }

  async updateCategory(id: number, data: Partial<InsertCategory>): Promise<Category> {
    const [cat] = await db.update(categories).set(data).where(eq(categories.id, id)).returning();
    return cat;
  }

  async updateCategoryOrders(items: { id: number; sortOrder: number; parentId?: number | null }[]): Promise<void> {
    for (const item of items) {
      const updateData: any = { sortOrder: item.sortOrder };
      if (item.parentId !== undefined) updateData.parentId = item.parentId;
      await db.update(categories).set(updateData).where(eq(categories.id, item.id));
    }
  }

  async getPrescriptions(): Promise<Prescription[]> {
    return db.select().from(prescriptions).orderBy(asc(prescriptions.sortOrder));
  }

  async createPrescription(data: InsertPrescription): Promise<Prescription> {
    const [rx] = await db.insert(prescriptions).values(data).returning();
    return rx;
  }

  async updatePrescription(id: number, data: Partial<InsertPrescription>): Promise<Prescription> {
    const [rx] = await db.update(prescriptions).set(data).where(eq(prescriptions.id, id)).returning();
    return rx;
  }

  async updatePrescriptionOrders(items: { id: number; sortOrder: number; categoryId?: number }[]): Promise<void> {
    for (const item of items) {
      const updateData: any = { sortOrder: item.sortOrder };
      if (item.categoryId !== undefined) updateData.categoryId = item.categoryId;
      await db.update(prescriptions).set(updateData).where(eq(prescriptions.id, item.id));
    }
  }

  async copyPrescription(id: number, targetCategoryId?: number): Promise<Prescription> {
    const [original] = await db.select().from(prescriptions).where(eq(prescriptions.id, id));
    if (!original) throw new Error("Prescription not found");

    const destCategoryId = targetCategoryId ?? original.categoryId;
    const isSameCategory = destCategoryId === original.categoryId;

    const siblings = await db.select().from(prescriptions).where(eq(prescriptions.categoryId, destCategoryId));
    const maxOrder = siblings.length > 0 ? Math.max(...siblings.map(s => s.sortOrder)) + 1 : 0;

    const [copy] = await db.insert(prescriptions).values({
      name: isSameCategory ? `${original.name} (복사본)` : original.name,
      categoryId: destCategoryId,
      sortOrder: maxOrder,
    }).returning();

    const items = await db.select().from(prescriptionItems).where(eq(prescriptionItems.prescriptionId, id)).orderBy(asc(prescriptionItems.sortOrder));
    for (const item of items) {
      await db.insert(prescriptionItems).values({
        prescriptionId: copy.id,
        type: item.type,
        productName: item.productName,
        ingredientName: item.ingredientName,
        dosage: item.dosage,
        unit: item.unit,
        frequency: item.frequency,
        route: item.route,
        note: item.note,
        mixGroup: item.mixGroup,
        sortOrder: item.sortOrder,
      });
    }

    return copy;
  }

  async getPrescriptionItems(prescriptionId: number): Promise<PrescriptionItem[]> {
    return db.select().from(prescriptionItems)
      .where(eq(prescriptionItems.prescriptionId, prescriptionId))
      .orderBy(asc(prescriptionItems.sortOrder));
  }

  async createPrescriptionItem(data: InsertPrescriptionItem): Promise<PrescriptionItem> {
    const [item] = await db.insert(prescriptionItems).values(data).returning();
    return item;
  }

  async updatePrescriptionItem(id: number, data: Partial<InsertPrescriptionItem>): Promise<PrescriptionItem> {
    const [item] = await db.update(prescriptionItems).set(data).where(eq(prescriptionItems.id, id)).returning();
    return item;
  }

  async updatePrescriptionItemOrders(items: { id: number; sortOrder: number }[]): Promise<void> {
    for (const item of items) {
      await db.update(prescriptionItems).set({ sortOrder: item.sortOrder }).where(eq(prescriptionItems.id, item.id));
    }
  }

  async deleteCategory(id: number): Promise<void> {
    const subCats = await db.select().from(categories).where(eq(categories.parentId, id));
    for (const sub of subCats) {
      const rxs = await db.select().from(prescriptions).where(eq(prescriptions.categoryId, sub.id));
      for (const rx of rxs) {
        await db.delete(prescriptionItems).where(eq(prescriptionItems.prescriptionId, rx.id));
      }
      await db.delete(prescriptions).where(eq(prescriptions.categoryId, sub.id));
    }
    await db.delete(categories).where(eq(categories.parentId, id));

    const rxs = await db.select().from(prescriptions).where(eq(prescriptions.categoryId, id));
    for (const rx of rxs) {
      await db.delete(prescriptionItems).where(eq(prescriptionItems.prescriptionId, rx.id));
    }
    await db.delete(prescriptions).where(eq(prescriptions.categoryId, id));
    await db.delete(categories).where(eq(categories.id, id));
  }

  async deletePrescription(id: number): Promise<void> {
    await db.delete(prescriptionItems).where(eq(prescriptionItems.prescriptionId, id));
    await db.delete(prescriptions).where(eq(prescriptions.id, id));
  }

  async deletePrescriptionItem(id: number): Promise<void> {
    await db.delete(prescriptionItems).where(eq(prescriptionItems.id, id));
  }

  async deletePrescriptionItems(ids: number[]): Promise<number> {
    if (ids.length === 0) return 0;
    const result = await db.delete(prescriptionItems).where(inArray(prescriptionItems.id, ids)).returning();
    return result.length;
  }

  async getFavoriteItems(): Promise<FavoriteItem[]> {
    return db.select().from(favoriteItems).orderBy(asc(favoriteItems.sortOrder));
  }

  async createFavoriteItem(data: InsertFavoriteItem): Promise<FavoriteItem> {
    const [item] = await db.insert(favoriteItems).values(data).returning();
    return item;
  }

  async deleteFavoriteItem(id: number): Promise<void> {
    await db.delete(favoriteItems).where(eq(favoriteItems.id, id));
  }

  async addFavoriteToPresciption(favoriteId: number, prescriptionId: number): Promise<PrescriptionItem> {
    const [fav] = await db.select().from(favoriteItems).where(eq(favoriteItems.id, favoriteId));
    if (!fav) throw new Error("Favorite not found");

    const existing = await db.select().from(prescriptionItems).where(eq(prescriptionItems.prescriptionId, prescriptionId));
    const maxOrder = existing.length > 0 ? Math.max(...existing.map(i => i.sortOrder)) + 1 : 0;

    const [item] = await db.insert(prescriptionItems).values({
      prescriptionId,
      type: fav.type,
      productName: fav.productName,
      ingredientName: fav.ingredientName,
      dosage: fav.dosage,
      unit: fav.unit,
      frequency: fav.frequency,
      route: fav.route,
      note: fav.note,
      sortOrder: maxOrder,
    }).returning();
    return item;
  }

  async searchPrescriptionsByItem(query: string): Promise<number[]> {
    const pattern = `%${query}%`;
    const results = await db.select({ prescriptionId: prescriptionItems.prescriptionId })
      .from(prescriptionItems)
      .where(or(
        ilike(prescriptionItems.productName, pattern),
        ilike(prescriptionItems.ingredientName, pattern),
      ));
    return Array.from(new Set(results.map(r => r.prescriptionId)));
  }
}

export const storage = new DatabaseStorage();
