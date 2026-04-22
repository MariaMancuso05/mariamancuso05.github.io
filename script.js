/* ── TYPEWRITER ── */
const phrases = [
    'Junior Security Engineer',
    'SIEM & SOAR Enthusiast',
    'ITS Cybersecurity Student',
    'Docker & Linux Practitioner',
    'Automation Builder',
];

let phraseIdx = 0;
let charIdx = 0;
let deleting = false;

const tw = document.getElementById('typewriter');

function typeLoop() {
    const phrase = phrases[phraseIdx];

    if (deleting) {
        tw.textContent = phrase.slice(0, charIdx - 1);
        charIdx--;
    } else {
        tw.textContent = phrase.slice(0, charIdx + 1);
        charIdx++;
    }

    if (!deleting && charIdx === phrase.length) {
        deleting = true;
        setTimeout(typeLoop, 2200);
        return;
    }

    if (deleting && charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
    }

    setTimeout(typeLoop, deleting ? 55 : 85);
}

typeLoop();

/* ── SCROLL REVEAL ── */
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12 }
);

document.querySelectorAll(
    '.project-card, .cert-card, .skill-cat, .timeline-item, .contact-card, .about-card, .about-text'
).forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

/* ── MOBILE MENU ── */
const menuToggle = document.getElementById('menuToggle');
const navLinks   = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ── NAVBAR BORDER ON SCROLL ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.style.borderBottomColor = window.scrollY > 30
        ? 'rgba(48,54,61,0.9)'
        : 'var(--border)';
}, { passive: true });
