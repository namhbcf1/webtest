const express = require('express');
const path = require('path');
const cors = require('cors');
const performanceCalculator = require('./performance-calculator.js');
const app = express();
const port = process.env.PORT || 3000;

// Middleware để thêm header ngrok-skip-browser-warning
app.use((req, res, next) => {
  res.setHeader('ngrok-skip-browser-warning', 'true');
  next();
});

// Bật CORS
app.use(cors());

// Phục vụ các tệp tĩnh từ thư mục hiện tại
app.use(express.static(path.join(__dirname)));

app.use(express.json());

app.post('/api/calculate-performance', (req, res) => {
    try {
        const { cpuScore, gpuScore, gameType } = req.body;
        const performance = {
            game: performanceCalculator.calculateGamePerformance(cpuScore, gpuScore),
            graphics: performanceCalculator.calculateGraphicsPerformance(cpuScore, gpuScore),
            office: performanceCalculator.calculateOfficePerformance(cpuScore, gpuScore),
            bottleneck: performanceCalculator.calculateBottleneck(cpuScore, gpuScore),
            stability: performanceCalculator.calculateStability(cpuScore, gpuScore),
            tips: performanceCalculator.generatePerformanceTips(gameType, cpuScore, gpuScore)
        };
        res.json(performance);
    } catch (error) {
        console.error('Error calculating performance:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route mặc định
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('Không tìm thấy trang');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 