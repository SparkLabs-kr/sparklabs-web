# First-time Setup Guide

이 문서는 `sparklabs-web` 레포를 **처음 Vercel에 배포**하고, **new.sparklabs.co.kr 스테이징 도메인**을 연결하는 전체 절차입니다. 한 번만 수행하면 됩니다.

---

## 0. 사전 준비

- [x] GitHub 레포: `https://github.com/SparkLabs-kr/sparklabs-web.git` (생성 완료)
- [x] Vercel 계정 (SparkLabs 계정)
- [x] `sparklabs.co.kr` DNS 관리 권한 (현재 호스팅 업체 또는 Cloudflare 등)

---

## 1. 로컬에서 의존성 설치 & 동작 확인

**프로젝트 폴더 경로 찾기 (Windows)**

1. 파일 탐색기에서 Cowork이 선택한 `스파크랩` 폴더로 이동 (보통 `C:\Users\<본인>\Documents\스파크랩\` 또는 OneDrive 하위)
2. 안에 있는 `sparklabs-web` 폴더를 엽니다
3. 주소창에 표시되는 전체 경로를 복사 (예: `C:\Users\ebjan\Documents\스파크랩\sparklabs-web`)

**터미널에서 실행** — 한글 폴더명 때문에 경로는 반드시 **큰따옴표**로 감쌉니다:

```cmd
cd "C:\Users\ebjan\Documents\스파크랩\sparklabs-web"
npm install
npm run dev
```

> 💡 꿀팁: 파일 탐색기에서 `sparklabs-web` 폴더를 연 뒤, 주소창에 `cmd`만 쳐서 엔터 누르면 해당 위치에서 터미널이 바로 열립니다. 그러면 `cd` 단계 없이 바로 `npm install` 하면 됩니다.

**macOS / Linux**의 경우에도 동일하게 실제 경로로 치환:

```bash
cd "/Users/<본인>/Documents/스파크랩/sparklabs-web"
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` → 자동으로 `/ko`로 리다이렉트되며 홈 페이지가 떠야 합니다.

문제 없으면 종료하고 2번으로 이동.

---

## 2. Git 초기화 & GitHub 첫 푸시

`sparklabs-web` 폴더 안에서 (1번과 같은 위치) 실행:

```cmd
git init
git branch -M main
git add .
git commit -m "feat: initial Next.js 14 scaffold with i18n, design system, home sections"

git remote add origin https://github.com/SparkLabs-kr/sparklabs-web.git
git push -u origin main
```

> 푸시 시 GitHub Personal Access Token(PAT) 또는 SSH 키 인증이 필요합니다. 처음이라면 GitHub Desktop 앱을 사용하는 것도 편합니다.

---

## 3. Vercel 프로젝트 연결

1. https://vercel.com/new 접속
2. **Import Git Repository** → `SparkLabs-kr/sparklabs-web` 선택
3. 설정:
   - **Framework Preset**: Next.js (자동 감지)
   - **Root Directory**: `./` (기본)
   - **Build Command**: `npm run build` (기본)
   - **Output Directory**: `.next` (기본)
   - **Environment Variables**:
     - `NEXT_PUBLIC_SITE_URL` = `https://new.sparklabs.co.kr`
4. **Deploy** 클릭 → 1-2분 후 `sparklabs-web.vercel.app` 형태의 기본 URL 발급

---

## 4. 스테이징 도메인 `new.sparklabs.co.kr` 연결

### 4-1. Vercel 쪽 설정

1. Vercel 프로젝트 대시보드 → **Settings** → **Domains**
2. **Add Domain** → `new.sparklabs.co.kr` 입력 → Add
3. Vercel이 표시하는 DNS 레코드 값 확인:
   - Type: `CNAME`
   - Name: `new`
   - Value: `cname.vercel-dns.com`

### 4-2. DNS 쪽 설정 (현 sparklabs.co.kr DNS 관리 화면)

1. 현재 도메인 DNS 관리 콘솔 접속 (호스팅 업체 또는 Cloudflare 등)
2. 새 레코드 추가:
   - Type: `CNAME`
   - Host/Name: `new`
   - Value/Target: `cname.vercel-dns.com`
   - TTL: 자동 또는 3600
3. 저장 후 1-10분 대기 (DNS 전파)

### 4-3. Vercel에서 SSL 자동 발급 확인

Vercel의 Domains 페이지에서 `new.sparklabs.co.kr` 옆에 초록 체크(Valid Configuration) 표시되면 완료.
`https://new.sparklabs.co.kr` 접속 → 홈 페이지 노출 확인.

---

## 5. (나중에) 프로덕션 컷오버 — `www.sparklabs.co.kr`

개발이 완료되고 승인이 끝나면:

1. 기존 www.sparklabs.co.kr 전체 백업 (FTP/DB/파일)
2. Vercel Domains에 `www.sparklabs.co.kr` + `sparklabs.co.kr` 둘 다 추가
3. DNS에서 A/CNAME 레코드를 Vercel의 값으로 교체
4. `sparklabs.co.kr` → `www.sparklabs.co.kr` 301 리다이렉트는 Vercel이 자동 처리
5. Slack/Linear에 컷오버 공지, 24-48시간 모니터링

---

## 이후 개발 흐름 (Claude와의 협업)

1. Mido가 Claude에게 업데이트 요청 (예: "이번 MOU 보도자료 올려줘")
2. Claude가 워크스페이스의 레포 로컬 클론에서 `.mdx` 파일 생성·수정
3. Mido가 변경사항 확인 후 `git add . && git commit -m "..." && git push`
4. Vercel이 자동 배포 → `new.sparklabs.co.kr`에 1-2분 내 반영

---

## 트러블슈팅

**`npm install`이 실패하는 경우**
- Node 18+ 필요 (권장 20 LTS). `nvm install 20 && nvm use 20` 후 재시도.

**빌드 에러가 나는 경우**
- 로컬에서 `npm run build` 실행해 실제 에러 메시지 확인.
- Vercel 빌드 로그에서 해당 메시지 검색.

**한/영 토글이 안 바뀌는 경우**
- `/ko/...` 또는 `/en/...` 경로로 직접 접근해 테스트.
- `middleware.ts`와 `src/i18n/routing.ts` 수정 시 dev 서버 재시작 필요.

**Pretendard 폰트 안 뜨는 경우**
- `src/app/[locale]/layout.tsx`의 Pretendard CDN 링크가 막혀 있거나 느린 경우 발생.
- 프로덕션에서는 `/public/fonts/`에 Pretendard subset을 자체 호스팅 권장.
