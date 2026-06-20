// ── NAV SCROLL + HAMBURGER ──
const nav = document.querySelector('nav');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

if (hamburger) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// Mark active nav link
const path = window.location.pathname.replace(/\/$/, '') || '/';
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
  const href = a.getAttribute('href').replace(/\/$/, '') || '/';
  if (href === path || (href !== '/' && path.startsWith(href))) {
    a.classList.add('active');
  }
});
