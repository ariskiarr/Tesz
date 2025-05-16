document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'izzaa' && password === '123456') {
            window.location.href = 'index.html';
        } else {
            alert('Username atau password salah! Main lagi sana!!');
        }
    });
});