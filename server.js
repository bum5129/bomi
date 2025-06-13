const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 정적 파일 제공 (HTML, CSS, JavaScript, 이미지 등)
app.use(express.static('./'));

// API 예시
app.get('/api/hello', (req, res) => {
  res.json({ message: '안녕하세요! Express 서버가 작동 중입니다.' });
});

// index.html 제공
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 다른 모든 경로에 대해 404 응답
app.use((req, res) => {
  res.status(404).send('페이지를 찾을 수 없습니다');
});

app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
  console.log(`http://localhost:${PORT}에서 사이트를 확인하세요.`);
}); 