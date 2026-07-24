// Year stamp
document.getElementById('year').textContent = String(new Date().getFullYear());

// Animate hero bars on load with staggered delays
window.addEventListener('load', () => {
  const rows = document.querySelectorAll('.hero-bars .bar-row');
  rows.forEach((row, i) => {
    const fill = row.querySelector('.fill');
    const pct = Number(row.dataset.progress || 0);
    fill.style.setProperty('--delay', `${0.25 + i * 0.18}s`);
    requestAnimationFrame(() => {
      fill.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    });
  });
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  }
}, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Soft parallax on hero phone (skip on touch / reduced motion)
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouch = window.matchMedia('(hover: none)').matches;
if (!reduceMotion && !isTouch) {
  const phone = document.querySelector('.phone-tilt');
  if (phone) {
    const hero = document.querySelector('.hero');
    hero.addEventListener('mousemove', (e) => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      phone.style.transform =
        `perspective(1400px) rotateX(${2 - y * 4}deg) rotateY(${-8 + x * 6}deg)`;
    });
    hero.addEventListener('mouseleave', () => {
      phone.style.transform = '';
    });
  }
}
