// Hàm hiển thị hoặc ẩn form đăng nhập
function CancelHidden() {
    const login = document.getElementById('Login');
    const overlay = document.getElementById('overlay');
    
    if (login.classList.contains('hidden')) {
        login.classList.remove('hidden');  // Hiển thị section login
        overlay.classList.remove('hidden'); // Hiển thị overlay
    } else {
        login.classList.add('hidden');  // Ẩn section login
        overlay.classList.add('hidden'); // Ẩn overlay
    }
}

// Lắng nghe sự kiện click vào overlay
document.getElementById('overlay').addEventListener('click', function(event) {
    const login = document.getElementById('Login');
    // Kiểm tra nếu vùng được click không phải là form login
    if (!login.contains(event.target)) {
        login.classList.add('hidden');  // Ẩn section login
        this.classList.add('hidden');   // Ẩn overlay
    }
});
