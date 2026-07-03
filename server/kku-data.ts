import { db } from "./db";
import { categories, prescriptions, prescriptionItems } from "@shared/schema";

export async function insertKkuData() {
  const [건국대학교병원] = await db.insert(categories).values({ name: "건국대학교 병원 약속처방", sortOrder: 3 }).returning();

  const [철분제제] = await db.insert(categories).values({ name: "철분제제", parentId: 건국대학교병원.id, sortOrder: 0 }).returning();
  const [트라넥삼산] = await db.insert(categories).values({ name: "Trauma Tranexamic acid", parentId: 건국대학교병원.id, sortOrder: 1 }).returning();
  const [트라우마시리즈] = await db.insert(categories).values({ name: "Trauma Series", parentId: 건국대학교병원.id, sortOrder: 2 }).returning();
  const [폐색전증] = await db.insert(categories).values({ name: "Pulmonary thromboembolism", parentId: 건국대학교병원.id, sortOrder: 3 }).returning();
  const [저혈당] = await db.insert(categories).values({ name: "Hypoglycemia (glucose 주기 전 채혈)", parentId: 건국대학교병원.id, sortOrder: 4 }).returning();
  const [저나트륨저칼륨] = await db.insert(categories).values({ name: "Hyponatremia/Hypokalemia", parentId: 건국대학교병원.id, sortOrder: 5 }).returning();
  const [급성췌장염] = await db.insert(categories).values({ name: "Acute pancreatitis", parentId: 건국대학교병원.id, sortOrder: 6 }).returning();
  const [간염검사] = await db.insert(categories).values({ name: "hepatitis검사", parentId: 건국대학교병원.id, sortOrder: 7 }).returning();
  const [DI] = await db.insert(categories).values({ name: "DI", parentId: 건국대학교병원.id, sortOrder: 8 }).returning();
  const [칼리메이트관장] = await db.insert(categories).values({ name: "kalimate enema", parentId: 건국대학교병원.id, sortOrder: 9 }).returning();
  const [흉수천자] = await db.insert(categories).values({ name: "thoracentesis", parentId: 건국대학교병원.id, sortOrder: 10 }).returning();
  const [복수천자] = await db.insert(categories).values({ name: "paracentesis", parentId: 건국대학교병원.id, sortOrder: 11 }).returning();
  const [어깨영상] = await db.insert(categories).values({ name: "shoulder", parentId: 건국대학교병원.id, sortOrder: 12 }).returning();
  const [척추영상] = await db.insert(categories).values({ name: "spine", parentId: 건국대학교병원.id, sortOrder: 13 }).returning();
  const [손목영상] = await db.insert(categories).values({ name: "wrist", parentId: 건국대학교병원.id, sortOrder: 14 }).returning();
  const [노르핀1st] = await db.insert(categories).values({ name: "Norpin -1st", parentId: 건국대학교병원.id, sortOrder: 15 }).returning();
  const [바소프레신2nd] = await db.insert(categories).values({ name: "Vasopressin - 2nd", parentId: 건국대학교병원.id, sortOrder: 16 }).returning();
  const [에피네프린3rd] = await db.insert(categories).values({ name: "epinephrine continous-3rd", parentId: 건국대학교병원.id, sortOrder: 17 }).returning();
  const [도파민] = await db.insert(categories).values({ name: "Dompamine", parentId: 건국대학교병원.id, sortOrder: 18 }).returning();
  const [라식스IV] = await db.insert(categories).values({ name: "lasix IV", parentId: 건국대학교병원.id, sortOrder: 19 }).returning();
  const [라식스지속] = await db.insert(categories).values({ name: "lasix continous", parentId: 건국대학교병원.id, sortOrder: 20 }).returning();
  const [심방세동] = await db.insert(categories).values({ name: "A.fib", parentId: 건국대학교병원.id, sortOrder: 21 }).returning();
  const [PSVT] = await db.insert(categories).values({ name: "PSVT", parentId: 건국대학교병원.id, sortOrder: 22 }).returning();
  const [VT] = await db.insert(categories).values({ name: "VT", parentId: 건국대학교병원.id, sortOrder: 23 }).returning();
  const [심정지VTVfib] = await db.insert(categories).values({ name: "Arrest-VT,V.fib", parentId: 건국대학교병원.id, sortOrder: 24 }).returning();
  const [심방세동퇴원약] = await db.insert(categories).values({ name: "A.fib 퇴원약", parentId: 건국대학교병원.id, sortOrder: 25 }).returning();
  const [연조직염] = await db.insert(categories).values({ name: "연조직염 혹은 Dirty wd.", parentId: 건국대학교병원.id, sortOrder: 26 }).returning();
  const [편도염] = await db.insert(categories).values({ name: "감기(심한 편도염)", parentId: 건국대학교병원.id, sortOrder: 27 }).returning();
  const [PID] = await db.insert(categories).values({ name: "PID", parentId: 건국대학교병원.id, sortOrder: 28 }).returning();
  const [급성심근경색] = await db.insert(categories).values({ name: "MI medications", parentId: 건국대학교병원.id, sortOrder: 29 }).returning();

  const [철분제제처방] = await db.insert(prescriptions).values({ name: "철분제제", categoryId: 철분제제.id, sortOrder: 0 }).returning();
  const [트라넥삼산처방] = await db.insert(prescriptions).values({ name: "Trauma Tranexamic acid", categoryId: 트라넥삼산.id, sortOrder: 0 }).returning();
  const [트라우마시리즈처방] = await db.insert(prescriptions).values({ name: "Trauma Series", categoryId: 트라우마시리즈.id, sortOrder: 0 }).returning();
  const [폐색전증처방] = await db.insert(prescriptions).values({ name: "Pulmonary thromboembolism", categoryId: 폐색전증.id, sortOrder: 0 }).returning();
  const [저혈당처방] = await db.insert(prescriptions).values({ name: "Hypoglycemia (glucose 주기 전 채혈)", categoryId: 저혈당.id, sortOrder: 0 }).returning();
  const [저나트륨저칼륨처방] = await db.insert(prescriptions).values({ name: "Hyponatremia/Hypokalemia", categoryId: 저나트륨저칼륨.id, sortOrder: 0 }).returning();
  const [급성췌장염처방] = await db.insert(prescriptions).values({ name: "Acute pancreatitis", categoryId: 급성췌장염.id, sortOrder: 0 }).returning();
  const [간염검사처방] = await db.insert(prescriptions).values({ name: "hepatitis검사", categoryId: 간염검사.id, sortOrder: 0 }).returning();
  const [DI처방] = await db.insert(prescriptions).values({ name: "DI", categoryId: DI.id, sortOrder: 0 }).returning();
  const [칼리메이트관장처방] = await db.insert(prescriptions).values({ name: "kalimate enema", categoryId: 칼리메이트관장.id, sortOrder: 0 }).returning();
  const [흉수천자처방] = await db.insert(prescriptions).values({ name: "thoracentesis", categoryId: 흉수천자.id, sortOrder: 0 }).returning();
  const [복수천자처방] = await db.insert(prescriptions).values({ name: "paracentesis", categoryId: 복수천자.id, sortOrder: 0 }).returning();
  const [어깨영상처방] = await db.insert(prescriptions).values({ name: "shoulder", categoryId: 어깨영상.id, sortOrder: 0 }).returning();
  const [척추영상처방] = await db.insert(prescriptions).values({ name: "spine", categoryId: 척추영상.id, sortOrder: 0 }).returning();
  const [손목영상처방] = await db.insert(prescriptions).values({ name: "wrist", categoryId: 손목영상.id, sortOrder: 0 }).returning();
  const [노르핀1st처방] = await db.insert(prescriptions).values({ name: "Norpin -1st", categoryId: 노르핀1st.id, sortOrder: 0 }).returning();
  const [바소프레신2nd처방] = await db.insert(prescriptions).values({ name: "Vasopressin - 2nd", categoryId: 바소프레신2nd.id, sortOrder: 0 }).returning();
  const [에피네프린3rd처방] = await db.insert(prescriptions).values({ name: "epinephrine continous-3rd", categoryId: 에피네프린3rd.id, sortOrder: 0 }).returning();
  const [도파민처방] = await db.insert(prescriptions).values({ name: "Dompamine", categoryId: 도파민.id, sortOrder: 0 }).returning();
  const [라식스IV처방] = await db.insert(prescriptions).values({ name: "lasix IV", categoryId: 라식스IV.id, sortOrder: 0 }).returning();
  const [라식스지속처방] = await db.insert(prescriptions).values({ name: "lasix continous", categoryId: 라식스지속.id, sortOrder: 0 }).returning();
  const [심방세동처방] = await db.insert(prescriptions).values({ name: "A.fib", categoryId: 심방세동.id, sortOrder: 0 }).returning();
  const [PSVT처방] = await db.insert(prescriptions).values({ name: "PSVT", categoryId: PSVT.id, sortOrder: 0 }).returning();
  const [VT처방] = await db.insert(prescriptions).values({ name: "VT", categoryId: VT.id, sortOrder: 0 }).returning();
  const [심정지VTVfib처방] = await db.insert(prescriptions).values({ name: "Arrest-VT,V.fib", categoryId: 심정지VTVfib.id, sortOrder: 0 }).returning();
  const [심방세동퇴원약처방] = await db.insert(prescriptions).values({ name: "A.fib 퇴원약", categoryId: 심방세동퇴원약.id, sortOrder: 0 }).returning();
  const [연조직염처방] = await db.insert(prescriptions).values({ name: "연조직염 혹은 Dirty wd.", categoryId: 연조직염.id, sortOrder: 0 }).returning();
  const [편도염처방] = await db.insert(prescriptions).values({ name: "감기(심한 편도염)", categoryId: 편도염.id, sortOrder: 0 }).returning();
  const [PID처방] = await db.insert(prescriptions).values({ name: "PID", categoryId: PID.id, sortOrder: 0 }).returning();
  const [급성심근경색처방] = await db.insert(prescriptions).values({ name: "MI medications", categoryId: 급성심근경색.id, sortOrder: 0 }).returning();

  await db.insert(prescriptionItems).values([
    // 철분제제
    { prescriptionId: 철분제제처방.id, type: "약", productName: "Feriject 500mg/10ml", ingredientName: "Fe(OH)3", dosage: "1", unit: "V", frequency: "1", route: "IV", note: "15분이상 천천히 투여해주세요", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 철분제제처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "15분이상 천천히 투여해주세요", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 철분제제처방.id, type: "약", productName: "Feriject 1000mg/20mL", ingredientName: "Fe(OH)3", dosage: "1", unit: "V", frequency: "1", route: "IV", note: "15분이상 천천히 투여해주세요", sortOrder: 2, mixGroup: "M2" },
    { prescriptionId: 철분제제처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "15분이상 천천히 투여해주세요", sortOrder: 3, mixGroup: "M2" },
    { prescriptionId: 철분제제처방.id, type: "혈액검사", productName: "Ferritin", note: "Serum, SST", sortOrder: 4 },

    // Trauma Tranexamic acid
    { prescriptionId: 트라넥삼산처방.id, type: "지시처방", productName: "16세이상, hemodynamically unstable pt, 3시간이내에 발생한 수혈이 필요한 major trauma에게 투약", sortOrder: 0 },
    { prescriptionId: 트라넥삼산처방.id, type: "약", productName: "Tranexamic acid 500mg/5ml", ingredientName: "tranexamic acid", dosage: "2", unit: "A", frequency: "1", route: "IV", note: "125mg/hr", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 트라넥삼산처방.id, type: "약", productName: "NS 500ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "62.5ml/hr", sortOrder: 2, mixGroup: "M1" },
    { prescriptionId: 트라넥삼산처방.id, type: "약", productName: "Tranexamic acid 500mg/5ml", ingredientName: "tranexamic acid", dosage: "2", unit: "A", frequency: "1", route: "IV", sortOrder: 3, mixGroup: "M2" },
    { prescriptionId: 트라넥삼산처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "10분동안 들어가게 주세요", sortOrder: 4, mixGroup: "M2" },

    // Trauma Series
    { prescriptionId: 트라우마시리즈처방.id, type: "영상검사", productName: "C Spine 1P [Lat]", sortOrder: 0 },
    { prescriptionId: 트라우마시리즈처방.id, type: "영상검사", productName: "Chest 1P [AP]", sortOrder: 1 },
    { prescriptionId: 트라우마시리즈처방.id, type: "영상검사", productName: "Pelvis 1P [AP]", sortOrder: 2 },

    // Pulmonary thromboembolism
    { prescriptionId: 폐색전증처방.id, type: "약", productName: "Heparin sodium (25,000unit/5ml)", ingredientName: "Heparin sodium", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "iv bolus: 80unit/kg", sortOrder: 0 },
    { prescriptionId: 폐색전증처방.id, type: "약", productName: "Heparin sodium (25,000unit/5ml)", ingredientName: "Heparin sodium", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "18unit/kg/hr", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 폐색전증처방.id, type: "약", productName: "NS 500ml/Bag", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 2, mixGroup: "M1" },

    // Hypoglycemia
    { prescriptionId: 저혈당처방.id, type: "지시처방", productName: "DW 주기 전에 반드시 채혈 후 DW 주세요", sortOrder: 0 },
    { prescriptionId: 저혈당처방.id, type: "약", productName: "50% DW 100ml/Plastic", ingredientName: "Dextrose", dosage: "30", unit: "ml", frequency: "1", route: "IV infusion", sortOrder: 1 },
    { prescriptionId: 저혈당처방.id, type: "혈액검사", productName: "Hemoglobin A1C (당뇨검사)", note: "WB, EDTA", sortOrder: 2 },
    { prescriptionId: 저혈당처방.id, type: "혈액검사", productName: "ACTH (Adrenocoticotropic hormone)", note: "WB, EDTA", sortOrder: 3 },
    { prescriptionId: 저혈당처방.id, type: "혈액검사", productName: "Cortisol(s)", note: "Serum, SST", sortOrder: 4 },
    { prescriptionId: 저혈당처방.id, type: "혈액검사", productName: "Insulin", note: "Serum, SST", sortOrder: 5 },
    { prescriptionId: 저혈당처방.id, type: "혈액검사", productName: "hGH (Human Growth Hormone)", note: "Serum, SST", sortOrder: 6 },
    { prescriptionId: 저혈당처방.id, type: "혈액검사", productName: "C-Peptide(s)", note: "Serum, SST", sortOrder: 7 },
    { prescriptionId: 저혈당처방.id, type: "약", productName: "10% DW 1000mL/Bag", ingredientName: "Dextrose", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "150ml/hr, IV로 최대한 줄수 있는 만큼", sortOrder: 8, mixGroup: "M1" },
    { prescriptionId: 저혈당처방.id, type: "약", productName: "50% DW 100ml/Plastic", ingredientName: "Dextrose", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "150ml/hr, IV로 최대한 줄수 있는 만큼", sortOrder: 9, mixGroup: "M1" },

    // Hyponatremia/Hypokalemia
    { prescriptionId: 저나트륨저칼륨처방.id, type: "혈액검사", productName: "(소변)Osmolarity", sortOrder: 0 },
    { prescriptionId: 저나트륨저칼륨처방.id, type: "혈액검사", productName: "(소변)Creatinine", sortOrder: 1 },
    { prescriptionId: 저나트륨저칼륨처방.id, type: "혈액검사", productName: "(소변)Urea Nitrogen", sortOrder: 2 },
    { prescriptionId: 저나트륨저칼륨처방.id, type: "혈액검사", productName: "(소변)Electrolyte (Na,K,Cl)", sortOrder: 3 },
    { prescriptionId: 저나트륨저칼륨처방.id, type: "혈액검사", productName: "TFT(T3,FreeT4,TSH)", note: "Serum, SST", sortOrder: 4 },
    { prescriptionId: 저나트륨저칼륨처방.id, type: "약", productName: "3% NS 500ml/BTL", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV", note: "20ml/hr", sortOrder: 5 },

    // Acute pancreatitis
    { prescriptionId: 급성췌장염처방.id, type: "약", productName: "Foy 100mg", ingredientName: "gabexate mesilate", dosage: "3", unit: "V", frequency: "1", route: "IV infusion", note: "40ml/hr", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 급성췌장염처방.id, type: "약", productName: "NS 500ml/Bag", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "40ml/hr", sortOrder: 1, mixGroup: "M1" },

    // hepatitis검사
    { prescriptionId: 간염검사처방.id, type: "혈액검사", productName: "D.Bilirubin", note: "Plasma, PST", sortOrder: 0 },
    { prescriptionId: 간염검사처방.id, type: "혈액검사", productName: "Anti HAV IgG", note: "Serum, SST", sortOrder: 1 },
    { prescriptionId: 간염검사처방.id, type: "혈액검사", productName: "Anti HAV IgM", note: "Serum, SST", sortOrder: 2 },
    { prescriptionId: 간염검사처방.id, type: "혈액검사", productName: "HBs Ag", note: "Serum, SST", sortOrder: 3 },
    { prescriptionId: 간염검사처방.id, type: "혈액검사", productName: "Anti-HBs Ab", note: "Serum, SST", sortOrder: 4 },
    { prescriptionId: 간염검사처방.id, type: "혈액검사", productName: "HCV Ab", note: "Serum, SST", sortOrder: 5 },

    // DI
    { prescriptionId: DI처방.id, type: "혈액검사", productName: "D-Dimer(Quantitative)", note: "Plasma, Sodium Citrate", sortOrder: 0 },
    { prescriptionId: DI처방.id, type: "혈액검사", productName: "hs-TnI", note: "Plasma, PST", sortOrder: 1 },
    { prescriptionId: DI처방.id, type: "혈액검사", productName: "Alcohol(Ethanol)", note: "Plasma, PST", sortOrder: 2 },
    { prescriptionId: DI처방.id, type: "혈액검사", productName: "약물선별검사(9종-응급실)", sortOrder: 3 },
    { prescriptionId: DI처방.id, type: "혈액검사", productName: "(소변) Urine Microscopy", sortOrder: 4 },
    { prescriptionId: DI처방.id, type: "혈액검사", productName: "Routine urinalysis (10종까지)", sortOrder: 5 },
    { prescriptionId: DI처방.id, type: "혈액검사", productName: "hCG", sortOrder: 6 },
    { prescriptionId: DI처방.id, type: "혈액검사", productName: "TFT(T3,FreeT4,TSH)", note: "Serum, SST", sortOrder: 7 },

    // kalimate enema
    { prescriptionId: 칼리메이트관장처방.id, type: "약", productName: "Kalimate pow 5g", ingredientName: "Ca polystyrene Sulfonate", dosage: "10", unit: "PK", frequency: "1", route: "Rectal", note: "enema", sortOrder: 0 },
    { prescriptionId: 칼리메이트관장처방.id, type: "약", productName: "5% DW 200ml/Bag (JW중외)", ingredientName: "Dextrose", dosage: "1", unit: "Bag", frequency: "1", route: "Rectal", note: "enema", sortOrder: 1 },
    { prescriptionId: 칼리메이트관장처방.id, type: "지시처방", productName: "Drug Retention Enema", sortOrder: 2 },

    // thoracentesis
    { prescriptionId: 흉수천자처방.id, type: "혈액검사", productName: "AFB Stain,Cul,ID(고체/액체)", note: "Pleural fluid", sortOrder: 0 },
    { prescriptionId: 흉수천자처방.id, type: "혈액검사", productName: "Adenosine deaminase (ADA)", note: "Pleural fluid", sortOrder: 1 },
    { prescriptionId: 흉수천자처방.id, type: "혈액검사", productName: "(체액)Routine body fluid", note: "Pleural fluid", sortOrder: 2 },
    { prescriptionId: 흉수천자처방.id, type: "혈액검사", productName: "(체액)Amylase", note: "Other body fluid or aspiration", sortOrder: 3 },
    { prescriptionId: 흉수천자처방.id, type: "혈액검사", productName: "CEA (Carcinoembryonic Ag)", note: "Other body fluid or aspiration", sortOrder: 4 },
    { prescriptionId: 흉수천자처방.id, type: "혈액검사", productName: "Gram stain & culture & sensitivity", note: "Pleural fluid", sortOrder: 5 },
    { prescriptionId: 흉수천자처방.id, type: "혈액검사", productName: "(체액) T. Protein", note: "Other body fluid or aspiration", sortOrder: 6 },
    { prescriptionId: 흉수천자처방.id, type: "혈액검사", productName: "체액 검사(Fluid/Cytospin) + Cell block제작", note: "병리검사", sortOrder: 7 },
    { prescriptionId: 흉수천자처방.id, type: "혈액검사", productName: "(체액)Albumin", note: "Other body fluid or aspiration", sortOrder: 8 },
    { prescriptionId: 흉수천자처방.id, type: "혈액검사", productName: "(체액)LDH", note: "Other body fluid or aspiration", sortOrder: 9 },
    { prescriptionId: 흉수천자처방.id, type: "혈액검사", productName: "(체액)Glucose", note: "Other body fluid or aspiration", sortOrder: 10 },

    // paracentesis
    { prescriptionId: 복수천자처방.id, type: "약", productName: "Albumin 20% 100ml", ingredientName: "Albumin", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "20ml/hr", sortOrder: 0 },

    // shoulder
    { prescriptionId: 어깨영상처방.id, type: "영상검사", productName: "Shoulder 2P [Lt] [S-S Outlet, Axial]", sortOrder: 0 },
    { prescriptionId: 어깨영상처방.id, type: "영상검사", productName: "Shoulder 1P [Both] [AP]", sortOrder: 1 },
    { prescriptionId: 어깨영상처방.id, type: "영상검사", productName: "Shoulder 2P [Rt] [S-S Outlet, Axial]", sortOrder: 2 },
    { prescriptionId: 어깨영상처방.id, type: "영상검사", productName: "Shoulder 2P [Both] [S-S Outlet, Axial]", note: "소아", sortOrder: 3 },
    { prescriptionId: 어깨영상처방.id, type: "영상검사", productName: "Scapula 2P [Lt] [IR 40, ER 50]", sortOrder: 4 },
    { prescriptionId: 어깨영상처방.id, type: "영상검사", productName: "Scapula 2P [Rt] [IR 40, ER 50]", sortOrder: 5 },
    { prescriptionId: 어깨영상처방.id, type: "영상검사", productName: "Scapula 2P [Both] [IR 40, ER 50]", note: "소아", sortOrder: 6 },
    { prescriptionId: 어깨영상처방.id, type: "영상검사", productName: "Shoulder 1P [Lt] [Apical Oblique]", note: "post reduction 촬영 시 추가 처방", sortOrder: 7 },
    { prescriptionId: 어깨영상처방.id, type: "영상검사", productName: "Shoulder 1P [Rt] [Apical Oblique]", note: "post reduction 촬영 시 추가 처방", sortOrder: 8 },
    { prescriptionId: 어깨영상처방.id, type: "영상검사", productName: "Shoulder 1P [Both] [Apical Oblique]", note: "post reduction 촬영 시 추가 처방", sortOrder: 9 },

    // spine
    { prescriptionId: 척추영상처방.id, type: "영상검사", productName: "C Spine 2P [AP, Lat]", note: "입을 벌리지 못할 때", sortOrder: 0 },
    { prescriptionId: 척추영상처방.id, type: "영상검사", productName: "C Spine 3P [AP, Lat, Open Mouth View]", sortOrder: 1 },
    { prescriptionId: 척추영상처방.id, type: "영상검사", productName: "T Spine 2P [AP, Lat]", sortOrder: 2 },
    { prescriptionId: 척추영상처방.id, type: "영상검사", productName: "T-L Spine 2P [AP, Lat]", sortOrder: 3 },
    { prescriptionId: 척추영상처방.id, type: "영상검사", productName: "L Spine 2P [AP, Lat]", sortOrder: 4 },
    { prescriptionId: 척추영상처방.id, type: "영상검사", productName: "L-S Spine 2P [AP, Lat]", sortOrder: 5 },

    // wrist
    { prescriptionId: 손목영상처방.id, type: "영상검사", productName: "Wrist 3P [Lt] [AP, Lat, Billiard]", sortOrder: 0 },
    { prescriptionId: 손목영상처방.id, type: "영상검사", productName: "Wrist 3P [Rt] [AP, Lat, Billiard]", sortOrder: 1 },
    { prescriptionId: 손목영상처방.id, type: "영상검사", productName: "Wrist 3P [Both] [AP, Lat, Billiard]", note: "소아", sortOrder: 2 },

    // Norpin -1st
    { prescriptionId: 노르핀1st처방.id, type: "약", productName: "Norpin 4mg/4ml", ingredientName: "norepinephrine", dosage: "3", unit: "A", frequency: "1", route: "IV infusion", note: "5-10mcg/min", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 노르핀1st처방.id, type: "약", productName: "5% DW 200ml/Bag (JW중외)", ingredientName: "Dextrose", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "10 mcg/min->10ml/hr", sortOrder: 1, mixGroup: "M1" },

    // Vasopressin - 2nd
    { prescriptionId: 바소프레신2nd처방.id, type: "지시처방", productName: "Initial dose: 0.01 units/min IV infusion. If target blood pressure response is not achieved: titrate up by 0.005 unit", sortOrder: 0 },
    { prescriptionId: 바소프레신2nd처방.id, type: "약", productName: "Vasopressin 20unit/ml", ingredientName: "Vasopressin", dosage: "1", unit: "A", frequency: "1", route: "IV", note: "0.01unit/min", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 바소프레신2nd처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 2, mixGroup: "M1" },

    // epinephrine continous-3rd
    { prescriptionId: 에피네프린3rd처방.id, type: "지시처방", productName: "Titrate up by 0.05 mcg/kg/min", sortOrder: 0 },
    { prescriptionId: 에피네프린3rd처방.id, type: "약", productName: "Epinephrine 1mg/1ml", ingredientName: "Epinephrine", dosage: "10", unit: "A", frequency: "1", route: "IV infusion", note: "start from 0.05 mcg/kg/min (60kg 기준 1.8ml/hr)", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 에피네프린3rd처방.id, type: "약", productName: "5% DW 100ml/PP", ingredientName: "Dextrose", dosage: "0.9", unit: "BT", frequency: "1", route: "IV infusion", note: "start from 0.05 mcg/kg/min (60kg 기준 1.8ml/hr)", sortOrder: 2, mixGroup: "M1" },

    // Dompamine
    { prescriptionId: 도파민처방.id, type: "약", productName: "Dopamine premix 800mg/500ml", ingredientName: "Dopamine", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "5-10mcg/kg/min (60kg 기준 11.25~22.5ml/hr)", sortOrder: 0 },

    // lasix IV
    { prescriptionId: 라식스IV처방.id, type: "지시처방", productName: "lasix effect(urination CC) 확인해주세요", sortOrder: 0 },
    { prescriptionId: 라식스IV처방.id, type: "약", productName: "Lasix 20mg/2ml", ingredientName: "furosemide", dosage: "1", unit: "A", frequency: "1", route: "IV", note: "1st", sortOrder: 1 },
    { prescriptionId: 라식스IV처방.id, type: "약", productName: "Lasix 20mg/2ml", ingredientName: "furosemide", dosage: "2", unit: "A", frequency: "1", route: "IV", note: "2nd", sortOrder: 2 },

    // lasix continous
    { prescriptionId: 라식스지속처방.id, type: "약", productName: "Lasix 20mg/2ml", ingredientName: "furosemide", dosage: "10", unit: "A", frequency: "1", route: "IV", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 라식스지속처방.id, type: "약", productName: "5% DW 200ml/Bag (JW중외)", ingredientName: "Dextrose", dosage: "180", unit: "ml", frequency: "1", route: "IV infusion", sortOrder: 1, mixGroup: "M1" },

    // A.fib
    { prescriptionId: 심방세동처방.id, type: "지시처방", productName: "주의!!! PSVT와 구별하세요, Herben 금기 확인하세요", sortOrder: 0 },
    { prescriptionId: 심방세동처방.id, type: "지시처방", productName: "v/s unstable 시 120-200J cardioversion 고려", sortOrder: 1 },
    { prescriptionId: 심방세동처방.id, type: "지시처방", productName: "cardioversion 전에 Echo로 LAO thrombosis 유무 확인하세요", sortOrder: 2 },
    { prescriptionId: 심방세동처방.id, type: "지시처방", productName: "2.5mg -> 5mg -> 10mg .. IV bolus", sortOrder: 3 },
    { prescriptionId: 심방세동처방.id, type: "지시처방", productName: "2차 약제: verapamil", sortOrder: 4 },
    { prescriptionId: 심방세동처방.id, type: "지시처방", productName: "HF 등 구조적인 심질환 있는 경우 Herben 말고 amiodarone", sortOrder: 5 },
    { prescriptionId: 심방세동처방.id, type: "약", productName: "Isoptin 5mg/2ml", ingredientName: "verapamil", dosage: "1", unit: "A", frequency: "1", route: "IV", note: "slow", sortOrder: 6 },
    { prescriptionId: 심방세동처방.id, type: "약", productName: "Isoptin 5mg/2ml", ingredientName: "verapamil", dosage: "2", unit: "A", frequency: "1", route: "IV", note: "slow", sortOrder: 7 },
    { prescriptionId: 심방세동처방.id, type: "약", productName: "Isoptin 5mg/2ml", ingredientName: "verapamil", dosage: "0.5", unit: "A", frequency: "1", route: "IV", note: "slow", sortOrder: 8 },
    { prescriptionId: 심방세동처방.id, type: "약", productName: "Herben 50mg", ingredientName: "diltiazem", dosage: "15", unit: "mg", frequency: "1", route: "IV", note: "1st bolus", sortOrder: 9, mixGroup: "M1" },
    { prescriptionId: 심방세동처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "1st, 2분 이상에 걸쳐서 주세요", sortOrder: 10, mixGroup: "M1" },
    { prescriptionId: 심방세동처방.id, type: "약", productName: "Herben 50mg", ingredientName: "diltiazem", dosage: "1", unit: "A", frequency: "1", route: "IV", note: "continous 5mg/h (4-20mg/hr) 까 (잘림)", sortOrder: 11, mixGroup: "M2" },
    { prescriptionId: 심방세동처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "10ml/hr continous 5mg/h", sortOrder: 12, mixGroup: "M2" },
    { prescriptionId: 심방세동처방.id, type: "지시처방", productName: "esmolol (작용기가 30분으로 labesin 보다 안전)", sortOrder: 13 },
    { prescriptionId: 심방세동처방.id, type: "약", productName: "Brevibloc 100mg/10ml", ingredientName: "esmolol", dosage: "30", unit: "mg", frequency: "1", route: "IV infusion", note: "loading dose, 1분 동안 투여, 5 (잘림)", sortOrder: 14, mixGroup: "M3" },
    { prescriptionId: 심방세동처방.id, type: "약", productName: "Brevibloc 100mg/10ml", ingredientName: "esmolol", dosage: "12", unit: "mg", frequency: "1", route: "IV infusion", note: "2번째, 50 mcg/kg * 4 (잘림)", sortOrder: 15, mixGroup: "M4" },
    { prescriptionId: 심방세동처방.id, type: "지시처방", productName: "5분 후 효과 없으면", sortOrder: 16 },
    { prescriptionId: 심방세동처방.id, type: "약", productName: "Brevibloc 100mg/10ml", ingredientName: "esmolol", dosage: "30", unit: "mg", frequency: "1", route: "IV infusion", note: "3번째, 1분 동안 투여, 500 mcs/ (잘림)", sortOrder: 17, mixGroup: "M5" },
    { prescriptionId: 심방세동처방.id, type: "약", productName: "Brevibloc 100mg/10ml", ingredientName: "esmolol", dosage: "24", unit: "mg", frequency: "1", route: "IV infusion", note: "4번째, 100 mcg/kg * 4 (잘림)", sortOrder: 18, mixGroup: "M6" },

    // PSVT
    { prescriptionId: PSVT처방.id, type: "지시처방", productName: "Adenosine 1st-->6mg, 2nd,3rd-->12mg", sortOrder: 0 },
    { prescriptionId: PSVT처방.id, type: "지시처방", productName: "v/s unstable 시 50-100J cardioversion 고려", sortOrder: 1 },
    { prescriptionId: PSVT처방.id, type: "약", productName: "Adenocor 6mg/2ml", ingredientName: "adenosine", dosage: "1", unit: "A", frequency: "1", route: "IV", sortOrder: 2 },
    { prescriptionId: PSVT처방.id, type: "약", productName: "Adenocor 6mg/2ml", ingredientName: "adenosine", dosage: "2", unit: "A", frequency: "1", route: "IV", sortOrder: 3 },
    { prescriptionId: PSVT처방.id, type: "약", productName: "Adenocor 6mg/2ml", ingredientName: "adenosine", dosage: "2", unit: "A", frequency: "1", route: "IV", sortOrder: 4 },

    // VT
    { prescriptionId: VT처방.id, type: "지시처방", productName: "v/s unstable 시 100J cardioversion 고려하세요", sortOrder: 0 },
    { prescriptionId: VT처방.id, type: "지시처방", productName: "cordarone 효과 없을시 lidocaine(1~1.5mg/kg IV bolus over 2-3min) 투여 고려, 이후 lidocaine continuous 1-4mg/min IV 투여하세요", sortOrder: 1 },
    { prescriptionId: VT처방.id, type: "지시처방", productName: "continuous 6시간동안 1mg/min, 이후로 0.5mg/min", sortOrder: 2 },
    { prescriptionId: VT처방.id, type: "약", productName: "Cordarone 150mg/3ml", ingredientName: "amiodarone", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", note: "1st bolus", sortOrder: 3, mixGroup: "M1" },
    { prescriptionId: VT처방.id, type: "약", productName: "5% DW 100ml/PP", ingredientName: "Dextrose", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "10분동안 들어가게 해주세요", sortOrder: 4, mixGroup: "M1" },
    { prescriptionId: VT처방.id, type: "약", productName: "5% DW 500mL/Bag (JW중외)", ingredientName: "Dextrose", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 5, mixGroup: "M2" },
    { prescriptionId: VT처방.id, type: "약", productName: "Cordarone 150mg/3ml", ingredientName: "amiodarone", dosage: "6", unit: "A", frequency: "1", route: "IV infusion", note: "continuous 6시간동안 1mg/min", sortOrder: 6, mixGroup: "M2" },

    // Arrest-VT,V.fib
    { prescriptionId: 심정지VTVfib처방.id, type: "약", productName: "Cordarone 150mg/3ml", ingredientName: "amiodarone", dosage: "2", unit: "A", frequency: "1", route: "IV infusion", note: "1st dose", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 심정지VTVfib처방.id, type: "약", productName: "5% DW 50ml/PP", ingredientName: "Dextrose", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "loading", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 심정지VTVfib처방.id, type: "약", productName: "Cordarone 150mg/3ml", ingredientName: "amiodarone", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", note: "2nd dose", sortOrder: 2, mixGroup: "M2" },
    { prescriptionId: 심정지VTVfib처방.id, type: "약", productName: "5% DW 50ml/PP", ingredientName: "Dextrose", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "loading", sortOrder: 3, mixGroup: "M2" },

    // A.fib 퇴원약
    { prescriptionId: 심방세동퇴원약처방.id, type: "지시처방", productName: "CHA2DS2-VASc 남자=2, 여자=3 이상인 경우 DOAC 처방", sortOrder: 0 },
    { prescriptionId: 심방세동퇴원약처방.id, type: "지시처방", productName: "승모판협착증, 기계판막인 경우 Warfarin !!!", sortOrder: 1 },
    { prescriptionId: 심방세동퇴원약처방.id, type: "퇴원약", productName: "Cordarone 200mg", ingredientName: "amiodarone", dosage: "1", unit: "T", frequency: "QD", duration: "7일", route: "QD PC", sortOrder: 2 },
    { prescriptionId: 심방세동퇴원약처방.id, type: "퇴원약", productName: "Lixiana 30mg", ingredientName: "edoxaban", dosage: "1", unit: "T", frequency: "QD", route: "QD PC", sortOrder: 3 },
    { prescriptionId: 심방세동퇴원약처방.id, type: "퇴원약", productName: "Pantoloc 40mg", ingredientName: "pantoprazole", dosage: "1", unit: "T", frequency: "QD", route: "QD AC", sortOrder: 4 },

    // 연조직염 혹은 Dirty wd.
    { prescriptionId: 연조직염처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 연조직염처방.id, type: "약", productName: "Cefazolin 1g (중근당)", ingredientName: "Cefazolin", dosage: "1", unit: "V", frequency: "1", route: "IV", note: "1세대 세파", sortOrder: 1, mixGroup: "M1" },

    // 감기(심한 편도염)
    { prescriptionId: 편도염처방.id, type: "약", productName: "Amocla 1.2g", ingredientName: "amoxicillin 1g, clavulanate 0.2g", dosage: "1", unit: "V", frequency: "1", route: "IV", note: "penicillin allergy 꼭 확인후", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 편도염처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 1, mixGroup: "M1" },

    // PID
    { prescriptionId: PID처방.id, type: "약", productName: "Ceftriaxone 1g (HK이노엔)", ingredientName: "Ceftriaxone", dosage: "1", unit: "V", frequency: "1", route: "IV", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: PID처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: PID처방.id, type: "약", productName: "Trizele 500mg/100ml", ingredientName: "metronidazole", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 2 },
    { prescriptionId: PID처방.id, type: "약", productName: "Sinil Monodoxy-M cap 100mg", ingredientName: "doxycycline", dosage: "1", unit: "C", frequency: "1", route: "UT DICT (내복 1일)", note: "지금 먹여주세요", sortOrder: 3 },
    { prescriptionId: PID처방.id, type: "퇴원약", productName: "Stogar 10mg", ingredientName: "Lafutidine", dosage: "1", unit: "T", frequency: "BID", duration: "3일", route: "QD PC & HS", sortOrder: 4 },
    { prescriptionId: PID처방.id, type: "퇴원약", productName: "Flasinyl 250mg", ingredientName: "metronidazole", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 5 },
    { prescriptionId: PID처방.id, type: "퇴원약", productName: "Carol-F", ingredientName: "ibuprofen arginine", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 6 },
    { prescriptionId: PID처방.id, type: "퇴원약", productName: "Sinil Monodoxy-M cap 100mg", ingredientName: "doxycycline", dosage: "1", unit: "C", frequency: "BID", duration: "3일", route: "BID PC", sortOrder: 7 },
    { prescriptionId: PID처방.id, type: "지시처방", productName: "PO anti 14일 복용필요, 산부인과 외래 F/U 잡아주세요", sortOrder: 8 },
    { prescriptionId: PID처방.id, type: "지시처방", productName: "Cefa는 IV만 투여, PO 필요없음", sortOrder: 9 },

    // MI medications
    { prescriptionId: 급성심근경색처방.id, type: "약", productName: "NS 500ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "heparin IV mix", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 급성심근경색처방.id, type: "약", productName: "Heparin sodium (25,000unit/5ml)", ingredientName: "Heparin sodium", dosage: "1", unit: "Ivial", frequency: "1", route: "IV infusion", note: "12unit/kg/hr", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 급성심근경색처방.id, type: "약", productName: "Heparin sodium (25,000unit/5ml)", ingredientName: "Heparin sodium", dosage: "4000", unit: "Unit", frequency: "1", route: "IV infusion", note: "iv bolus: 60-80", sortOrder: 2 },
    { prescriptionId: 급성심근경색처방.id, type: "약", productName: "Nitroglingual 50mg/50ml", ingredientName: "Nitroglycerin", dosage: "1", unit: null, frequency: "1", route: "IV infusion", note: "3cc/hr", sortOrder: 3, mixGroup: "M2" },
    { prescriptionId: 급성심근경색처방.id, type: "약", productName: "5% DW (200ml/Bag)", ingredientName: "Dextrose", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "3ml/hr", sortOrder: 4, mixGroup: "M2" },
    { prescriptionId: 급성심근경색처방.id, type: "약", productName: "Nitroglycerin 0.6mg", ingredientName: "Nitroglycerin", dosage: "1", unit: "T", frequency: "1", route: "SL", sortOrder: 5 },
    { prescriptionId: 급성심근경색처방.id, type: "약", productName: "Lipitor 80mg", ingredientName: "Atorvastatin", dosage: "1", unit: "T", frequency: "1", route: "OD PC", note: "따로 포장해주세요", sortOrder: 6 },
    { prescriptionId: 급성심근경색처방.id, type: "약", productName: "Bayer aspirin 500mg", ingredientName: "Aspirin", dosage: "0.5", unit: "T", frequency: "1", route: "OD PC", sortOrder: 7 },
    { prescriptionId: 급성심근경색처방.id, type: "약", productName: "Brilinta 90mg", ingredientName: "Ticagrelor", dosage: "2", unit: "T", frequency: "1", route: "UT DICT", note: "따로 포장해주세요. STEMI, NSTEMI", sortOrder: 8 },
  ]);

}
