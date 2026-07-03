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
  const [셀룰라이티스] = await db.insert(categories).values({ name: "cellulitis", parentId: 건국대학교병원.id, sortOrder: 29 }).returning();
  const [페치딘] = await db.insert(categories).values({ name: "pethidine", parentId: 건국대학교병원.id, sortOrder: 30 }).returning();
  const [모르핀] = await db.insert(categories).values({ name: "Morphine", parentId: 건국대학교병원.id, sortOrder: 31 }).returning();
  const [펜타닐] = await db.insert(categories).values({ name: "fentanyl", parentId: 건국대학교병원.id, sortOrder: 32 }).returning();
  const [디아제팜진통] = await db.insert(categories).values({ name: "Diazepam", parentId: 건국대학교병원.id, sortOrder: 33 }).returning();
  const [미다졸람] = await db.insert(categories).values({ name: "Midazolam", parentId: 건국대학교병원.id, sortOrder: 34 }).returning();
  const [레미바] = await db.insert(categories).values({ name: "Remiva", parentId: 건국대학교병원.id, sortOrder: 35 }).returning();
  const [디아제팜진정] = await db.insert(categories).values({ name: "Diazepam(sedation)", parentId: 건국대학교병원.id, sortOrder: 36 }).returning();
  const [아티반] = await db.insert(categories).values({ name: "Ativan", parentId: 건국대학교병원.id, sortOrder: 37 }).returning();
  const [AGE정맥약] = await db.insert(categories).values({ name: "AGE IV medication", parentId: 건국대학교병원.id, sortOrder: 38 }).returning();
  const [AGE1] = await db.insert(categories).values({ name: "AGE", parentId: 건국대학교병원.id, sortOrder: 39 }).returning();
  const [담관염] = await db.insert(categories).values({ name: "cholangitis", parentId: 건국대학교병원.id, sortOrder: 40 }).returning();
  const [담도패혈증] = await db.insert(categories).values({ name: "Biliary sepsis", parentId: 건국대학교병원.id, sortOrder: 41 }).returning();
  const [간농양] = await db.insert(categories).values({ name: "liver abscess", parentId: 건국대학교병원.id, sortOrder: 42 }).returning();
  const [APN] = await db.insert(categories).values({ name: "APN", parentId: 건국대학교병원.id, sortOrder: 43 }).returning();
  const [신농양] = await db.insert(categories).values({ name: "renal abscess", parentId: 건국대학교병원.id, sortOrder: 44 }).returning();
  const [SDH수술전] = await db.insert(categories).values({ name: "SDH preOP", parentId: 건국대학교병원.id, sortOrder: 45 }).returning();
  const [건대충수염] = await db.insert(categories).values({ name: "appendicitis", parentId: 건국대학교병원.id, sortOrder: 46 }).returning();
  const [게실염] = await db.insert(categories).values({ name: "diverculitis", parentId: 건국대학교병원.id, sortOrder: 47 }).returning();
  const [천공충수염] = await db.insert(categories).values({ name: "perforated appendicitis", parentId: 건국대학교병원.id, sortOrder: 48 }).returning();
  const [담낭염] = await db.insert(categories).values({ name: "cholecystitis", parentId: 건국대학교병원.id, sortOrder: 49 }).returning();
  const [복막염] = await db.insert(categories).values({ name: "peritonitis", parentId: 건국대학교병원.id, sortOrder: 50 }).returning();
  const [GI퇴원약미포함] = await db.insert(categories).values({ name: "응급실 GI medi 퇴원약(항생제 미포함)", parentId: 건국대학교병원.id, sortOrder: 51 }).returning();
  const [GI퇴원약포함] = await db.insert(categories).values({ name: "응급실 GI medi 퇴원약(항생제포함)", parentId: 건국대학교병원.id, sortOrder: 52 }).returning();
  const [변비약] = await db.insert(categories).values({ name: "응급실 constipation 약(필요시 추가 처방)", parentId: 건국대학교병원.id, sortOrder: 53 }).returning();
  const [설사약] = await db.insert(categories).values({ name: "응급실 diarrhea 약(필요시 추가 처방)", parentId: 건국대학교병원.id, sortOrder: 54 }).returning();
  const [간수치이상약] = await db.insert(categories).values({ name: "응급실 abnl.LFT 일 때 추가약", parentId: 건국대학교병원.id, sortOrder: 55 }).returning();
  const [AGE퇴원약] = await db.insert(categories).values({ name: "AGE(퇴원약)", parentId: 건국대학교병원.id, sortOrder: 56 }).returning();
  const [AGE항생제포함] = await db.insert(categories).values({ name: "AGE (항생제 포함)", parentId: 건국대학교병원.id, sortOrder: 57 }).returning();
  const [통풍] = await db.insert(categories).values({ name: "Gout", parentId: 건국대학교병원.id, sortOrder: 58 }).returning();
  const [두통] = await db.insert(categories).values({ name: "Headache", parentId: 건국대학교병원.id, sortOrder: 59 }).returning();
  const [중증두통] = await db.insert(categories).values({ name: "Headache (Severe)", parentId: 건국대학교병원.id, sortOrder: 60 }).returning();
  const [급성심근경색] = await db.insert(categories).values({ name: "MI medications", parentId: 건국대학교병원.id, sortOrder: 61 }).returning();

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
  const [셀룰라이티스처방] = await db.insert(prescriptions).values({ name: "cellulitis", categoryId: 셀룰라이티스.id, sortOrder: 0 }).returning();
  const [페치딘처방] = await db.insert(prescriptions).values({ name: "pethidine", categoryId: 페치딘.id, sortOrder: 0 }).returning();
  const [모르핀처방] = await db.insert(prescriptions).values({ name: "Morphine", categoryId: 모르핀.id, sortOrder: 0 }).returning();
  const [펜타닐처방] = await db.insert(prescriptions).values({ name: "fentanyl", categoryId: 펜타닐.id, sortOrder: 0 }).returning();
  const [디아제팜진통처방] = await db.insert(prescriptions).values({ name: "Diazepam", categoryId: 디아제팜진통.id, sortOrder: 0 }).returning();
  const [미다졸람처방] = await db.insert(prescriptions).values({ name: "Midazolam", categoryId: 미다졸람.id, sortOrder: 0 }).returning();
  const [레미바처방] = await db.insert(prescriptions).values({ name: "Remiva", categoryId: 레미바.id, sortOrder: 0 }).returning();
  const [디아제팜진정처방] = await db.insert(prescriptions).values({ name: "Diazepam(sedation)", categoryId: 디아제팜진정.id, sortOrder: 0 }).returning();
  const [아티반처방] = await db.insert(prescriptions).values({ name: "Ativan", categoryId: 아티반.id, sortOrder: 0 }).returning();
  const [AGE정맥약처방] = await db.insert(prescriptions).values({ name: "AGE IV medication", categoryId: AGE정맥약.id, sortOrder: 0 }).returning();
  const [AGE1처방] = await db.insert(prescriptions).values({ name: "AGE", categoryId: AGE1.id, sortOrder: 0 }).returning();
  const [담관염처방] = await db.insert(prescriptions).values({ name: "cholangitis", categoryId: 담관염.id, sortOrder: 0 }).returning();
  const [담도패혈증처방] = await db.insert(prescriptions).values({ name: "Biliary sepsis", categoryId: 담도패혈증.id, sortOrder: 0 }).returning();
  const [간농양처방] = await db.insert(prescriptions).values({ name: "liver abscess", categoryId: 간농양.id, sortOrder: 0 }).returning();
  const [APN처방] = await db.insert(prescriptions).values({ name: "APN", categoryId: APN.id, sortOrder: 0 }).returning();
  const [신농양처방] = await db.insert(prescriptions).values({ name: "renal abscess", categoryId: 신농양.id, sortOrder: 0 }).returning();
  const [SDH수술전처방] = await db.insert(prescriptions).values({ name: "SDH preOP", categoryId: SDH수술전.id, sortOrder: 0 }).returning();
  const [건대충수염처방] = await db.insert(prescriptions).values({ name: "appendicitis", categoryId: 건대충수염.id, sortOrder: 0 }).returning();
  const [게실염처방] = await db.insert(prescriptions).values({ name: "diverculitis", categoryId: 게실염.id, sortOrder: 0 }).returning();
  const [천공충수염처방] = await db.insert(prescriptions).values({ name: "perforated appendicitis", categoryId: 천공충수염.id, sortOrder: 0 }).returning();
  const [담낭염처방] = await db.insert(prescriptions).values({ name: "cholecystitis", categoryId: 담낭염.id, sortOrder: 0 }).returning();
  const [복막염처방] = await db.insert(prescriptions).values({ name: "peritonitis", categoryId: 복막염.id, sortOrder: 0 }).returning();
  const [GI퇴원약미포함처방] = await db.insert(prescriptions).values({ name: "응급실 GI medi 퇴원약(항생제 미포함)", categoryId: GI퇴원약미포함.id, sortOrder: 0 }).returning();
  const [GI퇴원약포함처방] = await db.insert(prescriptions).values({ name: "응급실 GI medi 퇴원약(항생제포함)", categoryId: GI퇴원약포함.id, sortOrder: 0 }).returning();
  const [변비약처방] = await db.insert(prescriptions).values({ name: "응급실 constipation 약(필요시 추가 처방)", categoryId: 변비약.id, sortOrder: 0 }).returning();
  const [설사약처방] = await db.insert(prescriptions).values({ name: "응급실 diarrhea 약(필요시 추가 처방)", categoryId: 설사약.id, sortOrder: 0 }).returning();
  const [간수치이상약처방] = await db.insert(prescriptions).values({ name: "응급실 abnl.LFT 일 때 추가약", categoryId: 간수치이상약.id, sortOrder: 0 }).returning();
  const [AGE퇴원약처방] = await db.insert(prescriptions).values({ name: "AGE(퇴원약)", categoryId: AGE퇴원약.id, sortOrder: 0 }).returning();
  const [AGE항생제포함처방] = await db.insert(prescriptions).values({ name: "AGE (항생제 포함)", categoryId: AGE항생제포함.id, sortOrder: 0 }).returning();
  const [통풍처방] = await db.insert(prescriptions).values({ name: "Gout", categoryId: 통풍.id, sortOrder: 0 }).returning();
  const [두통처방] = await db.insert(prescriptions).values({ name: "Headache", categoryId: 두통.id, sortOrder: 0 }).returning();
  const [중증두통처방] = await db.insert(prescriptions).values({ name: "Headache (Severe)", categoryId: 중증두통.id, sortOrder: 0 }).returning();
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

    // cellulitis
    { prescriptionId: 셀룰라이티스처방.id, type: "약", productName: "Cefazolin 1g (중근당)", ingredientName: "Cefazolin", dosage: "1", unit: "V", frequency: "1", route: "IV", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 셀룰라이티스처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 1, mixGroup: "M1" },

    // pethidine
    { prescriptionId: 페치딘처방.id, type: "약", productName: "Pethidine 25mg/0.5ml", ingredientName: "pethidine", dosage: "1", unit: "A", frequency: "1", route: "IV", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 페치딘처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 1, mixGroup: "M1" },

    // Morphine
    { prescriptionId: 모르핀처방.id, type: "약", productName: "Morphine sulfate 5mg/5ml", ingredientName: "morphine", dosage: "1", unit: "A", frequency: "1", route: "IV", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 모르핀처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 1, mixGroup: "M1" },

    // fentanyl
    { prescriptionId: 펜타닐처방.id, type: "약", productName: "Fentanyl 50mcg/1ml", ingredientName: "fentanyl", dosage: "1", unit: "A", frequency: "1", route: "IV", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 펜타닐처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 1, mixGroup: "M1" },

    // Diazepam (IV 진통제)
    { prescriptionId: 디아제팜진통처방.id, type: "약", productName: "Diazepam inj 10mg/2mL (삼진)", ingredientName: "diazepam", dosage: "0.5", unit: "A", frequency: "1", route: "IV", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 디아제팜진통처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 1, mixGroup: "M1" },

    // Midazolam
    { prescriptionId: 미다졸람처방.id, type: "약", productName: "Midazolam 5mg/5ml (부광)", ingredientName: "midazolam", dosage: "10", unit: "A", frequency: "1", route: "IV", note: "5mg/hr->10ml/hr", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 미다졸람처방.id, type: "약", productName: "NS 50mL/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "5mg/hr->10ml/hr", sortOrder: 1, mixGroup: "M1" },

    // Remiva
    { prescriptionId: 레미바처방.id, type: "지시처방", productName: "0.1mcg/kg/min", sortOrder: 0 },
    { prescriptionId: 레미바처방.id, type: "약", productName: "Remiva 5mg", ingredientName: "remifentanil", dosage: "1", unit: "V", frequency: "1", route: "IV", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 레미바처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 2, mixGroup: "M1" },

    // Diazepam(sedation)
    { prescriptionId: 디아제팜진정처방.id, type: "약", productName: "Diazepam inj 10mg/2mL (삼진)", ingredientName: "diazepam", dosage: "0.5", unit: "A", frequency: "1", route: "IV infusion", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 디아제팜진정처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 1, mixGroup: "M1" },

    // Ativan
    { prescriptionId: 아티반처방.id, type: "약", productName: "Ativan inj 2mg/0.5ml", ingredientName: "lorazepam", dosage: "0.5", unit: "A", frequency: "1", route: "IV", sortOrder: 0 },
    { prescriptionId: 아티반처방.id, type: "약", productName: "Ativan inj 2mg/0.5ml", ingredientName: "lorazepam", dosage: "1", unit: "A", frequency: "1", route: "IV", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 아티반처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 2, mixGroup: "M1" },

    // AGE IV medication
    { prescriptionId: AGE정맥약처방.id, type: "약", productName: "Prosea PFS 0.3mg/2mL", ingredientName: "ramosetron", dosage: "1", unit: "PFS", frequency: "1", route: "IV side push", note: "IV side, 항암환자 처방x", sortOrder: 0 },
    { prescriptionId: AGE정맥약처방.id, type: "약", productName: "Macperan 10mg/2ml", ingredientName: "metoclopramide", dosage: "1", unit: "A", frequency: "1", route: "IV", sortOrder: 1, mixGroup: "M3" },
    { prescriptionId: AGE정맥약처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 2, mixGroup: "M3" },
    { prescriptionId: AGE정맥약처방.id, type: "약", productName: "Aloxi 0.075mg/1.5ml", ingredientName: "palonosetron", dosage: "1", unit: "V", frequency: "1", route: "IV", sortOrder: 3, mixGroup: "M4" },
    { prescriptionId: AGE정맥약처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 4, mixGroup: "M4" },
    { prescriptionId: AGE정맥약처방.id, type: "약", productName: "DongA pantoline IV 40mg", ingredientName: "pantoprazole", dosage: "1", unit: "V", frequency: "1", route: "IV", sortOrder: 5, mixGroup: "M2" },
    { prescriptionId: AGE정맥약처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 6, mixGroup: "M2" },
    { prescriptionId: AGE정맥약처방.id, type: "약", productName: "Freepan 20mg/ml", ingredientName: "scopolamine", dosage: "1", unit: "A", frequency: "1", route: "IV", sortOrder: 7, mixGroup: "M1" },
    { prescriptionId: AGE정맥약처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 8, mixGroup: "M1" },

    // AGE
    { prescriptionId: AGE1처방.id, type: "약", productName: "Trizele 500mg/100ml", ingredientName: "metronidazole", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 0 },
    { prescriptionId: AGE1처방.id, type: "약", productName: "Ceftriaxone 2g", ingredientName: "Ceftriaxone", dosage: "1", unit: "V", frequency: "1", route: "IV", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: AGE1처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 2, mixGroup: "M1" },

    // cholangitis
    { prescriptionId: 담관염처방.id, type: "약", productName: "Ceftriaxone 2g", ingredientName: "Ceftriaxone", dosage: "1", unit: "V", frequency: "1", route: "IV", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 담관염처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 1, mixGroup: "M1" },

    // Biliary sepsis
    { prescriptionId: 담도패혈증처방.id, type: "지시처방", productName: "Tazoperan 4.5g / ceftriaxone 2g +metronidazole 500mg", sortOrder: 0 },
    { prescriptionId: 담도패혈증처방.id, type: "약", productName: "Ceftriaxone 2g", ingredientName: "Ceftriaxone", dosage: "1", unit: "V", frequency: "1", route: "IV", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 담도패혈증처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 2, mixGroup: "M1" },
    { prescriptionId: 담도패혈증처방.id, type: "약", productName: "Trizele 500mg/100ml", ingredientName: "metronidazole", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 3 },
    { prescriptionId: 담도패혈증처방.id, type: "약", productName: "Tazoperan 4.5g", ingredientName: "piperacillin, tazobactam", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "Cr 확인 후 처방", sortOrder: 4, mixGroup: "M2" },
    { prescriptionId: 담도패혈증처방.id, type: "약", productName: "5% DW 50ml/PP", ingredientName: "Dextrose", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 5, mixGroup: "M2" },

    // liver abscess
    { prescriptionId: 간농양처방.id, type: "약", productName: "Ceftriaxone 2g", ingredientName: "Ceftriaxone", dosage: "1", unit: "V", frequency: "1", route: "IV", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 간농양처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 간농양처방.id, type: "약", productName: "Trizele 500mg/100ml", ingredientName: "metronidazole", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 2 },

    // APN
    { prescriptionId: APN처방.id, type: "약", productName: "Ceftriaxone 2g", ingredientName: "Ceftriaxone", dosage: "1", unit: "V", frequency: "1", route: "IV", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: APN처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 1, mixGroup: "M1" },

    // renal abscess
    { prescriptionId: 신농양처방.id, type: "약", productName: "Ceftriaxone 2g", ingredientName: "Ceftriaxone", dosage: "1", unit: "V", frequency: "1", route: "IV", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 신농양처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 1, mixGroup: "M1" },

    // SDH preOP
    { prescriptionId: SDH수술전처방.id, type: "약", productName: "Cefazolin 1g (중근당)", ingredientName: "Cefazolin", dosage: "1", unit: "V", frequency: "1", route: "IV", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: SDH수술전처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 1, mixGroup: "M1" },

    // appendicitis
    { prescriptionId: 건대충수염처방.id, type: "약", productName: "Bactacin 1.5g", ingredientName: "Ampicillin 1g, Sulbactam 500mg", dosage: "2", unit: "V", frequency: "1", route: "IV", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 건대충수염처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 1, mixGroup: "M1" },

    // diverculitis
    { prescriptionId: 게실염처방.id, type: "지시처방", productName: "Bactacin 1.5g 2A / ceftriaxone2g + metronidazole 500mg", sortOrder: 0 },
    { prescriptionId: 게실염처방.id, type: "약", productName: "Bactacin 1.5g", ingredientName: "Ampicillin 1g, Sulbactam 500mg", dosage: "2", unit: "V", frequency: "1", route: "IV", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 게실염처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 2, mixGroup: "M1" },
    { prescriptionId: 게실염처방.id, type: "약", productName: "Trizele 500mg/100ml", ingredientName: "metronidazole", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 3 },
    { prescriptionId: 게실염처방.id, type: "약", productName: "Ceftriaxone 2g (보령)", ingredientName: "Ceftriaxone", dosage: "1", unit: "V", frequency: "1", route: "IV", sortOrder: 4, mixGroup: "M2" },
    { prescriptionId: 게실염처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 5, mixGroup: "M2" },

    // perforated appendicitis
    { prescriptionId: 천공충수염처방.id, type: "약", productName: "Bactacin 1.5g", ingredientName: "Ampicillin 1g, Sulbactam 500mg", dosage: "2", unit: "V", frequency: "1", route: "IV", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 천공충수염처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 천공충수염처방.id, type: "약", productName: "Trizele 500mg/100ml", ingredientName: "metronidazole", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 2 },

    // cholecystitis
    { prescriptionId: 담낭염처방.id, type: "약", productName: "Bactacin 1.5g", ingredientName: "Ampicillin 1g, Sulbactam 500mg", dosage: "2", unit: "V", frequency: "1", route: "IV", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 담낭염처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 1, mixGroup: "M1" },

    // peritonitis
    { prescriptionId: 복막염처방.id, type: "약", productName: "Trizele 500mg/100ml", ingredientName: "metronidazole", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 0 },
    { prescriptionId: 복막염처방.id, type: "약", productName: "Ceftriaxone 2g", ingredientName: "Ceftriaxone", dosage: "1", unit: "V", frequency: "1", route: "IV", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 복막염처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 2, mixGroup: "M1" },

    // 응급실 GI medi 퇴원약(항생제 미포함)
    { prescriptionId: GI퇴원약미포함처방.id, type: "퇴원약", productName: "K-cab 50mg", ingredientName: "tegoprazan", dosage: "1", unit: "T", frequency: "QD", duration: "3일", route: "QD PC", sortOrder: 0 },
    { prescriptionId: GI퇴원약미포함처방.id, type: "퇴원약", productName: "Gaster D 20mg", ingredientName: "famotidine", dosage: "1", unit: "T", frequency: "BID", duration: "3일", route: "BID PC", sortOrder: 1 },
    { prescriptionId: GI퇴원약미포함처방.id, type: "퇴원약", productName: "Motilitone 30mg", ingredientName: "corydaline", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", note: "기능성 소화불량증", sortOrder: 2 },
    { prescriptionId: GI퇴원약미포함처방.id, type: "퇴원약", productName: "Gasmotin 5mg", ingredientName: "mosapride", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 3 },
    { prescriptionId: GI퇴원약미포함처방.id, type: "퇴원약", productName: "Macperan 5mg", ingredientName: "metoclopramide", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 4 },

    // 응급실 GI medi 퇴원약(항생제포함)
    { prescriptionId: GI퇴원약포함처방.id, type: "퇴원약", productName: "K-cab 50mg", ingredientName: "tegoprazan", dosage: "1", unit: "T", frequency: "QD", duration: "3일", route: "QD PC", sortOrder: 0 },
    { prescriptionId: GI퇴원약포함처방.id, type: "퇴원약", productName: "Normix 200mg", ingredientName: "Rifaximin", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID Q8", sortOrder: 1 },
    { prescriptionId: GI퇴원약포함처방.id, type: "퇴원약", productName: "Motilitone 30mg", ingredientName: "corydaline", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 2 },
    { prescriptionId: GI퇴원약포함처방.id, type: "퇴원약", productName: "Tacenol 8hours ER 650mg", ingredientName: "acetaminophen", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID Q8", sortOrder: 3 },
    { prescriptionId: GI퇴원약포함처방.id, type: "퇴원약", productName: "Gasmotin 5mg", ingredientName: "mosapride", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 4 },
    { prescriptionId: GI퇴원약포함처방.id, type: "퇴원약", productName: "Macperan 5mg", ingredientName: "metoclopramide", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 5 },

    // 응급실 constipation 약(필요시 추가 처방)
    { prescriptionId: 변비약처방.id, type: "퇴원약", productName: "Duphalac-Easy syr 1ml", ingredientName: "lactulose", dosage: "15", unit: "ml", frequency: "QD", duration: "3일", route: "QD AC", note: "무변 3일이상 일 경우", sortOrder: 0 },
    { prescriptionId: 변비약처방.id, type: "퇴원약", productName: "Dulcolax-S", ingredientName: "bisacodyl 5mg정", dosage: "2", unit: "T", frequency: "QD", duration: "3일", route: "QD HS", note: "무변 3일이상 일 경우", sortOrder: 1 },
    { prescriptionId: 변비약처방.id, type: "퇴원약", productName: "Dulcolax Supp 10mg", ingredientName: "bisacodyl", dosage: "1", unit: "SUPP", frequency: "QD", duration: "3일", route: "Suppl", note: "무변 3일이상 일 경우", sortOrder: 2 },
    { prescriptionId: 변비약처방.id, type: "퇴원약", productName: "Magmil 500mg", ingredientName: "magnesium hydroxide", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", note: "renal function 유의!!!", sortOrder: 3 },

    // 응급실 diarrhea 약(필요시 추가 처방)
    { prescriptionId: 설사약처방.id, type: "퇴원약", productName: "Shumacton susp 1pk", ingredientName: "dioctahedral smectite 3g/20ml", dosage: "1", unit: "PK", frequency: "TID", duration: "3일", route: "TID PC2", sortOrder: 0 },
    { prescriptionId: 설사약처방.id, type: "퇴원약", productName: "Medilac-DS cap 250mg", dosage: "1", unit: "C", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 1 },
    { prescriptionId: 설사약처방.id, type: "퇴원약", productName: "Tiropa 100mg", ingredientName: "tiropramide", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 2 },

    // 응급실 abnl.LFT 일 때 추가약
    { prescriptionId: 간수치이상약처방.id, type: "퇴원약", productName: "Legalon 140mg", ingredientName: "silymarin", dosage: "1", unit: "C", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 0 },
    { prescriptionId: 간수치이상약처방.id, type: "퇴원약", productName: "URSA 200mg", ingredientName: "ursodeoxycholic acid", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 1 },

    // AGE(퇴원약)
    { prescriptionId: AGE퇴원약처방.id, type: "퇴원약", productName: "K-cab 50mg", ingredientName: "tegoprazan", dosage: "1", unit: "T", frequency: "QD", duration: "3일", route: "QD PC", sortOrder: 0 },
    { prescriptionId: AGE퇴원약처방.id, type: "퇴원약", productName: "Gaster D 20mg", ingredientName: "famotidine", dosage: "1", unit: "T", frequency: "BID", duration: "3일", route: "BID PC", sortOrder: 1 },
    { prescriptionId: AGE퇴원약처방.id, type: "퇴원약", productName: "Motilitone 30mg", ingredientName: "corydaline", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", note: "기능성 소화불량증", sortOrder: 2 },
    { prescriptionId: AGE퇴원약처방.id, type: "퇴원약", productName: "Gasmotin 5mg", ingredientName: "mosapride", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 3 },
    { prescriptionId: AGE퇴원약처방.id, type: "퇴원약", productName: "Diclectin", ingredientName: "doxylamine, pyridoxine", dosage: "1", unit: "T", frequency: "QD", duration: "3일", route: "QD HS", note: "입덧환자에게만 사용", sortOrder: 4 },

    // AGE (항생제 포함)
    { prescriptionId: AGE항생제포함처방.id, type: "퇴원약", productName: "K-cab 50mg", ingredientName: "tegoprazan", dosage: "1", unit: "T", frequency: "QD", duration: "3일", route: "QD PC", sortOrder: 0 },
    { prescriptionId: AGE항생제포함처방.id, type: "퇴원약", productName: "Normix 200mg", ingredientName: "Rifaximin", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID Q8", sortOrder: 1 },
    { prescriptionId: AGE항생제포함처방.id, type: "퇴원약", productName: "Motilitone 30mg", ingredientName: "corydaline", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 2 },
    { prescriptionId: AGE항생제포함처방.id, type: "퇴원약", productName: "Tacenol 8hours ER 650mg", ingredientName: "acetaminophen", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID Q8", sortOrder: 3 },
    { prescriptionId: AGE항생제포함처방.id, type: "퇴원약", productName: "Banan 100mg", ingredientName: "cefpodoxime", dosage: "1", unit: "T", frequency: "BID", duration: "3일", route: "BID PC", sortOrder: 4 },
    { prescriptionId: AGE항생제포함처방.id, type: "퇴원약", productName: "Cycin 250mg", ingredientName: "ciprofloxacin", dosage: "1", unit: "T", frequency: "BID", duration: "3일", route: "BID PC", sortOrder: 5 },
    { prescriptionId: AGE항생제포함처방.id, type: "약", productName: "Citpocin 400mg/200ml", ingredientName: "ciprofloxacin", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 6 },
    { prescriptionId: AGE항생제포함처방.id, type: "약", productName: "Ceftriaxone 2g", ingredientName: "Ceftriaxone", dosage: "1", unit: "V", frequency: "1", route: "IV", sortOrder: 7 },

    // Gout
    { prescriptionId: 통풍처방.id, type: "지시처방", productName: "colchicine은 노인이나 신기능저하자에서 감량필요", sortOrder: 0 },
    { prescriptionId: 통풍처방.id, type: "지시처방", productName: "간기능이나 신기능 이상있는 환자에서 스테로이드 선호", sortOrder: 1 },
    { prescriptionId: 통풍처방.id, type: "퇴원약", productName: "Vimovo 500/20mg", ingredientName: "naproxen, esomeprazole", dosage: "1", unit: "T", frequency: "BID", duration: "2일", route: "BID AC", note: "CV,신기능 악화 주의", sortOrder: 2 },
    { prescriptionId: 통풍처방.id, type: "퇴원약", productName: "Colchine 0.6mg", ingredientName: "colchicine", dosage: "1", unit: "T", frequency: "BID", duration: "2일", route: "BID PC", note: "퇴원약:퇴원 후 다음날부터 하루", sortOrder: 3 },
    { prescriptionId: 통풍처방.id, type: "퇴원약", productName: "Solondo 5mg", ingredientName: "prednisolone", dosage: "1", unit: "T", frequency: "TID", duration: "2일", route: "TID PC", note: "0.5mg/kg/day", sortOrder: 4 },
    { prescriptionId: 통풍처방.id, type: "약", productName: "Colchine 0.6mg", ingredientName: "colchicine", dosage: "2", unit: "T", frequency: "1", route: "UT DICT (내복 1회)", note: "지금 먹여주세요", sortOrder: 5 },
    { prescriptionId: 통풍처방.id, type: "약", productName: "Colchine 0.6mg", ingredientName: "colchicine", dosage: "1", unit: "T", frequency: "1", route: "UT DICT (내복 1회)", note: "2T 로딩 후, 1시간 뒤에 1T 복용", sortOrder: 6 },

    // Headache
    { prescriptionId: 두통처방.id, type: "퇴원약", productName: "K-cab 50mg", ingredientName: "tegoprazan", dosage: "1", unit: "T", frequency: "QD", duration: "3일", route: "QD PC", sortOrder: 0 },
    { prescriptionId: 두통처방.id, type: "퇴원약", productName: "Macperan 5mg", ingredientName: "metoclopramide", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 1 },
    { prescriptionId: 두통처방.id, type: "퇴원약", productName: "Tacenol 8hours ER 650mg", ingredientName: "acetaminophen", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID Q8", sortOrder: 2 },

    // Headache (Severe)
    { prescriptionId: 중증두통처방.id, type: "퇴원약", productName: "K-cab 50mg", ingredientName: "tegoprazan", dosage: "1", unit: "T", frequency: "QD", duration: "3일", route: "QD PC", sortOrder: 0 },
    { prescriptionId: 중증두통처방.id, type: "퇴원약", productName: "Craming Tab", ingredientName: "ergotamine 1mg, caffeine 100mg", dosage: "1", unit: "T", frequency: "PRN", duration: "3일", route: "PRN", note: "심혈관 질환시 금기", sortOrder: 1 },
    { prescriptionId: 중증두통처방.id, type: "퇴원약", productName: "Soleton 80mg", ingredientName: "zaltoprofen", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 2 },
    { prescriptionId: 중증두통처방.id, type: "퇴원약", productName: "Macperan 5mg", ingredientName: "metoclopramide", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 3 },
    { prescriptionId: 중증두통처방.id, type: "퇴원약", productName: "Imigran 50mg", ingredientName: "sumatriptan", dosage: "1", unit: "T", frequency: "QD", duration: "3일", route: "통증시 복용", note: "심혈관 질환시 금기", sortOrder: 4 },

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
