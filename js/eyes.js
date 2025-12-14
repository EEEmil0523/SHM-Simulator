let mouseX = innerWidth / 2;
let mouseY = innerHeight / 2;

addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function followEyes() {
    document.querySelectorAll('.eye').forEach(eye => {
        const pupil = eye.querySelector('.pupil');
        const r = eye.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = mouseX - cx;
        const dy = mouseY - cy;
        const angle = Math.atan2(dy, dx);
        const dist = Math.min(40, Math.hypot(dx, dy) / 8);

        const prevX = parseFloat(pupil.dataset.x) || 0;
        const prevY = parseFloat(pupil.dataset.y) || 0;
        const targetX = Math.cos(angle) * dist;
        const targetY = Math.sin(angle) * dist;
        const newX = prevX + (targetX - prevX) * 0.2;
        const newY = prevY + (targetY - prevY) * 0.2;

        pupil.style.transform = `translate(-50%, -50%) translate(${newX}px, ${newY}px)`;
        pupil.dataset.x = newX;
        pupil.dataset.y = newY;
    });
    requestAnimationFrame(followEyes);
}
followEyes();

// ENTER 按鈕控制表情
const face = document.querySelector('.face');
const enterBtn = document.getElementById('enterBtn');
enterBtn.addEventListener('mouseenter', () => face.classList.add('happy'));
enterBtn.addEventListener('mouseleave', () => face.classList.remove('happy'));
enterBtn.addEventListener('click', e => {
    e.preventDefault();
    face.classList.add('happy');
    document.getElementById('home').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('home').style.display = 'none';
        document.getElementById('simulator').style.display = 'flex';
    }, 1000);
});
