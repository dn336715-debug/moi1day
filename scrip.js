document.addEventListener('DOMContentLoaded', () => {
    // 1. Xử lý log bảo mật giả lập
    const logTable = document.getElementById('security-logs');
    if (logTable) {
        const logs = [
            { time: '10:45:12', ip: '192.168.1.15', action: 'Đăng nhập thành công', level: 'Thấp' },
            { time: '10:50:05', ip: '103.45.12.8', action: 'Thử mật khẩu sai', level: 'Trung bình' },
            { time: '11:02:30', ip: 'Unknown', action: 'Quét cổng port scan', level: 'Cao' }
        ];

        logs.forEach(log => {
            const row = `<tr>
                <td>${log.time}</td>
                <td>${log.ip}</td>
                <td>${log.action}</td>
                <td style="color: ${log.level === 'Cao' ? '#e94560' : '#00d2ff'}">${log.level}</td>
            </tr>`;
            logTable.innerHTML += row;
        });
    }

    // 2. Menu di động (Burger menu)
    const menuToggle = document.getElementById('mobile-menu');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            alert("Tính năng menu di động sẽ mở rộng trong phiên bản tiếp theo!");
        });
    }
});

// 3. Xử lý phân tích AI
function analyzeData() {
    const input = document.getElementById('data-input').value;
    const resultBox = document.getElementById('ai-result');
    
    if (!input) {
        alert("Vui lòng nhập dữ liệu!");
        return;
    }

    resultBox.innerHTML = "Đang chạy mô hình AI phân tích...";
    
    setTimeout(() => {
        resultBox.innerHTML = "<strong>Kết quả:</strong> Phát hiện 85% khả năng dữ liệu là sạch. Không tìm thấy mã độc (Malware).";
        resultBox.style.color = "#00d2ff";
        resultBox.style.border = "1px solid #00d2ff";
    }, 1500);
}