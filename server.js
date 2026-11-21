const path = require('path');
const fs = require('fs');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// 저장소에 checkdeal_mvp.html이 있으면 우선 사용하고, 없으면 index.html을 찾습니다.
function resolveEntryHtmlPath() {
  const candidates = [
    path.join(__dirname, 'checkdeal_mvp.html'),
    path.join(__dirname, 'index.html'),
  ];
  return candidates.find((candidate) => fs.existsSync(candidate)) || null;
}

// 헬스체크 엔드포인트
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok', service: 'checkdeal-mvp' });
});

// 루트 경로에서 진입 HTML 반환
app.get('/', (_req, res) => {
  const entryPath = resolveEntryHtmlPath();
  if (!entryPath) {
    res
      .status(404)
      .send('checkdeal_mvp.html 또는 index.html 파일을 찾을 수 없습니다.');
    return;
  }

  res.sendFile(entryPath, (err) => {
    if (err && !res.headersSent) {
      res.status(500).send('HTML 파일을 불러오는 중 오류가 발생했습니다.');
    }
  });
});

// 정적 파일 서빙 (리소스 및 보조 파일 제공)
app.use(express.static(__dirname));

// 존재하지 않는 경로는 진입 HTML로 폴백
app.use((_req, res) => {
  const entryPath = resolveEntryHtmlPath();
  if (!entryPath) {
    res.status(404).send('요청하신 페이지를 찾을 수 없습니다.');
    return;
  }

  res.sendFile(entryPath, (err) => {
    if (err && !res.headersSent) {
      res.status(404).send('페이지를 찾을 수 없습니다.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`CheckDeal MVP server running on port ${PORT}`);
});
