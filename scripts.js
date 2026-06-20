
// Scroll-triggered fade-in
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
        setTimeout(() => {
        entry.target.classList.add('visible');
        }, i * 80);
    }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Active nav link highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    const scrolledToBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

    if (scrolledToBottom) {
        current = sections[sections.length - 1].id;
    } else {
        sections.forEach(s => {
            if (window.scrollY >= s.offsetTop - 200) current = s.id;
        });
    }

    navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current
            ? 'var(--accent)'
            : 'var(--muted)';
    });
});

document.getElementById('year').textContent = new Date().getFullYear();