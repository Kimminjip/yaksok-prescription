import "dotenv/config";
import { db } from "../server/db";
import { categories, prescriptions, prescriptionItems } from "@shared/schema";
import { eq, inArray } from "drizzle-orm";
import { insertKkuData } from "../server/kku-data";

async function deleteExistingKkuData() {
  const [top] = await db.select().from(categories).where(eq(categories.name, "건국대학교 병원 약속처방"));
  if (!top) return;

  const subCats = await db.select().from(categories).where(eq(categories.parentId, top.id));
  const subCatIds = subCats.map(c => c.id);

  if (subCatIds.length > 0) {
    const rxs = await db.select().from(prescriptions).where(inArray(prescriptions.categoryId, subCatIds));
    const rxIds = rxs.map(r => r.id);
    if (rxIds.length > 0) {
      await db.delete(prescriptionItems).where(inArray(prescriptionItems.prescriptionId, rxIds));
      await db.delete(prescriptions).where(inArray(prescriptions.id, rxIds));
    }
    await db.delete(categories).where(inArray(categories.id, subCatIds));
  }

  await db.delete(categories).where(eq(categories.id, top.id));
  console.log("Deleted existing KKU data");
}

async function main() {
  await deleteExistingKkuData();
  await insertKkuData();
  console.log("Inserted fresh KKU data");
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
