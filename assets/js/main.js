const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show') })
}, { threshold: 0.2 });
let delay = 0;
reveals.forEach(r => {
    r.style.transitionDelay = delay + 'ms';
    delay += 120;
    obs.observe(r);
});