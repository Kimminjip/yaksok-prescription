import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/verify-pin", (req, res) => {
    const { pin } = req.body;
    const correctPin = process.env.APP_PIN || "0000";
    if (pin === correctPin) {
      res.json({ ok: true });
    } else {
      res.status(401).json({ message: "잘못된 PIN 번호입니다" });
    }
  });

  app.get("/api/categories", async (_req, res) => {
    const cats = await storage.getCategories();
    res.json(cats);
  });

  app.patch("/api/categories/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid id" });
    const cat = await storage.updateCategory(id, req.body);
    res.json(cat);
  });

  app.post("/api/categories/reorder", async (req, res) => {
    await storage.updateCategoryOrders(req.body.items);
    res.json({ ok: true });
  });

  app.post("/api/categories", async (req, res) => {
    const cat = await storage.createCategory(req.body);
    res.json(cat);
  });

  app.delete("/api/categories/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid id" });
    await storage.deleteCategory(id);
    res.json({ ok: true });
  });

  app.get("/api/prescriptions", async (_req, res) => {
    const rxs = await storage.getPrescriptions();
    res.json(rxs);
  });

  app.patch("/api/prescriptions/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid id" });
    const rx = await storage.updatePrescription(id, req.body);
    res.json(rx);
  });

  app.post("/api/prescriptions", async (req, res) => {
    const rx = await storage.createPrescription(req.body);
    res.json(rx);
  });

  app.delete("/api/prescriptions/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid id" });
    await storage.deletePrescription(id);
    res.json({ ok: true });
  });

  app.post("/api/prescriptions/reorder", async (req, res) => {
    await storage.updatePrescriptionOrders(req.body.items);
    res.json({ ok: true });
  });

  app.post("/api/prescriptions/:id/copy", async (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid id" });
    const targetCategoryId = req.body?.categoryId !== undefined ? parseInt(req.body.categoryId, 10) : undefined;
    if (targetCategoryId !== undefined && isNaN(targetCategoryId)) return res.status(400).json({ message: "Invalid categoryId" });
    try {
      const copy = await storage.copyPrescription(id, targetCategoryId);
      res.json(copy);
    } catch (e: any) {
      res.status(404).json({ message: e.message });
    }
  });

  app.get("/api/prescriptions/:id/items", async (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid id" });
    const items = await storage.getPrescriptionItems(id);
    res.json(items);
  });

  app.post("/api/prescriptions/:id/items", async (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid id" });
    const item = await storage.createPrescriptionItem({ ...req.body, prescriptionId: id });
    res.json(item);
  });

  app.patch("/api/prescription-items/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid id" });
    const item = await storage.updatePrescriptionItem(id, req.body);
    res.json(item);
  });

  app.delete("/api/prescription-items/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid id" });
    await storage.deletePrescriptionItem(id);
    res.json({ ok: true });
  });

  app.post("/api/prescriptions/:id/items/batch", async (req, res) => {
    const prescriptionId = parseInt(req.params.id, 10);
    if (isNaN(prescriptionId)) return res.status(400).json({ message: "Invalid id" });
    const { items: itemsData } = req.body;
    if (!Array.isArray(itemsData) || itemsData.length === 0) {
      return res.status(400).json({ message: "items must be a non-empty array" });
    }
    const created = [];
    for (const itemData of itemsData) {
      const item = await storage.createPrescriptionItem({ ...itemData, prescriptionId });
      created.push(item);
    }
    res.json(created);
  });

  app.post("/api/prescription-items/batch-delete", async (req, res) => {
    const { ids } = req.body;
    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: "ids must be a non-empty array" });
    }
    const deleted = await storage.deletePrescriptionItems(ids);
    res.json({ ok: true, deleted });
  });

  app.post("/api/prescription-items/reorder", async (req, res) => {
    await storage.updatePrescriptionItemOrders(req.body.items);
    res.json({ ok: true });
  });

  app.get("/api/favorites", async (_req, res) => {
    const items = await storage.getFavoriteItems();
    res.json(items);
  });

  app.post("/api/favorites", async (req, res) => {
    const item = await storage.createFavoriteItem(req.body);
    res.json(item);
  });

  app.delete("/api/favorites/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid id" });
    await storage.deleteFavoriteItem(id);
    res.json({ ok: true });
  });

  app.post("/api/favorites/:id/add-to-prescription", async (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid id" });
    const { prescriptionId } = req.body;
    if (!prescriptionId) return res.status(400).json({ message: "prescriptionId required" });
    try {
      const item = await storage.addFavoriteToPresciption(id, prescriptionId);
      res.json(item);
    } catch (e: any) {
      res.status(404).json({ message: e.message });
    }
  });

  app.get("/api/search/items", async (req, res) => {
    const q = (req.query.q as string) || "";
    if (!q.trim()) return res.json([]);
    const prescriptionIds = await storage.searchPrescriptionsByItem(q.trim());
    res.json(prescriptionIds);
  });

  return httpServer;
}
