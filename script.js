function updateClock() {
    const now = new Date();
    document.getElementById('live-clock').innerText = now.toLocaleTimeString('en-GB');
}
setInterval(updateClock, 1000);
updateClock();

function nextSlide(n) {
    document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
    const next = document.getElementById('slide' + n);
    if(next) next.classList.add('active');
    
    const bg = document.getElementById('bg-layer');
    bg.className = 'bg-transition slide' + n + '-bg';
}

function celebrate() {
    confetti({ 
        particleCount: 150, 
        spread: 80, 
        origin: { y: 0.6 }, 
        colors: ['#5c0a0a', '#FFB6C1', '#D4AF37'] 
    });
    setTimeout(() => nextSlide(4), 1200);
}
