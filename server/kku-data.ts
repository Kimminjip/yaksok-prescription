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
  const [NR과BPPV] = await db.insert(categories).values({ name: "NR-BPPV or VN", parentId: 건국대학교병원.id, sortOrder: 61 }).returning();
  const [요로감염퇴원약] = await db.insert(categories).values({ name: "UTI", parentId: 건국대학교병원.id, sortOrder: 62 }).returning();
  const [요관결석] = await db.insert(categories).values({ name: "Ureter stone", parentId: 건국대학교병원.id, sortOrder: 63 }).returning();
  const [감기] = await db.insert(categories).values({ name: "감기", parentId: 건국대학교병원.id, sortOrder: 64 }).returning();
  const [사후피임약] = await db.insert(categories).values({ name: "사후피임약", parentId: 건국대학교병원.id, sortOrder: 65 }).returning();
  const [인플루엔자성인] = await db.insert(categories).values({ name: "인플루엔자 성인", parentId: 건국대학교병원.id, sortOrder: 66 }).returning();
  const [인플루엔자소아] = await db.insert(categories).values({ name: "인플루엔자 소아", parentId: 건국대학교병원.id, sortOrder: 67 }).returning();
  const [폐렴퇴원약] = await db.insert(categories).values({ name: "폐렴", parentId: 건국대학교병원.id, sortOrder: 68 }).returning();
  const [안면마비] = await db.insert(categories).values({ name: "Facial palsy", parentId: 건국대학교병원.id, sortOrder: 69 }).returning();
  const [지타코주] = await db.insert(categories).values({ name: "지타코주", parentId: 건국대학교병원.id, sortOrder: 70 }).returning();
  const [고칼륨혈증치료] = await db.insert(categories).values({ name: "Hyperkalemia 치료", parentId: 건국대학교병원.id, sortOrder: 71 }).returning();
  const [저칼륨혈증치료] = await db.insert(categories).values({ name: "Hypokalemia 치료", parentId: 건국대학교병원.id, sortOrder: 72 }).returning();
  const [로메론] = await db.insert(categories).values({ name: "Romeron", parentId: 건국대학교병원.id, sortOrder: 73 }).returning();
  const [내원환자Lab] = await db.insert(categories).values({ name: "needle stick injury(내원환자) lab", parentId: 건국대학교병원.id, sortOrder: 74 }).returning();
  const [직원HIV처방약] = await db.insert(categories).values({ name: "needle stick injury(직원처방용) HIV(+) 처방약", parentId: 건국대학교병원.id, sortOrder: 75 }).returning();
  const [직원Lab] = await db.insert(categories).values({ name: "needle stick injury(직원처방용) Lab", parentId: 건국대학교병원.id, sortOrder: 76 }).returning();
  const [간염백신] = await db.insert(categories).values({ name: "needle stick injury(직원처방용) 간염백신", parentId: 건국대학교병원.id, sortOrder: 77 }).returning();
  const [환자Lab] = await db.insert(categories).values({ name: "needle stick injury(환자처방용) Lab", parentId: 건국대학교병원.id, sortOrder: 78 }).returning();
  const [산동제] = await db.insert(categories).values({ name: "안약 산동제-Tropherin eye drop", parentId: 건국대학교병원.id, sortOrder: 79 }).returning();
  const [척수손상스테로이드] = await db.insert(categories).values({ name: "spinal cord injury(steroid)", parentId: 건국대학교병원.id, sortOrder: 80 }).returning();
  const [경련중첩증] = await db.insert(categories).values({ name: "경련 01.status epilepticus", parentId: 건국대학교병원.id, sortOrder: 81 }).returning();
  const [BP낮음dyspnea] = await db.insert(categories).values({ name: "피부과 BP낮거나 dyspnea-epinephrine", parentId: 건국대학교병원.id, sortOrder: 82 }).returning();
  const [두드러기중증] = await db.insert(categories).values({ name: "피부과 Ulticaria(severe)", parentId: 건국대학교병원.id, sortOrder: 83 }).returning();
  const [대상포진] = await db.insert(categories).values({ name: "피부과 대상포진", parentId: 건국대학교병원.id, sortOrder: 84 }).returning();
  const [천식약물] = await db.insert(categories).values({ name: "Asthma medication", parentId: 건국대학교병원.id, sortOrder: 85 }).returning();
  const [천식퇴원약] = await db.insert(categories).values({ name: "Asthma 퇴원약", parentId: 건국대학교병원.id, sortOrder: 86 }).returning();
  const [AAP중독] = await db.insert(categories).values({ name: "NAC protocol (AAP toxic)", parentId: 건국대학교병원.id, sortOrder: 87 }).returning();
  const [티아민] = await db.insert(categories).values({ name: "Thiamine (wernicke 의심)", parentId: 건국대학교병원.id, sortOrder: 88 }).returning();
  const [퍼디핀] = await db.insert(categories).values({ name: "BP 높음 perdipin", parentId: 건국대학교병원.id, sortOrder: 89 }).returning();
  const [NTG] = await db.insert(categories).values({ name: "BP 높음 NTG(HF인 경우)", parentId: 건국대학교병원.id, sortOrder: 90 }).returning();
  const [락툴로오스관장] = await db.insert(categories).values({ name: "Hepatic encephalopathy Lactulose enema", parentId: 건국대학교병원.id, sortOrder: 91 }).returning();
  const [간성뇌증퇴원약] = await db.insert(categories).values({ name: "Hepatic encephalopathy 퇴원약", parentId: 건국대학교병원.id, sortOrder: 92 }).returning();
  const [DKA관리] = await db.insert(categories).values({ name: "DKA management", parentId: 건국대학교병원.id, sortOrder: 93 }).returning();
  const [백혈구감소오더] = await db.insert(categories).values({ name: "측과 leukopenia 오더", parentId: 건국대학교병원.id, sortOrder: 94 }).returning();
  const [복수천자검사] = await db.insert(categories).values({ name: "para sono / lab", parentId: 건국대학교병원.id, sortOrder: 95 }).returning();
  const [복막투석액검사] = await db.insert(categories).values({ name: "복막투석액 검사(신장내과 요청받음)", parentId: 건국대학교병원.id, sortOrder: 96 }).returning();
  const [말라리아검사] = await db.insert(categories).values({ name: "malaria 검사", parentId: 건국대학교병원.id, sortOrder: 97 }).returning();
  const [소아해열제] = await db.insert(categories).values({ name: "소아과 퇴원약 해열제", parentId: 건국대학교병원.id, sortOrder: 98 }).returning();
  const [소아기침가래] = await db.insert(categories).values({ name: "소아과 퇴원약 기침/가래", parentId: 건국대학교병원.id, sortOrder: 99 }).returning();
  const [소아콧물] = await db.insert(categories).values({ name: "소아과 퇴원약 콧물", parentId: 건국대학교병원.id, sortOrder: 100 }).returning();
  const [소아구토변비] = await db.insert(categories).values({ name: "소아과 퇴원약 구토/변비", parentId: 건국대학교병원.id, sortOrder: 101 }).returning();
  const [급성심근경색] = await db.insert(categories).values({ name: "MI medications", parentId: 건국대학교병원.id, sortOrder: 102 }).returning();
  const [소아항생제] = await db.insert(categories).values({ name: "소아과 퇴원약 항생제", parentId: 건국대학교병원.id, sortOrder: 103 }).returning();
  const [소아설사] = await db.insert(categories).values({ name: "소아과 퇴원약 설사", parentId: 건국대학교병원.id, sortOrder: 104 }).returning();
  const [소아루틴랩] = await db.insert(categories).values({ name: "소아과 Routine Lab", parentId: 건국대학교병원.id, sortOrder: 105 }).returning();
  const [소아씨저랩] = await db.insert(categories).values({ name: "소아과 Seizure Lab", parentId: 건국대학교병원.id, sortOrder: 106 }).returning();
  const [소아Fever] = await db.insert(categories).values({ name: "Fever", parentId: 건국대학교병원.id, sortOrder: 107 }).returning();
  const [소아APT] = await db.insert(categories).values({ name: "APT", parentId: 건국대학교병원.id, sortOrder: 108 }).returning();
  const [소아Croup] = await db.insert(categories).values({ name: "Croup", parentId: 건국대학교병원.id, sortOrder: 109 }).returning();
  const [소아Asthma] = await db.insert(categories).values({ name: "Asthma", parentId: 건국대학교병원.id, sortOrder: 110 }).returning();
  const [소아Urticaria] = await db.insert(categories).values({ name: "Urticaria", parentId: 건국대학교병원.id, sortOrder: 111 }).returning();
  const [소아Constipation] = await db.insert(categories).values({ name: "Constipation", parentId: 건국대학교병원.id, sortOrder: 112 }).returning();
  const [소아Seizure경련] = await db.insert(categories).values({ name: "Seizure", parentId: 건국대학교병원.id, sortOrder: 113 }).returning();
  const [심장OP환아랩] = await db.insert(categories).values({ name: "심장OP 환아 추가 Lab", parentId: 건국대학교병원.id, sortOrder: 114 }).returning();
  const [소아네뷸라이저] = await db.insert(categories).values({ name: "네뷸라이저", parentId: 건국대학교병원.id, sortOrder: 115 }).returning();
  const [스파이널탭검사] = await db.insert(categories).values({ name: "spinal tap 검사", parentId: 건국대학교병원.id, sortOrder: 116 }).returning();
  const [소아진정케타민] = await db.insert(categories).values({ name: "ketamine", parentId: 건국대학교병원.id, sortOrder: 117 }).returning();
  const [소아진정미다졸람] = await db.insert(categories).values({ name: "midazolam", parentId: 건국대학교병원.id, sortOrder: 118 }).returning();
  const [소아진정치오펜탈] = await db.insert(categories).values({ name: "thiopental", parentId: 건국대학교병원.id, sortOrder: 119 }).returning();
  const [소아진정로라제팜] = await db.insert(categories).values({ name: "lorazepam", parentId: 건국대학교병원.id, sortOrder: 120 }).returning();
  const [영양제OMAP] = await db.insert(categories).values({ name: "OMAP", parentId: 건국대학교병원.id, sortOrder: 121 }).returning();
  const [GI출혈] = await db.insert(categories).values({ name: "GI bleeding", parentId: 건국대학교병원.id, sortOrder: 122 }).returning();
  const [바이본지속주입] = await db.insert(categories).values({ name: "bivon continuous", parentId: 건국대학교병원.id, sortOrder: 123 }).returning();
  const [수혈처방] = await db.insert(categories).values({ name: "수혈처방", parentId: 건국대학교병원.id, sortOrder: 124 }).returning();
  const [빈혈검사] = await db.insert(categories).values({ name: "Anemia Study", parentId: 건국대학교병원.id, sortOrder: 125 }).returning();
  const [postROSC] = await db.insert(categories).values({ name: "Post ROSC", parentId: 건국대학교병원.id, sortOrder: 126 }).returning();
  const [xray_ankle] = await db.insert(categories).values({ name: "X-ray_ankle", parentId: 건국대학교병원.id, sortOrder: 127 }).returning();
  const [xray_chest] = await db.insert(categories).values({ name: "X-ray_chest", parentId: 건국대학교병원.id, sortOrder: 128 }).returning();
  const [xray_clavicle] = await db.insert(categories).values({ name: "X-ray_clavicle", parentId: 건국대학교병원.id, sortOrder: 129 }).returning();
  const [xray_elbow] = await db.insert(categories).values({ name: "X-ray_elbow", parentId: 건국대학교병원.id, sortOrder: 130 }).returning();
  const [xray_femur] = await db.insert(categories).values({ name: "X-ray_femur", parentId: 건국대학교병원.id, sortOrder: 131 }).returning();
  const [xray_foot] = await db.insert(categories).values({ name: "X-ray_foot", parentId: 건국대학교병원.id, sortOrder: 132 }).returning();
  const [xray_finger] = await db.insert(categories).values({ name: "X-ray_finger", parentId: 건국대학교병원.id, sortOrder: 133 }).returning();
  const [xray_forearm] = await db.insert(categories).values({ name: "X-ray_forearm", parentId: 건국대학교병원.id, sortOrder: 134 }).returning();
  const [xray_hand] = await db.insert(categories).values({ name: "X-ray_hand", parentId: 건국대학교병원.id, sortOrder: 135 }).returning();
  const [xray_head] = await db.insert(categories).values({ name: "X-ray_head", parentId: 건국대학교병원.id, sortOrder: 136 }).returning();
  const [xray_hip] = await db.insert(categories).values({ name: "X-ray_hip", parentId: 건국대학교병원.id, sortOrder: 137 }).returning();
  const [xray_humerus] = await db.insert(categories).values({ name: "X-ray_humerus", parentId: 건국대학교병원.id, sortOrder: 138 }).returning();
  const [xray_knee] = await db.insert(categories).values({ name: "X-ray_knee", parentId: 건국대학교병원.id, sortOrder: 139 }).returning();
  const [xray_lowerleg] = await db.insert(categories).values({ name: "X-ray_lower leg", parentId: 건국대학교병원.id, sortOrder: 140 }).returning();
  const [xray_neck] = await db.insert(categories).values({ name: "X-ray_neck", parentId: 건국대학교병원.id, sortOrder: 141 }).returning();
  const [xray_pelvis] = await db.insert(categories).values({ name: "X-ray_pelvis", parentId: 건국대학교병원.id, sortOrder: 142 }).returning();
  const [xray_sacrumcoccyx] = await db.insert(categories).values({ name: "X-ray_sacrum & coccyx", parentId: 건국대학교병원.id, sortOrder: 143 }).returning();
  const [가려움로션] = await db.insert(categories).values({ name: "가려움 로션", parentId: 건국대학교병원.id, sortOrder: 144 }).returning();
  const [안약] = await db.insert(categories).values({ name: "안약", parentId: 건국대학교병원.id, sortOrder: 145 }).returning();
  const [떨림] = await db.insert(categories).values({ name: "떨림", parentId: 건국대학교병원.id, sortOrder: 146 }).returning();
  const [저칼륨혈증개별] = await db.insert(categories).values({ name: "Hypokalemia", parentId: 건국대학교병원.id, sortOrder: 147 }).returning();
  const [요로결석] = await db.insert(categories).values({ name: "ureter stone", parentId: 건국대학교병원.id, sortOrder: 148 }).returning();
  const [삼차신경통] = await db.insert(categories).values({ name: "삼차신경통", parentId: 건국대학교병원.id, sortOrder: 149 }).returning();
  const [BBPV] = await db.insert(categories).values({ name: "BBPV", parentId: 건국대학교병원.id, sortOrder: 150 }).returning();
  const [Labesin개별] = await db.insert(categories).values({ name: "Labesin", parentId: 건국대학교병원.id, sortOrder: 151 }).returning();
  const [Allergy두드러기] = await db.insert(categories).values({ name: "Allergy 두드러기", parentId: 건국대학교병원.id, sortOrder: 152 }).returning();
  const [continuousLasix] = await db.insert(categories).values({ name: "continuous lasix", parentId: 건국대학교병원.id, sortOrder: 153 }).returning();
  const [IVPOVerapamil] = await db.insert(categories).values({ name: "IV+PO Verapamil(rate)", parentId: 건국대학교병원.id, sortOrder: 154 }).returning();
  const [통풍Gout] = await db.insert(categories).values({ name: "통풍 Gout", parentId: 건국대학교병원.id, sortOrder: 155 }).returning();
  const [IVPOHerben] = await db.insert(categories).values({ name: "IV+PO Herben(rate)", parentId: 건국대학교병원.id, sortOrder: 156 }).returning();
  const [IVPOAmiodarone] = await db.insert(categories).values({ name: "IV+PO Amiodarone", parentId: 건국대학교병원.id, sortOrder: 157 }).returning();
  const [IVPODigoxin] = await db.insert(categories).values({ name: "IV+PO digoxin", parentId: 건국대학교병원.id, sortOrder: 158 }).returning();
  const [일반병실입원폐렴] = await db.insert(categories).values({ name: "일반병실 입원 (폐렴)", parentId: 건국대학교병원.id, sortOrder: 159 }).returning();
  const [Hemorrhageangio] = await db.insert(categories).values({ name: "Hemorrhage angio", parentId: 건국대학교병원.id, sortOrder: 160 }).returning();
  const [OPD치료폐렴] = await db.insert(categories).values({ name: "OPD 치료 (폐렴)", parentId: 건국대학교병원.id, sortOrder: 161 }).returning();
  const [BellsPalsy] = await db.insert(categories).values({ name: "Bell's palsy", parentId: 건국대학교병원.id, sortOrder: 162 }).returning();
  const [IVNTG] = await db.insert(categories).values({ name: "IV NTG", parentId: 건국대학교병원.id, sortOrder: 163 }).returning();
  const [DKA] = await db.insert(categories).values({ name: "DKA", parentId: 건국대학교병원.id, sortOrder: 164 }).returning();
  const [anaphylaxis] = await db.insert(categories).values({ name: "anaphylaxis", parentId: 건국대학교병원.id, sortOrder: 165 }).returning();
  const [GI출혈김대용] = await db.insert(categories).values({ name: "GI bleeding (김대용선생님)", parentId: 건국대학교병원.id, sortOrder: 166 }).returning();
  const [Hypoglycemia개별] = await db.insert(categories).values({ name: "Hypoglycemia", parentId: 건국대학교병원.id, sortOrder: 167 }).returning();

  const [김대용엑셀정리] = await db.insert(categories).values({ name: "김대용 엑셀 정리", sortOrder: 4 }).returning();

  const [전처치제agent] = await db.insert(categories).values({ name: "Pre-treatment agent", parentId: 김대용엑셀정리.id, sortOrder: 0 }).returning();
  const [InductionAgent2] = await db.insert(categories).values({ name: "Induction agent", parentId: 김대용엑셀정리.id, sortOrder: 1 }).returning();
  const [MuscleRelaxant2] = await db.insert(categories).values({ name: "Muscle relaxant", parentId: 김대용엑셀정리.id, sortOrder: 2 }).returning();
  const [Analgesics진정] = await db.insert(categories).values({ name: "Analgesics & Sedative drugs", parentId: 김대용엑셀정리.id, sortOrder: 3 }).returning();
  const [Dobutamine2] = await db.insert(categories).values({ name: "Dobutamine", parentId: 김대용엑셀정리.id, sortOrder: 4 }).returning();
  const [Dopamine2] = await db.insert(categories).values({ name: "Dopamine", parentId: 김대용엑셀정리.id, sortOrder: 5 }).returning();
  const [Epinephrine2] = await db.insert(categories).values({ name: "Epinephrine", parentId: 김대용엑셀정리.id, sortOrder: 6 }).returning();
  const [Norepinephrine2] = await db.insert(categories).values({ name: "Norepinephrine", parentId: 김대용엑셀정리.id, sortOrder: 7 }).returning();
  const [Vasopressin2] = await db.insert(categories).values({ name: "Vasopressin", parentId: 김대용엑셀정리.id, sortOrder: 8 }).returning();
  const [Esmolol2] = await db.insert(categories).values({ name: "Esmolol", parentId: 김대용엑셀정리.id, sortOrder: 9 }).returning();
  const [Labetalol2] = await db.insert(categories).values({ name: "Labetalol", parentId: 김대용엑셀정리.id, sortOrder: 10 }).returning();
  const [Nicardipine2] = await db.insert(categories).values({ name: "Nicardipine", parentId: 김대용엑셀정리.id, sortOrder: 11 }).returning();
  const [Nitroprusside2] = await db.insert(categories).values({ name: "Nitroprusside", parentId: 김대용엑셀정리.id, sortOrder: 12 }).returning();
  const [NTG2] = await db.insert(categories).values({ name: "NTG", parentId: 김대용엑셀정리.id, sortOrder: 13 }).returning();
  const [혈압조절지침] = await db.insert(categories).values({ name: "혈압조절 일반 지침", parentId: 김대용엑셀정리.id, sortOrder: 14 }).returning();
  const [항생제두경부감염] = await db.insert(categories).values({ name: "항생제 IV - 두경부감염(APT)", parentId: 김대용엑셀정리.id, sortOrder: 15 }).returning();
  const [항생제복강내감염] = await db.insert(categories).values({ name: "항생제 IV - 복합 복강내 감염", parentId: 김대용엑셀정리.id, sortOrder: 16 }).returning();
  const [항생제연조직감염] = await db.insert(categories).values({ name: "항생제 IV - 연조직 감염", parentId: 김대용엑셀정리.id, sortOrder: 17 }).returning();
  const [항생제요로감염] = await db.insert(categories).values({ name: "항생제 IV - 요로 감염", parentId: 김대용엑셀정리.id, sortOrder: 18 }).returning();
  const [항생제폐렴CAP] = await db.insert(categories).values({ name: "항생제 IV - 폐렴(CAP)", parentId: 김대용엑셀정리.id, sortOrder: 19 }).returning();
  const [항생제폐렴HAP] = await db.insert(categories).values({ name: "항생제 IV - 폐렴(HAP)", parentId: 김대용엑셀정리.id, sortOrder: 20 }).returning();
  const [항생제CRBSI] = await db.insert(categories).values({ name: "항생제 IV - 카테터연관감염(CRBSI)", parentId: 김대용엑셀정리.id, sortOrder: 21 }).returning();
  const [수액류] = await db.insert(categories).values({ name: "수액류", parentId: 김대용엑셀정리.id, sortOrder: 22 }).returning();
  const [영양제비타민제] = await db.insert(categories).values({ name: "영양제, 비타민제", parentId: 김대용엑셀정리.id, sortOrder: 23 }).returning();
  const [해열진통제IM] = await db.insert(categories).values({ name: "해열진통제 IM", parentId: 김대용엑셀정리.id, sortOrder: 24 }).returning();
  const [해열진통제IV] = await db.insert(categories).values({ name: "해열진통제 IV", parentId: 김대용엑셀정리.id, sortOrder: 25 }).returning();
  const [GImedIV] = await db.insert(categories).values({ name: "GI med. IV", parentId: 김대용엑셀정리.id, sortOrder: 26 }).returning();
  const [항생제성분별] = await db.insert(categories).values({ name: "항생제 IV (성분별)", parentId: 김대용엑셀정리.id, sortOrder: 27 }).returning();
  const [항바이러스제IV] = await db.insert(categories).values({ name: "항바이러스제 IV (독감, Zoster)", parentId: 김대용엑셀정리.id, sortOrder: 28 }).returning();
  const [스테로이드IMIV] = await db.insert(categories).values({ name: "스테로이드 IM, IV", parentId: 김대용엑셀정리.id, sortOrder: 29 }).returning();
  const [기타IV제제] = await db.insert(categories).values({ name: "기타 IV 제제", parentId: 김대용엑셀정리.id, sortOrder: 30 }).returning();
  const [수혈제제] = await db.insert(categories).values({ name: "수혈제제", parentId: 김대용엑셀정리.id, sortOrder: 31 }).returning();
  const [외용제] = await db.insert(categories).values({ name: "외용제", parentId: 김대용엑셀정리.id, sortOrder: 32 }).returning();
  const [항정신약IV] = await db.insert(categories).values({ name: "항정신약 IV", parentId: 김대용엑셀정리.id, sortOrder: 33 }).returning();

  const [천식COPD] = await db.insert(categories).values({ name: "Asthma/COPD AE", parentId: 김대용엑셀정리.id, sortOrder: 34 }).returning();
  const [PSVT질환] = await db.insert(categories).values({ name: "PSVT", parentId: 김대용엑셀정리.id, sortOrder: 35 }).returning();
  const [Afib] = await db.insert(categories).values({ name: "A-fib", parentId: 김대용엑셀정리.id, sortOrder: 36 }).returning();
  const [단형성VT] = await db.insert(categories).values({ name: "monomorphic VT", parentId: 김대용엑셀정리.id, sortOrder: 37 }).returning();
  const [Bradycardia질환] = await db.insert(categories).values({ name: "Bradycardia", parentId: 김대용엑셀정리.id, sortOrder: 38 }).returning();
  const [고혈압위기] = await db.insert(categories).values({ name: "Hypertensive Crisis", parentId: 김대용엑셀정리.id, sortOrder: 39 }).returning();
  const [ASO질환] = await db.insert(categories).values({ name: "ASO", parentId: 김대용엑셀정리.id, sortOrder: 40 }).returning();
  const [PTE질환] = await db.insert(categories).values({ name: "PTE", parentId: 김대용엑셀정리.id, sortOrder: 41 }).returning();
  const [ACS질환] = await db.insert(categories).values({ name: "ACS", parentId: 김대용엑셀정리.id, sortOrder: 42 }).returning();
  const [심부전질환] = await db.insert(categories).values({ name: "Heart failure", parentId: 김대용엑셀정리.id, sortOrder: 43 }).returning();

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
  const [NR과BPPV처방] = await db.insert(prescriptions).values({ name: "NR-BPPV or VN", categoryId: NR과BPPV.id, sortOrder: 0 }).returning();
  const [요로감염퇴원약처방] = await db.insert(prescriptions).values({ name: "UTI", categoryId: 요로감염퇴원약.id, sortOrder: 0 }).returning();
  const [요관결석처방] = await db.insert(prescriptions).values({ name: "Ureter stone", categoryId: 요관결석.id, sortOrder: 0 }).returning();
  const [감기처방] = await db.insert(prescriptions).values({ name: "감기", categoryId: 감기.id, sortOrder: 0 }).returning();
  const [사후피임약처방] = await db.insert(prescriptions).values({ name: "사후피임약", categoryId: 사후피임약.id, sortOrder: 0 }).returning();
  const [인플루엔자성인처방] = await db.insert(prescriptions).values({ name: "인플루엔자 성인", categoryId: 인플루엔자성인.id, sortOrder: 0 }).returning();
  const [인플루엔자소아처방] = await db.insert(prescriptions).values({ name: "인플루엔자 소아", categoryId: 인플루엔자소아.id, sortOrder: 0 }).returning();
  const [폐렴퇴원약처방] = await db.insert(prescriptions).values({ name: "폐렴", categoryId: 폐렴퇴원약.id, sortOrder: 0 }).returning();
  const [안면마비처방] = await db.insert(prescriptions).values({ name: "Facial palsy", categoryId: 안면마비.id, sortOrder: 0 }).returning();
  const [지타코주처방] = await db.insert(prescriptions).values({ name: "지타코주", categoryId: 지타코주.id, sortOrder: 0 }).returning();
  const [고칼륨혈증치료처방] = await db.insert(prescriptions).values({ name: "Hyperkalemia 치료", categoryId: 고칼륨혈증치료.id, sortOrder: 0 }).returning();
  const [저칼륨혈증치료처방] = await db.insert(prescriptions).values({ name: "Hypokalemia 치료", categoryId: 저칼륨혈증치료.id, sortOrder: 0 }).returning();
  const [로메론처방] = await db.insert(prescriptions).values({ name: "Romeron", categoryId: 로메론.id, sortOrder: 0 }).returning();
  const [내원환자Lab처방] = await db.insert(prescriptions).values({ name: "needle stick injury(내원환자) lab", categoryId: 내원환자Lab.id, sortOrder: 0 }).returning();
  const [직원HIV처방약처방] = await db.insert(prescriptions).values({ name: "needle stick injury(직원처방용) HIV(+) 처방약", categoryId: 직원HIV처방약.id, sortOrder: 0 }).returning();
  const [직원Lab처방] = await db.insert(prescriptions).values({ name: "needle stick injury(직원처방용) Lab", categoryId: 직원Lab.id, sortOrder: 0 }).returning();
  const [간염백신처방] = await db.insert(prescriptions).values({ name: "needle stick injury(직원처방용) 간염백신", categoryId: 간염백신.id, sortOrder: 0 }).returning();
  const [환자Lab처방] = await db.insert(prescriptions).values({ name: "needle stick injury(환자처방용) Lab", categoryId: 환자Lab.id, sortOrder: 0 }).returning();
  const [산동제처방] = await db.insert(prescriptions).values({ name: "안약 산동제-Tropherin eye drop", categoryId: 산동제.id, sortOrder: 0 }).returning();
  const [척수손상스테로이드처방] = await db.insert(prescriptions).values({ name: "spinal cord injury(steroid)", categoryId: 척수손상스테로이드.id, sortOrder: 0 }).returning();
  const [경련중첩증처방] = await db.insert(prescriptions).values({ name: "경련 01.status epilepticus", categoryId: 경련중첩증.id, sortOrder: 0 }).returning();
  const [BP낮음dyspnea처방] = await db.insert(prescriptions).values({ name: "피부과 BP낮거나 dyspnea-epinephrine", categoryId: BP낮음dyspnea.id, sortOrder: 0 }).returning();
  const [두드러기중증처방] = await db.insert(prescriptions).values({ name: "피부과 Ulticaria(severe)", categoryId: 두드러기중증.id, sortOrder: 0 }).returning();
  const [대상포진처방] = await db.insert(prescriptions).values({ name: "피부과 대상포진", categoryId: 대상포진.id, sortOrder: 0 }).returning();
  const [천식약물처방] = await db.insert(prescriptions).values({ name: "Asthma medication", categoryId: 천식약물.id, sortOrder: 0 }).returning();
  const [천식퇴원약처방] = await db.insert(prescriptions).values({ name: "Asthma 퇴원약", categoryId: 천식퇴원약.id, sortOrder: 0 }).returning();
  const [AAP중독처방] = await db.insert(prescriptions).values({ name: "NAC protocol (AAP toxic)", categoryId: AAP중독.id, sortOrder: 0 }).returning();
  const [티아민처방] = await db.insert(prescriptions).values({ name: "Thiamine (wernicke 의심)", categoryId: 티아민.id, sortOrder: 0 }).returning();
  const [퍼디핀처방] = await db.insert(prescriptions).values({ name: "BP 높음 perdipin", categoryId: 퍼디핀.id, sortOrder: 0 }).returning();
  const [NTG처방] = await db.insert(prescriptions).values({ name: "BP 높음 NTG(HF인 경우)", categoryId: NTG.id, sortOrder: 0 }).returning();
  const [락툴로오스관장처방] = await db.insert(prescriptions).values({ name: "Hepatic encephalopathy Lactulose enema", categoryId: 락툴로오스관장.id, sortOrder: 0 }).returning();
  const [간성뇌증퇴원약처방] = await db.insert(prescriptions).values({ name: "Hepatic encephalopathy 퇴원약", categoryId: 간성뇌증퇴원약.id, sortOrder: 0 }).returning();
  const [DKA관리처방] = await db.insert(prescriptions).values({ name: "DKA management", categoryId: DKA관리.id, sortOrder: 0 }).returning();
  const [백혈구감소오더처방] = await db.insert(prescriptions).values({ name: "측과 leukopenia 오더", categoryId: 백혈구감소오더.id, sortOrder: 0 }).returning();
  const [복수천자검사처방] = await db.insert(prescriptions).values({ name: "para sono / lab", categoryId: 복수천자검사.id, sortOrder: 0 }).returning();
  const [복막투석액검사처방] = await db.insert(prescriptions).values({ name: "복막투석액 검사(신장내과 요청받음)", categoryId: 복막투석액검사.id, sortOrder: 0 }).returning();
  const [말라리아검사처방] = await db.insert(prescriptions).values({ name: "malaria 검사", categoryId: 말라리아검사.id, sortOrder: 0 }).returning();
  const [소아해열제처방] = await db.insert(prescriptions).values({ name: "소아과 퇴원약 해열제", categoryId: 소아해열제.id, sortOrder: 0 }).returning();
  const [소아기침가래처방] = await db.insert(prescriptions).values({ name: "소아과 퇴원약 기침/가래", categoryId: 소아기침가래.id, sortOrder: 0 }).returning();
  const [소아콧물처방] = await db.insert(prescriptions).values({ name: "소아과 퇴원약 콧물", categoryId: 소아콧물.id, sortOrder: 0 }).returning();
  const [소아구토변비처방] = await db.insert(prescriptions).values({ name: "소아과 퇴원약 구토/변비", categoryId: 소아구토변비.id, sortOrder: 0 }).returning();
  const [급성심근경색처방] = await db.insert(prescriptions).values({ name: "MI medications", categoryId: 급성심근경색.id, sortOrder: 0 }).returning();
  const [소아항생제처방] = await db.insert(prescriptions).values({ name: "소아과 퇴원약 항생제", categoryId: 소아항생제.id, sortOrder: 0 }).returning();
  const [소아설사처방] = await db.insert(prescriptions).values({ name: "소아과 퇴원약 설사", categoryId: 소아설사.id, sortOrder: 0 }).returning();
  const [소아루틴랩처방] = await db.insert(prescriptions).values({ name: "소아과 Routine Lab", categoryId: 소아루틴랩.id, sortOrder: 0 }).returning();
  const [소아씨저랩처방] = await db.insert(prescriptions).values({ name: "소아과 Seizure Lab", categoryId: 소아씨저랩.id, sortOrder: 0 }).returning();
  const [소아Fever처방] = await db.insert(prescriptions).values({ name: "Fever", categoryId: 소아Fever.id, sortOrder: 0 }).returning();
  const [소아APT처방] = await db.insert(prescriptions).values({ name: "APT", categoryId: 소아APT.id, sortOrder: 0 }).returning();
  const [소아Croup처방] = await db.insert(prescriptions).values({ name: "Croup", categoryId: 소아Croup.id, sortOrder: 0 }).returning();
  const [소아Asthma처방] = await db.insert(prescriptions).values({ name: "Asthma", categoryId: 소아Asthma.id, sortOrder: 0 }).returning();
  const [소아Urticaria처방] = await db.insert(prescriptions).values({ name: "Urticaria", categoryId: 소아Urticaria.id, sortOrder: 0 }).returning();
  const [소아Constipation처방] = await db.insert(prescriptions).values({ name: "Constipation", categoryId: 소아Constipation.id, sortOrder: 0 }).returning();
  const [소아Seizure경련처방] = await db.insert(prescriptions).values({ name: "Seizure", categoryId: 소아Seizure경련.id, sortOrder: 0 }).returning();
  const [심장OP환아랩처방] = await db.insert(prescriptions).values({ name: "심장OP 환아 추가 Lab", categoryId: 심장OP환아랩.id, sortOrder: 0 }).returning();
  const [소아네뷸라이저처방] = await db.insert(prescriptions).values({ name: "네뷸라이저", categoryId: 소아네뷸라이저.id, sortOrder: 0 }).returning();
  const [스파이널탭검사처방] = await db.insert(prescriptions).values({ name: "spinal tap 검사", categoryId: 스파이널탭검사.id, sortOrder: 0 }).returning();
  const [소아진정케타민처방] = await db.insert(prescriptions).values({ name: "ketamine", categoryId: 소아진정케타민.id, sortOrder: 0 }).returning();
  const [소아진정미다졸람처방] = await db.insert(prescriptions).values({ name: "midazolam", categoryId: 소아진정미다졸람.id, sortOrder: 0 }).returning();
  const [소아진정치오펜탈처방] = await db.insert(prescriptions).values({ name: "thiopental", categoryId: 소아진정치오펜탈.id, sortOrder: 0 }).returning();
  const [소아진정로라제팜처방] = await db.insert(prescriptions).values({ name: "lorazepam", categoryId: 소아진정로라제팜.id, sortOrder: 0 }).returning();
  const [영양제OMAP처방] = await db.insert(prescriptions).values({ name: "OMAP", categoryId: 영양제OMAP.id, sortOrder: 0 }).returning();
  const [GI출혈처방] = await db.insert(prescriptions).values({ name: "GI bleeding", categoryId: GI출혈.id, sortOrder: 0 }).returning();
  const [바이본지속주입처방] = await db.insert(prescriptions).values({ name: "bivon continuous", categoryId: 바이본지속주입.id, sortOrder: 0 }).returning();
  const [수혈처방처방] = await db.insert(prescriptions).values({ name: "수혈처방", categoryId: 수혈처방.id, sortOrder: 0 }).returning();
  const [빈혈검사처방] = await db.insert(prescriptions).values({ name: "Anemia Study", categoryId: 빈혈검사.id, sortOrder: 0 }).returning();
  const [postROSC처방] = await db.insert(prescriptions).values({ name: "Post ROSC", categoryId: postROSC.id, sortOrder: 0 }).returning();
  const [xray_ankle처방] = await db.insert(prescriptions).values({ name: "X-ray_ankle", categoryId: xray_ankle.id, sortOrder: 0 }).returning();
  const [xray_chest처방] = await db.insert(prescriptions).values({ name: "X-ray_chest", categoryId: xray_chest.id, sortOrder: 0 }).returning();
  const [xray_clavicle처방] = await db.insert(prescriptions).values({ name: "X-ray_clavicle", categoryId: xray_clavicle.id, sortOrder: 0 }).returning();
  const [xray_elbow처방] = await db.insert(prescriptions).values({ name: "X-ray_elbow", categoryId: xray_elbow.id, sortOrder: 0 }).returning();
  const [xray_femur처방] = await db.insert(prescriptions).values({ name: "X-ray_femur", categoryId: xray_femur.id, sortOrder: 0 }).returning();
  const [xray_foot처방] = await db.insert(prescriptions).values({ name: "X-ray_foot", categoryId: xray_foot.id, sortOrder: 0 }).returning();
  const [xray_finger처방] = await db.insert(prescriptions).values({ name: "X-ray_finger", categoryId: xray_finger.id, sortOrder: 0 }).returning();
  const [xray_forearm처방] = await db.insert(prescriptions).values({ name: "X-ray_forearm", categoryId: xray_forearm.id, sortOrder: 0 }).returning();
  const [xray_hand처방] = await db.insert(prescriptions).values({ name: "X-ray_hand", categoryId: xray_hand.id, sortOrder: 0 }).returning();
  const [xray_head처방] = await db.insert(prescriptions).values({ name: "X-ray_head", categoryId: xray_head.id, sortOrder: 0 }).returning();
  const [xray_hip처방] = await db.insert(prescriptions).values({ name: "X-ray_hip", categoryId: xray_hip.id, sortOrder: 0 }).returning();
  const [xray_humerus처방] = await db.insert(prescriptions).values({ name: "X-ray_humerus", categoryId: xray_humerus.id, sortOrder: 0 }).returning();
  const [xray_knee처방] = await db.insert(prescriptions).values({ name: "X-ray_knee", categoryId: xray_knee.id, sortOrder: 0 }).returning();
  const [xray_lowerleg처방] = await db.insert(prescriptions).values({ name: "X-ray_lower leg", categoryId: xray_lowerleg.id, sortOrder: 0 }).returning();
  const [xray_neck처방] = await db.insert(prescriptions).values({ name: "X-ray_neck", categoryId: xray_neck.id, sortOrder: 0 }).returning();
  const [xray_pelvis처방] = await db.insert(prescriptions).values({ name: "X-ray_pelvis", categoryId: xray_pelvis.id, sortOrder: 0 }).returning();
  const [xray_sacrumcoccyx처방] = await db.insert(prescriptions).values({ name: "X-ray_sacrum & coccyx", categoryId: xray_sacrumcoccyx.id, sortOrder: 0 }).returning();
  const [가려움로션처방] = await db.insert(prescriptions).values({ name: "가려움 로션", categoryId: 가려움로션.id, sortOrder: 0 }).returning();
  const [안약처방] = await db.insert(prescriptions).values({ name: "안약", categoryId: 안약.id, sortOrder: 0 }).returning();
  const [떨림처방] = await db.insert(prescriptions).values({ name: "떨림", categoryId: 떨림.id, sortOrder: 0 }).returning();
  const [저칼륨혈증개별처방] = await db.insert(prescriptions).values({ name: "Hypokalemia", categoryId: 저칼륨혈증개별.id, sortOrder: 0 }).returning();
  const [요로결석처방] = await db.insert(prescriptions).values({ name: "ureter stone", categoryId: 요로결석.id, sortOrder: 0 }).returning();
  const [삼차신경통처방] = await db.insert(prescriptions).values({ name: "삼차신경통", categoryId: 삼차신경통.id, sortOrder: 0 }).returning();
  const [BBPV처방] = await db.insert(prescriptions).values({ name: "BBPV", categoryId: BBPV.id, sortOrder: 0 }).returning();
  const [Labesin개별처방] = await db.insert(prescriptions).values({ name: "Labesin", categoryId: Labesin개별.id, sortOrder: 0 }).returning();
  const [Allergy두드러기처방] = await db.insert(prescriptions).values({ name: "Allergy 두드러기", categoryId: Allergy두드러기.id, sortOrder: 0 }).returning();
  const [continuousLasix처방] = await db.insert(prescriptions).values({ name: "continuous lasix", categoryId: continuousLasix.id, sortOrder: 0 }).returning();
  const [IVPOVerapamil처방] = await db.insert(prescriptions).values({ name: "IV+PO Verapamil(rate)", categoryId: IVPOVerapamil.id, sortOrder: 0 }).returning();
  const [통풍Gout처방] = await db.insert(prescriptions).values({ name: "통풍 Gout", categoryId: 통풍Gout.id, sortOrder: 0 }).returning();
  const [IVPOHerben처방] = await db.insert(prescriptions).values({ name: "IV+PO Herben(rate)", categoryId: IVPOHerben.id, sortOrder: 0 }).returning();
  const [IVPOAmiodarone처방] = await db.insert(prescriptions).values({ name: "IV+PO Amiodarone", categoryId: IVPOAmiodarone.id, sortOrder: 0 }).returning();
  const [IVPODigoxin처방] = await db.insert(prescriptions).values({ name: "IV+PO digoxin", categoryId: IVPODigoxin.id, sortOrder: 0 }).returning();
  const [일반병실입원폐렴처방] = await db.insert(prescriptions).values({ name: "일반병실 입원 (폐렴)", categoryId: 일반병실입원폐렴.id, sortOrder: 0 }).returning();
  const [Hemorrhageangio처방] = await db.insert(prescriptions).values({ name: "Hemorrhage angio", categoryId: Hemorrhageangio.id, sortOrder: 0 }).returning();
  const [OPD치료폐렴처방] = await db.insert(prescriptions).values({ name: "OPD 치료 (폐렴)", categoryId: OPD치료폐렴.id, sortOrder: 0 }).returning();
  const [BellsPalsy처방] = await db.insert(prescriptions).values({ name: "Bell's palsy", categoryId: BellsPalsy.id, sortOrder: 0 }).returning();
  const [IVNTG처방] = await db.insert(prescriptions).values({ name: "IV NTG", categoryId: IVNTG.id, sortOrder: 0 }).returning();
  const [DKA처방] = await db.insert(prescriptions).values({ name: "DKA", categoryId: DKA.id, sortOrder: 0 }).returning();
  const [anaphylaxis처방] = await db.insert(prescriptions).values({ name: "anaphylaxis", categoryId: anaphylaxis.id, sortOrder: 0 }).returning();
  const [GI출혈김대용처방] = await db.insert(prescriptions).values({ name: "GI bleeding (김대용선생님)", categoryId: GI출혈김대용.id, sortOrder: 0 }).returning();
  const [Hypoglycemia개별처방] = await db.insert(prescriptions).values({ name: "Hypoglycemia", categoryId: Hypoglycemia개별.id, sortOrder: 0 }).returning();

  const [전처치제agent처방] = await db.insert(prescriptions).values({ name: "Pre-treatment agent", categoryId: 전처치제agent.id, sortOrder: 0 }).returning();
  const [InductionAgent2처방] = await db.insert(prescriptions).values({ name: "Induction agent", categoryId: InductionAgent2.id, sortOrder: 0 }).returning();
  const [MuscleRelaxant2처방] = await db.insert(prescriptions).values({ name: "Muscle relaxant", categoryId: MuscleRelaxant2.id, sortOrder: 0 }).returning();
  const [Analgesics진정처방] = await db.insert(prescriptions).values({ name: "Analgesics & Sedative drugs", categoryId: Analgesics진정.id, sortOrder: 0 }).returning();
  const [Dobutamine2처방] = await db.insert(prescriptions).values({ name: "Dobutamine", categoryId: Dobutamine2.id, sortOrder: 0 }).returning();
  const [Dopamine2처방] = await db.insert(prescriptions).values({ name: "Dopamine", categoryId: Dopamine2.id, sortOrder: 0 }).returning();
  const [Epinephrine2처방] = await db.insert(prescriptions).values({ name: "Epinephrine", categoryId: Epinephrine2.id, sortOrder: 0 }).returning();
  const [Norepinephrine2처방] = await db.insert(prescriptions).values({ name: "Norepinephrine", categoryId: Norepinephrine2.id, sortOrder: 0 }).returning();
  const [Vasopressin2처방] = await db.insert(prescriptions).values({ name: "Vasopressin", categoryId: Vasopressin2.id, sortOrder: 0 }).returning();
  const [Esmolol2처방] = await db.insert(prescriptions).values({ name: "Esmolol", categoryId: Esmolol2.id, sortOrder: 0 }).returning();
  const [Labetalol2처방] = await db.insert(prescriptions).values({ name: "Labetalol", categoryId: Labetalol2.id, sortOrder: 0 }).returning();
  const [Nicardipine2처방] = await db.insert(prescriptions).values({ name: "Nicardipine", categoryId: Nicardipine2.id, sortOrder: 0 }).returning();
  const [Nitroprusside2처방] = await db.insert(prescriptions).values({ name: "Nitroprusside", categoryId: Nitroprusside2.id, sortOrder: 0 }).returning();
  const [NTG2처방] = await db.insert(prescriptions).values({ name: "NTG", categoryId: NTG2.id, sortOrder: 0 }).returning();
  const [혈압조절지침처방] = await db.insert(prescriptions).values({ name: "혈압조절 일반 지침", categoryId: 혈압조절지침.id, sortOrder: 0 }).returning();
  const [항생제두경부감염처방] = await db.insert(prescriptions).values({ name: "항생제 IV - 두경부감염(APT)", categoryId: 항생제두경부감염.id, sortOrder: 0 }).returning();
  const [항생제복강내감염처방] = await db.insert(prescriptions).values({ name: "항생제 IV - 복합 복강내 감염", categoryId: 항생제복강내감염.id, sortOrder: 0 }).returning();
  const [항생제연조직감염처방] = await db.insert(prescriptions).values({ name: "항생제 IV - 연조직 감염", categoryId: 항생제연조직감염.id, sortOrder: 0 }).returning();
  const [항생제요로감염처방] = await db.insert(prescriptions).values({ name: "항생제 IV - 요로 감염", categoryId: 항생제요로감염.id, sortOrder: 0 }).returning();
  const [항생제폐렴CAP처방] = await db.insert(prescriptions).values({ name: "항생제 IV - 폐렴(CAP)", categoryId: 항생제폐렴CAP.id, sortOrder: 0 }).returning();
  const [항생제폐렴HAP처방] = await db.insert(prescriptions).values({ name: "항생제 IV - 폐렴(HAP)", categoryId: 항생제폐렴HAP.id, sortOrder: 0 }).returning();
  const [항생제CRBSI처방] = await db.insert(prescriptions).values({ name: "항생제 IV - 카테터연관감염(CRBSI)", categoryId: 항생제CRBSI.id, sortOrder: 0 }).returning();
  const [수액류처방] = await db.insert(prescriptions).values({ name: "수액류", categoryId: 수액류.id, sortOrder: 0 }).returning();
  const [영양제비타민제처방] = await db.insert(prescriptions).values({ name: "영양제, 비타민제", categoryId: 영양제비타민제.id, sortOrder: 0 }).returning();
  const [해열진통제IM처방] = await db.insert(prescriptions).values({ name: "해열진통제 IM", categoryId: 해열진통제IM.id, sortOrder: 0 }).returning();
  const [해열진통제IV처방] = await db.insert(prescriptions).values({ name: "해열진통제 IV", categoryId: 해열진통제IV.id, sortOrder: 0 }).returning();
  const [GImedIV처방] = await db.insert(prescriptions).values({ name: "GI med. IV", categoryId: GImedIV.id, sortOrder: 0 }).returning();
  const [항생제성분별처방] = await db.insert(prescriptions).values({ name: "항생제 IV (성분별)", categoryId: 항생제성분별.id, sortOrder: 0 }).returning();
  const [항바이러스제IV처방] = await db.insert(prescriptions).values({ name: "항바이러스제 IV (독감, Zoster)", categoryId: 항바이러스제IV.id, sortOrder: 0 }).returning();
  const [스테로이드IMIV처방] = await db.insert(prescriptions).values({ name: "스테로이드 IM, IV", categoryId: 스테로이드IMIV.id, sortOrder: 0 }).returning();
  const [기타IV제제처방] = await db.insert(prescriptions).values({ name: "기타 IV 제제", categoryId: 기타IV제제.id, sortOrder: 0 }).returning();
  const [수혈제제처방] = await db.insert(prescriptions).values({ name: "수혈제제", categoryId: 수혈제제.id, sortOrder: 0 }).returning();
  const [외용제처방] = await db.insert(prescriptions).values({ name: "외용제", categoryId: 외용제.id, sortOrder: 0 }).returning();
  const [항정신약IV처방] = await db.insert(prescriptions).values({ name: "항정신약 IV", categoryId: 항정신약IV.id, sortOrder: 0 }).returning();

  const [천식COPD처방] = await db.insert(prescriptions).values({ name: "Asthma/COPD AE", categoryId: 천식COPD.id, sortOrder: 0 }).returning();
  const [PSVT질환처방] = await db.insert(prescriptions).values({ name: "PSVT", categoryId: PSVT질환.id, sortOrder: 0 }).returning();
  const [Afib처방] = await db.insert(prescriptions).values({ name: "A-fib", categoryId: Afib.id, sortOrder: 0 }).returning();
  const [단형성VT처방] = await db.insert(prescriptions).values({ name: "monomorphic VT", categoryId: 단형성VT.id, sortOrder: 0 }).returning();
  const [Bradycardia질환처방] = await db.insert(prescriptions).values({ name: "Bradycardia", categoryId: Bradycardia질환.id, sortOrder: 0 }).returning();
  const [고혈압위기처방] = await db.insert(prescriptions).values({ name: "Hypertensive Crisis", categoryId: 고혈압위기.id, sortOrder: 0 }).returning();
  const [ASO질환처방] = await db.insert(prescriptions).values({ name: "ASO", categoryId: ASO질환.id, sortOrder: 0 }).returning();
  const [PTE질환처방] = await db.insert(prescriptions).values({ name: "PTE", categoryId: PTE질환.id, sortOrder: 0 }).returning();
  const [ACS질환처방] = await db.insert(prescriptions).values({ name: "ACS", categoryId: ACS질환.id, sortOrder: 0 }).returning();
  const [심부전질환처방] = await db.insert(prescriptions).values({ name: "Heart failure", categoryId: 심부전질환.id, sortOrder: 0 }).returning();

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

    // NR-BPPV or VN
    { prescriptionId: NR과BPPV처방.id, type: "약", productName: "Macperan 10mg/2ml", ingredientName: "metoclopramide", dosage: "1", unit: "A", frequency: "2", route: "IV", sortOrder: 0 },
    { prescriptionId: NR과BPPV처방.id, type: "약", productName: "Beecom hexa 2ml", ingredientName: "Vitamin B complex", dosage: "1", unit: "A", frequency: "3", route: "IV", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: NR과BPPV처방.id, type: "약", productName: "Macperan 10mg/2ml", ingredientName: "metoclopramide", dosage: "1", unit: "A", frequency: "3", route: "IV", sortOrder: 2, mixGroup: "M1" },
    { prescriptionId: NR과BPPV처방.id, type: "퇴원약", productName: "Tanamin 80mg", ingredientName: "ginkgo biloba", dosage: "1", unit: "T", frequency: "BID", duration: "3일", route: "BID PC", sortOrder: 3 },
    { prescriptionId: NR과BPPV처방.id, type: "퇴원약", productName: "Dulcolax-S", ingredientName: "bisacodyl 5mg정", dosage: "1", unit: "T", frequency: "QD", duration: "3일", route: "QD HS", sortOrder: 4 },
    { prescriptionId: NR과BPPV처방.id, type: "퇴원약", productName: "Bonaling-A 50mg", ingredientName: "dimenhydrinate", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 5 },
    { prescriptionId: NR과BPPV처방.id, type: "퇴원약", productName: "Diazepam tab 2mg", ingredientName: "diazepam", dosage: "0.5", unit: "T", frequency: "BID", duration: "1일", route: "BID PC", sortOrder: 6 },
    { prescriptionId: NR과BPPV처방.id, type: "퇴원약", productName: "Macperan 5mg", ingredientName: "metoclopramide", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 7 },
    { prescriptionId: NR과BPPV처방.id, type: "퇴원약", productName: "K-cab 50mg", ingredientName: "tegoprazan", dosage: "1", unit: "T", frequency: "QD", duration: "3일", route: "QD PC", sortOrder: 8 },

    // UTI
    { prescriptionId: 요로감염퇴원약처방.id, type: "퇴원약", productName: "Vesicare tab 5mg", ingredientName: "solifenacin succinate", dosage: "1", unit: "T", frequency: "QD", duration: "3일", route: "QD PC", note: "urgency 시에만 처방", sortOrder: 0 },
    { prescriptionId: 요로감염퇴원약처방.id, type: "퇴원약", productName: "K-cab 50mg", ingredientName: "tegoprazan", dosage: "1", unit: "T", frequency: "QD", duration: "3일", route: "QD PC", sortOrder: 1 },
    { prescriptionId: 요로감염퇴원약처방.id, type: "퇴원약", productName: "Cycin 250mg", ingredientName: "ciprofloxacin", dosage: "1", unit: "T", frequency: "BID", duration: "3일", route: "BID PC", note: "cystitis 1T, APN 2T", sortOrder: 2 },
    { prescriptionId: 요로감염퇴원약처방.id, type: "퇴원약", productName: "Banan 100mg", ingredientName: "cefpodoxime", dosage: "1", unit: "T", frequency: "BID", duration: "3일", route: "BID PC", note: "cystitis 1T, APN 2T", sortOrder: 3 },
    { prescriptionId: 요로감염퇴원약처방.id, type: "퇴원약", productName: "Monurol pow 1pk", ingredientName: "fosfomycin", dosage: "1", unit: "PK", frequency: "QD", duration: "1일", route: "QD HS", note: "in single dose", sortOrder: 4 },
    { prescriptionId: 요로감염퇴원약처방.id, type: "퇴원약", productName: "Brufen 200mg", ingredientName: "ibuprofen", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 5 },

    // Ureter stone
    { prescriptionId: 요관결석처방.id, type: "퇴원약", productName: "K-cab 50mg", ingredientName: "tegoprazan", dosage: "1", unit: "T", frequency: "QD", duration: "3일", route: "QD PC", sortOrder: 0 },
    { prescriptionId: 요관결석처방.id, type: "퇴원약", productName: "Harnal D 0.2mg", ingredientName: "tamsulosin", dosage: "1", unit: "T", frequency: "QD", duration: "3일", route: "QD HS", note: "distal ureter 5mm 이하 stone, 따로 포장해주세요", sortOrder: 1 },
    { prescriptionId: 요관결석처방.id, type: "퇴원약", productName: "Mypol", ingredientName: "AAP, ibuprofen, codein", dosage: "1", unit: "C", frequency: "PRN", duration: "3일", route: "PRN", sortOrder: 2 },
    { prescriptionId: 요관결석처방.id, type: "퇴원약", productName: "Soleton 80mg", ingredientName: "zaltoprofen", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 3 },

    // 감기
    { prescriptionId: 감기처방.id, type: "퇴원약", productName: "K-cab 50mg", ingredientName: "tegoprazan", dosage: "1", unit: "T", frequency: "QD", duration: "3일", route: "QD PC", sortOrder: 0 },
    { prescriptionId: 감기처방.id, type: "퇴원약", productName: "Tantum gargle 100ml/BT", ingredientName: "benzydamine 1.5mg/ml", dosage: "1", unit: "BT", frequency: "QD", duration: "1일", route: "Gargle", note: "가글", sortOrder: 1 },
    { prescriptionId: 감기처방.id, type: "퇴원약", productName: "Augmentin 625mg", ingredientName: "amoxicillin 500, clavulanate 125", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", note: "페니실린 allergy 확인후 처방", sortOrder: 2 },
    { prescriptionId: 감기처방.id, type: "퇴원약", productName: "Codawenon forte syr 20ml/pk", dosage: "1", unit: "PK", frequency: "TID", duration: "3일", route: "TID PC", note: "기침 심할시 추가 처방", sortOrder: 3 },
    { prescriptionId: 감기처방.id, type: "퇴원약", productName: "Mucosol 8mg", ingredientName: "bromhexine", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", note: "기침 가래약", sortOrder: 4 },
    { prescriptionId: 감기처방.id, type: "퇴원약", productName: "Tacenol 8hours ER 650mg", ingredientName: "acetaminophen", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID Q8", sortOrder: 5 },
    { prescriptionId: 감기처방.id, type: "퇴원약", productName: "Ebapherin SC", ingredientName: "ebastine 10mg, pseudoephedrine 120mg", dosage: "1", unit: "C", frequency: "QD", duration: "3일", route: "QD", sortOrder: 6 },
    { prescriptionId: 감기처방.id, type: "퇴원약", productName: "Brufen 200mg", ingredientName: "ibuprofen", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 7 },

    // 사후피임약
    { prescriptionId: 사후피임약처방.id, type: "약", productName: "Norlevo 1 tab 1.5mg", ingredientName: "levonorgestrel", dosage: "1", unit: "T", frequency: "1", route: "UT DICT (내복 1회)", sortOrder: 0 },

    // 인플루엔자 성인
    { prescriptionId: 인플루엔자성인처방.id, type: "퇴원약", productName: "K-cab 50mg", ingredientName: "tegoprazan", dosage: "1", unit: "T", frequency: "QD", duration: "3일", route: "QD PC", sortOrder: 0 },
    { prescriptionId: 인플루엔자성인처방.id, type: "퇴원약", productName: "Tamiflu 75mg", ingredientName: "oseltamivir", dosage: "1", unit: "C", frequency: "BID", duration: "5일", route: "BID PC", note: "10세 이상의 소아환자에 있어서", sortOrder: 1 },
    { prescriptionId: 인플루엔자성인처방.id, type: "퇴원약", productName: "Lebrocol tab 60mg", ingredientName: "Levodropropizine", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 2 },
    { prescriptionId: 인플루엔자성인처방.id, type: "퇴원약", productName: "Tacenol 8hours ER 650mg", ingredientName: "acetaminophen", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID Q8", note: "따로 포장, 발열 심하면 추가복용", sortOrder: 3 },
    { prescriptionId: 인플루엔자성인처방.id, type: "퇴원약", productName: "Brufen 200mg", ingredientName: "ibuprofen", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 4 },

    // 인플루엔자 소아
    { prescriptionId: 인플루엔자소아처방.id, type: "퇴원약", productName: "Tamiflu 30mg", ingredientName: "oseltamivir", dosage: "1", unit: "C", frequency: "BID", duration: "5일", route: "BID PC", sortOrder: 0 },
    { prescriptionId: 인플루엔자소아처방.id, type: "지시처방", productName: "13세 이상: 75mg을 1일 2회, 5일간 복용", sortOrder: 1 },

    // 폐렴
    { prescriptionId: 폐렴퇴원약처방.id, type: "퇴원약", productName: "Zithromax 250mg", ingredientName: "azithromycin", dosage: "2", unit: "T", frequency: "QD", duration: "3일", route: "QD PC", note: "항생제", sortOrder: 0 },
    { prescriptionId: 폐렴퇴원약처방.id, type: "퇴원약", productName: "K-cab 50mg", ingredientName: "tegoprazan", dosage: "1", unit: "T", frequency: "QD", duration: "3일", route: "QD PC", sortOrder: 1 },
    { prescriptionId: 폐렴퇴원약처방.id, type: "퇴원약", productName: "Muten 200mg", ingredientName: "acetylcysteine", dosage: "1", unit: "C", frequency: "TID", duration: "3일", route: "TID PC", note: "기침 가래약", sortOrder: 2 },
    { prescriptionId: 폐렴퇴원약처방.id, type: "퇴원약", productName: "Banan 100mg", ingredientName: "cefpodoxime", dosage: "1", unit: "T", frequency: "BID", duration: "3일", route: "BID PC", note: "항생제", sortOrder: 3 },
    { prescriptionId: 폐렴퇴원약처방.id, type: "퇴원약", productName: "Tacenol 8hours ER 650mg", ingredientName: "acetaminophen", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID Q8", sortOrder: 4 },

    // Facial palsy
    { prescriptionId: 안면마비처방.id, type: "퇴원약", productName: "Methylon 4mg", ingredientName: "methylprednisolone", dosage: "10", unit: "T", frequency: "QD", duration: "1일", route: "QD PC", note: "5일째 먹는 약", sortOrder: 0 },
    { prescriptionId: 안면마비처방.id, type: "퇴원약", productName: "Methylon 4mg", ingredientName: "methylprednisolone", dosage: "12", unit: "T", frequency: "QD", duration: "4일", route: "QD PC", note: "첫 4일 동안 먹을 약", sortOrder: 1 },
    { prescriptionId: 안면마비처방.id, type: "퇴원약", productName: "Almagel susp 15ml/pk", ingredientName: "aluminum hydroxide 등", dosage: "1", unit: "PK", frequency: "TID", duration: "5일", route: "TID PC2", sortOrder: 2 },

    // 지타코주
    { prescriptionId: 지타코주처방.id, type: "약", productName: "Gitako 17.5mg/5mL", ingredientName: "ginkgo leaf dried ex", dosage: "2", unit: "A", frequency: "1", route: "IV", note: "급성이명,난청,어지럼증 15분간", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 지타코주처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "급성이명,난청,어지럼증 15분간", sortOrder: 1, mixGroup: "M1" },

    // Hyperkalemia 치료
    { prescriptionId: 고칼륨혈증치료처방.id, type: "지시처방", productName: "ESRD or CKD : RI 5 unit 으로 바꾸기", sortOrder: 0 },
    { prescriptionId: 고칼륨혈증치료처방.id, type: "약", productName: "Calcium gluconate 2g/20ml (대한)", ingredientName: "Calcium gluconate", dosage: "1", unit: "A", frequency: "1", route: "IV", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 고칼륨혈증치료처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 2, mixGroup: "M1" },
    { prescriptionId: 고칼륨혈증치료처방.id, type: "약", productName: "Humulin R vial 1000unit/10ml", ingredientName: "insulin regular", dosage: "10", unit: "Unit", frequency: "1", route: "IV", sortOrder: 3, mixGroup: "M2" },
    { prescriptionId: 고칼륨혈증치료처방.id, type: "약", productName: "50% DW 100ml/Plastic", ingredientName: "Dextrose", dosage: "0.5", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 4, mixGroup: "M2" },
    { prescriptionId: 고칼륨혈증치료처방.id, type: "지시처방", productName: "Calcium Gluconate 투여 먼저해주세요", sortOrder: 5 },
    { prescriptionId: 고칼륨혈증치료처방.id, type: "약", productName: "Kalimate pow 5g", ingredientName: "Ca polystyrene Sulfonate", dosage: "10", unit: "PK", frequency: "1", route: "Rectal", note: "enema", sortOrder: 6 },
    { prescriptionId: 고칼륨혈증치료처방.id, type: "약", productName: "5% DW 200ml/Bag (JW중외)", ingredientName: "Dextrose", dosage: "1", unit: "Bag", frequency: "1", route: "Rectal", note: "enema", sortOrder: 7 },
    { prescriptionId: 고칼륨혈증치료처방.id, type: "지시처방", productName: "Drug Retention Enema", sortOrder: 8 },

    // Hypokalemia 치료
    { prescriptionId: 저칼륨혈증치료처방.id, type: "약", productName: "K-Contin 600mg", ingredientName: "KCl", dosage: "3", unit: "T", frequency: "1", route: "UT DICT (내복 1회)", note: "오렌지 주스에 섞어주세요", sortOrder: 0 },
    { prescriptionId: 저칼륨혈증치료처방.id, type: "약", productName: "Na K 200 100ml/PP", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "25ml/hr", sortOrder: 1 },
    { prescriptionId: 저칼륨혈증치료처방.id, type: "지시처방", productName: "PO 먹을수 있는 환자는 KCL powder/K-contin", sortOrder: 2 },
    { prescriptionId: 저칼륨혈증치료처방.id, type: "약", productName: "Na K 40 1000mL/Bag", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "100ml/hr", sortOrder: 3 },

    // Romeron
    { prescriptionId: 로메론처방.id, type: "약", productName: "Romeron 50mg/5mL", ingredientName: "rocuronium", dosage: "3.6", unit: "ml", frequency: "1", route: "IV", note: "IV bolus 시 0.6mg/kg", sortOrder: 0 },
    { prescriptionId: 로메론처방.id, type: "지시처방", productName: "continous", sortOrder: 1 },
    { prescriptionId: 로메론처방.id, type: "약", productName: "Romeron 50mg/5mL", ingredientName: "rocuronium", dosage: "1", unit: "A", frequency: "1", route: "IV", note: "mcg/kg/min CIV NMB", sortOrder: 2, mixGroup: "M1" },
    { prescriptionId: 로메론처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "mcg/kg/min CIV NMB", sortOrder: 3, mixGroup: "M1" },

    // needle stick injury(내원환자) lab
    { prescriptionId: 내원환자Lab처방.id, type: "혈액검사", productName: "RPR (syphilis)-정밀", note: "Serum, SST", sortOrder: 0 },
    { prescriptionId: 내원환자Lab처방.id, type: "지시처방", productName: "녹슨주사바늘, 토양, 분변, 오물, 타액 등에 오염된 상처 및 오염된 기구에 의한 천자의 경우에는 파상풍 조치 시행합니다", sortOrder: 1 },
    { prescriptionId: 내원환자Lab처방.id, type: "혈액검사", productName: "HBs Ag", note: "Serum, SST", sortOrder: 2 },
    { prescriptionId: 내원환자Lab처방.id, type: "혈액검사", productName: "Anti-HBs Ab", note: "Serum, SST", sortOrder: 3 },
    { prescriptionId: 내원환자Lab처방.id, type: "혈액검사", productName: "HCV Ab", note: "Serum, SST", sortOrder: 4 },
    { prescriptionId: 내원환자Lab처방.id, type: "혈액검사", productName: "HIV Ab/Ag", note: "Serum, SST", sortOrder: 5 },

    // needle stick injury(직원처방용) HIV(+) 처방약
    { prescriptionId: 직원HIV처방약처방.id, type: "약", productName: "Biktarvy", ingredientName: "bictegravir, emtricitabine, tenofovir alafenamide", dosage: "1", unit: "T", frequency: "QD", duration: "2일", route: "QD", sortOrder: 0 },

    // needle stick injury(직원처방용) Lab
    { prescriptionId: 직원Lab처방.id, type: "지시처방", productName: "녹슨주사바늘, 토양, 분변, 오물, 타액 등에 오염된 상처 및 오염된 기구에 의한 천자의 경우에는 파상풍 조치 시행합니다", sortOrder: 0 },
    { prescriptionId: 직원Lab처방.id, type: "혈액검사", productName: "HBs Ag", note: "Serum, SST", sortOrder: 1 },
    { prescriptionId: 직원Lab처방.id, type: "혈액검사", productName: "Anti-HBs Ab", note: "Serum, SST", sortOrder: 2 },
    { prescriptionId: 직원Lab처방.id, type: "혈액검사", productName: "HCV Ab", note: "Serum, SST", sortOrder: 3 },
    { prescriptionId: 직원Lab처방.id, type: "혈액검사", productName: "HIV Ab/Ag", note: "Serum, SST", sortOrder: 4 },

    // needle stick injury(직원처방용) 간염백신
    { prescriptionId: 간염백신처방.id, type: "약", productName: "Hepabig 200 unit/1ml", ingredientName: "Human antihepatitis B Immunoglobulin", dosage: "1", unit: "A", frequency: "1", route: "IM", note: "0.05ml/kg", sortOrder: 0 },

    // needle stick injury(환자처방용) Lab
    { prescriptionId: 환자Lab처방.id, type: "혈액검사", productName: "(자상조치용)HBs Ag", note: "Serum, SST", sortOrder: 0 },
    { prescriptionId: 환자Lab처방.id, type: "혈액검사", productName: "(자상조치용)HCV Ab", note: "Serum, SST", sortOrder: 1 },
    { prescriptionId: 환자Lab처방.id, type: "혈액검사", productName: "(자상조치용)HIV Ab", note: "Serum, SST", sortOrder: 2 },

    // 안약 산동제-Tropherin eye drop
    { prescriptionId: 산동제처방.id, type: "약", productName: "Tropherin eye drop 0.8ml/1EA", ingredientName: "phenylephrine HCl, tropicamide", dosage: "1", unit: "EA", frequency: "1", route: "Oph. DROP", sortOrder: 0 },

    // spinal cord injury(steroid)
    { prescriptionId: 척수손상스테로이드처방.id, type: "지시처방", productName: "1st 15분간 30mg/kg 을 15분 이상 동안 투여하세요", sortOrder: 0 },
    { prescriptionId: 척수손상스테로이드처방.id, type: "지시처방", productName: "2nd 45분 쉬고, 이후 5.4mg/kg/hr 속도로 23시간동안 투여하세요", sortOrder: 1 },
    { prescriptionId: 척수손상스테로이드처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "400ml/hr 1st", sortOrder: 2, mixGroup: "M1" },
    { prescriptionId: 척수손상스테로이드처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "21.6ml/hr 2nd", sortOrder: 3, mixGroup: "M2" },

    // 경련 01.status epilepticus
    { prescriptionId: 경련중첩증처방.id, type: "약", productName: "Ativan inj 2mg/0.5ml", ingredientName: "lorazepam", dosage: "1", unit: "A", frequency: "1", route: "IV", note: "2-4mg, slowly(2mg/min)", sortOrder: 0 },
    { prescriptionId: 경련중첩증처방.id, type: "약", productName: "Q-pam inj 500mg", ingredientName: "levetiracetam", dosage: "3", unit: "A", frequency: "1", route: "IV", note: "20-60mg/kg, 2-5mg/kg/min", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 경련중첩증처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 2, mixGroup: "M1" },
    { prescriptionId: 경련중첩증처방.id, type: "약", productName: "Orfiril 300mg/3ml", ingredientName: "valproic acid", dosage: "3", unit: "A", frequency: "1", route: "IV infusion", note: "20-60mg/kg", sortOrder: 3, mixGroup: "M2" },
    { prescriptionId: 경련중첩증처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 4, mixGroup: "M2" },
    { prescriptionId: 경련중첩증처방.id, type: "지시처방", productName: "Ativan 2-4mg 2번 주고 안되면 Q-pam 주고 NR call", sortOrder: 5 },
    { prescriptionId: 경련중첩증처방.id, type: "약", productName: "Phenobarbital 100mg/ml", ingredientName: "phenobarbital", dosage: "10", unit: "A", frequency: "1", route: "IV", note: "infusion pump로 3시간 동안", sortOrder: 6, mixGroup: "M3" },
    { prescriptionId: 경련중첩증처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "infusion pump로 3시간 동안", sortOrder: 7, mixGroup: "M3" },
    { prescriptionId: 경련중첩증처방.id, type: "지시처방", productName: "간질중첩증 심할경우 Q pam 60로 시작, 경한경우 기존의 30", sortOrder: 8 },
    { prescriptionId: 경련중첩증처방.id, type: "약", productName: "Q-pam inj 500mg", ingredientName: "levetiracetam", dosage: "6", unit: "A", frequency: "1", route: "IV", note: "20-60mg/kg, 2-5mg/kg/min", sortOrder: 9, mixGroup: "M4" },
    { prescriptionId: 경련중첩증처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 10, mixGroup: "M4" },

    // 피부과 BP낮거나 dyspnea-epinephrine
    { prescriptionId: BP낮음dyspnea처방.id, type: "약", productName: "Dexamethasone inj 5mg/mL", dosage: "1", unit: "A", frequency: "1", route: "IM", sortOrder: 0 },
    { prescriptionId: BP낮음dyspnea처방.id, type: "약", productName: "Peniramin 4mg/2ml", ingredientName: "chlorpheniramine", dosage: "1", unit: "A", frequency: "1", route: "IM", sortOrder: 1 },
    { prescriptionId: BP낮음dyspnea처방.id, type: "퇴원약", productName: "Methylon 4mg", ingredientName: "methylprednisolone", dosage: "1", unit: "T", frequency: "BID", duration: "3일", route: "BID PC", sortOrder: 2 },
    { prescriptionId: BP낮음dyspnea처방.id, type: "퇴원약", productName: "Gaster D 20mg", ingredientName: "famotidine", dosage: "1", unit: "T", frequency: "BID", duration: "3일", route: "BID PC", sortOrder: 3 },
    { prescriptionId: BP낮음dyspnea처방.id, type: "퇴원약", productName: "Ebastel 10mg", ingredientName: "ebastine", dosage: "1", unit: "T", frequency: "QD", duration: "3일", route: "QD", sortOrder: 4 },

    // 피부과 Ulticaria(severe)
    { prescriptionId: 두드러기중증처방.id, type: "지시처방", productName: "wheezing 있거나 호흡곤란 심할 경우 nebulizer 주지마세요", sortOrder: 0 },
    { prescriptionId: 두드러기중증처방.id, type: "지시처방", productName: "Gaster는 H-blocker에 의한 allergy 의심시 주지마세요", sortOrder: 1 },
    { prescriptionId: 두드러기중증처방.id, type: "약", productName: "Epinephrine 1mg/1ml", dosage: "0.3", unit: "A", frequency: "1", route: "IM", note: "anaphylaxis 때만 주세요", sortOrder: 2 },
    { prescriptionId: 두드러기중증처방.id, type: "약", productName: "Gaster inj 20mg/10mL", ingredientName: "famotidine", dosage: "1", unit: "A", frequency: "1", route: "IV", sortOrder: 3 },
    { prescriptionId: 두드러기중증처방.id, type: "약", productName: "Peniramin 4mg/2ml", ingredientName: "chlorpheniramine", dosage: "1", unit: "A", frequency: "1", route: "IV", sortOrder: 4 },
    { prescriptionId: 두드러기중증처방.id, type: "약", productName: "Dexamethasone inj 5mg/mL", dosage: "1", unit: "A", frequency: "1", route: "IV", sortOrder: 5 },
    { prescriptionId: 두드러기중증처방.id, type: "약", productName: "NS 500ml/Bag", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "120ml/hr", sortOrder: 6 },
    { prescriptionId: 두드러기중증처방.id, type: "약", productName: "Peniramin 2mg", ingredientName: "chlorpheniramine", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 7 },
    { prescriptionId: 두드러기중증처방.id, type: "약", productName: "Gaster D 20mg", ingredientName: "famotidine", dosage: "1", unit: "T", frequency: "BID", duration: "3일", route: "BID PC", sortOrder: 8 },
    { prescriptionId: 두드러기중증처방.id, type: "약", productName: "Predisol 125mg", ingredientName: "methylprednisolone", dosage: "0.5", unit: "A", frequency: "1", route: "IV infusion", sortOrder: 9, mixGroup: "M1" },
    { prescriptionId: 두드러기중증처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 10, mixGroup: "M1" },
    { prescriptionId: 두드러기중증처방.id, type: "약", productName: "Dexamethasone tab 0.5mg", dosage: "1", unit: "T", frequency: "QD", duration: "3일", route: "QD", sortOrder: 11 },
    { prescriptionId: 두드러기중증처방.id, type: "약", productName: "Atrovent UDV 500mcg/2ml", ingredientName: "ipratropium", dosage: "1", unit: "A", frequency: "1", route: "Aerosol", sortOrder: 12 },
    { prescriptionId: 두드러기중증처방.id, type: "약", productName: "Ventolin nebul 2.5mg/2.5ml", ingredientName: "salbutamol", dosage: "1", unit: "A", frequency: "1", route: "Aerosol", sortOrder: 13 },

    // 피부과 대상포진
    { prescriptionId: 대상포진처방.id, type: "퇴원약", productName: "Methylon 4mg", ingredientName: "methylprednisolone", dosage: "2", unit: "T", frequency: "QD", duration: "3일", route: "QD PC", sortOrder: 0 },
    { prescriptionId: 대상포진처방.id, type: "퇴원약", productName: "Gaster D 20mg", ingredientName: "famotidine", dosage: "1", unit: "T", frequency: "BID", duration: "3일", route: "BID PC", sortOrder: 1 },
    { prescriptionId: 대상포진처방.id, type: "퇴원약", productName: "Ebastel 10mg", ingredientName: "ebastine", dosage: "1", unit: "T", frequency: "QD", duration: "3일", route: "QD", sortOrder: 2 },
    { prescriptionId: 대상포진처방.id, type: "퇴원약", productName: "Brufen 200mg", ingredientName: "ibuprofen", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 3 },
    { prescriptionId: 대상포진처방.id, type: "약", productName: "Tramadol inj 50mg/1ml", ingredientName: "tramadol", dosage: "1", unit: "A", frequency: "1", route: "IM", sortOrder: 4 },

    // Asthma medication
    { prescriptionId: 천식약물처방.id, type: "약", productName: "Ventolin nebul 2.5mg/2.5ml", ingredientName: "salbutamol", dosage: "1", unit: "A", frequency: "1", route: "Aerosol", note: "15분 간격", sortOrder: 0 },
    { prescriptionId: 천식약물처방.id, type: "약", productName: "Atrovent UDV 500mcg/2ml", ingredientName: "ipratropium", dosage: "1", unit: "A", frequency: "1", route: "Aerosol", sortOrder: 1 },
    { prescriptionId: 천식약물처방.id, type: "약", productName: "Predisol 125mg", ingredientName: "methylprednisolone", dosage: "40", unit: "mg", frequency: "1", route: "IV infusion", sortOrder: 2 },
    { prescriptionId: 천식약물처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 3, mixGroup: "M1" },
    { prescriptionId: 천식약물처방.id, type: "약", productName: "Aroxol inj 15mg/2mL", ingredientName: "ambroxol", dosage: "1", unit: "A", frequency: "1", route: "IV", sortOrder: 4, mixGroup: "M1" },

    // Asthma 퇴원약
    { prescriptionId: 천식퇴원약처방.id, type: "퇴원약", productName: "Asima 400mg", ingredientName: "doxofylline", dosage: "1", unit: "T", frequency: "BID", duration: "3일", route: "BID PC", sortOrder: 0 },
    { prescriptionId: 천식퇴원약처방.id, type: "퇴원약", productName: "Ventolin evohaler 200Dose", ingredientName: "salbutamol 0.1mg/dose", dosage: "1", unit: "EA", frequency: "1", route: "Aerosol", sortOrder: 1 },
    { prescriptionId: 천식퇴원약처방.id, type: "퇴원약", productName: "Selbex cap 50mg", ingredientName: "teprenone", dosage: "1", unit: "C", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 2 },

    // NAC protocol (AAP toxic)
    { prescriptionId: AAP중독처방.id, type: "지시처방", productName: "60kg 기준", sortOrder: 0 },
    { prescriptionId: AAP중독처방.id, type: "지시처방", productName: "1st 150mg/kg, 2nd 50mg/kg, 3rd 100mg/kg", sortOrder: 1 },
    { prescriptionId: AAP중독처방.id, type: "약", productName: "Muratic 300mg/3mL", ingredientName: "acetylcysteine", dosage: "1", unit: "A", frequency: "1", route: "IV", note: "1st 150mg/kg ★amp용량변경", sortOrder: 2, mixGroup: "M1" },
    { prescriptionId: AAP중독처방.id, type: "약", productName: "5% DW 200ml/Bag (JW중외)", ingredientName: "Dextrose", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 3, mixGroup: "M1" },
    { prescriptionId: AAP중독처방.id, type: "약", productName: "Muratic 300mg/3mL", ingredientName: "acetylcysteine", dosage: "1", unit: "A", frequency: "1", route: "IV", note: "2nd 50mg/kg ★amp용량변경", sortOrder: 4, mixGroup: "M2" },
    { prescriptionId: AAP중독처방.id, type: "약", productName: "5% DW 500mL/Bag (JW중외)", ingredientName: "Dextrose", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "2nd 4시간 동안 투여", sortOrder: 5, mixGroup: "M2" },
    { prescriptionId: AAP중독처방.id, type: "약", productName: "Muratic 300mg/3mL", ingredientName: "acetylcysteine", dosage: "1", unit: "A", frequency: "1", route: "IV", note: "3rd 100mg/kg ★amp용량변경", sortOrder: 6, mixGroup: "M3" },
    { prescriptionId: AAP중독처방.id, type: "약", productName: "5% DW 1000ml/Bag", ingredientName: "Dextrose", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "3rd 16시간 동안", sortOrder: 7, mixGroup: "M3" },

    // Thiamine (wernicke 의심)
    { prescriptionId: 티아민처방.id, type: "약", productName: "Thiamine 50mg/2ml", ingredientName: "thiamine", dosage: "10", unit: "A", frequency: "1", route: "IV", note: "30분간 천천히", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 티아민처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 1, mixGroup: "M1" },

    // BP 높음 perdipin
    { prescriptionId: 퍼디핀처방.id, type: "약", productName: "Perdipin 10mg/10ml", ingredientName: "nicardipine", dosage: "0.2", unit: "A", frequency: "1", route: "IV infusion", sortOrder: 0 },
    { prescriptionId: 퍼디핀처방.id, type: "약", productName: "Perdipin 10mg/10ml", ingredientName: "nicardipine", dosage: "5", unit: "A", frequency: "1", route: "IV infusion", note: "1mg/hr->2ml/hr continous", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 퍼디핀처방.id, type: "약", productName: "NS 50mL/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 2, mixGroup: "M1" },

    // BP 높음 NTG(HF인 경우)
    { prescriptionId: NTG처방.id, type: "약", productName: "Nitrolingual 50mg/50ml", ingredientName: "nitroglycerin", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", note: "3cc/hr (HF인경우)", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: NTG처방.id, type: "약", productName: "5% DW 200ml/Bag (JW중외)", ingredientName: "Dextrose", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "3cc/hr (HF인경우)", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: NTG처방.id, type: "약", productName: "Nitroglycerin 0.6mg", ingredientName: "Nitroglycerin", dosage: "1", unit: "T", frequency: "1", route: "UT DICT (내복 1회)", note: "SL", sortOrder: 2 },

    // Hepatic encephalopathy Lactulose enema
    { prescriptionId: 락툴로오스관장처방.id, type: "약", productName: "5% Sorbitol 500ml/Bag", ingredientName: "Sorbitol", dosage: "0.4", unit: "BT", frequency: "1", route: "Suppl", sortOrder: 0 },
    { prescriptionId: 락툴로오스관장처방.id, type: "약", productName: "Duphalac Syr 1ml", ingredientName: "lactulose", dosage: "300", unit: "ml", frequency: "1", route: "Suppl", sortOrder: 1 },
    { prescriptionId: 락툴로오스관장처방.id, type: "지시처방", productName: "Drug Retention Enema", sortOrder: 2 },

    // Hepatic encephalopathy 퇴원약
    { prescriptionId: 간성뇌증퇴원약처방.id, type: "퇴원약", productName: "Normix 200mg", ingredientName: "Rifaximin", dosage: "2", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 0 },
    { prescriptionId: 간성뇌증퇴원약처방.id, type: "퇴원약", productName: "Dulackhan-Easy syr 15ml/PK", ingredientName: "lactulose", dosage: "1", unit: "PK", frequency: "BID", duration: "3일", route: "BID PC", sortOrder: 1 },

    // DKA management
    { prescriptionId: DKA관리처방.id, type: "지시처방", productName: "main fluid replacement: -1000 mL normal saline first hour, -plasma glucose <= 200 mg/dL이면 5%DW/0.45% saline으로 main fluid 교체하고 insulin rate를 0.05 U/kg/hr로 감량한다", sortOrder: 0 },
    { prescriptionId: DKA관리처방.id, type: "지시처방", productName: "potassium replacement: K+ > 5.0 mEq/L : no supplementation", sortOrder: 1 },
    { prescriptionId: DKA관리처방.id, type: "지시처방", productName: "Bicarbonate: 6.9<pH<7.0 or bicarbonate<5 mEq/L이면 50 mEq in 200mL of H2O (1시간)", sortOrder: 2 },
    { prescriptionId: DKA관리처방.id, type: "지시처방", productName: "If K<3.3, No insulin pump, KCL 투여", sortOrder: 3 },
    { prescriptionId: DKA관리처방.id, type: "지시처방", productName: "If 3.3<K<5.3, Insulin pump start, KCL 투여", sortOrder: 4 },
    { prescriptionId: DKA관리처방.id, type: "지시처방", productName: "If K> 5.3, Insuline pump start, Calcium start, No KCL", sortOrder: 5 },
    { prescriptionId: DKA관리처방.id, type: "지시처방", productName: "라인 잡아주세요", sortOrder: 6 },
    { prescriptionId: DKA관리처방.id, type: "약", productName: "Humulin R vial 1000unit/10ml", ingredientName: "insulin regular", dosage: "6", unit: "Unit", frequency: "1", route: "IV infusion", note: "0.1U/kg IV bolus", sortOrder: 7 },
    { prescriptionId: DKA관리처방.id, type: "약", productName: "Humulin R vial 1000unit/10ml", ingredientName: "insulin regular", dosage: "100", unit: "Unit", frequency: "1", route: "IV", note: "0.1 unit/kg/hr. Pump 연결해주세요", sortOrder: 8, mixGroup: "M1" },
    { prescriptionId: DKA관리처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 9, mixGroup: "M1" },
    { prescriptionId: DKA관리처방.id, type: "약", productName: "Calcium gluconate 2g/20ml", ingredientName: "Calcium gluconate", dosage: "1", unit: "A", frequency: "1", route: "IV", note: "3세트에 걸쳐주세요", sortOrder: 10, mixGroup: "M2" },
    { prescriptionId: DKA관리처방.id, type: "약", productName: "NS 100ml/PP", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 11, mixGroup: "M2" },
    { prescriptionId: DKA관리처방.id, type: "약", productName: "KCl 40mEq/20ml", ingredientName: "potassium chloride", dosage: "0.5", unit: "A", frequency: "1", route: "IV infusion", note: "K < 5.3 시 mix", sortOrder: 12, mixGroup: "M3" },
    { prescriptionId: DKA관리처방.id, type: "약", productName: "KCl 40mEq/20ml", ingredientName: "potassium chloride", dosage: "0.5", unit: "A", frequency: "1", route: "IV infusion", note: "K < 5.3 시 mix", sortOrder: 13, mixGroup: "M4" },
    { prescriptionId: DKA관리처방.id, type: "약", productName: "Sodium bicarbonate 20meq/20ml", dosage: "5", unit: "A", frequency: "1", route: "IV infusion", note: "pH 6.9 시 apply", sortOrder: 14, mixGroup: "M5" },
    { prescriptionId: DKA관리처방.id, type: "지시처방", productName: "bivon continous 처방", sortOrder: 15 },
    { prescriptionId: DKA관리처방.id, type: "약", productName: "5% DW 1000mL/Bag", ingredientName: "Dextrose", dosage: "800", unit: "ml", frequency: "1", route: "IV infusion", note: "100ml/hr total 1L", sortOrder: 16, mixGroup: "M6" },
    { prescriptionId: DKA관리처방.id, type: "약", productName: "Sodium bicarbonate 20meq/20ml", dosage: "10", unit: "A", frequency: "1", route: "IV infusion", note: "100ml/hr total 1L", sortOrder: 17, mixGroup: "M6" },
    { prescriptionId: DKA관리처방.id, type: "혈액검사", productName: "혈중베타케톤(β-hydroxybutyrate)", note: "Capillary Blood,Heparinized", sortOrder: 18 },

    // 측과 leukopenia 오더
    { prescriptionId: 백혈구감소오더처방.id, type: "혈액검사", productName: "Reticulocyte panel", note: "WB, EDTA", sortOrder: 0 },
    { prescriptionId: 백혈구감소오더처방.id, type: "혈액검사", productName: "PB Morphology", note: "WB, EDTA", sortOrder: 1 },
    { prescriptionId: 백혈구감소오더처방.id, type: "혈액검사", productName: "EBV VCA IgG", note: "Serum, SST", sortOrder: 2 },
    { prescriptionId: 백혈구감소오더처방.id, type: "혈액검사", productName: "EBV VCA IgM", note: "Serum, SST", sortOrder: 3 },
    { prescriptionId: 백혈구감소오더처방.id, type: "혈액검사", productName: "CMV (cytomegalovirus) PCR", note: "WB, EDTA", sortOrder: 4 },
    { prescriptionId: 백혈구감소오더처방.id, type: "혈액검사", productName: "HSV PCR(type I/II)", note: "WB, EDTA", sortOrder: 5 },
    { prescriptionId: 백혈구감소오더처방.id, type: "혈액검사", productName: "Parvovirus B19 PCR", note: "WB, EDTA", sortOrder: 6 },
    { prescriptionId: 백혈구감소오더처방.id, type: "혈액검사", productName: "EBV EA IgG", note: "Serum, SST", sortOrder: 7 },
    { prescriptionId: 백혈구감소오더처방.id, type: "혈액검사", productName: "EBV EA IgM", note: "Serum, SST", sortOrder: 8 },
    { prescriptionId: 백혈구감소오더처방.id, type: "혈액검사", productName: "CMV-IgG", note: "Serum, SST", sortOrder: 9 },
    { prescriptionId: 백혈구감소오더처방.id, type: "혈액검사", productName: "CMV-IgM", note: "Serum, SST", sortOrder: 10 },

    // para sono / lab
    { prescriptionId: 복수천자검사처방.id, type: "혈액검사", productName: "(체액)Albumin", note: "ascite", sortOrder: 0 },
    { prescriptionId: 복수천자검사처방.id, type: "혈액검사", productName: "(체액)Amylase", note: "ascite", sortOrder: 1 },
    { prescriptionId: 복수천자검사처방.id, type: "혈액검사", productName: "(체액)Routine body fluid", note: "Ascitic fluid", sortOrder: 2 },
    { prescriptionId: 복수천자검사처방.id, type: "혈액검사", productName: "(체액) T. Protein", note: "ascite", sortOrder: 3 },
    { prescriptionId: 복수천자검사처방.id, type: "혈액검사", productName: "(체액)LDH", note: "ascite", sortOrder: 4 },
    { prescriptionId: 복수천자검사처방.id, type: "혈액검사", productName: "(체액)Glucose", note: "ascite", sortOrder: 5 },
    { prescriptionId: 복수천자검사처방.id, type: "혈액검사", productName: "Gram stain & culture & sensitivity", note: "Ascitic fluid", sortOrder: 6 },
    { prescriptionId: 복수천자검사처방.id, type: "혈액검사", productName: "체액 검사(Fluid/Cytospin) + Cell block제작", note: "ascite", sortOrder: 7 },
    { prescriptionId: 복수천자검사처방.id, type: "지시처방", productName: "복막 천자용 sono-site marking용 (응급센터에서 시행)", sortOrder: 8 },

    // 복막투석액 검사(신장내과 요청받음)
    { prescriptionId: 복막투석액검사처방.id, type: "혈액검사", productName: "Gram stain & culture & sensitivity", note: "Dialysis fluid", sortOrder: 0 },
    { prescriptionId: 복막투석액검사처방.id, type: "혈액검사", productName: "(체액)Routine body fluid", note: "Dialysis fluid", sortOrder: 1 },

    // malaria 검사
    { prescriptionId: 말라리아검사처방.id, type: "혈액검사", productName: "Malaria Screening Panel", note: "1시간후 검사 결과 나옴, WB, EDTA", sortOrder: 0 },
    { prescriptionId: 말라리아검사처방.id, type: "혈액검사", productName: "Malaria PCR (4종)", note: "WB, EDTA", sortOrder: 1 },
    { prescriptionId: 말라리아검사처방.id, type: "지시처방", productName: "항원검사 KIT 확진후", sortOrder: 2 },
    { prescriptionId: 말라리아검사처방.id, type: "혈액검사", productName: "PB Morphology", note: "WB, EDTA", sortOrder: 3 },

    // 소아과 퇴원약 해열제
    { prescriptionId: 소아해열제처방.id, type: "퇴원약", productName: "Setopen susp", ingredientName: "acetaminophen 32mg/ml", dosage: "4", unit: "ml", frequency: "3", duration: "3일", route: "UT DICT (내복 3회)", note: "해열제 두 종류 이상 처방시 4시간 간격으로 투여", sortOrder: 0 },
    { prescriptionId: 소아해열제처방.id, type: "퇴원약", productName: "Brufen syr", ingredientName: "ibuprofen 20mg/ml", dosage: "4", unit: "ml", frequency: "3", duration: "3일", route: "UT DICT (내복 3회)", note: "해열제 두 종류 이상 처방시 4시간 간격으로 투여", sortOrder: 1 },

    // 소아과 퇴원약 기침/가래
    { prescriptionId: 소아기침가래처방.id, type: "퇴원약", productName: "Mucosol 8mg", ingredientName: "bromhexine", dosage: "0.33", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", note: "1일량 1T(10kg 기준)", sortOrder: 0 },
    { prescriptionId: 소아기침가래처방.id, type: "퇴원약", productName: "Atock dry syr", ingredientName: "formoterol 40mcg/1g", dosage: "0.5", unit: "g", frequency: "BID", duration: "3일", route: "BID PC", note: "1일량 1g/10kg", sortOrder: 1 },
    { prescriptionId: 소아기침가래처방.id, type: "퇴원약", productName: "Dropizin syr", ingredientName: "levodropropizine 6mg/mL", dosage: "2", unit: "ml", frequency: "TID", duration: "3일", route: "TID PC", note: "1일량 6ml/10kg", sortOrder: 2 },
    { prescriptionId: 소아기침가래처방.id, type: "퇴원약", productName: "Karben syr", ingredientName: "ambroxol 1.5mg/ml", dosage: "5", unit: "ml", frequency: "BID", duration: "3일", route: "BID PC", note: "1일량 1ml/kg", sortOrder: 3 },
    { prescriptionId: 소아기침가래처방.id, type: "지시처방", productName: "기관지확장제 패치 처방 (연령에 따라)", sortOrder: 4 },
    { prescriptionId: 소아기침가래처방.id, type: "퇴원약", productName: "Nottemon patch 0.5mg", ingredientName: "tulobuterol", dosage: "1", unit: "Patch", frequency: "1", route: "PM8", note: "6개월~3세", sortOrder: 5 },
    { prescriptionId: 소아기침가래처방.id, type: "퇴원약", productName: "Nottemon patch 1mg", ingredientName: "tulobuterol", dosage: "1", unit: "Patch", frequency: "1", route: "PM8", note: "3세~9세", sortOrder: 6 },
    { prescriptionId: 소아기침가래처방.id, type: "퇴원약", productName: "Nottemon patch 2mg", ingredientName: "tulobuterol", dosage: "1", unit: "Patch", frequency: "1", route: "PM8", note: "9세 이상", sortOrder: 7 },

    // 소아과 퇴원약 콧물
    { prescriptionId: 소아콧물처방.id, type: "퇴원약", productName: "Peniramin 2mg", ingredientName: "chlorpheniramine", dosage: "0.33", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", note: "1일량 1T/10kg", sortOrder: 0 },

    // 소아과 퇴원약 구토/변비
    { prescriptionId: 소아구토변비처방.id, type: "퇴원약", productName: "Polybutine syr", ingredientName: "trimebutine maleate", dosage: "5", unit: "ml", frequency: "BID", duration: "3일", route: "BID PC", note: "1일량 1ml/kg", sortOrder: 0 },
    { prescriptionId: 소아구토변비처방.id, type: "퇴원약", productName: "Dulackhan Syr 1ml", ingredientName: "lactulose", dosage: "5", unit: "ml", frequency: "TID", duration: "3일", route: "TID PC", note: "약품팁 참고", sortOrder: 1 },

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

    // 소아과 퇴원약 항생제
    { prescriptionId: 소아항생제처방.id, type: "퇴원약", productName: "Banan dry syr", ingredientName: "cefpodoxime 10mg/ml", dosage: "3", unit: "ml", frequency: "TID", duration: "3일", route: "TID Q8", note: "1일량 0.9ml/kg", sortOrder: 0 },
    { prescriptionId: 소아항생제처방.id, type: "퇴원약", productName: "Amocla neo syr", ingredientName: "amoxicillin, clavulanate 14:1", dosage: "4", unit: "ml", frequency: "BID", duration: "3일", route: "BID Q12", note: "약품팁 참고", sortOrder: 1 },
    { prescriptionId: 소아항생제처방.id, type: "지시처방", productName: "Rulid: 6-11kg 1회 25mg BID, 12-23kg 50mg, 24-40kg 100mg, 40kg 초과 150mg", sortOrder: 2 },
    { prescriptionId: 소아항생제처방.id, type: "퇴원약", productName: "Rulid 150mg", ingredientName: "roxithromycin", dosage: "1", unit: "T", frequency: "BID", duration: "5일", route: "BID PC", sortOrder: 3 },

    // 소아과 퇴원약 설사
    { prescriptionId: 소아설사처방.id, type: "퇴원약", productName: "Bioflor 250 pow", ingredientName: "Saccharomyces cerebiciae Hanssen CBS5926균", dosage: "1", unit: "PK", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 0 },
    { prescriptionId: 소아설사처방.id, type: "퇴원약", productName: "Medilac-S pow", dosage: "1", unit: "G", frequency: "BID", duration: "3일", route: "BID PC", note: "3개월-3세: 1회 1g씩 1-2회", sortOrder: 1 },
    { prescriptionId: 소아설사처방.id, type: "퇴원약", productName: "Medilac-DS cap 250mg", dosage: "1", unit: "C", frequency: "TID", duration: "3일", route: "TID PC", note: "알약", sortOrder: 2 },

    // 소아과 Routine Lab
    { prescriptionId: 소아루틴랩처방.id, type: "지시처방", productName: "urination 확인해 주세요", sortOrder: 0 },
    { prescriptionId: 소아루틴랩처방.id, type: "지시처방", productName: "BST 60미만 -> 소아과 바로 noti", sortOrder: 1 },
    { prescriptionId: 소아루틴랩처방.id, type: "약", productName: "NS(500ml/Bag)", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "200ml/hr 속도 -> 20cc/kg urination 후 수액유지속도", sortOrder: 2 },
    { prescriptionId: 소아루틴랩처방.id, type: "지시처방", productName: "10kg 미만 30cc/hr, 10-15kg 45cc/hr, 15-20kg 55cc/hr, 20-25kg 65cc/hr, 25-30kg 70cc/hr, 30-40kg 80cc/hr, 40kg 이상 100cc/hr", sortOrder: 3 },
    { prescriptionId: 소아루틴랩처방.id, type: "혈액검사", productName: "CBC with diff count & ESR", note: "WB, EDTA", sortOrder: 4 },
    { prescriptionId: 소아루틴랩처방.id, type: "혈액검사", productName: "CRP(정량)", note: "Plasma, PST", sortOrder: 5 },
    { prescriptionId: 소아루틴랩처방.id, type: "혈액검사", productName: "Routine U/A with microscope", note: "Urine, Random", sortOrder: 6 },
    { prescriptionId: 소아루틴랩처방.id, type: "혈액검사", productName: "Renal Battery(11종-TCO 2포함)(ER,IMN전용)", note: "Plasma, PST", sortOrder: 7 },
    { prescriptionId: 소아루틴랩처방.id, type: "혈액검사", productName: "Lipase", note: "Plasma, PST", sortOrder: 8 },
    { prescriptionId: 소아루틴랩처방.id, type: "혈액검사", productName: "γ-GT", note: "Plasma, PST", sortOrder: 9 },
    { prescriptionId: 소아루틴랩처방.id, type: "영상검사", productName: "Chest 1P [PA]", sortOrder: 10 },
    { prescriptionId: 소아루틴랩처방.id, type: "영상검사", productName: "Abdomen 2P [Erect, Supine]", sortOrder: 11 },
    { prescriptionId: 소아루틴랩처방.id, type: "혈액검사", productName: "Liver & Lipid Battery", note: "Plasma, PST", sortOrder: 12 },

    // 소아과 Seizure Lab
    { prescriptionId: 소아씨저랩처방.id, type: "지시처방", productName: "BST 확인 부탁드립니다", sortOrder: 0 },
    { prescriptionId: 소아씨저랩처방.id, type: "약", productName: "NS(500ml/Bag)", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "200ml/hr 속도 -> 20cc/kg urination 후 수액유지속도", sortOrder: 1 },
    { prescriptionId: 소아씨저랩처방.id, type: "지시처방", productName: "10kg 미만 30cc/hr, 10-15kg 45cc/hr, 15-20kg 55cc/hr, 20-25kg 65cc/hr, 25-30kg 70cc/hr, 30-40kg 80cc/hr, 40kg 이상 100cc/hr", sortOrder: 2 },
    { prescriptionId: 소아씨저랩처방.id, type: "혈액검사", productName: "Ammonia", note: "Heparinized WB, Vein", sortOrder: 3 },
    { prescriptionId: 소아씨저랩처방.id, type: "혈액검사", productName: "CBC with diff count & ESR", note: "WB, EDTA", sortOrder: 4 },
    { prescriptionId: 소아씨저랩처방.id, type: "혈액검사", productName: "Lactic acid(Lactate)", note: "Heparinized WB, Vein", sortOrder: 5 },
    { prescriptionId: 소아씨저랩처방.id, type: "혈액검사", productName: "CRP(정량)", note: "Plasma, PST", sortOrder: 6 },
    { prescriptionId: 소아씨저랩처방.id, type: "혈액검사", productName: "Mg", note: "Plasma, PST", sortOrder: 7 },
    { prescriptionId: 소아씨저랩처방.id, type: "혈액검사", productName: "Uric Acid", note: "Plasma, PST", sortOrder: 8 },
    { prescriptionId: 소아씨저랩처방.id, type: "혈액검사", productName: "Routine U/A with microscope", note: "Urine, Random", sortOrder: 9 },
    { prescriptionId: 소아씨저랩처방.id, type: "혈액검사", productName: "Renal Battery(11종-TCO 2포함)(ER,IMN전용)", note: "Plasma, PST", sortOrder: 10 },
    { prescriptionId: 소아씨저랩처방.id, type: "혈액검사", productName: "ABGA 5(응급실전용)", note: "Heparinized WB, Artery", sortOrder: 11 },
    { prescriptionId: 소아씨저랩처방.id, type: "영상검사", productName: "Chest 1P [PA]", sortOrder: 12 },
    { prescriptionId: 소아씨저랩처방.id, type: "혈액검사", productName: "Liver & Lipid Battery", note: "Plasma, PST", sortOrder: 13 },

    // Fever
    { prescriptionId: 소아Fever처방.id, type: "지시처방", productName: "Setopen 4-11mo(7-9.9kg): 2.5ml/80mg, 12-23mo(10-11.9kg): 3.5ml/120mg", sortOrder: 0 },
    { prescriptionId: 소아Fever처방.id, type: "약", productName: "Setopen susp", ingredientName: "acetaminophen 32mg/ml", dosage: "1", unit: "ml", frequency: "1", route: "UT DICT (내복 1회)", note: "해열제 두 종류 이상 처방시 4시간 간격으로 투여", sortOrder: 1 },
    { prescriptionId: 소아Fever처방.id, type: "약", productName: "Brufen syr", ingredientName: "ibuprofen 20mg/ml", dosage: "1", unit: "ml", frequency: "1", route: "UT DICT (내복 1회)", note: "해열제 두 종류 이상 처방시 4시간 간격으로 투여", sortOrder: 2 },

    // APT
    { prescriptionId: 소아APT처방.id, type: "퇴원약", productName: "Augmentin syr", ingredientName: "amoxicillin, clavulanate 4:1", dosage: "1", unit: "ml", frequency: "TID", duration: "3일", route: "TID Q8", note: "1ml/kg TID", sortOrder: 0 },
    { prescriptionId: 소아APT처방.id, type: "퇴원약", productName: "Maxibupen syr", ingredientName: "Dexibuprofen 12mg/ml", dosage: "1", unit: "ml", frequency: "1", duration: "3일", route: "UT DICT (내복 1회)", note: "0.375cc/kg", sortOrder: 1 },

    // Croup
    { prescriptionId: 소아Croup처방.id, type: "영상검사", productName: "Neck 2P [AP, Lat]", note: "hyper-extention", sortOrder: 0 },
    { prescriptionId: 소아Croup처방.id, type: "약", productName: "Dexamethasone inj 5mg/mL", dosage: "1", unit: "A", frequency: "1", route: "IM", note: "0.3-0.6mg/kg", sortOrder: 1 },
    { prescriptionId: 소아Croup처방.id, type: "지시처방", productName: "덱사메타손 PO, IM, IV 가능, 보통 10kg 기준 1A", sortOrder: 2 },
    { prescriptionId: 소아Croup처방.id, type: "약", productName: "Bosmin Soln 100mL/BT", ingredientName: "epinephrine 1mg/ml", dosage: "2.5", unit: "ml", frequency: "1", route: "Aerosol", note: "kg당 기준 확인 필요", sortOrder: 3 },
    { prescriptionId: 소아Croup처방.id, type: "약", productName: "Pulmicort Respule 500mcg/2ml", ingredientName: "Budesonide", dosage: "1", unit: "A", frequency: "1", route: "Aerosol", note: "1세 미만 0.5A, 1세 이상 1A", sortOrder: 4 },
    { prescriptionId: 소아Croup처방.id, type: "약", productName: "Dexamethasone inj 5mg/mL", dosage: "1", unit: "A", frequency: "1", route: "IV", note: "0.3-0.6mg/kg", sortOrder: 5 },

    // Asthma (소아과)
    { prescriptionId: 소아Asthma처방.id, type: "약", productName: "Ventolin nebul 2.5mg/2.5ml", ingredientName: "salbutamol", dosage: "1", unit: "A", frequency: "1", route: "Aerosol", note: "0.12mg/kg", sortOrder: 0 },
    { prescriptionId: 소아Asthma처방.id, type: "약", productName: "Pulmicort Respule 500mcg/2ml", ingredientName: "Budesonide", dosage: "1", unit: "A", frequency: "1", route: "Aerosol", note: "1세 미만 0.5A, 1세 이상 1A", sortOrder: 1 },

    // Urticaria (소아과)
    { prescriptionId: 소아Urticaria처방.id, type: "약", productName: "Peniramin 4mg/2ml", ingredientName: "chlorpheniramine", dosage: "1", unit: "A", frequency: "1", route: "IM", note: "0.035ml/kg", sortOrder: 0 },
    { prescriptionId: 소아Urticaria처방.id, type: "퇴원약", productName: "Doodrizine syr", ingredientName: "hydroxyzine 2mg/ml", dosage: "1", unit: "ml", frequency: "TID", duration: "3일", route: "TID PC", note: "0.33ml/kg*3", sortOrder: 1 },

    // Constipation
    { prescriptionId: 소아Constipation처방.id, type: "지시처방", productName: "성인: 처음 2-3일간 1일 15-30mL 아침식전에 경구투여. 그 후 계속 1일 10-15mL 투여. 심할 경우 45mL까지 투여.", sortOrder: 0 },
    { prescriptionId: 소아Constipation처방.id, type: "지시처방", productName: "영아(1-6개월): 1일 5-10mL 투여.", sortOrder: 1 },
    { prescriptionId: 소아Constipation처방.id, type: "지시처방", productName: "소아(7-14세): 처음 2-3일 1일 15mL 투여. 그 후 계속 1일 10mL 투여.", sortOrder: 2 },
    { prescriptionId: 소아Constipation처방.id, type: "약", productName: "Duphalac-Easy syr 1ml", ingredientName: "lactulose", dosage: "1", unit: "ml", frequency: "1", route: "QD AC", sortOrder: 3 },
    { prescriptionId: 소아Constipation처방.id, type: "약", productName: "Biofor 250 pow", ingredientName: "Saccharomyces cerebiciae Hanssen CBS5926균", dosage: "1", unit: "PK", frequency: "TID", route: "TID Q8", note: "2일", sortOrder: 4 },
    { prescriptionId: 소아Constipation처방.id, type: "영상검사", productName: "Abdomen 2P [Erect, Supine]", sortOrder: 5 },
    { prescriptionId: 소아Constipation처방.id, type: "지시처방", productName: "Glycerin Enema", sortOrder: 6 },

    // Seizure (소아과)
    { prescriptionId: 소아Seizure경련처방.id, type: "약", productName: "Ativan inj 2mg/0.5ml", ingredientName: "lorazepam", dosage: "1", unit: "A", frequency: "1", route: "IV", note: "0.1mg/kg : do not exceed 4mg", sortOrder: 0 },

    // 심장OP 환아 추가 Lab
    { prescriptionId: 심장OP환아랩처방.id, type: "혈액검사", productName: "ABGA 4(응급실전용)", note: "Heparinized WB, Artery / VBGA", sortOrder: 0 },
    { prescriptionId: 심장OP환아랩처방.id, type: "혈액검사", productName: "BNP", note: "WB, EDTA", sortOrder: 1 },
    { prescriptionId: 심장OP환아랩처방.id, type: "혈액검사", productName: "Cardiac Marker", note: "Plasma, PST", sortOrder: 2 },

    // 네뷸라이저 (소아과)
    { prescriptionId: 소아네뷸라이저처방.id, type: "약", productName: "Ventolin nebul 2.5mg/2.5ml", ingredientName: "salbutamol", dosage: "1", unit: "A", frequency: "1", route: "Aerosol", note: "0.12mg/kg", sortOrder: 0 },
    { prescriptionId: 소아네뷸라이저처방.id, type: "약", productName: "Pulmicort Respule 500mcg/2ml", ingredientName: "Budesonide", dosage: "1", unit: "A", frequency: "1", route: "Aerosol", note: "1세 미만 0.5A, 1세 이상 1A", sortOrder: 1 },

    // spinal tap 검사
    { prescriptionId: 스파이널탭검사처방.id, type: "지시처방", productName: "뇌척수액 검사 동의서 받아주세요.", sortOrder: 0 },
    { prescriptionId: 스파이널탭검사처방.id, type: "지시처방", productName: "spinal tap 후 BST 해주세요.", sortOrder: 1 },
    { prescriptionId: 스파이널탭검사처방.id, type: "혈액검사", productName: "Routine body fluid", note: "CSF", sortOrder: 2 },
    { prescriptionId: 스파이널탭검사처방.id, type: "혈액검사", productName: "Glucose", note: "CSF", sortOrder: 3 },
    { prescriptionId: 스파이널탭검사처방.id, type: "혈액검사", productName: "Glucose", note: "Plasma, PST", sortOrder: 4 },
    { prescriptionId: 스파이널탭검사처방.id, type: "지시처방", productName: "Lumbar Puncture", sortOrder: 5 },
    { prescriptionId: 스파이널탭검사처방.id, type: "혈액검사", productName: "Gram stain & culture & sensitivity", note: "CSF", sortOrder: 6 },
    { prescriptionId: 스파이널탭검사처방.id, type: "혈액검사", productName: "CSF protein", note: "CSF", sortOrder: 7 },
    { prescriptionId: 스파이널탭검사처방.id, type: "혈액검사", productName: "Meningitis/Encephalitis(ME) panel(14종)", note: "CSF", sortOrder: 8 },

    // ketamine (소아 진정 약물)
    { prescriptionId: 소아진정케타민처방.id, type: "약", productName: "Ketamine HCl 250mg/5ml", dosage: "1", unit: "mg", frequency: "1", route: "IM", note: "5mg*kg -> 10분뒤 절반용량 추가 가능", sortOrder: 0 },
    { prescriptionId: 소아진정케타민처방.id, type: "약", productName: "Ketamine HCl 250mg/5ml", dosage: "15", unit: "mg", frequency: "1", route: "IV", note: "2mg*kg -> 10분뒤 절반용량 추가 가능", sortOrder: 1 },
    { prescriptionId: 소아진정케타민처방.id, type: "지시처방", productName: "Ketamine infusion therapy", sortOrder: 2 },

    // midazolam (소아 진정 약물)
    { prescriptionId: 소아진정미다졸람처방.id, type: "지시처방", productName: "소아 진정관리료", sortOrder: 0 },
    { prescriptionId: 소아진정미다졸람처방.id, type: "약", productName: "Midazolam 5mg/5ml (부광)", dosage: "0.2", unit: "A", frequency: "1", route: "IV", note: "IV_push 0.1mg/kg 5-15분 간격", sortOrder: 1 },

    // thiopental (소아 진정 약물)
    { prescriptionId: 소아진정치오펜탈처방.id, type: "지시처방", productName: "소아 진정관리료", sortOrder: 0 },
    { prescriptionId: 소아진정치오펜탈처방.id, type: "지시처방", productName: "pentotal 1 vial을 NS 10cc에 MIX -> Rectaltube(8Fr) 6cm 길이로 잘라 항문에 투여", sortOrder: 1 },
    { prescriptionId: 소아진정치오펜탈처방.id, type: "약", productName: "Pentotal Sod.(thiopental 500mg의)", dosage: "1", unit: "A", frequency: "1", route: "Rectal", note: "1세이상: kg*0.05 vial/1", sortOrder: 2 },

    // lorazepam (소아 진정 약물)
    { prescriptionId: 소아진정로라제팜처방.id, type: "지시처방", productName: "소아 진정관리료", sortOrder: 0 },
    { prescriptionId: 소아진정로라제팜처방.id, type: "약", productName: "Ativan inj 2mg/0.5ml", ingredientName: "lorazepam", dosage: "0.25", unit: "A", frequency: "1", route: "IV", note: "0.05mg/kg", sortOrder: 1 },

    // OMAP (영양제)
    { prescriptionId: 영양제OMAP처방.id, type: "약", productName: "Omap plus one peri 500mL", ingredientName: "amino acid, glucose, oil, electrolyte", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 0 },

    // GI bleeding
    { prescriptionId: GI출혈처방.id, type: "약", productName: "Ceftriaxone 1g (HK이노엔)", ingredientName: "Ceftriaxone", dosage: "1", unit: "A", frequency: "1", route: "IV", note: "LC", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: GI출혈처방.id, type: "약", productName: "NS (110mL/Bag, KIT일체형)", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "triaxone mix 용", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: GI출혈처방.id, type: "약", productName: "Glypressin inj 1mg", ingredientName: "terlipressin", dosage: "2", unit: "A", frequency: "1", route: "IV", sortOrder: 2 },
    { prescriptionId: GI출혈처방.id, type: "약", productName: "DongA pantoprazole IV 40mg", ingredientName: "pantoprazole", dosage: "2", unit: "A", frequency: "1", route: "IV", sortOrder: 3 },
    { prescriptionId: GI출혈처방.id, type: "약", productName: "NS (100ml/PP)", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 4, mixGroup: "M2" },
    { prescriptionId: GI출혈처방.id, type: "약", productName: "NS (500ml/Bag)", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "20ml/hr", sortOrder: 5, mixGroup: "M3" },
    { prescriptionId: GI출혈처방.id, type: "약", productName: "DongA pantoprazole IV 40mg", ingredientName: "pantoprazole", dosage: "5", unit: "A", frequency: "1", route: "IV", sortOrder: 6, mixGroup: "M3" },
    { prescriptionId: GI출혈처방.id, type: "약", productName: "Instillagel 11mL", ingredientName: "lidocaine 외", dosage: "1", unit: "PFS", frequency: "1", route: "UT DICT (외용)", sortOrder: 7 },
    { prescriptionId: GI출혈처방.id, type: "혈액검사", productName: "ABGA 5(응급실전용)", note: "Heparinized WB, Artery", sortOrder: 8 },
    { prescriptionId: GI출혈처방.id, type: "지시처방", productName: "위세척(비위관삽입,위세척)(1일당)", sortOrder: 9 },
    { prescriptionId: GI출혈처방.id, type: "지시처방", productName: "Rectal Digital Examination", sortOrder: 10 },
    { prescriptionId: GI출혈처방.id, type: "혈액검사", productName: "혈전탄성도사법(Thromboelastography) [Plasma, Sodium Citrate]", note: "GI bleeding 의심시", sortOrder: 11 },

    // bivon continuous
    { prescriptionId: 바이본지속주입처방.id, type: "지시처방", productName: "bivon 투여 원칙: (Normal HCO3(24) - 환자 HCO3) × 0.5 × BW(kg)", sortOrder: 0 },
    { prescriptionId: 바이본지속주입처방.id, type: "지시처방", productName: "초기 투여량은 필요량의 1/2 mEq를 먼저 투여하며, 그 이후 나머지를 6-8시간에 걸쳐 투여함.", sortOrder: 1 },
    { prescriptionId: 바이본지속주입처방.id, type: "약", productName: "5% DW 500mL/Bag (JW중외)", ingredientName: "Dextrose", dosage: "0.8", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 2, mixGroup: "M1" },
    { prescriptionId: 바이본지속주입처방.id, type: "약", productName: "Sodium bicarbonate (20meq/20ml)", ingredientName: "Sodium bicarbonate", dosage: "5", unit: "A", frequency: "1", route: "IV infusion", sortOrder: 3, mixGroup: "M1" },

    // 수혈처방
    { prescriptionId: 수혈처방처방.id, type: "혈액검사", productName: "Crossmatching 검체", note: "Serum, Plain Tube", sortOrder: 0 },
    { prescriptionId: 수혈처방처방.id, type: "혈액검사", productName: "T&S (ABO/Rh type & Unexpected Ab Screening)", note: "WB, EDTA", sortOrder: 1 },
    { prescriptionId: 수혈처방처방.id, type: "약", productName: "Peniramin 4mg/2ml", ingredientName: "chlorpheniramine", dosage: "1", unit: "A", frequency: "1", route: "IV", note: "수혈전", sortOrder: 2 },

    // Anemia Study
    { prescriptionId: 빈혈검사처방.id, type: "혈액검사", productName: "Fe", note: "Serum, SST", sortOrder: 0 },
    { prescriptionId: 빈혈검사처방.id, type: "혈액검사", productName: "Ferritin", note: "Serum, SST", sortOrder: 1 },
    { prescriptionId: 빈혈검사처방.id, type: "혈액검사", productName: "TIBC", note: "Serum, SST", sortOrder: 2 },
    { prescriptionId: 빈혈검사처방.id, type: "혈액검사", productName: "PB Morphology", note: "WB, EDTA", sortOrder: 3 },
    { prescriptionId: 빈혈검사처방.id, type: "혈액검사", productName: "Vitamin B12", ingredientName: "Cyanocobalamin", note: "Serum, SST", sortOrder: 4 },
    { prescriptionId: 빈혈검사처방.id, type: "혈액검사", productName: "Folate", note: "Serum, SST", sortOrder: 5 },
    { prescriptionId: 빈혈검사처방.id, type: "혈액검사", productName: "Reticulocyte panel", note: "WB, EDTA", sortOrder: 6 },

    // Post ROSC
    { prescriptionId: postROSC처방.id, type: "혈액검사", productName: "Liver & Lipid Battery", note: "Plasma, PST", sortOrder: 0 },
    { prescriptionId: postROSC처방.id, type: "지시처방", productName: "Rectal 체온, ETCO2 모니터링 해주세요", sortOrder: 1 },
    { prescriptionId: postROSC처방.id, type: "지시처방", productName: "I/O check", sortOrder: 2 },
    { prescriptionId: postROSC처방.id, type: "지시처방", productName: "TTM(target 32-36도), SpO2 92-98%, sBP>90mmHg(MAP>65mmHg), PaCO2 35-45mmHg", sortOrder: 3 },
    { prescriptionId: postROSC처방.id, type: "혈액검사", productName: "aPTT", note: "Plasma, Sodium Citrate", sortOrder: 4 },
    { prescriptionId: postROSC처방.id, type: "혈액검사", productName: "Prothrombin time", note: "Plasma, Sodium Citrate", sortOrder: 5 },
    { prescriptionId: postROSC처방.id, type: "혈액검사", productName: "CBC with diff count & ESR", note: "WB, EDTA", sortOrder: 6 },
    { prescriptionId: postROSC처방.id, type: "혈액검사", productName: "CRP(정량)", note: "Plasma, PST", sortOrder: 7 },
    { prescriptionId: postROSC처방.id, type: "혈액검사", productName: "CK(CPK)", note: "Plasma, PST", sortOrder: 8 },
    { prescriptionId: postROSC처방.id, type: "혈액검사", productName: "Amylase", note: "Plasma, PST", sortOrder: 9 },
    { prescriptionId: postROSC처방.id, type: "혈액검사", productName: "Renal Battery(11종-TCO 2포함)(ER,IMN전용)", note: "Plasma, PST", sortOrder: 10 },
    { prescriptionId: postROSC처방.id, type: "혈액검사", productName: "D-Dimer(Quantitative)", note: "Plasma, Sodium Citrate", sortOrder: 11 },
    { prescriptionId: postROSC처방.id, type: "혈액검사", productName: "Lactic acid(Lactate)", note: "Heparinized WB, Vein", sortOrder: 12 },
    { prescriptionId: postROSC처방.id, type: "혈액검사", productName: "Ammonia", note: "Heparinized WB, Vein", sortOrder: 13 },
    { prescriptionId: postROSC처방.id, type: "혈액검사", productName: "Urine Microscopy", note: "Urine, Random", sortOrder: 14 },
    { prescriptionId: postROSC처방.id, type: "혈액검사", productName: "Routine urinalysis(10종까지)", note: "Urine, Random", sortOrder: 15 },
    { prescriptionId: postROSC처방.id, type: "혈액검사", productName: "Cardio Profil ER(3종)", note: "WB, EDTA / BNP, CK-MB, TnI(3종)", sortOrder: 16 },
    { prescriptionId: postROSC처방.id, type: "혈액검사", productName: "hs-TnI", note: "Plasma, PST", sortOrder: 17 },
    { prescriptionId: postROSC처방.id, type: "영상검사", productName: "Chest 1P [Port.]", sortOrder: 18 },
    { prescriptionId: postROSC처방.id, type: "지시처방", productName: "ECG(심전도-병동자체검사)", sortOrder: 19 },
    { prescriptionId: postROSC처방.id, type: "혈액검사", productName: "Osmolarity", note: "Plasma, PST", sortOrder: 20 },
    { prescriptionId: postROSC처방.id, type: "지시처방", productName: "치료적 저체온요법(1일당)-심장마비, 고열로인한 뇌손상등의 경우", sortOrder: 21 },
    { prescriptionId: postROSC처방.id, type: "혈액검사", productName: "pNGAL", note: "Plasma, PST", sortOrder: 22 },
    { prescriptionId: postROSC처방.id, type: "혈액검사", productName: "Procalcitonin 정량", note: "Serum, SST", sortOrder: 23 },
    { prescriptionId: postROSC처방.id, type: "약", productName: "Midazolam 5mg/5ml (부광)", dosage: "10", unit: "A", frequency: "1", route: "IV", note: "#1. post ROSC 후 myoclonus, seizure 시 1mg/hr->2ml/hr", sortOrder: 24, mixGroup: "M1" },
    { prescriptionId: postROSC처방.id, type: "약", productName: "NS (50mL/PP)", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "15분에 걸쳐서", sortOrder: 25, mixGroup: "M1" },
    { prescriptionId: postROSC처방.id, type: "약", productName: "Q-pam inj 500mg", ingredientName: "levetiracetam", dosage: "3", unit: "A", frequency: "1", route: "IV", note: "#2. post ROSC seizure 시, 20분에 걸쳐서", sortOrder: 26, mixGroup: "M2" },
    { prescriptionId: postROSC처방.id, type: "약", productName: "NS (100ml/PP)", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 27, mixGroup: "M2" },
    { prescriptionId: postROSC처방.id, type: "약", productName: "Vimsk Inj 200mg/20ml", ingredientName: "lacosamide", dosage: "1", unit: "A", frequency: "1", route: "IV", note: "ns 100 mix, 20분에 걸쳐서", sortOrder: 28, mixGroup: "M3" },
    { prescriptionId: postROSC처방.id, type: "약", productName: "NS (100ml/PP)", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 29, mixGroup: "M3" },
    { prescriptionId: postROSC처방.id, type: "지시처방", productName: "post ROSC myoclonus, seizure 시 mida -> Q-pam -> Vimsk", sortOrder: 30 },
    { prescriptionId: postROSC처방.id, type: "지시처방", productName: "maintain a blood glucose level of 144 mg/dL to 180 mg/dL", sortOrder: 31 },

    // X-ray_ankle
    { prescriptionId: xray_ankle처방.id, type: "영상검사", productName: "Ankle 3P [R.] [AP, Lat, Mortise]", sortOrder: 0 },
    { prescriptionId: xray_ankle처방.id, type: "영상검사", productName: "Ankle 3P [L.] [AP, Lat, Mortise]", sortOrder: 1 },
    { prescriptionId: xray_ankle처방.id, type: "영상검사", productName: "Ankle 3P [B.] [AP, Lat, Mortise]", note: "소아", sortOrder: 2 },

    // X-ray_chest
    { prescriptionId: xray_chest처방.id, type: "영상검사", productName: "Chest 1P [PA]", sortOrder: 0 },
    { prescriptionId: xray_chest처방.id, type: "영상검사", productName: "Sternum 2P [Lat, RAO]", sortOrder: 1 },
    { prescriptionId: xray_chest처방.id, type: "영상검사", productName: "Rib Cage 3P [AP, Rt Obl, Lt Obl]", sortOrder: 2 },

    // X-ray_clavicle
    { prescriptionId: xray_clavicle처방.id, type: "영상검사", productName: "Clavicle 2P [AP, Cephalic Tilt]", sortOrder: 0 },

    // X-ray_elbow
    { prescriptionId: xray_elbow처방.id, type: "영상검사", productName: "Elbow 4P [L.] [AP, Lat, Internal Oblique, External Oblique]", sortOrder: 0 },
    { prescriptionId: xray_elbow처방.id, type: "영상검사", productName: "Elbow 4P [R.] [AP, Lat, Internal Oblique, External Oblique]", sortOrder: 1 },
    { prescriptionId: xray_elbow처방.id, type: "영상검사", productName: "Elbow 4P [B.] [AP, Lat, Internal Oblique, External Oblique]", note: "소아", sortOrder: 2 },

    // X-ray_femur
    { prescriptionId: xray_femur처방.id, type: "영상검사", productName: "Femur 2P [L.] [AP, Lat]", sortOrder: 0 },
    { prescriptionId: xray_femur처방.id, type: "영상검사", productName: "Femur 2P [R.] [AP, Lat]", sortOrder: 1 },
    { prescriptionId: xray_femur처방.id, type: "영상검사", productName: "Femur 2P [B.] [AP, Lat]", note: "소아", sortOrder: 2 },

    // X-ray_foot
    { prescriptionId: xray_foot처방.id, type: "영상검사", productName: "Calcaneus 2P [B.] [Lat, Axial]", sortOrder: 0 },
    { prescriptionId: xray_foot처방.id, type: "영상검사", productName: "Foot 3P [L.] [AP, Lat, Medial Oblique]", sortOrder: 1 },
    { prescriptionId: xray_foot처방.id, type: "영상검사", productName: "Foot 3P [R.] [AP, Lat, Medial Oblique]", sortOrder: 2 },
    { prescriptionId: xray_foot처방.id, type: "영상검사", productName: "Foot 3P [B.] [AP, Lat, Medial Oblique]", note: "소아", sortOrder: 3 },

    // X-ray_finger
    { prescriptionId: xray_finger처방.id, type: "영상검사", productName: "Finger 3P [L.] [AP, Lat, Obl]", note: "손가락 번호를 적어주세요", sortOrder: 0 },
    { prescriptionId: xray_finger처방.id, type: "영상검사", productName: "Finger 3P [R.] [AP, Lat, Obl]", note: "손가락 번호를 적어주세요", sortOrder: 1 },

    // X-ray_forearm
    { prescriptionId: xray_forearm처방.id, type: "영상검사", productName: "Forearm 2P [L.] [AP, Lat]", sortOrder: 0 },
    { prescriptionId: xray_forearm처방.id, type: "영상검사", productName: "Forearm 2P [R.] [AP, Lat]", sortOrder: 1 },
    { prescriptionId: xray_forearm처방.id, type: "영상검사", productName: "Forearm 2P [B.] [AP, Lat]", note: "소아", sortOrder: 2 },

    // X-ray_hand
    { prescriptionId: xray_hand처방.id, type: "영상검사", productName: "Hand 3P [L.] [AP, Oblique, Lat]", sortOrder: 0 },
    { prescriptionId: xray_hand처방.id, type: "영상검사", productName: "Hand 3P [R.] [AP, Oblique, Lat]", sortOrder: 1 },
    { prescriptionId: xray_hand처방.id, type: "영상검사", productName: "Hand 3P [B.] [AP, Oblique, Lat]", note: "소아", sortOrder: 2 },

    // X-ray_head
    { prescriptionId: xray_head처방.id, type: "영상검사", productName: "Skull 5P [AP, Towns, Rt Lat, Lt Lat, Water's]", sortOrder: 0 },
    { prescriptionId: xray_head처방.id, type: "영상검사", productName: "Nasal Bone 2P [Rt Lat, Lt Lat]", sortOrder: 1 },
    { prescriptionId: xray_head처방.id, type: "영상검사", productName: "Skull 4P [AP, Towns, Rt Lat, Lt Lat]", sortOrder: 2 },
    { prescriptionId: xray_head처방.id, type: "영상검사", productName: "Zygomatic Arch 1P [Axial]", sortOrder: 3 },
    { prescriptionId: xray_head처방.id, type: "영상검사", productName: "Mandible 3P [PA, Rt Oblique, Lt Oblique]", sortOrder: 4 },

    // X-ray_hip
    { prescriptionId: xray_hip처방.id, type: "영상검사", productName: "Hip Joint 1P [B.] [AP]", sortOrder: 0 },
    { prescriptionId: xray_hip처방.id, type: "영상검사", productName: "Hip Joint 1P [L.] [Trans Lat]", sortOrder: 1 },
    { prescriptionId: xray_hip처방.id, type: "영상검사", productName: "Hip Joint 1P [R.] [Trans Lat]", sortOrder: 2 },

    // X-ray_humerus
    { prescriptionId: xray_humerus처방.id, type: "영상검사", productName: "Humerus 2P [L.] [AP, Lat]", sortOrder: 0 },
    { prescriptionId: xray_humerus처방.id, type: "영상검사", productName: "Humerus 2P [R.] [AP, Lat]", sortOrder: 1 },
    { prescriptionId: xray_humerus처방.id, type: "영상검사", productName: "Humerus 2P [B.] [AP, Lat]", note: "소아", sortOrder: 2 },

    // X-ray_knee
    { prescriptionId: xray_knee처방.id, type: "영상검사", productName: "Knee Joint 2P [L.] [AP, Lat]", sortOrder: 0 },
    { prescriptionId: xray_knee처방.id, type: "영상검사", productName: "Knee Joint 2P [R.] [AP, Lat]", sortOrder: 1 },
    { prescriptionId: xray_knee처방.id, type: "영상검사", productName: "Knee Joint 2P [B.] [AP, Lat]", sortOrder: 2 },
    { prescriptionId: xray_knee처방.id, type: "영상검사", productName: "Patella 1P [B.] [Merchant]", sortOrder: 3 },
    { prescriptionId: xray_knee처방.id, type: "영상검사", productName: "Knee Joint 1P [L.] [Tunnel]", sortOrder: 4 },
    { prescriptionId: xray_knee처방.id, type: "영상검사", productName: "Knee Joint 1P [R.] [Tunnel]", sortOrder: 5 },

    // X-ray_lower leg
    { prescriptionId: xray_lowerleg처방.id, type: "영상검사", productName: "Lower Leg 2P [L.] [AP, Lat]", sortOrder: 0 },
    { prescriptionId: xray_lowerleg처방.id, type: "영상검사", productName: "Lower Leg 2P [R.] [AP, Lat]", sortOrder: 1 },
    { prescriptionId: xray_lowerleg처방.id, type: "영상검사", productName: "Lower Leg 2P [B.] [AP, Lat]", note: "소아", sortOrder: 2 },

    // X-ray_neck
    { prescriptionId: xray_neck처방.id, type: "영상검사", productName: "Neck 2P [AP, Lat]", sortOrder: 0 },

    // X-ray_pelvis
    { prescriptionId: xray_pelvis처방.id, type: "영상검사", productName: "Pelvis 5P [AP, Rt Oblique, Lt Oblique, Inlet, Outlet]", sortOrder: 0 },

    // X-ray_sacrum & coccyx
    { prescriptionId: xray_sacrumcoccyx처방.id, type: "영상검사", productName: "Sacral & Coccyx 3P [Sacral AP, Coccyx AP, Sacral & Coccyx Lat]", sortOrder: 0 },

    // 가려움 로션
    { prescriptionId: 가려움로션처방.id, type: "약", productName: "Bosomi oint 20g", ingredientName: "zinc oxide 400mg/g", dosage: "1", unit: "TU", frequency: "1", route: "외용", note: "경로 표기 OCR 불확실(원본 0in)", sortOrder: 0 },

    // 안약
    { prescriptionId: 안약처방.id, type: "약", productName: "Paradin eye drop 0.7%", ingredientName: "olopatadine", dosage: "1", unit: "BT", frequency: "1", route: "Oph.", note: "1일1회", sortOrder: 0 },
    { prescriptionId: 안약처방.id, type: "약", productName: "Vigamox eye drop 0.5% 5ml", ingredientName: "moxifloxacin 5.45mg", dosage: "1", unit: "BT", frequency: "1", route: "Oph.", note: "anti, 성인다래끼", sortOrder: 1 },
    { prescriptionId: 안약처방.id, type: "약", productName: "Kynex 2 eye drop 0.5ml", ingredientName: "sodium hyaluronate", dosage: "1", unit: "E", frequency: "1", route: "Oph.", note: "불편시 수시로", sortOrder: 2 },

    // 떨림
    { prescriptionId: 떨림처방.id, type: "약", productName: "Clonazepam 0.5mg (환인)", dosage: "0.5", unit: "T", frequency: "TID", route: "TID PC", sortOrder: 0 },
    { prescriptionId: 떨림처방.id, type: "약", productName: "Indenol 10mg", ingredientName: "propranolol", dosage: "1", unit: "T", frequency: "TID", route: "TID PC", sortOrder: 1 },

    // Hypokalemia (개별)
    { prescriptionId: 저칼륨혈증개별처방.id, type: "약", productName: "KCl 40mEq/20ml", ingredientName: "potassium chloride", dosage: "1", unit: "A", frequency: "1", route: "UT DICT (IV infusion 1회)", sortOrder: 0 },
    { prescriptionId: 저칼륨혈증개별처방.id, type: "약", productName: "K-Contin 600mg", ingredientName: "KCl", dosage: "1", unit: "T", frequency: "1", route: "UT DICT (내복 1회)", sortOrder: 1 },

    // ureter stone
    { prescriptionId: 요로결석처방.id, type: "약", productName: "K-cab 50mg", ingredientName: "tegoprazan", dosage: "1", unit: "T", frequency: "QD", duration: "3일", route: "QD PC", sortOrder: 0 },
    { prescriptionId: 요로결석처방.id, type: "약", productName: "Harnal D 0.2mg", ingredientName: "tamsulosin", dosage: "1", unit: "T", frequency: "QD", duration: "3일", route: "QD HS", note: "distal ureter 5mm 이하 stone", sortOrder: 1 },
    { prescriptionId: 요로결석처방.id, type: "약", productName: "Mypol", ingredientName: "AAP, ibuprofen, codein", dosage: "1", unit: "C", frequency: "1", duration: "3일", route: "UT DICT", note: "따로 포장해주세요 (※경로 표기 OCR 불확실)", sortOrder: 2 },
    { prescriptionId: 요로결석처방.id, type: "약", productName: "Soleton 80mg", ingredientName: "zaltoprofen", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 3 },

    // 삼차신경통
    { prescriptionId: 삼차신경통처방.id, type: "약", productName: "Tegretol 200mg", ingredientName: "carbamazepine", dosage: "1", unit: "T", frequency: "1", duration: "3일", route: "QD PC", sortOrder: 0 },
    { prescriptionId: 삼차신경통처방.id, type: "약", productName: "Lyrica 150mg", ingredientName: "pregabalin", dosage: "1", unit: "C", frequency: "QD", duration: "3일", route: "QD HS", sortOrder: 1 },

    // BBPV
    { prescriptionId: BBPV처방.id, type: "약", productName: "Macperan 5mg", ingredientName: "metoclopramide", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 0 },
    { prescriptionId: BBPV처방.id, type: "약", productName: "Diazepam tab 2mg", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 1 },

    // Labesin (개별)
    { prescriptionId: Labesin개별처방.id, type: "지시처방", productName: "Labesin bolus 20-80mg repeat 가능", sortOrder: 0 },
    { prescriptionId: Labesin개별처방.id, type: "지시처방", productName: "IV continuous 30분마다 double dose up 최대 120mg/hr", sortOrder: 1 },
    { prescriptionId: Labesin개별처방.id, type: "약", productName: "NS (500ml/Bag) 대한", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 2, mixGroup: "M1" },
    { prescriptionId: Labesin개별처방.id, type: "약", productName: "Labesin 20mg/4ml", ingredientName: "labetalol", dosage: "1", unit: "A", frequency: "1", route: "IV", note: "2분간 주세요", sortOrder: 3, mixGroup: "M1" },

    // Allergy 두드러기
    { prescriptionId: Allergy두드러기처방.id, type: "약", productName: "Methylon 4mg", ingredientName: "methylprednisolone", dosage: "1", unit: "T", frequency: "BID", duration: "3일", route: "BID PC", sortOrder: 0 },
    { prescriptionId: Allergy두드러기처방.id, type: "약", productName: "Gaster D 20mg", ingredientName: "famotidine", dosage: "1", unit: "T", frequency: "BID", duration: "3일", route: "BID PC", sortOrder: 1 },
    { prescriptionId: Allergy두드러기처방.id, type: "약", productName: "Ebastel 10mg", ingredientName: "ebastine", dosage: "1", unit: "T", frequency: "QD", duration: "3일", route: "QD HS", sortOrder: 2 },

    // continuous lasix
    { prescriptionId: continuousLasix처방.id, type: "약", productName: "Lasix 20mg/2ml", ingredientName: "furosemide", dosage: "10", unit: "A", frequency: "1", route: "IV", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: continuousLasix처방.id, type: "약", productName: "NS (200ml/Glass) (대한)", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "10ml/hr", sortOrder: 1, mixGroup: "M1" },

    // IV+PO Verapamil(rate)
    { prescriptionId: IVPOVerapamil처방.id, type: "지시처방", productName: "verapamil 금기증: 심부전, 저혈압, 심인성 쇼크", sortOrder: 0 },
    { prescriptionId: IVPOVerapamil처방.id, type: "지시처방", productName: "IV: verapamil 5-10mg NS 100에 섞어서 1분 이상 서서히 정주. 필요시 반복 가능.", sortOrder: 1 },
    { prescriptionId: IVPOVerapamil처방.id, type: "약", productName: "Isoptin 5mg/2ml", ingredientName: "verapamil", dosage: "2", unit: "A", frequency: "1", route: "IV", note: "verapamil 10mg", sortOrder: 2, mixGroup: "M1" },
    { prescriptionId: IVPOVerapamil처방.id, type: "약", productName: "Isoptin 5mg/2ml", ingredientName: "verapamil", dosage: "1", unit: "A", frequency: "1", route: "IV", note: "verapamil 5mg", sortOrder: 3, mixGroup: "M2" },
    { prescriptionId: IVPOVerapamil처방.id, type: "약", productName: "Isoptin 40mg", ingredientName: "verapamil", dosage: "1", unit: "T", frequency: "TID", route: "TID PC", sortOrder: 4 },

    // 통풍 Gout
    { prescriptionId: 통풍Gout처방.id, type: "약", productName: "Feburic 40mg", ingredientName: "febuxostat", dosage: "1", unit: "T", frequency: "QD", duration: "3일", route: "QD PC", sortOrder: 0 },
    { prescriptionId: 통풍Gout처방.id, type: "약", productName: "K-cab 50mg", ingredientName: "tegoprazan", dosage: "1", unit: "T", frequency: "QD", duration: "3일", route: "QD PC", sortOrder: 1 },
    { prescriptionId: 통풍Gout처방.id, type: "약", productName: "Airtal 100mg", ingredientName: "aceclofenac", dosage: "1", unit: "T", frequency: "BID", duration: "3일", route: "BID PC", sortOrder: 2 },
    { prescriptionId: 통풍Gout처방.id, type: "약", productName: "Anaproxen 275mg", ingredientName: "naproxen", dosage: "1", unit: "T", frequency: "BID", duration: "3일", route: "BID PC", sortOrder: 3 },
    { prescriptionId: 통풍Gout처방.id, type: "약", productName: "Colchicine 0.6mg", dosage: "1", unit: "T", frequency: "1", duration: "3일", route: "UT DICT (내복 1회)", sortOrder: 4 },
    { prescriptionId: 통풍Gout처방.id, type: "약", productName: "Anaproxen 275mg", ingredientName: "naproxen", dosage: "3", unit: "T", frequency: "1", route: "UT DICT (내복 1회)", note: "응급실에서 복용", sortOrder: 5 },

    // IV+PO Herben(rate)
    { prescriptionId: IVPOHerben처방.id, type: "지시처방", productName: "Initial bolus dose: 0.25mg/kg over 2 minutes (15 to 20mg)", sortOrder: 0 },
    { prescriptionId: IVPOHerben처방.id, type: "지시처방", productName: "Continuous infusion: 5mg/hr 시작, HR 110 이상 시 5mg/hr 씩 증량", sortOrder: 1 },
    { prescriptionId: IVPOHerben처방.id, type: "약", productName: "Herben 50mg", ingredientName: "diltiazem", dosage: "15", unit: "mg", frequency: "1", route: "IV", note: "bolus, 2-3분 걸쳐서", sortOrder: 2, mixGroup: "M1" },
    { prescriptionId: IVPOHerben처방.id, type: "약", productName: "Herben 50mg", ingredientName: "diltiazem", dosage: "1", unit: "A", frequency: "1", route: "IV", note: "continuous", sortOrder: 3, mixGroup: "M2" },
    { prescriptionId: IVPOHerben처방.id, type: "약", productName: "Herben SR 90mg", ingredientName: "diltiazem", dosage: "1", unit: "T", frequency: "BID", route: "BID PC", note: "PO 변경시", sortOrder: 4 },

    // IV+PO Amiodarone
    { prescriptionId: IVPOAmiodarone처방.id, type: "지시처방", productName: "IV: 150 mg over 10 minutes, then 1 mg/minute for 6 hours, then 0.5 mg/minute for 18 hours, then change to oral maintenance dose", sortOrder: 0 },
    { prescriptionId: IVPOAmiodarone처방.id, type: "약", productName: "Cordarone 150mg/3ml", ingredientName: "amiodarone", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", note: "loading, over 10min", sortOrder: 1 },
    { prescriptionId: IVPOAmiodarone처방.id, type: "약", productName: "5% DW (50ml/PP)", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "loading, over 10min", sortOrder: 2, mixGroup: "M8" },
    { prescriptionId: IVPOAmiodarone처방.id, type: "약", productName: "Cordarone 150mg/3ml", ingredientName: "amiodarone", dosage: "6", unit: "A", frequency: "1", route: "IV infusion", sortOrder: 3, mixGroup: "M9" },
    { prescriptionId: IVPOAmiodarone처방.id, type: "약", productName: "Cordarone 200mg", ingredientName: "amiodarone", dosage: "1", unit: "T", frequency: "BID", route: "BID PC", sortOrder: 4 },

    // IV+PO digoxin
    { prescriptionId: IVPODigoxin처방.id, type: "지시처방", productName: "본원에서는 Digoxin은 q6hr마다 로딩하지 않음 (Bradycardia 및 Toxicity 위험)", sortOrder: 0 },
    { prescriptionId: IVPODigoxin처방.id, type: "지시처방", productName: "Initial: IV: 0.25 to 0.5 mg over several minutes, with repeated doses of 0.25 mg every 6 hours to a maximum of 1.5 mg over 24 hours", note: "Uptodate", sortOrder: 1 },
    { prescriptionId: IVPODigoxin처방.id, type: "지시처방", productName: "Maintenance dose: Oral: 0.125 to 0.25 mg once daily", note: "Uptodate", sortOrder: 2 },
    { prescriptionId: IVPODigoxin처방.id, type: "지시처방", productName: "digoxin은 digitalis intoxication 가능성 있어 사용 후에 Digoxin 농도검사 확인 요망", sortOrder: 3 },
    { prescriptionId: IVPODigoxin처방.id, type: "약", productName: "Digoxin 0.25mg/1ml", dosage: "1", unit: "A", frequency: "1", route: "IV", note: "3분동안", sortOrder: 4, mixGroup: "M1" },
    { prescriptionId: IVPODigoxin처방.id, type: "약", productName: "Digoxin 0.25mg", dosage: "0.5", unit: "T", frequency: "QD", route: "QD PC", sortOrder: 5 },
    { prescriptionId: IVPODigoxin처방.id, type: "혈액검사", productName: "Digoxin(농도+약동학해석보고)(진검)", note: "Serum, SST", sortOrder: 6 },

    // 일반병실 입원 (폐렴)
    { prescriptionId: 일반병실입원폐렴처방.id, type: "지시처방", productName: "ceftriaxone 또는 moxifloxacin 단독요법", sortOrder: 0 },
    { prescriptionId: 일반병실입원폐렴처방.id, type: "지시처방", productName: "비정형폐렴인 경우 macrolide 추가", sortOrder: 1 },
    { prescriptionId: 일반병실입원폐렴처방.id, type: "약", productName: "Avelox inj 400mg/250ml", ingredientName: "moxifloxacin", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 2 },
    { prescriptionId: 일반병실입원폐렴처방.id, type: "약", productName: "Ceftriaxone 2g", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", sortOrder: 3 },
    { prescriptionId: 일반병실입원폐렴처방.id, type: "약", productName: "NS (100ml/PP)", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 4 },
    { prescriptionId: 일반병실입원폐렴처방.id, type: "약", productName: "NS (100ml/PP)", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 5 },
    { prescriptionId: 일반병실입원폐렴처방.id, type: "약", productName: "Atzitops 500mg/5mL", ingredientName: "azithromycin", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", sortOrder: 6 },

    // Hemorrhage angio
    { prescriptionId: Hemorrhageangio처방.id, type: "약", productName: "Tranexamic acid 500mg/5ml", ingredientName: "tranexamic acid", dosage: "1", unit: "A", frequency: "1", route: "IV", note: "15분마다", sortOrder: 0 },
    { prescriptionId: Hemorrhageangio처방.id, type: "약", productName: "Tranexamic acid 500mg/5ml", ingredientName: "tranexamic acid", dosage: "1", unit: "A", frequency: "1", route: "IV", note: "15분마다", sortOrder: 1 },
    { prescriptionId: Hemorrhageangio처방.id, type: "약", productName: "Tranexamic acid 500mg/5ml", ingredientName: "tranexamic acid", dosage: "1", unit: "A", frequency: "1", route: "IV", note: "15분마다", sortOrder: 2 },
    { prescriptionId: Hemorrhageangio처방.id, type: "약", productName: "Tranexamic acid 500mg/5ml", ingredientName: "tranexamic acid", dosage: "1", unit: "A", frequency: "1", route: "IV", note: "15분마다", sortOrder: 3 },
    { prescriptionId: Hemorrhageangio처방.id, type: "약", productName: "Botropase 2 unit/2ml", ingredientName: "hemocoagulase", dosage: "3", unit: "A", frequency: "1", route: "IV", sortOrder: 4 },
    { prescriptionId: Hemorrhageangio처방.id, type: "약", productName: "Q-pam inj 500mg", ingredientName: "levetiracetam", dosage: "1", unit: "A", frequency: "1", route: "IV", sortOrder: 5 },
    { prescriptionId: Hemorrhageangio처방.id, type: "영상검사", productName: "CT Brain (++) A [Brain (+) Angio 3D, Rt Arm IV 186]", sortOrder: 6 },
    { prescriptionId: Hemorrhageangio처방.id, type: "영상검사", productName: "Skull 5P [AP, Towns, Rt Lat, Lt Lat, Water's]", sortOrder: 7 },

    // OPD 치료 (폐렴)
    { prescriptionId: OPD치료폐렴처방.id, type: "지시처방", productName: "비정형폐렴이 의심되는 경우 macrolide 추가", sortOrder: 0 },
    { prescriptionId: OPD치료폐렴처방.id, type: "지시처방", productName: "외래치료는 b-lactam 단독 요법", sortOrder: 1 },
    { prescriptionId: OPD치료폐렴처방.id, type: "약", productName: "K-cab 50mg", ingredientName: "tegoprazan", dosage: "1", unit: "T", frequency: "QD", duration: "5일", route: "QD PC", sortOrder: 2 },
    { prescriptionId: OPD치료폐렴처방.id, type: "약", productName: "Zithromax tab 250mg", ingredientName: "azithromycin", dosage: "2", unit: "T", frequency: "1", duration: "1일", route: "QD PC", sortOrder: 3 },
    { prescriptionId: OPD치료폐렴처방.id, type: "약", productName: "Banan 100mg", ingredientName: "cefpodoxime", dosage: "1", unit: "T", frequency: "BID", duration: "5일", route: "BID PC", note: "중증 2T BID", sortOrder: 4 },
    { prescriptionId: OPD치료폐렴처방.id, type: "약", productName: "Tacenol 8hours ER 650mg", ingredientName: "acetaminophen", dosage: "1", unit: "T", frequency: "TID", duration: "5일", route: "TID PC", sortOrder: 5 },
    { prescriptionId: OPD치료폐렴처방.id, type: "약", productName: "Muten 200mg", ingredientName: "acetylcysteine", dosage: "1", unit: "C", frequency: "TID", duration: "5일", route: "TID PC", sortOrder: 6 },
    { prescriptionId: OPD치료폐렴처방.id, type: "약", productName: "Codawenon forte syr 20ml/pk", dosage: "1", unit: "PK", frequency: "TID", duration: "5일", route: "TID PC", sortOrder: 7 },

    // Bell's palsy
    { prescriptionId: BellsPalsy처방.id, type: "지시처방", productName: "stogar, tanamin은 처방일에 맞춰 변경", sortOrder: 0 },
    { prescriptionId: BellsPalsy처방.id, type: "약", productName: "Methylon 4mg", ingredientName: "methylprednisolone", dosage: "12", unit: "T", frequency: "QD", duration: "4일", route: "QD PC", note: "1일에서 4일째까지 복용", sortOrder: 1 },
    { prescriptionId: BellsPalsy처방.id, type: "약", productName: "Methylon 4mg", ingredientName: "methylprednisolone", dosage: "10", unit: "T", frequency: "QD", duration: "1일", route: "QD PC", note: "5일, 6일째 복용", sortOrder: 2 },
    { prescriptionId: BellsPalsy처방.id, type: "약", productName: "Methylon 4mg", ingredientName: "methylprednisolone", dosage: "8", unit: "T", frequency: "QD", duration: "1일", route: "QD PC", note: "7일, 8일째 복용", sortOrder: 3 },
    { prescriptionId: BellsPalsy처방.id, type: "약", productName: "Methylon 4mg", ingredientName: "methylprednisolone", dosage: "6", unit: "T", frequency: "QD", duration: "1일", route: "QD PC", note: "9일, 10일째 복용", sortOrder: 4 },
    { prescriptionId: BellsPalsy처방.id, type: "약", productName: "Methylon 4mg", ingredientName: "methylprednisolone", dosage: "4", unit: "T", frequency: "QD", duration: "1일", route: "QD PC", note: "11일, 12일째 복용", sortOrder: 5 },
    { prescriptionId: BellsPalsy처방.id, type: "약", productName: "Methylon 4mg", ingredientName: "methylprednisolone", dosage: "2", unit: "T", frequency: "QD", duration: "1일", route: "QD PC", note: "13일, 14일째 복용", sortOrder: 6 },
    { prescriptionId: BellsPalsy처방.id, type: "약", productName: "Stogar 10mg", ingredientName: "Lafutidine", dosage: "1", unit: "T", frequency: "BID", duration: "4일", route: "QD PC & HS", sortOrder: 7 },
    { prescriptionId: BellsPalsy처방.id, type: "약", productName: "Liposic eye gel 10g", ingredientName: "carbomer", dosage: "1", unit: "TU", frequency: "1", route: "Oph. DROP", sortOrder: 8 },

    // IV NTG
    { prescriptionId: IVNTG처방.id, type: "지시처방", productName: "NTG: 10mcg/min start, 최대 200mcg/min까지 투약", sortOrder: 0 },
    { prescriptionId: IVNTG처방.id, type: "지시처방", productName: "BP 조절은 6시간 이내 25% 이상 낮추면 안됨.", sortOrder: 1 },
    { prescriptionId: IVNTG처방.id, type: "지시처방", productName: "volume overloading 심할 경우 농도를 늘려서 사용 가능", sortOrder: 2 },
    { prescriptionId: IVNTG처방.id, type: "지시처방", productName: "MBP 70-80 target으로 BP 높을시 다음번 Perdipine 중단하며 주입 (SBP 110-130 target으로 BP 높을시 10<->20<->40<->80<->120mcg/min, 10->20->doubling 하면서 최대 200mcg/min 까지)", sortOrder: 3 },
    { prescriptionId: IVNTG처방.id, type: "지시처방", productName: "SBP 110-130 target으로 BP 높을시 10<->20<->40<->80<->120", sortOrder: 4 },
    { prescriptionId: IVNTG처방.id, type: "약", productName: "5% DW (200ml/Bag) (JW중외)", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "3ml/hr", sortOrder: 5, mixGroup: "M1" },
    { prescriptionId: IVNTG처방.id, type: "약", productName: "Nitrolingual 50mg/50ml", ingredientName: "nitroglycerin", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", note: "지속주입 (※속도 OCR 불확실)", sortOrder: 6, mixGroup: "M1" },
    { prescriptionId: IVNTG처방.id, type: "약", productName: "5% DW (50ml/PP)", dosage: "1", unit: "BT", frequency: "1", route: "IV", note: "0.4~2 q 12hr (※OCR 불확실)", sortOrder: 7, mixGroup: "M2" },
    { prescriptionId: IVNTG처방.id, type: "약", productName: "5% DW (100ml/PP)", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 8, mixGroup: "M3" },

    // DKA
    { prescriptionId: DKA처방.id, type: "지시처방", productName: "main fluid replacement: -1000ml normal saline, plasma glucose ≤ 200 mg/dL이면 5%DW/0.45% saline으로 main fluid infusion rate를 0.05U/kg/hr 감량하며 지속", sortOrder: 0 },
    { prescriptionId: DKA처방.id, type: "지시처방", productName: "potassium replacement: K > 5.0 mEq/L, no supplement", sortOrder: 1 },
    { prescriptionId: DKA처방.id, type: "지시처방", productName: "Bicarbonate: pH < 6.9이면 bicarbonate 50mEq를 200ml의 H2O에 mix", sortOrder: 2 },
    { prescriptionId: DKA처방.id, type: "지시처방", productName: "If K<3.3, No insulin pump, KCL 투여", sortOrder: 3 },
    { prescriptionId: DKA처방.id, type: "지시처방", productName: "If 3.3<K<5.3, Insulin pump start, KCL 투여", sortOrder: 4 },
    { prescriptionId: DKA처방.id, type: "지시처방", productName: "If K> 5.3, Insulin pump start, Calcium start, No KCL", sortOrder: 5 },
    { prescriptionId: DKA처방.id, type: "지시처방", productName: "양라인 잡아주세요", sortOrder: 6 },
    { prescriptionId: DKA처방.id, type: "약", productName: "Humulin R vial 1000unit/10ml", ingredientName: "insulin regular", dosage: "6", unit: "Unit", frequency: "1", route: "IV infusion", note: "0.1U/kg IV bolus", sortOrder: 7 },
    { prescriptionId: DKA처방.id, type: "약", productName: "Humulin R vial 1000unit/10ml", ingredientName: "insulin regular", dosage: "100", unit: "Unit", frequency: "1", route: "IV infusion", sortOrder: 8 },
    { prescriptionId: DKA처방.id, type: "약", productName: "Calcium gluconate 2g/20ml", dosage: "1", unit: "A", frequency: "1", route: "IV", sortOrder: 9, mixGroup: "M3" },
    { prescriptionId: DKA처방.id, type: "약", productName: "KCl 40mEq/20ml", ingredientName: "potassium chloride", dosage: "0.5", unit: "A", frequency: "1", route: "IV infusion", note: "K < 5.3 시 mix", sortOrder: 10, mixGroup: "M4" },
    { prescriptionId: DKA처방.id, type: "약", productName: "KCl 40mEq/20ml", ingredientName: "potassium chloride", dosage: "0.5", unit: "A", frequency: "1", route: "IV infusion", note: "K < 5.3 시 mix", sortOrder: 11, mixGroup: "M4" },
    { prescriptionId: DKA처방.id, type: "약", productName: "Sodium bicarbonate (20meq/20ml)", dosage: "5", unit: "A", frequency: "1", route: "IV infusion", note: "pH 6.9 시 apply", sortOrder: 12 },

    // anaphylaxis
    { prescriptionId: anaphylaxis처방.id, type: "지시처방", productName: "wheezing 심하고 호흡곤란 심할 경우 nebulizer", sortOrder: 0 },
    { prescriptionId: anaphylaxis처방.id, type: "지시처방", productName: "Gaster는 H-blocker에 의한 allergy 의심시 주지마세요.", sortOrder: 1 },
    { prescriptionId: anaphylaxis처방.id, type: "약", productName: "Epinephrine 1mg/1ml", dosage: "0.3", unit: "A", frequency: "1", route: "IM", note: "anaphylaxis 시", sortOrder: 2 },
    { prescriptionId: anaphylaxis처방.id, type: "약", productName: "Gaster inj 20mg/10mL (액상)", ingredientName: "famotidine", dosage: "1", unit: "A", frequency: "1", route: "IV", sortOrder: 3 },
    { prescriptionId: anaphylaxis처방.id, type: "약", productName: "Peniramin 4mg/2ml", ingredientName: "chlorpheniramine", dosage: "1", unit: "A", frequency: "1", route: "IV", sortOrder: 4 },
    { prescriptionId: anaphylaxis처방.id, type: "약", productName: "Dexamethasone inj 5mg/mL (제일제약)", dosage: "1", unit: "A", frequency: "1", route: "IV", sortOrder: 5 },
    { prescriptionId: anaphylaxis처방.id, type: "약", productName: "NS (500ml/Bag) 대한", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "120ml/hr", sortOrder: 6 },
    { prescriptionId: anaphylaxis처방.id, type: "약", productName: "Predisol 125mg", ingredientName: "methylprednisolone", dosage: "0.5", unit: "A", frequency: "1", route: "IV", sortOrder: 7 },
    { prescriptionId: anaphylaxis처방.id, type: "약", productName: "NS (100ml/PP)", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 8, mixGroup: "M4" },
    { prescriptionId: anaphylaxis처방.id, type: "약", productName: "Gaster D 20mg", ingredientName: "famotidine", dosage: "1", unit: "T", frequency: "BID", duration: "3일", route: "BID PC", sortOrder: 9 },
    { prescriptionId: anaphylaxis처방.id, type: "약", productName: "Atrovent UDV 500mcg/2ml", ingredientName: "ipratropium", dosage: "1", unit: "A", frequency: "1", route: "Aerosol", sortOrder: 10 },
    { prescriptionId: anaphylaxis처방.id, type: "약", productName: "Ventolin nebul 2.5mg/2.5ml", ingredientName: "salbutamol", dosage: "1", unit: "A", frequency: "1", route: "Aerosol", sortOrder: 11 },
    { prescriptionId: anaphylaxis처방.id, type: "약", productName: "Dexamethasone tab 0.5mg", dosage: "1", unit: "T", frequency: "QD", duration: "3일", route: "QD PC", sortOrder: 12 },
    { prescriptionId: anaphylaxis처방.id, type: "약", productName: "Peniramin 2mg", ingredientName: "chlorpheniramine", dosage: "1", unit: "T", frequency: "TID", duration: "3일", route: "TID PC", sortOrder: 13 },

    // GI bleeding (김대용선생님)
    { prescriptionId: GI출혈김대용처방.id, type: "약", productName: "Glypressin inj 1mg", ingredientName: "terlipressin", dosage: "2", unit: "A", frequency: "1", route: "IV", sortOrder: 0 },
    { prescriptionId: GI출혈김대용처방.id, type: "약", productName: "Glypressin inj 1mg", ingredientName: "terlipressin", dosage: "1", unit: "A", frequency: "1", route: "IV", note: "유지용량, q 6hr", sortOrder: 1 },
    { prescriptionId: GI출혈김대용처방.id, type: "약", productName: "Thiamine 50mg/2ml", dosage: "2", unit: "A", frequency: "1", route: "IV", sortOrder: 2 },
    { prescriptionId: GI출혈김대용처방.id, type: "약", productName: "Nexium 40mg", ingredientName: "esomeprazole", dosage: "2", unit: "A", frequency: "1", route: "IV", sortOrder: 3, mixGroup: "M1" },
    { prescriptionId: GI출혈김대용처방.id, type: "약", productName: "Nexium 40mg", ingredientName: "esomeprazole", dosage: "5", unit: "A", frequency: "1", route: "IV", sortOrder: 4, mixGroup: "M1" },
    { prescriptionId: GI출혈김대용처방.id, type: "약", productName: "NS (500ml/Bag) 대한", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "20ml/hr", sortOrder: 5, mixGroup: "M2" },
    { prescriptionId: GI출혈김대용처방.id, type: "약", productName: "Ceftriaxone 2g", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", sortOrder: 6, mixGroup: "M3" },
    { prescriptionId: GI출혈김대용처방.id, type: "약", productName: "NS (110mL/Bag, KIT일체형)", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 7 },
    { prescriptionId: GI출혈김대용처방.id, type: "약", productName: "Aloxi 0.075mg/1.5ml", ingredientName: "palonosetron", dosage: "1", unit: "A", frequency: "1", route: "IV", sortOrder: 8 },
    { prescriptionId: GI출혈김대용처방.id, type: "혈액검사", productName: "Crossmatching 검체", note: "Serum, Plain Tube", sortOrder: 9 },
    { prescriptionId: GI출혈김대용처방.id, type: "혈액검사", productName: "T&S (ABO/Rh type & Irregular Ab Screening)", note: "WB, EDTA", sortOrder: 10 },
    { prescriptionId: GI출혈김대용처방.id, type: "혈액검사", productName: "ABGA 5(응급실전용)", note: "Heparinized WB, Artery", sortOrder: 11 },
    { prescriptionId: GI출혈김대용처방.id, type: "지시처방", productName: "Rectal Digital Examination", sortOrder: 12 },
    { prescriptionId: GI출혈김대용처방.id, type: "지시처방", productName: "위세척(비위관삽입, 위출혈)(1일당)", sortOrder: 13 },

    // Hypoglycemia (개별)
    { prescriptionId: Hypoglycemia개별처방.id, type: "약", productName: "50% DW (100ml/Plastic)", dosage: "0.3", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 0 },
    { prescriptionId: Hypoglycemia개별처방.id, type: "약", productName: "5% DW (1000ml/Bag)", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "80ml/hr", sortOrder: 1 },
    { prescriptionId: Hypoglycemia개별처방.id, type: "혈액검사", productName: "Hemoglobin A1C(당뇨검사)", note: "WB, EDTA", sortOrder: 2 },
    { prescriptionId: Hypoglycemia개별처방.id, type: "혈액검사", productName: "Glucagon", note: "WB, EDTA", sortOrder: 3 },
    { prescriptionId: Hypoglycemia개별처방.id, type: "혈액검사", productName: "ACTH (Adrenocoticotropic hormone)", note: "WB, EDTA", sortOrder: 4 },
    { prescriptionId: Hypoglycemia개별처방.id, type: "혈액검사", productName: "Cortisol(s)", note: "Serum, SST", sortOrder: 5 },
    { prescriptionId: Hypoglycemia개별처방.id, type: "혈액검사", productName: "Insulin", note: "Serum, SST", sortOrder: 6 },
    { prescriptionId: Hypoglycemia개별처방.id, type: "혈액검사", productName: "C-Peptide(s)", note: "Serum, SST", sortOrder: 7 },
    { prescriptionId: Hypoglycemia개별처방.id, type: "혈액검사", productName: "hGH (Human Growth Hormone)", note: "Serum, SST", sortOrder: 8 },

    // Pre-treatment agent
    { prescriptionId: 전처치제agent처방.id, type: "약", productName: "염산리도카인주400mg/20ml", ingredientName: "lidocaine hcl", dosage: "0.23", unit: "V", frequency: "1", route: "IVS", note: "1.5mg/kg, 90mg(60kg 기준)", sortOrder: 0 },
    { prescriptionId: 전처치제agent처방.id, type: "추가설명", productName: "Ix.: bronchospasm, asthma / CIx.: IICP", sortOrder: 1 },
    { prescriptionId: 전처치제agent처방.id, type: "약", productName: "한림펜타닐주사(구연산펜타닐 50μg/1mL)", ingredientName: "fentanyl citrate", dosage: "3", unit: "A", frequency: "1", route: "IVS", note: "3mcg/kg", sortOrder: 2 },
    { prescriptionId: 전처치제agent처방.id, type: "추가설명", productName: "Ix.: IICP, aortic dissection, cardiac ischemia", sortOrder: 3 },

    // Induction agent
    { prescriptionId: InductionAgent2처방.id, type: "약", productName: "에토미데이트리푸로주10mL", ingredientName: "Etomidate", dosage: "1", unit: "V", frequency: "1", route: "IV", note: "0.3mg/kg, 한앰플 20mg", sortOrder: 0 },
    { prescriptionId: InductionAgent2처방.id, type: "지시처방", productName: "seizure 주의, cortisol 감소 유발 - 장기 스테로이드 사용 환자 또는 중증 sepsis 때 주의", sortOrder: 1 },
    { prescriptionId: InductionAgent2처방.id, type: "약", productName: "염산케타민주사 500mg/10ml", ingredientName: "ketamine", dosage: "0.12", unit: "V", frequency: "1", route: "IVS", note: "60kg 기준(1.0-2.0mg/kg), 진통+진정, BP·분비 증가", sortOrder: 2 },
    { prescriptionId: InductionAgent2처방.id, type: "추가설명", productName: "Ix.: 소아, asthma 환자(기관지 확장효과)", sortOrder: 3 },
    { prescriptionId: InductionAgent2처방.id, type: "지시처방", productName: "Oximetry 꼭 적용 확인해주세요", sortOrder: 4 },
    { prescriptionId: InductionAgent2처방.id, type: "약", productName: "아네폴주사(프로포폴 0.12g/12mL)", ingredientName: "propofol", dosage: "0.25", unit: "A", frequency: "1", route: "IVS", note: "initial bolus 0.5mg/kg(60kg 기준 30mg)", sortOrder: 5 },
    { prescriptionId: InductionAgent2처방.id, type: "약", productName: "아네폴주사(프로포폴)", ingredientName: "propofol", dosage: "2", unit: "A", frequency: "1", route: "IV infusion", note: "continuous 20-50mcg/kg/min(60kg 기준 72-180mg/hr)", sortOrder: 6, mixGroup: "M1" },
    { prescriptionId: InductionAgent2처방.id, type: "약", productName: "중외엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "0.76", unit: "Bag", frequency: "1", route: "IV infusion", note: "30cc/h(60kg 기준 20mcg/kg/min), 항경련·항구토 효과, 저혈압 주의", sortOrder: 7, mixGroup: "M1" },

    // Muscle relaxant
    { prescriptionId: MuscleRelaxant2처방.id, type: "약", productName: "석시콜린주50mg/ml(100mg/2ml)", ingredientName: "suxamethonium chloride", dosage: "0.9", unit: "A", frequency: "1", route: "IVS", note: "60kg 기준: 90mg(1.5mg/kg)", sortOrder: 0 },
    { prescriptionId: MuscleRelaxant2처방.id, type: "약", productName: "베카론주", ingredientName: "vecuronium bromide", dosage: "1", unit: "A", frequency: "1", route: "IVS", note: "60kg 기준: 4.8-9mg(0.08-0.15mg/kg)", sortOrder: 1 },
    { prescriptionId: MuscleRelaxant2처방.id, type: "약", productName: "에스메론주(로쿠로늄브롬화물 50mg/5mL)", ingredientName: "rocuronium", dosage: "1", unit: "V", frequency: "1", route: "IVS", note: "60kg 기준: 60mg(1mg/kg)", sortOrder: 2 },

    // Analgesics & Sedative drugs
    { prescriptionId: Analgesics진정처방.id, type: "지시처방", productName: "target: RASS-1로 조절", sortOrder: 0 },
    { prescriptionId: Analgesics진정처방.id, type: "추가설명", productName: "1. Remifentanil 단독 사용", sortOrder: 1 },
    { prescriptionId: Analgesics진정처방.id, type: "약", productName: "울티안주1mg", ingredientName: "remifentanil", dosage: "0.1", unit: "A", frequency: "1", route: "IVS", note: "initial bolus 1.5mcg/kg(60kg 기준 0.1앰플)", sortOrder: 2 },
    { prescriptionId: Analgesics진정처방.id, type: "약", productName: "울티안주1mg", ingredientName: "remifentanil", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", note: "continuous 0.5-15mcg/kg/hr", sortOrder: 3, mixGroup: "M1" },
    { prescriptionId: Analgesics진정처방.id, type: "약", productName: "중외엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "60kg 기준 3~90cc/hr", sortOrder: 4, mixGroup: "M1" },
    { prescriptionId: Analgesics진정처방.id, type: "추가설명", productName: "경우에 따라 포폴 추가 가능", sortOrder: 5 },
    { prescriptionId: Analgesics진정처방.id, type: "약", productName: "아네폴주사(프로포폴)", ingredientName: "propofol", dosage: "3", unit: "A", frequency: "1", route: "IV infusion", sortOrder: 6, mixGroup: "M2" },
    { prescriptionId: Analgesics진정처방.id, type: "약", productName: "중외엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "0.6", unit: "Bag", frequency: "1", route: "IV infusion", note: "continuous 5cc/hr 시작, 5-10분마다 5-10cc/hr씩 증량", sortOrder: 7, mixGroup: "M2" },
    { prescriptionId: Analgesics진정처방.id, type: "추가설명", productName: "2. Fentanyl + Midazolam 병용", sortOrder: 8 },
    { prescriptionId: Analgesics진정처방.id, type: "약", productName: "한림펜타닐주사", ingredientName: "fentanyl citrate", dosage: "2", unit: "A", frequency: "1", route: "IVS", note: "initial bolus 1-2mcg/kg", sortOrder: 9 },
    { prescriptionId: Analgesics진정처방.id, type: "약", productName: "한림펜타닐주사", ingredientName: "fentanyl citrate", dosage: "10", unit: "A", frequency: "1", route: "IV infusion", note: "continuous 0.5-1mcg/kg/hr", sortOrder: 10, mixGroup: "M3" },
    { prescriptionId: Analgesics진정처방.id, type: "약", productName: "엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "10-40cc/hr", sortOrder: 11, mixGroup: "M3" },
    { prescriptionId: Analgesics진정처방.id, type: "약", productName: "부광미다졸람주사5mL", ingredientName: "midazolam", dosage: "0.6", unit: "A", frequency: "1", route: "IVS", note: "initial bolus 0.05mg/kg(60kg 기준 3mg=3ml)", sortOrder: 12 },
    { prescriptionId: Analgesics진정처방.id, type: "약", productName: "부광미다졸람주사5mL", ingredientName: "midazolam", dosage: "3", unit: "A", frequency: "1", route: "IV infusion", sortOrder: 13, mixGroup: "M4" },
    { prescriptionId: Analgesics진정처방.id, type: "약", productName: "중외엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "continuous 0.01-0.1mg/kg/hr(5cc/hr 시작)", sortOrder: 14, mixGroup: "M4" },

    // Dobutamine
    { prescriptionId: Dobutamine2처방.id, type: "약", productName: "도부타민프리믹스500mg/500ml", ingredientName: "dobutamine HCl", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "3-20mcg/kg/min(max 20), 60kg 기준 10.8~72cc/hr", sortOrder: 0 },
    { prescriptionId: Dobutamine2처방.id, type: "지시처방", productName: "SBP<90 미만일 때는 절대 쓰지 마세요", sortOrder: 1 },

    // Dopamine
    { prescriptionId: Dopamine2처방.id, type: "약", productName: "염산도파민프리믹스 500ml", ingredientName: "dopamine HCl", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "5-10mcg/kg/min(max10), 60kg 기준 11.25~22.5cc/hr", sortOrder: 0 },

    // Epinephrine
    { prescriptionId: Epinephrine2처방.id, type: "약", productName: "에피네프린주사액1mg/1mL", ingredientName: "epinephrine", dosage: "3", unit: "A", frequency: "1", route: "IV infusion", note: "1mcg/min", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: Epinephrine2처방.id, type: "약", productName: "5%포도당주 200mL", ingredientName: "dextrose", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "Initial 4cc/hr(1mcg/min), 3분마다 4cc/hr씩 증량, Max 40cc/hr(10mcg/min)", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: Epinephrine2처방.id, type: "지시처방", productName: "Epi infusion 중 부정맥/흉통 발생시 즉시 infusion stop 하세요", sortOrder: 2 },

    // Norepinephrine
    { prescriptionId: Norepinephrine2처방.id, type: "약", productName: "큐프린주8mg/4mL", ingredientName: "norepinephrine bitartrate", dosage: "3", unit: "A", frequency: "1", route: "IV infusion", note: "5mcg/min 시작(Max 50mcg/min)", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: Norepinephrine2처방.id, type: "약", productName: "5%포도당주 200mL", ingredientName: "dextrose", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "시작용량 5mcg/min(=5cc/hr)", sortOrder: 1, mixGroup: "M1" },

    // Vasopressin
    { prescriptionId: Vasopressin2처방.id, type: "추가설명", productName: "NE 로도 BP 유지 안될 경우 사용", sortOrder: 0 },
    { prescriptionId: Vasopressin2처방.id, type: "약", productName: "바소프레신주 20iu/ml", ingredientName: "vasopressin", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", note: "0.04unit/min", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: Vasopressin2처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "12cc/hr, initial 0.04unit/min→2.4unit/hr→12cc/hr", sortOrder: 2, mixGroup: "M1" },

    // Esmolol
    { prescriptionId: Esmolol2처방.id, type: "약", productName: "제일브레비블록주100mg(0.1g/10mL)", ingredientName: "esmolol HCl", dosage: "0.3", unit: "V", frequency: "1", route: "IVS", note: "bolus 0.1-0.5mg/kg, 1분간(60kg 기준 6-30mg)", sortOrder: 0 },
    { prescriptionId: Esmolol2처방.id, type: "추가설명", productName: "브레비블락 2.5g/10mL + D/W 500mL, continuous 50-300mcg/kg/min (원내 입고시까지 중단 상태)", sortOrder: 1 },

    // Labetalol
    { prescriptionId: Labetalol2처방.id, type: "약", productName: "라베신주20mg/4ml", ingredientName: "labetalol HCl", dosage: "1", unit: "A", frequency: "1", route: "IVS", note: "bolus 2분간, 20-80mg repeat 가능", sortOrder: 0 },
    { prescriptionId: Labetalol2처방.id, type: "약", productName: "라베신주100mg/20ml", ingredientName: "labetalol HCl", dosage: "12", unit: "A", frequency: "1", route: "IV infusion", note: "0.5-2mg/min", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: Labetalol2처방.id, type: "약", productName: "중외5% D/S 500ml", ingredientName: "dextrose saline", dosage: "260", unit: "ml", frequency: "1", route: "IV infusion", note: "initial 12.5cc/hr, max 50cc/hr, total 300mg/day", sortOrder: 2, mixGroup: "M1" },

    // Nicardipine
    { prescriptionId: Nicardipine2처방.id, type: "약", productName: "동아페르디핀주사액10mg/10mL", ingredientName: "nicardipine", dosage: "0.2", unit: "A", frequency: "1", route: "IVS", note: "bolus 초기용량(원본 상세 미기재)", sortOrder: 0 },
    { prescriptionId: Nicardipine2처방.id, type: "추가설명", productName: "다음 두 조합 중 하나 사용", sortOrder: 1 },
    { prescriptionId: Nicardipine2처방.id, type: "약", productName: "동아페르디핀주사액10mg/10mL", ingredientName: "nicardipine", dosage: "5", unit: "A", frequency: "1", route: "IVS", sortOrder: 2, mixGroup: "M1" },
    { prescriptionId: Nicardipine2처방.id, type: "약", productName: "중외5%포도당주 200mL", ingredientName: "dextrose", dosage: "0.5", unit: "BT", frequency: "1", route: "IV infusion", note: "continuous 15cc/hr 시작, 15분마다 7.5cc/hr씩 증량, 최대 60cc/hr", sortOrder: 3, mixGroup: "M1" },
    { prescriptionId: Nicardipine2처방.id, type: "약", productName: "동아페르디핀주사액10mg/10mL", ingredientName: "nicardipine", dosage: "5", unit: "A", frequency: "1", route: "IVS", sortOrder: 4, mixGroup: "M2" },
    { prescriptionId: Nicardipine2처방.id, type: "약", productName: "N/S 500", ingredientName: "Normal Saline", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 5, mixGroup: "M2" },

    // Nitroprusside
    { prescriptionId: Nitroprusside2처방.id, type: "약", productName: "나이트로프레스주(50mg/2mL)", ingredientName: "nitroprusside", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "0.3-0.5mcg/kg/min, 독성 있어 2mcg/kg/min 넘지 않을 것", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: Nitroprusside2처방.id, type: "약", productName: "중외5%포도당주 200mL", ingredientName: "dextrose", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "시작 7cc/hr→14→21→28, 28cc/hr 이상 사용 금지(독성)", sortOrder: 1, mixGroup: "M1" },

    // NTG
    { prescriptionId: NTG2처방.id, type: "약", productName: "니트로링구알주사 10mg/10mL", ingredientName: "nitroglycerin", dosage: "5", unit: "A", frequency: "1", route: "IV infusion", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: NTG2처방.id, type: "약", productName: "5%포도당주 500ml", ingredientName: "dextrose", dosage: "450", unit: "ml", frequency: "1", route: "IV infusion", note: "시작 3cc/hr, 5분마다 3cc/hr씩 증량(12cc까지), 이후 6cc/hr씩 증량(최대 120cc/hr)", sortOrder: 1, mixGroup: "M1" },

    // 혈압조절 일반 지침
    { prescriptionId: 혈압조절지침처방.id, type: "지시처방", productName: "Aortic Dissection 시 SBP 100-120mmHg 및 HR 60회 이하 유지", sortOrder: 0 },
    { prescriptionId: 혈압조절지침처방.id, type: "지시처방", productName: "Esmolol 혹은 Labetalol 투여 후 Nicardipine/Nitroprusside 투여하세요", sortOrder: 1 },
    { prescriptionId: 혈압조절지침처방.id, type: "지시처방", productName: "Brain hemorrhage(SAH) 시 SBP 160 이하로 유지하세요", sortOrder: 2 },
    { prescriptionId: 혈압조절지침처방.id, type: "지시처방", productName: "ICH: SBP 220 이상 시 continuous, SBP 150-220 시 bolus 고려, 140 이하 유지가 목표", sortOrder: 3 },
    { prescriptionId: 혈압조절지침처방.id, type: "지시처방", productName: "Acute Ischemic stroke tPA 등 perfusion Tx. 시에는 BP 185/110 이상일 때만 혈압을 조절하세요", sortOrder: 4 },

    // 항생제 IV - 두경부감염(APT)
    { prescriptionId: 항생제두경부감염처방.id, type: "약", productName: "크목실린주1.2g", ingredientName: "amoxicillin/clavulanate", dosage: "1", frequency: "1", route: "IV infusion", note: "페니실린계 알레르기 확인 후", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 항생제두경부감염처방.id, type: "약", productName: "중외엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "100cc/hr", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 항생제두경부감염처방.id, type: "약", productName: "종근당세푸록심나트륨주750mg", ingredientName: "cefuroxime", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "cepha allergy 확인 후", sortOrder: 2, mixGroup: "M2" },
    { prescriptionId: 항생제두경부감염처방.id, type: "약", productName: "중외엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "100cc/hr", sortOrder: 3, mixGroup: "M2" },

    // 항생제 IV - 복합 복강내 감염
    { prescriptionId: 항생제복강내감염처방.id, type: "약", productName: "유박탐주사750mg", ingredientName: "sulbactam/ampicillin", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 항생제복강내감염처방.id, type: "약", productName: "중외엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 항생제복강내감염처방.id, type: "추가설명", productName: "또는", sortOrder: 2 },
    { prescriptionId: 항생제복강내감염처방.id, type: "약", productName: "루카신주사1.5g", ingredientName: "ampicillin/sulbactam", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", sortOrder: 3, mixGroup: "M2" },
    { prescriptionId: 항생제복강내감염처방.id, type: "약", productName: "중외엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 4, mixGroup: "M2" },
    { prescriptionId: 항생제복강내감염처방.id, type: "추가설명", productName: "또는(3rd cepha + MTZ 병용)", sortOrder: 5 },
    { prescriptionId: 항생제복강내감염처방.id, type: "약", productName: "하원세프트리악손주2g", ingredientName: "ceftriaxone", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "3rd cepha + MTZ 병용", sortOrder: 6, mixGroup: "M3" },
    { prescriptionId: 항생제복강내감염처방.id, type: "약", productName: "엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "200cc/hr", sortOrder: 7, mixGroup: "M3" },
    { prescriptionId: 항생제복강내감염처방.id, type: "약", productName: "메트리날주500mg/100ml", ingredientName: "metronidazole", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "200cc/hr", sortOrder: 8 },
    { prescriptionId: 항생제복강내감염처방.id, type: "약", productName: "종근당세포테탄주1그램", ingredientName: "cefotetan", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", sortOrder: 9, mixGroup: "M4" },
    { prescriptionId: 항생제복강내감염처방.id, type: "약", productName: "중외엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 10, mixGroup: "M4" },

    // 항생제 IV - 연조직 감염
    { prescriptionId: 항생제연조직감염처방.id, type: "추가설명", productName: "1차 약제", sortOrder: 0 },
    { prescriptionId: 항생제연조직감염처방.id, type: "약", productName: "세포졸주1g", ingredientName: "cefazolin", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 항생제연조직감염처방.id, type: "약", productName: "엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "200cc/hr", sortOrder: 2, mixGroup: "M1" },
    { prescriptionId: 항생제연조직감염처방.id, type: "추가설명", productName: "심한 경우", sortOrder: 3 },
    { prescriptionId: 항생제연조직감염처방.id, type: "약", productName: "하원세프트리악손주2g", ingredientName: "ceftriaxone", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "세파 알레르기 확인 후", sortOrder: 4, mixGroup: "M2" },
    { prescriptionId: 항생제연조직감염처방.id, type: "약", productName: "엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "200cc/hr", sortOrder: 5, mixGroup: "M2" },
    { prescriptionId: 항생제연조직감염처방.id, type: "추가설명", productName: "Abscess 동반시 추가", sortOrder: 6 },
    { prescriptionId: 항생제연조직감염처방.id, type: "약", productName: "훌그램600mg", ingredientName: "piperacillin 등", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", sortOrder: 7, mixGroup: "M3" },
    { prescriptionId: 항생제연조직감염처방.id, type: "약", productName: "엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "200cc/hr", sortOrder: 8, mixGroup: "M3" },

    // 항생제 IV - 요로 감염
    { prescriptionId: 항생제요로감염처방.id, type: "추가설명", productName: "단순감염", sortOrder: 0 },
    { prescriptionId: 항생제요로감염처방.id, type: "약", productName: "하원세프트리악손주2g", ingredientName: "ceftriaxone", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "세파 알레르기 확인 후", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 항생제요로감염처방.id, type: "약", productName: "엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "200cc/hr", sortOrder: 2, mixGroup: "M1" },
    { prescriptionId: 항생제요로감염처방.id, type: "지시처방", productName: "세파 알러지 있으면 levofloxacin 또는 ciprofloxacin 주세요", sortOrder: 3 },
    { prescriptionId: 항생제요로감염처방.id, type: "약", productName: "중외시프로플록사신주(0.4g/200mL)", ingredientName: "ciprofloxacin", dosage: "1", unit: "PK", frequency: "1", route: "IV infusion", note: "200cc/hr, 임부/수유부/소아 금기", sortOrder: 4 },
    { prescriptionId: 항생제요로감염처방.id, type: "약", productName: "레보펙신주150mL", ingredientName: "levofloxacin", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "300cc/hr, 임부/수유부/소아 금기", sortOrder: 5 },
    { prescriptionId: 항생제요로감염처방.id, type: "추가설명", productName: "비뇨기 시술 합병증 또는 MDR risk 높을 시 - anti-pseudomonal B-lactam 중 택1", sortOrder: 6 },
    { prescriptionId: 항생제요로감염처방.id, type: "약", productName: "세펨주사(세페핌염산염수화물 1g)", ingredientName: "cefepime", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "세파 알레르기 확인 후", sortOrder: 7, mixGroup: "M2" },
    { prescriptionId: 항생제요로감염처방.id, type: "약", productName: "중외엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "200cc/hr", sortOrder: 8, mixGroup: "M2" },
    { prescriptionId: 항생제요로감염처방.id, type: "약", productName: "타조페란주4.5g", ingredientName: "piperacillin/tazobactam", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "CKD 환자 절반(2.25g) 감량 고려", sortOrder: 9, mixGroup: "M3" },
    { prescriptionId: 항생제요로감염처방.id, type: "약", productName: "중외5%포도당주 100mL", ingredientName: "dextrose", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "200cc/hr", sortOrder: 10, mixGroup: "M3" },
    { prescriptionId: 항생제요로감염처방.id, type: "약", productName: "뉴로페넴주1g", ingredientName: "meropenem", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", sortOrder: 11, mixGroup: "M4" },
    { prescriptionId: 항생제요로감염처방.id, type: "약", productName: "중외5%포도당주 100mL", ingredientName: "dextrose", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "200cc/hr", sortOrder: 12, mixGroup: "M4" },

    // 항생제 IV - 폐렴(CAP)
    { prescriptionId: 항생제폐렴CAP처방.id, type: "추가설명", productName: "3rd 세파 + Azithromycin", sortOrder: 0 },
    { prescriptionId: 항생제폐렴CAP처방.id, type: "약", productName: "하원세프트리악손주2g", ingredientName: "ceftriaxone", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "세파계열 알러지 확인 후", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 항생제폐렴CAP처방.id, type: "약", productName: "엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "200cc/hr", sortOrder: 2, mixGroup: "M1" },
    { prescriptionId: 항생제폐렴CAP처방.id, type: "약", productName: "아지탑스주사500mg", ingredientName: "azithromycin", dosage: "1", frequency: "1", route: "IV infusion", note: "1시간에 걸쳐서", sortOrder: 3, mixGroup: "M2" },
    { prescriptionId: 항생제폐렴CAP처방.id, type: "약", productName: "엔에스주사액500ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "500cc/hr", sortOrder: 4, mixGroup: "M2" },
    { prescriptionId: 항생제폐렴CAP처방.id, type: "추가설명", productName: "3rd 세파 + respiratory FQ (세파 알러지시 moxi-/levo-만)", sortOrder: 5 },
    { prescriptionId: 항생제폐렴CAP처방.id, type: "약", productName: "레보펙신주150mL", ingredientName: "levofloxacin", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "300cc/hr, 임부/수유부/소아 금기", sortOrder: 6 },
    { prescriptionId: 항생제폐렴CAP처방.id, type: "약", productName: "퀴녹스주400mg/250mL", ingredientName: "moxifloxacin", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "250cc/hr, 임부/수유부/소아 금기", sortOrder: 7 },
    { prescriptionId: 항생제폐렴CAP처방.id, type: "약", productName: "루카신주사1.5g", ingredientName: "ampicillin/sulbactam", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", sortOrder: 8, mixGroup: "M3" },
    { prescriptionId: 항생제폐렴CAP처방.id, type: "약", productName: "중외엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 9, mixGroup: "M3" },

    // 항생제 IV - 폐렴(HAP)
    { prescriptionId: 항생제폐렴HAP처방.id, type: "추가설명", productName: "Anti-pseudomonal B-lactam 중 택1", sortOrder: 0 },
    { prescriptionId: 항생제폐렴HAP처방.id, type: "약", productName: "타조페란주4.5g", ingredientName: "piperacillin/tazobactam", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "CKD 환자 절반(2.25g) 감량 고려", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 항생제폐렴HAP처방.id, type: "약", productName: "중외5%포도당주 100mL", ingredientName: "dextrose", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "200cc/hr", sortOrder: 2, mixGroup: "M1" },
    { prescriptionId: 항생제폐렴HAP처방.id, type: "약", productName: "세펨주사 1g", ingredientName: "cefepime", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", sortOrder: 3, mixGroup: "M2" },
    { prescriptionId: 항생제폐렴HAP처방.id, type: "약", productName: "중외엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "200cc/hr", sortOrder: 4, mixGroup: "M2" },
    { prescriptionId: 항생제폐렴HAP처방.id, type: "약", productName: "뉴로페넴주1g", ingredientName: "meropenem", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", sortOrder: 5, mixGroup: "M3" },
    { prescriptionId: 항생제폐렴HAP처방.id, type: "약", productName: "중외5%포도당주 100mL", ingredientName: "dextrose", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "200cc/hr", sortOrder: 6, mixGroup: "M3" },
    { prescriptionId: 항생제폐렴HAP처방.id, type: "추가설명", productName: "심한 경우 levofloxacin 또는 ciprofloxacin 추가 병용", sortOrder: 7 },
    { prescriptionId: 항생제폐렴HAP처방.id, type: "약", productName: "중외시프로플록사신주(0.4g/200mL)", ingredientName: "ciprofloxacin", dosage: "1", unit: "PK", frequency: "1", route: "IV infusion", note: "200cc/hr, 임부/수유부/소아 금기", sortOrder: 8 },
    { prescriptionId: 항생제폐렴HAP처방.id, type: "약", productName: "레보펙신주150mL", ingredientName: "levofloxacin", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "300cc/hr, 임부/수유부/소아 금기", sortOrder: 9 },
    { prescriptionId: 항생제폐렴HAP처방.id, type: "약", productName: "퀴녹스주400mg/250mL", ingredientName: "moxifloxacin", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "250cc/hr, 임부/수유부/소아 금기", sortOrder: 10 },

    // 항생제 IV - 카테터연관감염(CRBSI)
    { prescriptionId: 항생제CRBSI처방.id, type: "추가설명", productName: "Vancomycin + anti-pseudomonal B-lactam ± AG", sortOrder: 0 },
    { prescriptionId: 항생제CRBSI처방.id, type: "약", productName: "Vancomycin hcl inj 1g", ingredientName: "vancomycin", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "15-20mg/kg loading dose", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 항생제CRBSI처방.id, type: "약", productName: "동광반코마이신주1g", ingredientName: "vancomycin", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", sortOrder: 2, mixGroup: "M2" },
    { prescriptionId: 항생제CRBSI처방.id, type: "약", productName: "5%포도당주 200mL", ingredientName: "dextrose", dosage: "1", frequency: "1", route: "IV infusion", note: "200cc/hr", sortOrder: 3, mixGroup: "M2" },
    { prescriptionId: 항생제CRBSI처방.id, type: "추가설명", productName: "Anti-pseudomonal B-lactam 중 택1", sortOrder: 4 },
    { prescriptionId: 항생제CRBSI처방.id, type: "약", productName: "타조페란주4.5g", ingredientName: "piperacillin/tazobactam", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "CKD 환자 절반(2.25g) 감량 고려", sortOrder: 5, mixGroup: "M3" },
    { prescriptionId: 항생제CRBSI처방.id, type: "약", productName: "5%포도당주 100mL", ingredientName: "dextrose", dosage: "1", frequency: "1", route: "IV infusion", note: "200cc/hr", sortOrder: 6, mixGroup: "M3" },
    { prescriptionId: 항생제CRBSI처방.id, type: "약", productName: "세펨주사 1g", ingredientName: "cefepime", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", sortOrder: 7, mixGroup: "M4" },
    { prescriptionId: 항생제CRBSI처방.id, type: "약", productName: "중외엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "200cc/hr", sortOrder: 8, mixGroup: "M4" },
    { prescriptionId: 항생제CRBSI처방.id, type: "약", productName: "동광메로페넴주1g", ingredientName: "meropenem", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", sortOrder: 9, mixGroup: "M5" },
    { prescriptionId: 항생제CRBSI처방.id, type: "약", productName: "중외5%포도당주 100mL", ingredientName: "dextrose", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "200cc/hr", sortOrder: 10, mixGroup: "M5" },
    { prescriptionId: 항생제CRBSI처방.id, type: "추가설명", productName: "aminoglycoside(AG)", sortOrder: 11 },
    { prescriptionId: 항생제CRBSI처방.id, type: "약", productName: "겐타프로주사(80mg/2mL)", ingredientName: "gentamicin", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", sortOrder: 12, mixGroup: "M6" },
    { prescriptionId: 항생제CRBSI처방.id, type: "약", productName: "중외5%포도당주 100mL", ingredientName: "dextrose", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 13, mixGroup: "M6" },

    // 수액류
    { prescriptionId: 수액류처방.id, type: "추가설명", productName: "Main fluid", sortOrder: 0 },
    { prescriptionId: 수액류처방.id, type: "약", productName: "플라주오피주 500mL", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "80cc/hr", sortOrder: 1 },
    { prescriptionId: 수액류처방.id, type: "약", productName: "플라주오피주 1000mL", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "80cc/hr", sortOrder: 2 },
    { prescriptionId: 수액류처방.id, type: "약", productName: "플라주오피주 1000mL", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "500cc 로딩 후 의사 지시에 따라 속도 조절", sortOrder: 3 },
    { prescriptionId: 수액류처방.id, type: "약", productName: "플라주오피주 1000mL", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "massive loading 해주세요", sortOrder: 4 },
    { prescriptionId: 수액류처방.id, type: "추가설명", productName: "Normal Saline", sortOrder: 5 },
    { prescriptionId: 수액류처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 6 },
    { prescriptionId: 수액류처방.id, type: "약", productName: "N/S 500ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 7 },
    { prescriptionId: 수액류처방.id, type: "약", productName: "중외 N/S 생리식염수 1000mL", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 8 },
    { prescriptionId: 수액류처방.id, type: "추가설명", productName: "Half saline", sortOrder: 9 },
    { prescriptionId: 수액류처방.id, type: "약", productName: "중외0.45%염화나트륨주사액 1000ml", ingredientName: "sodium chloride", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 10 },
    { prescriptionId: 수액류처방.id, type: "추가설명", productName: "3% saline", sortOrder: 11 },
    { prescriptionId: 수액류처방.id, type: "약", productName: "3%염화나트륨액 500ml", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 12 },
    { prescriptionId: 수액류처방.id, type: "추가설명", productName: "Dextrose Saline", sortOrder: 13 },
    { prescriptionId: 수액류처방.id, type: "약", productName: "중외5%포도당생리식염주1000ml", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 14 },
    { prescriptionId: 수액류처방.id, type: "추가설명", productName: "Dextrose Water", sortOrder: 15 },
    { prescriptionId: 수액류처방.id, type: "약", productName: "대한50%포도당주(50g/100mL)", ingredientName: "dextrose", dosage: "1", unit: "BT", frequency: "1", route: "IVS", sortOrder: 16 },
    { prescriptionId: 수액류처방.id, type: "약", productName: "중외5%포도당주 200mL", ingredientName: "dextrose", dosage: "1", frequency: "1", route: "IV infusion", sortOrder: 17 },
    { prescriptionId: 수액류처방.id, type: "약", productName: "5% D/W 500ml", ingredientName: "dextrose", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 18 },
    { prescriptionId: 수액류처방.id, type: "약", productName: "중외5%포도당주1000mL", ingredientName: "dextrose", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 19 },
    { prescriptionId: 수액류처방.id, type: "약", productName: "중외10%포도당주500ml", ingredientName: "dextrose", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 20 },
    { prescriptionId: 수액류처방.id, type: "약", productName: "중외10%포도당주1000mL", ingredientName: "dextrose", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 21 },
    { prescriptionId: 수액류처방.id, type: "추가설명", productName: "소아 Main fluid", sortOrder: 22 },
    { prescriptionId: 수액류처방.id, type: "약", productName: "에스디주1:4 500ml", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 23 },

    // 영양제, 비타민제
    { prescriptionId: 영양제비타민제처방.id, type: "약", productName: "티아민염산염주", ingredientName: "Thiamine HCl", dosage: "2", unit: "A", frequency: "1", route: "IVS", note: "IV push 또는 main mix", sortOrder: 0 },
    { prescriptionId: 영양제비타민제처방.id, type: "약", productName: "삐콤헥사주2ml", ingredientName: "vitamin B1,2,3,5,6,12", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", note: "main fluid에 mix해주세요", sortOrder: 1 },
    { prescriptionId: 영양제비타민제처방.id, type: "약", productName: "비타모주(덱스판테놀 0.5g/2mL)", ingredientName: "dexpanthenol", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", note: "main mix", sortOrder: 2 },
    { prescriptionId: 영양제비타민제처방.id, type: "약", productName: "위너프페리주362ml", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "3cc/kg/hr, 약 2시간동안 투약", sortOrder: 3 },
    { prescriptionId: 영양제비타민제처방.id, type: "추가설명", productName: "추가 필요시", sortOrder: 4 },
    { prescriptionId: 영양제비타민제처방.id, type: "약", productName: "에이나민주 500mL", dosage: "1", unit: "BT", frequency: "1", route: "IV", note: "120cc/hr", sortOrder: 5 },
    { prescriptionId: 영양제비타민제처방.id, type: "약", productName: "플라주오피주 500mL", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "120cc/hr", sortOrder: 6 },
    { prescriptionId: 영양제비타민제처방.id, type: "약", productName: "멀티서플라이5주(10mL)", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "main에 mix", sortOrder: 7 },
    { prescriptionId: 영양제비타민제처방.id, type: "약", productName: "셀레나제티프로주사(1.66mg/10mL)", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "main에 mix", sortOrder: 8 },
    { prescriptionId: 영양제비타민제처방.id, type: "약", productName: "뉴트리헥스주100ml", dosage: "1", unit: "BT", frequency: "1", route: "IV", sortOrder: 9 },

    // 해열진통제 IM
    { prescriptionId: 해열진통제IM처방.id, type: "약", productName: "토라렌주2mL", ingredientName: "diclofenac sodium", dosage: "1", unit: "A", frequency: "1", route: "IM", sortOrder: 0 },
    { prescriptionId: 해열진통제IM처방.id, type: "약", productName: "케토신주사", ingredientName: "ketorolac tromethamine", dosage: "1", unit: "A", frequency: "1", route: "IM", sortOrder: 1 },
    { prescriptionId: 해열진통제IM처방.id, type: "약", productName: "아큐판주사액20mg/2mL", dosage: "1", frequency: "1", route: "IM", sortOrder: 2 },
    { prescriptionId: 해열진통제IM처방.id, type: "약", productName: "휴메딕스트라마돌염산염주사(50mg/1mL)", ingredientName: "tramadol", dosage: "1", unit: "A", frequency: "1", route: "IM", sortOrder: 3 },

    // 해열진통제 IV
    { prescriptionId: 해열진통제IV처방.id, type: "약", productName: "데노간주1g", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 해열진통제IV처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 해열진통제IV처방.id, type: "약", productName: "케토신주사", ingredientName: "ketorolac", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", sortOrder: 2, mixGroup: "M2" },
    { prescriptionId: 해열진통제IV처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 3, mixGroup: "M2" },
    { prescriptionId: 해열진통제IV처방.id, type: "약", productName: "휴메딕스트라마돌염산염주사", ingredientName: "tramadol", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", sortOrder: 4, mixGroup: "M3" },
    { prescriptionId: 해열진통제IV처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 5, mixGroup: "M3" },
    { prescriptionId: 해열진통제IV처방.id, type: "약", productName: "제일페티딘염산염주사액(25mg/0.5mL)", ingredientName: "pethidine", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", sortOrder: 6, mixGroup: "M4" },
    { prescriptionId: 해열진통제IV처방.id, type: "약", productName: "엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 7, mixGroup: "M4" },
    { prescriptionId: 해열진통제IV처방.id, type: "약", productName: "명문염산페치딘주사(50mg/1mL)", ingredientName: "pethidine", dosage: "1", frequency: "1", route: "IV infusion", sortOrder: 8, mixGroup: "M5" },
    { prescriptionId: 해열진통제IV처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 9, mixGroup: "M5" },
    { prescriptionId: 해열진통제IV처방.id, type: "약", productName: "명문모르핀염산염수화물주사 10mg/1mL", ingredientName: "morphine", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", sortOrder: 10, mixGroup: "M6" },
    { prescriptionId: 해열진통제IV처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 11, mixGroup: "M6" },
    { prescriptionId: 해열진통제IV처방.id, type: "약", productName: "한림펜타닐주사(50μg/1mL)", ingredientName: "fentanyl citrate", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", note: "100/100 가능", sortOrder: 12, mixGroup: "M7" },
    { prescriptionId: 해열진통제IV처방.id, type: "약", productName: "엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 13, mixGroup: "M7" },
    { prescriptionId: 해열진통제IV처방.id, type: "약", productName: "마로비벤-에이주사 2.2ml", ingredientName: "aconitum tinc D2", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", note: "main에 믹스 해주세요", sortOrder: 14 },
    { prescriptionId: 해열진통제IV처방.id, type: "추가설명", productName: "IVS 처방", sortOrder: 15 },
    { prescriptionId: 해열진통제IV처방.id, type: "약", productName: "한림펜타닐주사", ingredientName: "fentanyl citrate", dosage: "1", unit: "A", frequency: "1", route: "IVS", note: "천천히 투여, 혈관통 주의", sortOrder: 16 },
    { prescriptionId: 해열진통제IV처방.id, type: "약", productName: "케토신주사", ingredientName: "ketorolac", dosage: "1", unit: "A", frequency: "1", route: "IVS", note: "천천히 투여, 혈관통 주의", sortOrder: 17 },
    { prescriptionId: 해열진통제IV처방.id, type: "추가설명", productName: "MIX 처방", sortOrder: 18 },
    { prescriptionId: 해열진통제IV처방.id, type: "약", productName: "플라주오피주 500mL", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 19, mixGroup: "M8" },
    { prescriptionId: 해열진통제IV처방.id, type: "약", productName: "케토신주사", ingredientName: "ketorolac", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", sortOrder: 20, mixGroup: "M8" },
    { prescriptionId: 해열진통제IV처방.id, type: "약", productName: "마로비벤-에이주사", ingredientName: "aconitum tinc D2", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", sortOrder: 21, mixGroup: "M8" },
    { prescriptionId: 해열진통제IV처방.id, type: "약", productName: "휴메딕스트라마돌염산염주사", ingredientName: "tramadol", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", sortOrder: 22, mixGroup: "M8" },

    // GI med. IV
    { prescriptionId: GImedIV처방.id, type: "약", productName: "히스판주 20mg/ml", ingredientName: "scopolamine butylbromide", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", note: "saline mix해서 천천히 side로 투여, side 발생 주의", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: GImedIV처방.id, type: "약", productName: "중외엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: GImedIV처방.id, type: "약", productName: "펩타졸주 1Vial", ingredientName: "pantoprazole", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", sortOrder: 2, mixGroup: "M2" },
    { prescriptionId: GImedIV처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 3, mixGroup: "M2" },
    { prescriptionId: GImedIV처방.id, type: "약", productName: "멕쿨주10mg/2mL", ingredientName: "metoclopramide", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", sortOrder: 4, mixGroup: "M3" },
    { prescriptionId: GImedIV처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 5, mixGroup: "M3" },
    { prescriptionId: GImedIV처방.id, type: "약", productName: "온단트주(4mg/2mL)", ingredientName: "ondansetron", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", note: "수술후 구역구토에만 급여", sortOrder: 6, mixGroup: "M4" },
    { prescriptionId: GImedIV처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 7, mixGroup: "M4" },
    { prescriptionId: GImedIV처방.id, type: "추가설명", productName: "IV side push", sortOrder: 8 },
    { prescriptionId: GImedIV처방.id, type: "약", productName: "모틴주(파모티딘 20mg)", ingredientName: "famotidine", dosage: "1", unit: "V", frequency: "1", route: "IVS", note: "천천히 투여, 혈관통 주의", sortOrder: 9 },
    { prescriptionId: GImedIV처방.id, type: "약", productName: "안티모딕주", ingredientName: "tiropramide", dosage: "1", unit: "A", frequency: "1", route: "IVS", note: "천천히 투여, 혈관통 주의", sortOrder: 10 },
    { prescriptionId: GImedIV처방.id, type: "추가설명", productName: "MIX 처방", sortOrder: 11 },
    { prescriptionId: GImedIV처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 12, mixGroup: "M5" },
    { prescriptionId: GImedIV처방.id, type: "약", productName: "안티모딕주", ingredientName: "tiropramide", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", sortOrder: 13, mixGroup: "M5" },
    { prescriptionId: GImedIV처방.id, type: "약", productName: "멕쿨주10mg/2mL", ingredientName: "metoclopramide", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", sortOrder: 14, mixGroup: "M5" },
    { prescriptionId: GImedIV처방.id, type: "약", productName: "모틴주(파모티딘)", ingredientName: "famotidine", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", sortOrder: 15, mixGroup: "M5" },

    // 항생제 IV (성분별)
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "Penicillin G inj 120만 unit(추정)", dosage: "2", unit: "V", frequency: "1", route: "IM", note: "원문 불확실: mycin inj. 120만 unit, 2vial IM", sortOrder: 0 },
    { prescriptionId: 항생제성분별처방.id, type: "추가설명", productName: "b-lactam계 모음", sortOrder: 1 },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "세포졸주1g", ingredientName: "cefazolin", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "세파계열 알러지 확인 및 AST 후", sortOrder: 2, mixGroup: "M1" },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 3, mixGroup: "M1" },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "종근당세푸록심나트륨주750mg", ingredientName: "cefuroxime", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "세팔 계열 알러지 확인후 주세요", sortOrder: 4, mixGroup: "M2" },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "중외엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 5, mixGroup: "M2" },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "후루마린주사0.5g", ingredientName: "flomoxef", dosage: "2", unit: "V", frequency: "1", route: "IV infusion", note: "세파계열 알러지 확인 및 AST 후", sortOrder: 6, mixGroup: "M3" },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "중외엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 7, mixGroup: "M3" },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "하원세프트리악손주2g", ingredientName: "ceftriaxone", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "세파계열 알러지 확인 및 AST후 투여", sortOrder: 8, mixGroup: "M4" },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 9, mixGroup: "M4" },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "보령맥스핌주1g", ingredientName: "cefepime", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "세파계열 알러지 확인 및 AST후 투여", sortOrder: 10, mixGroup: "M5" },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "중외엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 11, mixGroup: "M5" },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "루카신주사1.5g", ingredientName: "ampicillin/sulbactam", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", sortOrder: 12, mixGroup: "M6" },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 13, mixGroup: "M6" },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "뉴로페넴주1g", ingredientName: "meropenem", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", sortOrder: 14, mixGroup: "M7" },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "중외5%포도당주 100mL", ingredientName: "dextrose", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "200cc/hr", sortOrder: 15, mixGroup: "M7" },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "타조페란주4.5g", ingredientName: "piperacillin/tazobactam", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", sortOrder: 16, mixGroup: "M8" },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "중외5%포도당주 100mL", ingredientName: "dextrose", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 17, mixGroup: "M8" },
    { prescriptionId: 항생제성분별처방.id, type: "추가설명", productName: "macrolide계 모음", sortOrder: 18 },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "아지탑스주사500mg", ingredientName: "azithromycin", dosage: "1", frequency: "1", route: "IV infusion", note: "n/s 500 mix, 한시간동안", sortOrder: 19, mixGroup: "M9" },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "엔에스주사액500ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 20, mixGroup: "M9" },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "훌그램600mg", ingredientName: "piperacillin 등", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", note: "200cc/h, 30분간 점적", sortOrder: 21, mixGroup: "M10" },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 22, mixGroup: "M10" },
    { prescriptionId: 항생제성분별처방.id, type: "추가설명", productName: "quinolone계 모음", sortOrder: 23 },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "중외시프로플록사신주(0.4g/200mL)", ingredientName: "ciprofloxacin", dosage: "1", unit: "PK", frequency: "1", route: "IV infusion", note: "200cc/hr, 임부/수유부/소아 금기", sortOrder: 24 },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "레보펙신주150mL", ingredientName: "levofloxacin", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "300cc/hr, 임부/수유부/소아 금기", sortOrder: 25 },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "퀴녹스주400mg/250mL", ingredientName: "moxifloxacin", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "250cc/hr, 임부/수유부/소아 금기", sortOrder: 26 },
    { prescriptionId: 항생제성분별처방.id, type: "추가설명", productName: "aminoglycoside계 모음", sortOrder: 27 },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "겐타프로주사(80mg/2mL)", ingredientName: "gentamicin", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", sortOrder: 28, mixGroup: "M11" },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "중외5%포도당주 100mL", ingredientName: "dextrose", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 29, mixGroup: "M11" },
    { prescriptionId: 항생제성분별처방.id, type: "추가설명", productName: "sulfonamide계 모음", sortOrder: 30 },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "Cortrim inj 5ml (2개월미만 금기)", ingredientName: "SMX-TMP", dosage: "2", unit: "A", frequency: "1", route: "IV infusion", note: "BID, over 1hr", sortOrder: 31, mixGroup: "M12" },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "중외5%포도당주 200mL", ingredientName: "dextrose", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "200cc/hr", sortOrder: 32, mixGroup: "M12" },
    { prescriptionId: 항생제성분별처방.id, type: "추가설명", productName: "기타 항생제", sortOrder: 33 },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "메트리날주500mg/100ml", ingredientName: "metronidazole", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "200cc/h, 30분간 점적주입", sortOrder: 34 },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "반코마이신주1g", ingredientName: "vancomycin", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "15-20mg/kg loading dose", sortOrder: 35, mixGroup: "M13" },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "Vancomycin hcl inj 1g/V(함량주의)", ingredientName: "vancomycin", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "CKD 환자에서 감량 고려", sortOrder: 36, mixGroup: "M14" },
    { prescriptionId: 항생제성분별처방.id, type: "약", productName: "중외5%포도당주 200mL", ingredientName: "dextrose", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "100cc/h 2시간동안", sortOrder: 37, mixGroup: "M14" },

    // 항바이러스제 IV (독감, Zoster)
    { prescriptionId: 항바이러스제IV처방.id, type: "약", productName: "조이렉스주 250mg", ingredientName: "acyclovir", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "5mg/kg over 1hr, 8시간마다, 5일동안(헤르페스성 뇌염은 10mg/kg, 10일동안)", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 항바이러스제IV처방.id, type: "약", productName: "엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 항바이러스제IV처방.id, type: "추가설명", productName: "인플루엔자", sortOrder: 2 },
    { prescriptionId: 항바이러스제IV처방.id, type: "약", productName: "페라미플루주15mL", ingredientName: "peramivir", dosage: "2", unit: "V", frequency: "1", route: "IV infusion", note: "300mg(성인), 10mg/kg(6개월 이상 소아) over 15min", sortOrder: 3, mixGroup: "M2" },
    { prescriptionId: 항바이러스제IV처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 4, mixGroup: "M2" },

    // 스테로이드 IM, IV
    { prescriptionId: 스테로이드IMIV처방.id, type: "추가설명", productName: "스테로이드(IV)", sortOrder: 0 },
    { prescriptionId: 스테로이드IMIV처방.id, type: "약", productName: "살론주125밀리그람", ingredientName: "methylprednisolone succinate", dosage: "0.5", unit: "V", frequency: "1", route: "IV infusion", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 스테로이드IMIV처방.id, type: "약", productName: "엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 2, mixGroup: "M1" },
    { prescriptionId: 스테로이드IMIV처방.id, type: "약", productName: "제일덱사메타손주사액(5mg/1mL)", ingredientName: "dexamethasone", dosage: "1", unit: "A", frequency: "1", route: "IVS", sortOrder: 3 },
    { prescriptionId: 스테로이드IMIV처방.id, type: "추가설명", productName: "스테로이드(IM)", sortOrder: 4 },
    { prescriptionId: 스테로이드IMIV처방.id, type: "약", productName: "제일덱사메타손주사액(5mg/1mL)", ingredientName: "dexamethasone", dosage: "1", unit: "A", frequency: "1", route: "IM", sortOrder: 5 },

    // 기타 IV 제제
    { prescriptionId: 기타IV제제처방.id, type: "약", productName: "제일탄산수소나트륨주사액8.4%(1.68g/20mL)", ingredientName: "sodium bicarbonate", dosage: "5", unit: "A", frequency: "1", route: "IV infusion", note: "onset 5-10min, 대사성 산증 동반시, 혈량 과부하 주의", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 기타IV제제처방.id, type: "약", productName: "중외5%포도당생리식염주500ml", dosage: "0.8", unit: "Bag", frequency: "1", route: "IV infusion", note: "250cc/hr", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 기타IV제제처방.id, type: "약", productName: "아록솔주 15mg/2mL", ingredientName: "ambroxol", dosage: "1", unit: "A", frequency: "1", route: "IVS", sortOrder: 2 },
    { prescriptionId: 기타IV제제처방.id, type: "약", productName: "페니라민주사(4mg/2mL)", ingredientName: "chlorpheniramine", dosage: "1", unit: "A", frequency: "1", route: "IVS", sortOrder: 3 },

    // 수혈제제
    { prescriptionId: 수혈제제처방.id, type: "지시처방", productName: "수혈 동의서 받아주세요.", sortOrder: 0 },
    { prescriptionId: 수혈제제처방.id, type: "지시처방", productName: "BT check, 열 발생시 notify", sortOrder: 1 },
    { prescriptionId: 수혈제제처방.id, type: "지시처방", productName: "keep monitoring during transfusion", sortOrder: 2 },
    { prescriptionId: 수혈제제처방.id, type: "약", productName: "페니라민주사(4mg/2mL)", ingredientName: "chlorpheniramine", dosage: "1", unit: "A", frequency: "1", route: "IVS", note: "전처치약물, 혈액제제 투여전 페니라민 IVS 주세요", sortOrder: 3 },
    { prescriptionId: 수혈제제처방.id, type: "약", productName: "녹십자-알부민주20%(20g/100mL)", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "100cc/hr, 2~4ml/min 속도", sortOrder: 4 },
    { prescriptionId: 수혈제제처방.id, type: "추가설명", productName: "혈액 제제 모음 - 진검과에 용량 확인 후 처방, 꼭 개수 확인 후 처방", sortOrder: 5 },
    { prescriptionId: 수혈제제처방.id, type: "약", productName: "Packed RBC(PRC) 320ml", dosage: "1", frequency: "1", route: "IV infusion", note: "4시간 내에 주세요(보통 2-4hr)", sortOrder: 6 },
    { prescriptionId: 수혈제제처방.id, type: "약", productName: "Packed RBC(PRC) 400ml", dosage: "1", frequency: "1", route: "IV infusion", note: "4시간 내에 주세요(보통 2-4hr)", sortOrder: 7 },
    { prescriptionId: 수혈제제처방.id, type: "약", productName: "FFP 320ml", dosage: "1", frequency: "1", route: "IV infusion", note: "3시간 내에 주세요(보통 30min)", sortOrder: 8 },
    { prescriptionId: 수혈제제처방.id, type: "약", productName: "FFP 400ml", dosage: "1", frequency: "1", route: "IV infusion", note: "3시간 내에 주세요(보통 30min)", sortOrder: 9 },
    { prescriptionId: 수혈제제처방.id, type: "약", productName: "Platelet Concentrate 320ml", dosage: "1", frequency: "1", route: "IV infusion", note: "6시간 내에 주세요(보통 30min)", sortOrder: 10 },
    { prescriptionId: 수혈제제처방.id, type: "약", productName: "Platelet Concentrate 400ml", dosage: "1", frequency: "1", route: "IV infusion", note: "6시간 내에 주세요(보통 30min)", sortOrder: 11 },

    // 외용제
    { prescriptionId: 외용제처방.id, type: "약", productName: "베아로반연고(0.2g/10g)", ingredientName: "mupirocin", dosage: "1", unit: "TU", frequency: "1", route: "외용", sortOrder: 0 },
    { prescriptionId: 외용제처방.id, type: "약", productName: "리도멕스크림 20g", ingredientName: "prednisolone valeroacetate", dosage: "1", unit: "TU", frequency: "1", route: "외용", sortOrder: 1 },
    { prescriptionId: 외용제처방.id, type: "약", productName: "아드반탄크림 15g", ingredientName: "methylprednisolone aceponate", dosage: "1", unit: "TU", frequency: "1", route: "외용", sortOrder: 2 },
    { prescriptionId: 외용제처방.id, type: "약", productName: "퀴노비드안연고(15mg/5g)", ingredientName: "ofloxacin", dosage: "1", unit: "TU", frequency: "1", route: "Oph.", sortOrder: 3 },
    { prescriptionId: 외용제처방.id, type: "약", productName: "에펙신안연고", ingredientName: "ofloxacin", dosage: "1", unit: "TU", frequency: "1", route: "Oph.", sortOrder: 4 },
    { prescriptionId: 외용제처방.id, type: "약", productName: "에펙신이용액(15mg/5mL)", ingredientName: "ofloxacin", dosage: "1", unit: "E", frequency: "1", route: "점이", sortOrder: 5 },

    // 항정신약 IV
    { prescriptionId: 항정신약IV처방.id, type: "약", productName: "대원디아제팜주사액(10mg/2mL)", ingredientName: "diazepam", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", sortOrder: 0, mixGroup: "M1" },
    { prescriptionId: 항정신약IV처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 1, mixGroup: "M1" },
    { prescriptionId: 항정신약IV처방.id, type: "약", productName: "아티반주사1ml", ingredientName: "lorazepam", dosage: "0.5", unit: "A", frequency: "1", route: "IVS", sortOrder: 2 },
    { prescriptionId: 항정신약IV처방.id, type: "약", productName: "명인할로페리돌주사1mL", ingredientName: "haloperidol", dosage: "0.5", unit: "A", frequency: "1", route: "IM", sortOrder: 3 },
    { prescriptionId: 항정신약IV처방.id, type: "약", productName: "부광미다졸람주사5mg", ingredientName: "midazolam", dosage: "0.6", unit: "A", frequency: "1", route: "IVS", note: "1st: IVS", sortOrder: 4 },
    { prescriptionId: 항정신약IV처방.id, type: "약", productName: "부광미다졸람주사5mg", ingredientName: "midazolam", dosage: "3", unit: "A", frequency: "1", route: "IV infusion", sortOrder: 5, mixGroup: "M2" },
    { prescriptionId: 항정신약IV처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "Continuous: 0.01~0.1mg/kg/hr(5cc/hr start)", sortOrder: 6, mixGroup: "M2" },
    { prescriptionId: 항정신약IV처방.id, type: "약", productName: "울티안주1mg", ingredientName: "remifentanil", dosage: "0.1", unit: "V", frequency: "1", route: "IV", note: "1st: IVS", sortOrder: 7 },
    { prescriptionId: 항정신약IV처방.id, type: "약", productName: "울티안주1mg", ingredientName: "remifentanil", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "continuous 0.5-15mcg/kg/hr, 3cc/hr start(60kg 기준)", sortOrder: 8, mixGroup: "M3" },
    { prescriptionId: 항정신약IV처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 9, mixGroup: "M3" },
    { prescriptionId: 항정신약IV처방.id, type: "약", productName: "포폴주사 120mg", ingredientName: "propofol", dosage: "5", unit: "A", frequency: "1", route: "IV infusion", note: "continuous 5~50mcg/kg/min, 5cc/hr start", sortOrder: 10, mixGroup: "M4" },
    { prescriptionId: 항정신약IV처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 11, mixGroup: "M4" },

    // Asthma/COPD AE
    { prescriptionId: 천식COPD처방.id, type: "추가설명", productName: "흡입제", sortOrder: 0 },
    { prescriptionId: 천식COPD처방.id, type: "지시처방", productName: "증기흡입치료(1일당)", sortOrder: 1 },
    { prescriptionId: 천식COPD처방.id, type: "약", productName: "벤토린네뷸2.5mg/2.5ml", ingredientName: "salbutamol sulfate", dosage: "1", unit: "EA", frequency: "1", route: "Aerosol", note: "20분 간격으로 3회 연속 시행", sortOrder: 2 },
    { prescriptionId: 천식COPD처방.id, type: "약", productName: "아트로벤트흡입액유디비(0.5218mg/2mL)", ingredientName: "ipratropium bromide", dosage: "1", unit: "EA", frequency: "1", route: "Aerosol", sortOrder: 3 },
    { prescriptionId: 천식COPD처방.id, type: "약", productName: "풀미코트레스퓰분무용현탁액0.5mg/2ml", ingredientName: "budesonide", dosage: "1", unit: "EA", frequency: "1", route: "Aerosol", sortOrder: 4 },
    { prescriptionId: 천식COPD처방.id, type: "추가설명", productName: "Systemic steroid", sortOrder: 5 },
    { prescriptionId: 천식COPD처방.id, type: "약", productName: "살론주125밀리그람", ingredientName: "methylprednisolone succinate", dosage: "0.5", unit: "V", frequency: "1", route: "IV infusion", sortOrder: 6, mixGroup: "M1" },
    { prescriptionId: 천식COPD처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 7, mixGroup: "M1" },
    { prescriptionId: 천식COPD처방.id, type: "추가설명", productName: "Mucolytics", sortOrder: 8 },
    { prescriptionId: 천식COPD처방.id, type: "약", productName: "아록솔주 15mg/2mL", ingredientName: "ambroxol", dosage: "1", unit: "A", frequency: "1", route: "IVS", sortOrder: 9 },
    { prescriptionId: 천식COPD처방.id, type: "약", productName: "Magnesium Sulfate 10% Inj(1g/10ml/amp)", ingredientName: "magnesium sulfate", dosage: "2", unit: "A", frequency: "1", route: "IV infusion", note: "ut dict", sortOrder: 10, mixGroup: "M2" },
    { prescriptionId: 천식COPD처방.id, type: "약", productName: "5%Dextrose 100ml Bag(중외)", ingredientName: "dextrose", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 11, mixGroup: "M2" },
    { prescriptionId: 천식COPD처방.id, type: "약", productName: "Epinephrine Inj", ingredientName: "epinephrine", dosage: "0.3", unit: "A", frequency: "1", route: "Aerosol", note: "벤토린네뷸 병용금기, 25도이하 냉장보관 금지, 차광, ut dict", sortOrder: 12 },
    { prescriptionId: 천식COPD처방.id, type: "추가설명", productName: "IV ABx.", sortOrder: 13 },
    { prescriptionId: 천식COPD처방.id, type: "약", productName: "타조페란주4.5g", ingredientName: "piperacillin/tazobactam", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "200cc/hr", sortOrder: 14, mixGroup: "M3" },
    { prescriptionId: 천식COPD처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 15, mixGroup: "M3" },
    { prescriptionId: 천식COPD처방.id, type: "약", productName: "퀴녹스주400mg/250mL", ingredientName: "moxifloxacin", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "250cc/hr", sortOrder: 16 },

    // PSVT
    { prescriptionId: PSVT질환처방.id, type: "지시처방", productName: "v/s unstable 시 50-100J DC cardioversion 고려", sortOrder: 0 },
    { prescriptionId: PSVT질환처방.id, type: "지시처방", productName: "antecubital fossa 에 line 잡아주세요.", sortOrder: 1 },
    { prescriptionId: PSVT질환처방.id, type: "지시처방", productName: "약 투여 후 해당 팔 elevation 시키면서 flushing 꼭 해주세요.", sortOrder: 2 },
    { prescriptionId: PSVT질환처방.id, type: "약", productName: "아데노코주 6mg/2ml", ingredientName: "adenosine", dosage: "1", unit: "V", frequency: "1", route: "IVS", note: "1st", sortOrder: 3 },
    { prescriptionId: PSVT질환처방.id, type: "약", productName: "아데노코주 6mg/2ml", ingredientName: "adenosine", dosage: "2", unit: "V", frequency: "1", route: "IVS", note: "2nd", sortOrder: 4 },
    { prescriptionId: PSVT질환처방.id, type: "약", productName: "아데노코주 6mg/2ml", ingredientName: "adenosine", dosage: "2", unit: "V", frequency: "1", route: "IVS", note: "3rd", sortOrder: 5 },
    { prescriptionId: PSVT질환처방.id, type: "약", productName: "헤르벤주50mg", ingredientName: "diltiazem", dosage: "0.3", unit: "V", frequency: "1", route: "IV infusion", note: "loading dose 0.25mg/kg IV over 2min", sortOrder: 6, mixGroup: "M1" },
    { prescriptionId: PSVT질환처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 7, mixGroup: "M1" },
    { prescriptionId: PSVT질환처방.id, type: "약", productName: "헤르벤주50mg", ingredientName: "diltiazem", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "유지용량 10cc/hr", sortOrder: 8, mixGroup: "M2" },
    { prescriptionId: PSVT질환처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 9, mixGroup: "M2" },

    // A-fib
    { prescriptionId: Afib처방.id, type: "지시처방", productName: "주의!! PSVT 와 구별하세요. Herben 금기 확인하세요.", sortOrder: 0 },
    { prescriptionId: Afib처방.id, type: "지시처방", productName: "v/s unstable 시 120-200J DC cardioversion 고려", sortOrder: 1 },
    { prescriptionId: Afib처방.id, type: "지시처방", productName: "cardioversion 전에 echo 로 LA thrombosis 유무 확인/ LVEF 확인", sortOrder: 2 },
    { prescriptionId: Afib처방.id, type: "지시처방", productName: "HR<110이하 유지목표", sortOrder: 3 },
    { prescriptionId: Afib처방.id, type: "약", productName: "헤르벤주50mg", ingredientName: "diltiazem", dosage: "0.3", unit: "V", frequency: "1", route: "IV infusion", note: "1st bolus 15mg(0.25mg/kg), 2분이상 걸쳐 투여", sortOrder: 4, mixGroup: "M1" },
    { prescriptionId: Afib처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 5, mixGroup: "M1" },
    { prescriptionId: Afib처방.id, type: "약", productName: "헤르벤주50mg", ingredientName: "diltiazem", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "continuous(4-20mg/hr), 유지용량 10cc/hr", sortOrder: 6, mixGroup: "M2" },
    { prescriptionId: Afib처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 7, mixGroup: "M2" },
    { prescriptionId: Afib처방.id, type: "추가설명", productName: "2차약: Isoptin(2.5mg → 5mg → 10mg IV bolus)", sortOrder: 8 },
    { prescriptionId: Afib처방.id, type: "약", productName: "이솦틴주5mg/2ml", ingredientName: "verapamil", dosage: "0.5", unit: "A", frequency: "1", route: "IV infusion", note: "1st: 2.5mg", sortOrder: 9, mixGroup: "M3" },
    { prescriptionId: Afib처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 10, mixGroup: "M3" },
    { prescriptionId: Afib처방.id, type: "약", productName: "이솦틴주5mg/2ml", ingredientName: "verapamil", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", note: "2nd: 5mg", sortOrder: 11, mixGroup: "M4" },
    { prescriptionId: Afib처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 12, mixGroup: "M4" },
    { prescriptionId: Afib처방.id, type: "약", productName: "이솦틴주5mg/2ml", ingredientName: "verapamil", dosage: "2", unit: "A", frequency: "1", route: "IV infusion", note: "3rd: 10mg", sortOrder: 13, mixGroup: "M5" },
    { prescriptionId: Afib처방.id, type: "약", productName: "N/S 100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 14, mixGroup: "M5" },
    { prescriptionId: Afib처방.id, type: "추가설명", productName: "LVEF<40% 이하시", sortOrder: 15 },
    { prescriptionId: Afib처방.id, type: "약", productName: "디곡신(digoxin) 0.25mg/mL", ingredientName: "digoxin", dosage: "2", unit: "A", frequency: "1", route: "IV", sortOrder: 16 },
    { prescriptionId: Afib처방.id, type: "지시처방", productName: "급속포화요법(포화량 1.0-2.0mg)으로 1회 0.25-0.5mg을 2-4시간마다 효과가 나타날 때까지 정주", sortOrder: 17 },
    { prescriptionId: Afib처방.id, type: "지시처방", productName: "0.5mg 1회 투여 후 경과 관찰", sortOrder: 18 },
    { prescriptionId: Afib처방.id, type: "약", productName: "제일브레비블록주100mg", ingredientName: "esmolol HCl", dosage: "0.3", unit: "V", frequency: "1", route: "IVS", note: "bolus 0.1-0.5mg/kg(0.1-0.3A), 1분간(60kg 기준 6-30mg IV)", sortOrder: 19 },
    { prescriptionId: Afib처방.id, type: "약", productName: "제일브레비블록주2.5그램", ingredientName: "esmolol HCl", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "initial 20cc/hr, 5분마다 20cc/hr titration", sortOrder: 20, mixGroup: "M6" },
    { prescriptionId: Afib처방.id, type: "약", productName: "5% D/W 500ml", ingredientName: "dextrose", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 21, mixGroup: "M6" },

    // monomorphic VT
    { prescriptionId: 단형성VT처방.id, type: "지시처방", productName: "v/s unstable 시 100J DC cardioversion", sortOrder: 0 },
    { prescriptionId: 단형성VT처방.id, type: "추가설명", productName: "1차: amiodarone loading(150mg 씩 total 2g 까지 반복가능)", sortOrder: 1 },
    { prescriptionId: 단형성VT처방.id, type: "약", productName: "코다론주 150mg/3ml", ingredientName: "amiodarone", dosage: "1", unit: "A", frequency: "1", route: "IV infusion", note: "1st loading, 10분내로 투여", sortOrder: 2, mixGroup: "M1" },
    { prescriptionId: 단형성VT처방.id, type: "약", productName: "중외5% 포도당주 100mL", ingredientName: "dextrose", dosage: "1", frequency: "1", route: "IV infusion", sortOrder: 3, mixGroup: "M1" },
    { prescriptionId: 단형성VT처방.id, type: "추가설명", productName: "amiodarone continuous", sortOrder: 4 },
    { prescriptionId: 단형성VT처방.id, type: "약", productName: "코다론주 150mg/3ml", ingredientName: "amiodarone", dosage: "6", unit: "A", frequency: "1", route: "IV infusion", note: "처음 8시간 1mg/min(60mg/hr→33.3cc/hr), 다음 16시간 0.5mg/min(30mg/hr→16.6cc/hr)", sortOrder: 5, mixGroup: "M2" },
    { prescriptionId: 단형성VT처방.id, type: "약", productName: "5% D/W 500ml", ingredientName: "dextrose", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 6, mixGroup: "M2" },
    { prescriptionId: 단형성VT처방.id, type: "추가설명", productName: "2차: lidocaine", sortOrder: 7 },
    { prescriptionId: 단형성VT처방.id, type: "약", productName: "대한2%리도카인염산염수화물주", ingredientName: "lidocaine", dosage: "0.8", unit: "V", frequency: "1", route: "IV infusion", note: "1st loading(1.0-1.5mg/kg), 5분에 걸쳐서 투여", sortOrder: 8, mixGroup: "M3" },
    { prescriptionId: 단형성VT처방.id, type: "약", productName: "중외5% 포도당주 100mL", ingredientName: "dextrose", dosage: "1", frequency: "1", route: "IV infusion", sortOrder: 9, mixGroup: "M3" },
    { prescriptionId: 단형성VT처방.id, type: "추가설명", productName: "리도카인 유지용량", sortOrder: 10 },
    { prescriptionId: 단형성VT처방.id, type: "약", productName: "대한2%리도카인염산염수화물주", ingredientName: "lidocaine", dosage: "4", unit: "V", frequency: "1", route: "IV infusion", note: "continuous 60-240mg/hr(18-72cc/hr)", sortOrder: 11, mixGroup: "M4" },
    { prescriptionId: 단형성VT처방.id, type: "약", productName: "중외5% 포도당주 100mL", ingredientName: "dextrose", dosage: "1", frequency: "1", route: "IV infusion", sortOrder: 12, mixGroup: "M4" },

    // Bradycardia
    { prescriptionId: Bradycardia질환처방.id, type: "지시처방", productName: "EKG 모니터 keep", sortOrder: 0 },
    { prescriptionId: Bradycardia질환처방.id, type: "지시처방", productName: "EKG 기록및 판독", sortOrder: 1 },
    { prescriptionId: Bradycardia질환처방.id, type: "지시처방", productName: "약물 투여 후 EKG f/u", sortOrder: 2 },
    { prescriptionId: Bradycardia질환처방.id, type: "약", productName: "아트로핀황산염주사액0.5mg/1mL", ingredientName: "atropine sulfate", dosage: "2", unit: "A", frequency: "1", route: "IVS", note: "한번에 1mg씩 총 3번 반복가능(total 3mg까지)", sortOrder: 3 },
    { prescriptionId: Bradycardia질환처방.id, type: "약", productName: "염산도파민프리믹스 500ml", ingredientName: "dopamine HCl", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "2~20mcg/kg/min(예: 60kg기준 10mcg/kg/min=22.5cc/hr)", sortOrder: 4 },
    { prescriptionId: Bradycardia질환처방.id, type: "지시처방", productName: "Transcutaneous Cardiac Pacing(체외용)", sortOrder: 5 },
    { prescriptionId: Bradycardia질환처방.id, type: "지시처방", productName: "TCP시 sedation, pain control 고려", sortOrder: 6 },
    { prescriptionId: Bradycardia질환처방.id, type: "추가설명", productName: "Pain control", sortOrder: 7 },
    { prescriptionId: Bradycardia질환처방.id, type: "약", productName: "명문모르핀염산염수화물주사 10mg/1mL", ingredientName: "morphine", dosage: "0.5", unit: "A", frequency: "1", route: "IV infusion", note: "필요시 5-15분마다 반복", sortOrder: 8, mixGroup: "M1" },
    { prescriptionId: Bradycardia질환처방.id, type: "약", productName: "중외엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 9, mixGroup: "M1" },
    { prescriptionId: Bradycardia질환처방.id, type: "추가설명", productName: "sedation", sortOrder: 10 },
    { prescriptionId: Bradycardia질환처방.id, type: "약", productName: "부광미다졸람주사5mL", ingredientName: "midazolam", dosage: "0.6", frequency: "1", route: "IVS", note: "initial bolus 0.05mg/kg(60kg 기준 3mg=3ml)", sortOrder: 11 },
    { prescriptionId: Bradycardia질환처방.id, type: "약", productName: "부광미다졸람주사5mL", ingredientName: "midazolam", dosage: "2", frequency: "1", route: "IV infusion", note: "TCP용 30cc/hr start, continuous 0.05~2mg/kg/hr", sortOrder: 12, mixGroup: "M2" },
    { prescriptionId: Bradycardia질환처방.id, type: "약", productName: "엔에스주사액100ml", ingredientName: "Normal Saline", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 13, mixGroup: "M2" },

    // Hypertensive Crisis
    { prescriptionId: 고혈압위기처방.id, type: "지시처방", productName: "if AD(Aortic Dissection): target SBP 100-120, HR<60 목표", sortOrder: 0 },
    { prescriptionId: 고혈압위기처방.id, type: "추가설명", productName: "Short acting BB", sortOrder: 1 },
    { prescriptionId: 고혈압위기처방.id, type: "약", productName: "제일브레비블록주100mg", ingredientName: "esmolol HCl", dosage: "0.3", unit: "V", frequency: "1", route: "IVS", note: "bolus 0.1-0.5mg/kg(0.1-0.3A), 1분간(60kg 기준6-30mg)", sortOrder: 2 },
    { prescriptionId: 고혈압위기처방.id, type: "약", productName: "제일브레비블록주2.5그램", ingredientName: "esmolol HCl", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "initial 20cc/hr, 5분마다 20cc/hr titration", sortOrder: 3, mixGroup: "M1" },
    { prescriptionId: 고혈압위기처방.id, type: "약", productName: "5% D/W 500ml", ingredientName: "dextrose", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 4, mixGroup: "M1" },
    { prescriptionId: 고혈압위기처방.id, type: "추가설명", productName: "Long acting BB", sortOrder: 5 },
    { prescriptionId: 고혈압위기처방.id, type: "약", productName: "라베신주20mg/4ml", ingredientName: "labetalol HCl", dosage: "1", unit: "A", frequency: "1", route: "IVS", note: "bolus 2분간, 20-80mg repeat 가능", sortOrder: 6 },
    { prescriptionId: 고혈압위기처방.id, type: "약", productName: "라베신주100mg/20ml", ingredientName: "labetalol HCl", dosage: "12", unit: "A", frequency: "1", route: "IV infusion", note: "0.5-2mg/min", sortOrder: 7, mixGroup: "M2" },
    { prescriptionId: 고혈압위기처방.id, type: "약", productName: "중외5% D/S 500ml", ingredientName: "dextrose saline", dosage: "260", unit: "ml", frequency: "1", route: "IV infusion", note: "initial 12.5cc/hr, max 50cc/hr, total 300mg/day", sortOrder: 8, mixGroup: "M2" },
    { prescriptionId: 고혈압위기처방.id, type: "추가설명", productName: "CCB", sortOrder: 9 },
    { prescriptionId: 고혈압위기처방.id, type: "약", productName: "동아페르디핀주사액10mg/10mL", ingredientName: "nicardipine", dosage: "0.2", unit: "A", frequency: "1", route: "IVS", sortOrder: 10 },
    { prescriptionId: 고혈압위기처방.id, type: "약", productName: "동아페르디핀주사액10mg/10mL", ingredientName: "nicardipine", dosage: "5", unit: "A", frequency: "1", route: "IVS", sortOrder: 11, mixGroup: "M3" },
    { prescriptionId: 고혈압위기처방.id, type: "약", productName: "중외5%포도당주 200mL", ingredientName: "dextrose", dosage: "0.5", unit: "BT", frequency: "1", route: "IV infusion", note: "continuous 15cc/hr 시작, 15분마다 7.5cc/hr씩 증량, 최대 60cc/hr", sortOrder: 12, mixGroup: "M3" },
    { prescriptionId: 고혈압위기처방.id, type: "추가설명", productName: "Nitroprusside", sortOrder: 13 },
    { prescriptionId: 고혈압위기처방.id, type: "약", productName: "나이트로프레스주(50mg/2mL)", ingredientName: "nitroprusside", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", sortOrder: 14, mixGroup: "M4" },
    { prescriptionId: 고혈압위기처방.id, type: "약", productName: "중외5%포도당주 200mL", ingredientName: "dextrose", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", note: "continuous 시작 7cc/hr→14→21→28, 28cc/hr 이상 사용 금지(독성)", sortOrder: 15, mixGroup: "M4" },
    { prescriptionId: 고혈압위기처방.id, type: "추가설명", productName: "NTG", sortOrder: 16 },
    { prescriptionId: 고혈압위기처방.id, type: "약", productName: "니트로링구알주사 10mg/10mL", ingredientName: "nitroglycerin", dosage: "5", unit: "A", frequency: "1", route: "IV infusion", sortOrder: 17, mixGroup: "M5" },
    { prescriptionId: 고혈압위기처방.id, type: "약", productName: "5%포도당주 500ml", ingredientName: "dextrose", dosage: "450", unit: "ml", frequency: "1", route: "IV infusion", note: "continuous 시작 3cc/hr, 5분마다 3cc/hr씩 증량(12cc까지), 이후 6cc/hr씩 증량(최대 120cc/hr)", sortOrder: 18, mixGroup: "M5" },

    // ASO
    { prescriptionId: ASO질환처방.id, type: "추가설명", productName: "ABI < 0.9 일 경우 의심", sortOrder: 0 },
    { prescriptionId: ASO질환처방.id, type: "지시처방", productName: "사지 BP 재주세요.", sortOrder: 1 },
    { prescriptionId: ASO질환처방.id, type: "추가설명", productName: "Heparin 치료", sortOrder: 2 },
    { prescriptionId: ASO질환처방.id, type: "약", productName: "중외헤파린나트륨주사액1000iu(5000IU/5mL)", ingredientName: "heparin sodium", dosage: "1", unit: "V", frequency: "1", route: "IVS", note: "IV bolus: 80unit/kg(60kg 기준 4800unit)", sortOrder: 3 },
    { prescriptionId: ASO질환처방.id, type: "약", productName: "중외헤파린주(25KIU/5mL)", ingredientName: "heparin sodium", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "유지용량 18unit/kg/hr, 25cc/hr", sortOrder: 4, mixGroup: "M1" },
    { prescriptionId: ASO질환처방.id, type: "약", productName: "5% D/W 500ml", ingredientName: "dextrose", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 5, mixGroup: "M1" },
    { prescriptionId: ASO질환처방.id, type: "혈액검사", productName: "aPTT", sortOrder: 6 },
    { prescriptionId: ASO질환처방.id, type: "지시처방", productName: "헤파린 투여 6시간 후 aPTT검사 6시간마다 반복, target 60-80sec", sortOrder: 7 },
    { prescriptionId: ASO질환처방.id, type: "지시처방", productName: "aPTT<50: 헤파린 4000unit bolus 투여 및 continuous 속도 10%증가", sortOrder: 8 },
    { prescriptionId: ASO질환처방.id, type: "지시처방", productName: "aPTT 50-59: continuous 속도 10%증가", sortOrder: 9 },
    { prescriptionId: ASO질환처방.id, type: "지시처방", productName: "aPTT 60-85: 현재 속도 유지", sortOrder: 10 },
    { prescriptionId: ASO질환처방.id, type: "지시처방", productName: "aPTT 86-95: 속도 10%감량", sortOrder: 11 },
    { prescriptionId: ASO질환처방.id, type: "지시처방", productName: "aPTT 96-120: continuous 30분 중단 후, 속도 10% 감량 후 재시작", sortOrder: 12 },
    { prescriptionId: ASO질환처방.id, type: "지시처방", productName: "aPTT>120: continuous 30분 중단 후, 속도 15% 감량 후 재시작", sortOrder: 13 },
    { prescriptionId: ASO질환처방.id, type: "지시처방", productName: "투여속도 변경시 aPTT 4시간 후 f/u", sortOrder: 14 },
    { prescriptionId: ASO질환처방.id, type: "약", productName: "한미아스피린장용정100밀리그램", ingredientName: "aspirin", dosage: "3", unit: "T", frequency: "QD", route: "QD", note: "씹어서 즉시 복용하세요", sortOrder: 15 },

    // PTE
    { prescriptionId: PTE질환처방.id, type: "추가설명", productName: "1. Fibrinolysis(tPA 사용) - massive 일경우 사용 고려", sortOrder: 0 },
    { prescriptionId: PTE질환처방.id, type: "추가설명", productName: "massive 기준: SBP<90, Shock index(HR/SBP)>1.0, SaO2<95%", sortOrder: 1 },
    { prescriptionId: PTE질환처방.id, type: "약", productName: "액티라제주50mg", ingredientName: "alteplase", dosage: "2", unit: "V", frequency: "1", route: "IV infusion", note: "코멘트대로 꼭 확인 투여, 반드시 10mg(2분간)+나머지 90mg(2시간동안) 나눠서 투여", sortOrder: 2 },
    { prescriptionId: PTE질환처방.id, type: "지시처방", productName: "BWt. 꼭 확인해주세요", sortOrder: 3 },
    { prescriptionId: PTE질환처방.id, type: "지시처방", productName: "유치 카테타 설치", sortOrder: 4 },
    { prescriptionId: PTE질환처방.id, type: "지시처방", productName: "tPA주기 전 foley insertion해주세요", sortOrder: 5 },
    { prescriptionId: PTE질환처방.id, type: "지시처방", productName: "동의서 사인 받고나서 Actilyse오픈 합니다.", sortOrder: 6 },
    { prescriptionId: PTE질환처방.id, type: "지시처방", productName: "massive 일 경우에도 heparin 또는 enoxaparin 같이 투여", sortOrder: 7 },
    { prescriptionId: PTE질환처방.id, type: "추가설명", productName: "2. 또는 3중에 사용", sortOrder: 8 },
    { prescriptionId: PTE질환처방.id, type: "추가설명", productName: "2. Heparin 치료", sortOrder: 9 },
    { prescriptionId: PTE질환처방.id, type: "약", productName: "중외헤파린나트륨주사액1000iu(5000IU/5mL)", ingredientName: "heparin sodium", dosage: "1", unit: "V", frequency: "1", route: "IVS", note: "IV bolus: 80unit/kg(60kg 기준 4800unit)", sortOrder: 10 },
    { prescriptionId: PTE질환처방.id, type: "약", productName: "중외헤파린주(25KIU/5mL)", ingredientName: "heparin sodium", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "유지용량 18unit/kg/hr, 25cc/hr", sortOrder: 11, mixGroup: "M1" },
    { prescriptionId: PTE질환처방.id, type: "약", productName: "5% D/W 500ml", ingredientName: "dextrose", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 12, mixGroup: "M1" },
    { prescriptionId: PTE질환처방.id, type: "혈액검사", productName: "aPTT", sortOrder: 13 },
    { prescriptionId: PTE질환처방.id, type: "지시처방", productName: "헤파린 투여 6시간 후 aPTT검사 6시간마다 반복, target 60-80sec", sortOrder: 14 },
    { prescriptionId: PTE질환처방.id, type: "지시처방", productName: "aPTT<50: 헤파린 4000unit bolus 투여 및 continuous 속도 10%증가", sortOrder: 15 },
    { prescriptionId: PTE질환처방.id, type: "지시처방", productName: "aPTT 50-59: continuous 속도 10%증가", sortOrder: 16 },
    { prescriptionId: PTE질환처방.id, type: "지시처방", productName: "aPTT 60-85: 현재 속도 유지", sortOrder: 17 },
    { prescriptionId: PTE질환처방.id, type: "지시처방", productName: "aPTT 86-95: 속도 10%감량", sortOrder: 18 },
    { prescriptionId: PTE질환처방.id, type: "지시처방", productName: "aPTT 96-120: continuous 30분 중단 후, 속도 10% 감량 후 재시작", sortOrder: 19 },
    { prescriptionId: PTE질환처방.id, type: "지시처방", productName: "aPTT>120: continuous 30분 중단 후, 속도 15% 감량 후 재시작", sortOrder: 20 },
    { prescriptionId: PTE질환처방.id, type: "지시처방", productName: "투여속도 변경시 aPTT 4시간 후 f/u", sortOrder: 21 },
    { prescriptionId: PTE질환처방.id, type: "추가설명", productName: "3. Enoxaparin치료", sortOrder: 22 },
    { prescriptionId: PTE질환처방.id, type: "약", productName: "크렉산주40mg", ingredientName: "enoxaparin sodium", dosage: "1", unit: "PFS", frequency: "1", route: "SC", note: "1mg/kg, 12시간마다 투여", sortOrder: 23 },
    { prescriptionId: PTE질환처방.id, type: "추가설명", productName: "일반 수술 후 또는 Nonsurgical Acute Illness 에서 DVT 방지 예방 사용 목적은 40mg/day SQ", sortOrder: 24 },

    // ACS
    { prescriptionId: ACS질환처방.id, type: "추가설명", productName: "Acute coronary syndrome", sortOrder: 0 },
    { prescriptionId: ACS질환처방.id, type: "추가설명", productName: "#1 RV infarction시 full drip", sortOrder: 1 },
    { prescriptionId: ACS질환처방.id, type: "약", productName: "플라주오피주 1000mL", dosage: "1", unit: "BT", frequency: "1", route: "IV infusion", sortOrder: 2 },
    { prescriptionId: ACS질환처방.id, type: "추가설명", productName: "#2 Anti-coagulation", sortOrder: 3 },
    { prescriptionId: ACS질환처방.id, type: "약", productName: "중외헤파린나트륨주사액1000iu(5000IU/5mL)", ingredientName: "heparin sodium", dosage: "0.8", unit: "V", frequency: "1", route: "IVS", note: "bolus: 60unit/kg", sortOrder: 4 },
    { prescriptionId: ACS질환처방.id, type: "약", productName: "중외헤파린주(25,000IU/5mL)", ingredientName: "heparin sodium", dosage: "1", frequency: "1", route: "IV infusion", note: "continuous 12unit/kg/hr, 헤파린 25000unit+5%DW 500ml, 60kg기준 15cc/hr로 투여", sortOrder: 5, mixGroup: "M1" },
    { prescriptionId: ACS질환처방.id, type: "약", productName: "5% D/W 500ml", ingredientName: "dextrose", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 6, mixGroup: "M1" },
    { prescriptionId: ACS질환처방.id, type: "추가설명", productName: "Enoxaparin (GFR 확인한다고 투여가 늦어지면 안됩니다)", sortOrder: 7 },
    { prescriptionId: ACS질환처방.id, type: "약", productName: "크렉산주(에녹사파린나트륨 60mg/0.6mL)", ingredientName: "enoxaparin", dosage: "0.5", unit: "SYR", frequency: "1", route: "IV", sortOrder: 8 },
    { prescriptionId: ACS질환처방.id, type: "약", productName: "크렉산주(에녹사파린나트륨 60mg/0.6mL)", ingredientName: "enoxaparin", dosage: "1", unit: "SYR", frequency: "1", route: "SC", sortOrder: 9 },
    { prescriptionId: ACS질환처방.id, type: "지시처방", productName: "75세 이하이면 30mg IV loading 15분 후 1mg/kg SC 추가투여", sortOrder: 10 },
    { prescriptionId: ACS질환처방.id, type: "지시처방", productName: "75세 이상이면 loading 없이 GFR>30 이면 0.75mg/kg BID, GFR<30 이면 1mg/kg QD", sortOrder: 11 },
    { prescriptionId: ACS질환처방.id, type: "추가설명", productName: "#3 Pain control", sortOrder: 12 },
    { prescriptionId: ACS질환처방.id, type: "약", productName: "명문모르핀염산염10mg/1mL", ingredientName: "morphine", dosage: "0.5", unit: "A", frequency: "1", route: "IVS", sortOrder: 13 },
    { prescriptionId: ACS질환처방.id, type: "지시처방", productName: "통증 호전시까지 5분간격으로 2-4mg 씩 투여 가능", sortOrder: 14 },
    { prescriptionId: ACS질환처방.id, type: "추가설명", productName: "#4 NTG", sortOrder: 15 },
    { prescriptionId: ACS질환처방.id, type: "약", productName: "니트로글리세린0.6mg설하정", ingredientName: "nitroglycerin", dosage: "1", unit: "T", frequency: "1", route: "SL", note: "혀밑에서 녹여서 흡수", sortOrder: 16 },
    { prescriptionId: ACS질환처방.id, type: "지시처방", productName: "설하정은 5분 간격으로 3회까지 줄 수 있다", sortOrder: 17 },
    { prescriptionId: ACS질환처방.id, type: "지시처방", productName: "이후에도 흉통 지속되면 IV NTG 를 시작", sortOrder: 18 },
    { prescriptionId: ACS질환처방.id, type: "약", productName: "니트로링구알주사(희석된 니트로글리세린 50mg/50mL)", ingredientName: "nitroglycerin", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "Hypotension 주의, 비아그라 복용력 주의", sortOrder: 19, mixGroup: "M2" },
    { prescriptionId: ACS질환처방.id, type: "약", productName: "5% D/W 500ml", ingredientName: "dextrose", dosage: "450", unit: "ml", frequency: "1", route: "IV infusion", note: "5-20mcg/min, 3cc/hr 시작 후 10분마다 3cc/hr씩 추가(최대 12cc/hr), 목표: 정상혈압 10%/고혈압 30%까지 mBP 감소, sBP<90 또는 30mmHg 이상 하강 시 주의", sortOrder: 20, mixGroup: "M2" },
    { prescriptionId: ACS질환처방.id, type: "추가설명", productName: "#5 추가 경구약 -2023/02 CV", sortOrder: 21 },
    { prescriptionId: ACS질환처방.id, type: "약", productName: "아스피린정500mg", ingredientName: "aspirin", dosage: "0.5", unit: "T", frequency: "QD", route: "QD", note: "즉시 씹어서 복용", sortOrder: 22 },
    { prescriptionId: ACS질환처방.id, type: "약", productName: "리피로우정80mg", ingredientName: "atorvastatin", dosage: "1", unit: "T", frequency: "1", route: "1회", note: "즉시 복용하세요", sortOrder: 23 },
    { prescriptionId: ACS질환처방.id, type: "추가설명", productName: "#6 P2Y12 inhibitor (CV 상의 후 투여)", sortOrder: 24 },
    { prescriptionId: ACS질환처방.id, type: "약", productName: "에피언트정10밀리그램", ingredientName: "prasugrel", dosage: "6", unit: "T", frequency: "1", route: "1회", note: "즉시 복용하세요. 60mg", sortOrder: 25 },
    { prescriptionId: ACS질환처방.id, type: "약", productName: "티카젠정90mg", ingredientName: "ticagrelor", dosage: "2", unit: "T", frequency: "1", route: "1회", note: "즉시 복용하세요. 180mg", sortOrder: 26 },
    { prescriptionId: ACS질환처방.id, type: "약", productName: "플라빅스정75밀리그람", ingredientName: "clopidogrel", dosage: "4", unit: "T", frequency: "QD", route: "QD", note: "즉시 복용하세요 300mg", sortOrder: 27 },
    { prescriptionId: ACS질환처방.id, type: "추가설명", productName: "#7 Beta blocker (CV 상의 후 투여)", sortOrder: 28 },
    { prescriptionId: ACS질환처방.id, type: "약", productName: "베타록정", ingredientName: "metoprolol tartrate", dosage: "0.5", unit: "T", frequency: "QD", route: "QD", sortOrder: 29 },

    // Heart failure
    { prescriptionId: 심부전질환처방.id, type: "추가설명", productName: "Heart failure(hypertensive)", sortOrder: 0 },
    { prescriptionId: 심부전질환처방.id, type: "지시처방", productName: "SBP > 140 & Pul-edema 확인", sortOrder: 1 },
    { prescriptionId: 심부전질환처방.id, type: "지시처방", productName: "O2투여에도 SaO2 > 95 유지 안될경우 Optiflow 또는 Intubation 고려", sortOrder: 2 },
    { prescriptionId: 심부전질환처방.id, type: "추가설명", productName: "1st: O2 + sublingual NTG + Lasix", sortOrder: 3 },
    { prescriptionId: 심부전질환처방.id, type: "지시처방", productName: "산소 투여 및 Sat. 모니터해주세요", sortOrder: 4 },
    { prescriptionId: 심부전질환처방.id, type: "약", productName: "니트로글리세린0.6mg설하정", ingredientName: "nitroglycerin", dosage: "1", unit: "T", frequency: "1", route: "SL", sortOrder: 5 },
    { prescriptionId: 심부전질환처방.id, type: "약", productName: "라식스주사20mg/2mL", ingredientName: "furosemide", dosage: "1", unit: "A", frequency: "1", route: "IV", sortOrder: 6 },
    { prescriptionId: 심부전질환처방.id, type: "지시처방", productName: "Foley insertion 후 라식스 투여해주세요", sortOrder: 7 },
    { prescriptionId: 심부전질환처방.id, type: "약", productName: "라식스주사20mg/2mL", ingredientName: "furosemide", dosage: "10", unit: "A", frequency: "1", route: "IV infusion", note: "10-40mg/hr(10cc~40cc/hr)", sortOrder: 8, mixGroup: "M1" },
    { prescriptionId: 심부전질환처방.id, type: "약", productName: "5%포도당주 200mL", ingredientName: "dextrose", dosage: "1", frequency: "1", route: "IV infusion", sortOrder: 9, mixGroup: "M1" },
    { prescriptionId: 심부전질환처방.id, type: "지시처방", productName: "I/O check 해주세요", sortOrder: 10 },
    { prescriptionId: 심부전질환처방.id, type: "추가설명", productName: "sublingual NTG투여 후에도 BP >150/100일 경우", sortOrder: 11 },
    { prescriptionId: 심부전질환처방.id, type: "약", productName: "니트로링구알주사(희석된 니트로글리세린 50mg/50mL)", ingredientName: "nitroglycerin", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "5-10mcg/min 시작, 5분마다 5-10mcg/min씩 증량 최대 200mcg/min", sortOrder: 12, mixGroup: "M2" },
    { prescriptionId: 심부전질환처방.id, type: "약", productName: "5% D/W 500ml", ingredientName: "dextrose", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", note: "3.3-6.6cc/hr 시작, 최종 132cc/hr 까지 증량", sortOrder: 13, mixGroup: "M2" },
    { prescriptionId: 심부전질환처방.id, type: "추가설명", productName: "또는", sortOrder: 14 },
    { prescriptionId: 심부전질환처방.id, type: "약", productName: "나이트로프레스주(니트로푸루시드나트륨 50mg/2mL)", ingredientName: "nitroprusside", dosage: "1", unit: "V", frequency: "1", route: "IV infusion", note: "0.3mcg/kg/min 시작→0.5-10mcg/kg/min(보통 3mcg/kg/min), 60kg기준 10cc/hr 시작→100cc/hr(3mcg/kg/min)으로 유지", sortOrder: 15, mixGroup: "M3" },
    { prescriptionId: 심부전질환처방.id, type: "약", productName: "5% D/W 500ml", ingredientName: "dextrose", dosage: "1", unit: "Bag", frequency: "1", route: "IV infusion", sortOrder: 16, mixGroup: "M3" },
    { prescriptionId: 심부전질환처방.id, type: "지시처방", productName: "약 투여후 SBP<100 될시 IV hold해주세요", sortOrder: 17 },
  ]);

}
