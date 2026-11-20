# CheckDeal (체크딜) — Gemini 기반 MVP Render 배포 패키지

## 구성 파일
- `public/index.html`: 5단계 워크스페이스(1. 거래 검증, 2. 왜 틀렸는지, 3. 긴급 대응·변호사, 4. 시장·공급망 예측, 5. 구독·수수료 안내) 및 기업 로그인/DID 인증 모달이 포함된 단일 프론트엔드 MVP
- `server.js` & `package.json`: Render Web Service로 정적 앱을 서빙하는 경량 Node.js Express 서버
- `render.yaml`: Render Blueprint 배포 설정 파일

## Render 배포 방법
1. 이 폴더의 파일들을 새 GitHub 저장소에 업로드합니다.
2. Render 대시보드에서 **New +** → **Web Service**를 선택하고 해당 GitHub 저장소를 연결합니다.
3. Build Command: `npm install`, Start Command: `npm start`로 설정한 뒤 **Deploy Web Service**를 클릭합니다.
