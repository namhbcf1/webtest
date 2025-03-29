/**
 * Tệp chứa các hàm tiện ích dùng chung cho cả ứng dụng
 */

// Hàm định dạng số thành tiền VND
export function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount).replace('₫', 'VNĐ');
}

// Hàm chuyển đổi số thành chữ (ví dụ: 10000000 -> 10 triệu)
export function formatToMillions(number) {
    if (typeof number !== 'number') return '0';
    
    if (number >= 1000000) {
        return (number / 1000000).toFixed(number % 1000000 === 0 ? 0 : 1) + ' triệu';
    }
    
    return number.toLocaleString('vi-VN');
}

// Hàm lấy tham số URL
export function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Hàm tạo ID ngẫu nhiên
export function generateUniqueId() {
    return 'id_' + Math.random().toString(36).substring(2, 11);
}

// Hàm debounce để giảm số lần gọi hàm
export function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// Hàm kiểm tra xem thiết bị có phải di động hay không
export function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Hàm kiểm tra tính tương thích giữa CPU và Mainboard
export function checkCpuMainboardCompatibility(cpu, mainboard, cpuData, mainboardData) {
    if (!cpu || !mainboard || !cpuData || !mainboardData) return false;
    
    const cpuInfo = cpuData.find(c => c.id === cpu);
    const mainboardInfo = mainboardData.find(m => m.id === mainboard);
    
    if (!cpuInfo || !mainboardInfo) return false;
    
    // Kiểm tra socket có tương thích không
    return cpuInfo.socket === mainboardInfo.socket;
}

// Hàm ước tính điểm CPU dựa trên tên/mã CPU
export function estimateCpuScore(cpuName) {
    if (!cpuName) return 0;
    
    // Điểm cơ bản cho các dòng CPU
    let baseScore = 0;
    
    // Xử lý CPU Intel
    if (cpuName.includes('i9')) baseScore = 80;
    else if (cpuName.includes('i7')) baseScore = 70;
    else if (cpuName.includes('i5')) baseScore = 60;
    else if (cpuName.includes('i3')) baseScore = 40;
    else if (cpuName.includes('Pentium')) baseScore = 20;
    else if (cpuName.includes('Celeron')) baseScore = 10;
    
    // Xử lý CPU AMD
    else if (cpuName.includes('Ryzen 9')) baseScore = 80;
    else if (cpuName.includes('Ryzen 7')) baseScore = 70;
    else if (cpuName.includes('Ryzen 5')) baseScore = 60;
    else if (cpuName.includes('Ryzen 3')) baseScore = 40;
    else if (cpuName.includes('Athlon')) baseScore = 20;
    
    // Xử lý thế hệ (dựa vào số thế hệ nếu có)
    const genMatch = cpuName.match(/(\d+)th Gen|[i][3579]-(\d{1,2})\d{3}|Ryzen \d+ (\d)\d{3}/);
    if (genMatch) {
        const gen = parseInt(genMatch[1] || genMatch[2] || genMatch[3] || 0, 10);
        baseScore += gen * 2; // Cộng thêm điểm dựa vào thế hệ
    }
    
    return Math.min(100, baseScore); // Giới hạn điểm tối đa là 100
}

// Hàm ước tính điểm GPU dựa trên tên/mã GPU
export function estimateGpuScore(gpuName) {
    if (!gpuName) return 0;
    
    // Điểm cơ bản cho các dòng GPU
    let baseScore = 0;
    
    // Xử lý GPU NVIDIA
    if (gpuName.includes('RTX 40')) baseScore = 85;
    else if (gpuName.includes('RTX 30')) baseScore = 75;
    else if (gpuName.includes('RTX 20')) baseScore = 65;
    else if (gpuName.includes('GTX 16')) baseScore = 55;
    else if (gpuName.includes('GTX 10')) baseScore = 45;
    else if (gpuName.includes('GTX 9')) baseScore = 35;
    else if (gpuName.includes('GT ')) baseScore = 20;
    
    // Xử lý GPU AMD
    else if (gpuName.includes('RX 7')) baseScore = 80;
    else if (gpuName.includes('RX 6')) baseScore = 70;
    else if (gpuName.includes('RX 5')) baseScore = 60;
    else if (gpuName.includes('RX Vega')) baseScore = 50;
    else if (gpuName.includes('RX 5')) baseScore = 45;
    else if (gpuName.includes('R9')) baseScore = 40;
    else if (gpuName.includes('R7')) baseScore = 30;
    else if (gpuName.includes('R5')) baseScore = 20;
    
    // Xử lý model cụ thể (cộng thêm điểm dựa trên model)
    if (gpuName.includes('3090') || gpuName.includes('4090')) baseScore += 15;
    else if (gpuName.includes('3080') || gpuName.includes('4080')) baseScore += 12;
    else if (gpuName.includes('3070') || gpuName.includes('4070')) baseScore += 10;
    else if (gpuName.includes('3060') || gpuName.includes('4060')) baseScore += 7;
    else if (gpuName.includes('Ti') || gpuName.includes('SUPER')) baseScore += 5;
    
    return Math.min(100, baseScore); // Giới hạn điểm tối đa là 100
}

// Hàm ước tính FPS dựa trên điểm CPU và GPU
export function estimateGameFps(cpuScore, gpuScore, gameId, settings = 'medium') {
    // Trọng số cho CPU và GPU tùy thuộc vào game
    let cpuWeight = 0.3; // Mặc định
    let gpuWeight = 0.7; // Mặc định
    
    // Điều chỉnh trọng số dựa trên loại game
    switch (gameId) {
        case 'valorant':
        case 'csgo':
        case 'lol':
            cpuWeight = 0.6;
            gpuWeight = 0.4;
            break;
        case 'pubg':
        case 'gta-v':
        case 'elden-ring':
            cpuWeight = 0.4;
            gpuWeight = 0.6;
            break;
        case 'black-myth-wukong':
        case 'cyberpunk':
            cpuWeight = 0.3;
            gpuWeight = 0.7;
            break;
    }
    
    // Tính điểm hiệu năng tổng hợp
    const performanceScore = (cpuScore * cpuWeight + gpuScore * gpuWeight);
    
    // Hệ số cho từng mức cài đặt
    let settingMultiplier = 1;
    switch (settings.toLowerCase()) {
        case 'low':
            settingMultiplier = 1.4;
            break;
        case 'medium':
            settingMultiplier = 1;
            break;
        case 'high':
            settingMultiplier = 0.7;
            break;
        case 'ultra':
            settingMultiplier = 0.5;
            break;
    }
    
    // Hệ số cơ bản cho từng game (fps cơ bản ở mức medium)
    let baseGameFps = 60;
    switch (gameId) {
        case 'valorant':
        case 'csgo':
        case 'lol':
            baseGameFps = 140;
            break;
        case 'pubg':
        case 'fortnite':
            baseGameFps = 100;
            break;
        case 'gta-v':
        case 'elden-ring':
            baseGameFps = 70;
            break;
        case 'black-myth-wukong':
        case 'cyberpunk':
            baseGameFps = 50;
            break;
    }
    
    // Tính toán FPS dự kiến
    const estimatedFps = baseGameFps * (performanceScore / 70) * settingMultiplier;
    
    // Làm tròn kết quả
    return Math.round(estimatedFps);
} 