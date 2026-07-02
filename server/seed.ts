import { db } from "./db";
import { categories, prescriptions, prescriptionItems } from "@shared/schema";
import { eq } from "drizzle-orm";

export async function seedDatabase() {
  const existing = await db.select().from(categories).limit(1);

  // 초기 데이터가 없으면 기본 카테고리 생성
  if (existing.length === 0) {
    const [내과] = await db.insert(categories).values({ name: "내과", sortOrder: 0 }).returning();
    const [외과] = await db.insert(categories).values({ name: "외과", sortOrder: 1 }).returning();
    const [응급의학과] = await db.insert(categories).values({ name: "응급의학과", sortOrder: 2 }).returning();

    const [순환기내과] = await db.insert(categories).values({ name: "순환기내과", parentId: 내과.id, sortOrder: 0 }).returning();
    const [호흡기내과] = await db.insert(categories).values({ name: "호흡기내과", parentId: 내과.id, sortOrder: 1 }).returning();
    const [소화기내과] = await db.insert(categories).values({ name: "소화기내과", parentId: 내과.id, sortOrder: 2 }).returning();
    const [일반외과] = await db.insert(categories).values({ name: "일반외과", parentId: 외과.id, sortOrder: 0 }).returning();
    const [정형외과] = await db.insert(categories).values({ name: "정형외과", parentId: 외과.id, sortOrder: 1 }).returning();
    const [응급처치] = await db.insert(categories).values({ name: "응급처치", parentId: 응급의학과.id, sortOrder: 0 }).returning();

    const [고혈압기본] = await db.insert(prescriptions).values({ name: "고혈압 기본 처방", categoryId: 순환기내과.id, sortOrder: 0 }).returning();
    const [협심증] = await db.insert(prescriptions).values({ name: "협심증 처방", categoryId: 순환기내과.id, sortOrder: 1 }).returning();
    const [천식] = await db.insert(prescriptions).values({ name: "천식 급성기 처방", categoryId: 호흡기내과.id, sortOrder: 0 }).returning();
    const [폐렴] = await db.insert(prescriptions).values({ name: "폐렴 입원 처방", categoryId: 호흡기내과.id, sortOrder: 1 }).returning();
    const [위염] = await db.insert(prescriptions).values({ name: "급성 위염 처방", categoryId: 소화기내과.id, sortOrder: 0 }).returning();
    const [충수염] = await db.insert(prescriptions).values({ name: "충수절제술 전 처방", categoryId: 일반외과.id, sortOrder: 0 }).returning();
    const [골절] = await db.insert(prescriptions).values({ name: "골절 초기 처방", categoryId: 정형외과.id, sortOrder: 0 }).returning();
    const [심정지] = await db.insert(prescriptions).values({ name: "심정지 프로토콜", categoryId: 응급처치.id, sortOrder: 0 }).returning();
    const [패혈증] = await db.insert(prescriptions).values({ name: "패혈증 번들 처방", categoryId: 응급처치.id, sortOrder: 1 }).returning();

    await db.insert(prescriptionItems).values([
      { prescriptionId: 고혈압기본.id, type: "약", productName: "아모디핀정 5mg", ingredientName: "Amlodipine", dosage: "5", unit: "mg", frequency: "Qd", route: "po", note: "아침 식후", sortOrder: 0 },
      { prescriptionId: 고혈압기본.id, type: "약", productName: "발사르탄정 80mg", ingredientName: "Valsartan", dosage: "80", unit: "mg", frequency: "Qd", route: "po", note: "아침 식후", sortOrder: 1 },
      { prescriptionId: 고혈압기본.id, type: "혈액검사", productName: "BMP (기본대사패널)", frequency: "입원 시 1회", note: "K+, Cr 확인", sortOrder: 2 },
      { prescriptionId: 고혈압기본.id, type: "혈액검사", productName: "Lipid Panel", frequency: "입원 시 1회", note: "공복 채혈", sortOrder: 3 },
      { prescriptionId: 고혈압기본.id, type: "지시처방", productName: "혈압 모니터링 - 기립시 포함, 1일 3회", sortOrder: 4 },

      { prescriptionId: 협심증.id, type: "약", productName: "니트로글리세린 설하정", ingredientName: "Nitroglycerin", dosage: "0.6", unit: "mg", frequency: "1", route: "po", note: "흉통 시", sortOrder: 0 },
      { prescriptionId: 협심증.id, type: "약", productName: "아스피린정 100mg", ingredientName: "Aspirin", dosage: "100", unit: "mg", frequency: "Qd", route: "po", note: "저녁 식후", sortOrder: 1 },
      { prescriptionId: 협심증.id, type: "약", productName: "클로피도그렐정 75mg", ingredientName: "Clopidogrel", dosage: "75", unit: "mg", frequency: "Qd", route: "po", sortOrder: 2 },
      { prescriptionId: 협심증.id, type: "혈액검사", productName: "Troponin I", frequency: "6시간 간격 3회", note: "Serial check", sortOrder: 3 },
      { prescriptionId: 협심증.id, type: "영상검사", productName: "흉부 X-ray (PA)", frequency: "입원 시 1회", sortOrder: 4 },

      { prescriptionId: 천식.id, type: "약", productName: "벤토린 네뷸라이저", ingredientName: "Salbutamol", dosage: "2.5", unit: "mg", frequency: "Tid", route: "nebul", note: "20분간 흡입", sortOrder: 0 },
      { prescriptionId: 천식.id, type: "약", productName: "메틸프레드니솔론주", ingredientName: "Methylprednisolone", dosage: "40", unit: "mg", frequency: "Bid", route: "iv", note: "3일간", sortOrder: 1 },
      { prescriptionId: 천식.id, type: "혈액검사", productName: "ABGA", frequency: "입원 시", note: "산소포화도 확인", sortOrder: 2 },
      { prescriptionId: 천식.id, type: "지시처방", productName: "산소 투여 3L Nasal - SpO2 >= 95% 유지", sortOrder: 3 },

      { prescriptionId: 폐렴.id, type: "약", productName: "세프트리악손주 1g", ingredientName: "Ceftriaxone", dosage: "1", unit: "A", frequency: "Qd", route: "iv", sortOrder: 0 },
      { prescriptionId: 폐렴.id, type: "약", productName: "아지스로마이신정 500mg", ingredientName: "Azithromycin", dosage: "500", unit: "mg", frequency: "Qd", route: "po", note: "3일간", sortOrder: 1 },
      { prescriptionId: 폐렴.id, type: "혈액검사", productName: "CBC w/ diff", frequency: "Qd", note: "WBC 추적", sortOrder: 2 },
      { prescriptionId: 폐렴.id, type: "혈액검사", productName: "CRP, Procalcitonin", frequency: "격일", sortOrder: 3 },
      { prescriptionId: 폐렴.id, type: "영상검사", productName: "흉부 CT", frequency: "입원 시 1회", note: "조영증강", sortOrder: 4 },
      { prescriptionId: 폐렴.id, type: "지시처방", productName: "I/O 측정 - 매일", sortOrder: 5 },

      { prescriptionId: 위염.id, type: "약", productName: "판토프라졸정 40mg", ingredientName: "Pantoprazole", dosage: "40", unit: "mg", frequency: "Qd", route: "po", note: "아침 식전 30분", sortOrder: 0 },
      { prescriptionId: 위염.id, type: "약", productName: "알마겔 현탁액", ingredientName: "Aluminum hydroxide", dosage: "15", unit: "ml", frequency: "Tid", route: "po", note: "식후 1시간", sortOrder: 1 },
      { prescriptionId: 위염.id, type: "혈액검사", productName: "H. pylori Ab", frequency: "1회", sortOrder: 2 },
      { prescriptionId: 위염.id, type: "지시처방", productName: "금식 (NPO) 입원 당일 - 다음날 유동식 시작", sortOrder: 3 },

      { prescriptionId: 충수염.id, type: "약", productName: "세파졸린주 1g", ingredientName: "Cefazolin", dosage: "1", unit: "A", frequency: "1", route: "iv", note: "수술 30분 전 예방적 항생제", sortOrder: 0 },
      { prescriptionId: 충수염.id, type: "혈액검사", productName: "CBC, CRP", frequency: "수술 전", sortOrder: 1 },
      { prescriptionId: 충수염.id, type: "혈액검사", productName: "Type & Screen", frequency: "수술 전", sortOrder: 2 },
      { prescriptionId: 충수염.id, type: "영상검사", productName: "복부 CT", frequency: "수술 전", note: "조영증강", sortOrder: 3 },
      { prescriptionId: 충수염.id, type: "지시처방", productName: "수술 동의서 - 수술 전", sortOrder: 4 },
      { prescriptionId: 충수염.id, type: "지시처방", productName: "금식 (NPO) - 자정부터", sortOrder: 5 },

      { prescriptionId: 골절.id, type: "약", productName: "케토롤락주 30mg", ingredientName: "Ketorolac", dosage: "30", unit: "mg", frequency: "Tid", route: "iv", note: "3일 이내", sortOrder: 0 },
      { prescriptionId: 골절.id, type: "약", productName: "트라마돌주 50mg", ingredientName: "Tramadol", dosage: "50", unit: "mg", frequency: "1", route: "iv", note: "통증 시 PRN", sortOrder: 1 },
      { prescriptionId: 골절.id, type: "영상검사", productName: "단순 X-ray", frequency: "초진 시", note: "AP/Lateral", sortOrder: 2 },
      { prescriptionId: 골절.id, type: "지시처방", productName: "부목 고정 즉시 - 정형외과 컨설트", sortOrder: 3 },

      { prescriptionId: 심정지.id, type: "약", productName: "에피네프린주 1mg", ingredientName: "Epinephrine", dosage: "1", unit: "A", frequency: "1", route: "iv", note: "3-5분 간격 ROSC까지", sortOrder: 0 },
      { prescriptionId: 심정지.id, type: "약", productName: "아미오다론주 300mg", ingredientName: "Amiodarone", dosage: "300", unit: "mg", frequency: "1", route: "iv", note: "VF/pVT 시", sortOrder: 1 },
      { prescriptionId: 심정지.id, type: "혈액검사", productName: "ABGA", frequency: "즉시", sortOrder: 2 },
      { prescriptionId: 심정지.id, type: "혈액검사", productName: "Lactate", frequency: "즉시", sortOrder: 3 },
      { prescriptionId: 심정지.id, type: "지시처방", productName: "CPR 시작 즉시 - 30:2 비율", sortOrder: 4 },

      { prescriptionId: 패혈증.id, type: "약", productName: "피페라실린/타조박탐주 4.5g", ingredientName: "Piperacillin/Tazobactam", dosage: "4.5", unit: "A", frequency: "Tid", route: "iv", note: "30분 이상 주입", sortOrder: 0 },
      { prescriptionId: 패혈증.id, type: "약", productName: "생리식염수 1L", ingredientName: "Normal Saline", dosage: "1000", unit: "ml", frequency: "1", route: "iv", note: "30ml/kg bolus", sortOrder: 1 },
      { prescriptionId: 패혈증.id, type: "약", productName: "노르에피네프린주", ingredientName: "Norepinephrine", dosage: "0.1", unit: "A", frequency: "1", route: "iv", note: "MAP >= 65 유지", sortOrder: 2 },
      { prescriptionId: 패혈증.id, type: "혈액검사", productName: "Blood Culture (2 set)", frequency: "항생제 전", note: "호기성/혐기성", sortOrder: 3 },
      { prescriptionId: 패혈증.id, type: "혈액검사", productName: "Lactate", frequency: "즉시 + 6시간 후", note: "목표 < 2", sortOrder: 4 },
      { prescriptionId: 패혈증.id, type: "혈액검사", productName: "CBC, BMP, LFT, Coag", frequency: "즉시", note: "장기 기능 평가", sortOrder: 5 },
      { prescriptionId: 패혈증.id, type: "지시처방", productName: "Foley 삽입 즉시 - 시간당 소변량 측정", sortOrder: 6 },
    ]);

    console.log("Initial seed data inserted successfully");
  }

  // 건국대학교 병원 데이터 추가 (기존 데이터가 있어도 한번만 추가)
  const kkuExisting = await db.select().from(categories).where(eq(categories.name, "건국대학교 병원 약속처방"));
  if (kkuExisting.length === 0) {
    const [건국대학교병원] = await db.insert(categories).values({ name: "건국대학교 병원 약속처방", sortOrder: 3 }).returning();
    const [외상트라넥삼산] = await db.insert(categories).values({ name: "Traum Transamic acid", parentId: 건국대학교병원.id, sortOrder: 0 }).returning();
    const [급성심근경색] = await db.insert(categories).values({ name: "MI medications", parentId: 건국대학교병원.id, sortOrder: 1 }).returning();

    const [외상트라넥삼산처방] = await db.insert(prescriptions).values({ name: "Traum Transamic acid", categoryId: 외상트라넥삼산.id, sortOrder: 0 }).returning();
    const [급성심근경색처방] = await db.insert(prescriptions).values({ name: "MI medications", categoryId: 급성심근경색.id, sortOrder: 0 }).returning();

    await db.insert(prescriptionItems).values([
      { prescriptionId: 외상트라넥삼산처방.id, type: "지시", productName: "16세이상, hemodynamically unstable pt, 3시간이내에 발생한 수혈이 필요한 major trauma에게 투약", ingredientName: null, frequency: null, route: null, sortOrder: 0 },
      { prescriptionId: 외상트라넥삼산처방.id, type: "주사", productName: "Tranexamic acid 500mg/5ml", ingredientName: "tranexamic acid", dosage: "2", unit: "A", frequency: "1", route: "IV", note: "125mg/hr", sortOrder: 1, mixGroup: "My" },
      { prescriptionId: 외상트라넥삼산처방.id, type: "주사", productName: "NS 500ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: ".ml/hr, heparin IV mix", sortOrder: 2, mixGroup: "M0" },
      { prescriptionId: 외상트라넥삼산처방.id, type: "주사", productName: "Tranexamic acid 500mg/5ml", ingredientName: "tranexamic acid", dosage: "2", unit: "A", frequency: "1", route: "IV", note: null, sortOrder: 3, mixGroup: "Mz" },
      { prescriptionId: 외상트라넥삼산처방.id, type: "주사", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "10분동안 들어가게 주세요", sortOrder: 4, mixGroup: "Mz" },

      { prescriptionId: 급성심근경색처방.id, type: "주사", productName: "NS 500ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: ".ml/hr, heparin IV mix", sortOrder: 0, mixGroup: "M0" },
      { prescriptionId: 급성심근경색처방.id, type: "주사", productName: "Heparin sodium (25,000unit/5ml)", ingredientName: "Heparin sodium", dosage: "1", unit: "Ivial", frequency: "1", route: "IV infusion", note: "12unit/kg/hr", sortOrder: 1, mixGroup: "M0" },
      { prescriptionId: 급성심근경색처방.id, type: "주사", productName: "Heparin sodium (25,000unit/5ml)", ingredientName: "Heparin sodium", dosage: "4000", unit: "Unit", frequency: "1", route: "IV infusion", note: "iv bolus: 60-80", sortOrder: 2 },
      { prescriptionId: 급성심근경색처방.id, type: "주사", productName: "Nitroglingual 50mg/50ml", ingredientName: "Nitroglycerin", dosage: "1", unit: null, frequency: "1", route: "IV infusion", note: "3cc/hr", sortOrder: 3, mixGroup: "M2" },
      { prescriptionId: 급성심근경색처방.id, type: "주사", productName: "5% DW (200ml/Bag)", ingredientName: "Dextrose Water", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "3ml/hr", sortOrder: 4, mixGroup: "M2" },
      { prescriptionId: 급성심근경색처방.id, type: "내복", productName: "Nitroglycerin 0.6mg", ingredientName: "Nitroglycerin", dosage: "1", unit: "T", frequency: "1", route: "SL", note: null, sortOrder: 5 },
      { prescriptionId: 급성심근경색처방.id, type: "내복", productName: "Lipitor 80mg", ingredientName: "Atorvastatin", dosage: "1", unit: "T", frequency: "1", route: "OD PC", note: "따로 포장해주세요", sortOrder: 6 },
      { prescriptionId: 급성심근경색처방.id, type: "내복", productName: "Bayer aspirin 500mg", ingredientName: "Aspirin", dosage: "0.5", unit: "T", frequency: "1", route: "OD PC", note: null, sortOrder: 7 },
      { prescriptionId: 급성심근경색처방.id, type: "내복", productName: "Brilinta 90mg", ingredientName: "Ticagrelor", dosage: "2", unit: "T", frequency: "1", route: "UT DICT", note: "따로 포장해주세요. STEMI, NSTEMI", sortOrder: 8 },
    ]);

    console.log("Konkuk University Hospital KKU preset data inserted successfully");
  }
}
