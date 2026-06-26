# 약속처방 관리 (Order Set Manager)

의료 약속처방(Order Set)을 **대분류 → 중분류 → 세트처방명** 3단계로 정리하고, 선택한
처방의 상세 항목을 테이블로 표시하는 웹 애플리케이션입니다.

원래 Replit에서 만든 프로젝트를 **자체 호스팅(Railway / Render 등)** 용으로 정리한 버전입니다.

## 기술 스택
- **프론트엔드**: React 18 + Vite + TypeScript, shadcn/ui, Tailwind CSS, @hello-pangea/dnd
- **백엔드**: Express 5 + Drizzle ORM
- **DB**: PostgreSQL

## 환경변수
`.env.example`을 복사해 `.env`로 만들고 값을 채웁니다.

| 변수 | 설명 |
|------|------|
| `DATABASE_URL` | PostgreSQL 연결 문자열 (필수) |
| `APP_PIN` | 앱 접속 4자리 PIN (미설정 시 `0000`) |
| `PORT` | 서버 포트 (PaaS는 자동 주입, 로컬 기본 5000) |

## 로컬 실행 (Windows)
```bash
npm install
copy .env.example .env      # 값 채우기 (DATABASE_URL, APP_PIN)
npm run db:push             # DB 스키마 생성
npm run dev                 # http://localhost:5000
```
> 첫 실행 시 `server/seed.ts`가 내과/외과/응급의학과 시드 데이터를 자동 삽입합니다.

## 프로덕션 빌드
```bash
npm run build               # client → dist/public, server → dist/index.cjs
npm start
```

---

## 배포: Railway (추천, 가장 간단)
1. 이 폴더를 GitHub 저장소에 푸시
2. [railway.app](https://railway.app) → **New Project → Deploy from GitHub repo**
3. 같은 프로젝트에 **New → Database → Add PostgreSQL** 추가
   → Railway가 `DATABASE_URL`을 자동 연결해 줍니다
4. 서비스 **Variables**에 `APP_PIN` 추가
5. 빌드/스타트는 자동 감지(`npm run build` / `npm start`).
   배포 후 한 번 `npm run db:push`를 실행해 스키마 생성
   (Railway → 서비스 → Settings → 또는 로컬에서 Railway DB URL로 실행)

## 배포: Render
1. GitHub 푸시 후 [render.com](https://render.com) → **New → Blueprint** (아래 `render.yaml` 사용)
   또는 **New → Web Service** 수동 설정:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
2. **New → PostgreSQL**로 DB 생성 후 `DATABASE_URL`을 웹 서비스 환경변수에 연결
3. `APP_PIN` 환경변수 추가
4. 최초 1회 `npm run db:push`로 스키마 생성

## DB 무료 옵션
별도 관리형 Postgres가 필요하면 [Neon](https://neon.tech) (무료, 영구) 추천 —
프로젝트 생성 후 연결 문자열을 `DATABASE_URL`에 넣으면 됩니다.
