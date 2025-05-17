document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'izzaa' && password === 'ARISKIBAIK') {
            window.location.href = 'homepage.html';
        } else {
            alert('Username atau password salah! Main lagi sana!!');
        }
    });
});