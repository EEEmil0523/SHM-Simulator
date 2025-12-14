const home = document.getElementById('home');
const enterBtn = document.getElementById('enterBtn');

enterBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // 主體動畫
    home.style.opacity = '0';
    home.style.transform = 'scale(0.5) rotate(-15deg)';

    // 1秒後跳轉
    setTimeout(() => {
        window.location.href = 'shm.html';
    }, 1000);
});
