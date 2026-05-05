const express = require('express');
const path = require('node:path');

const app = express();

app.get('/index', async (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//ไฟล์ที่ใช้ใน index.html
app.use('/images', express.static(path.join(__dirname, '/images')));
app.use('/assets', express.static(path.join(__dirname, '/assets')));
app.use('/style', express.static(path.join(__dirname, 'style CSS')));
app.use('/javascript' , express.static(path.join(__dirname, 'javascript')));
app.use(express.static(__dirname));




const PORT = 3000;
app.listen(PORT, () => {
    console.log(`SERVER RUNNING http://localhost:${PORT}/index`);
});
