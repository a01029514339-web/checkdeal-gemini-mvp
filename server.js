const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok', service: 'checkdeal-gemini-mvp' });
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`CheckDeal Gemini MVP running on port ${PORT}`);
});
