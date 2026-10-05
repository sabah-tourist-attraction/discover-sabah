document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu-btn');
  const links = document.querySelector('.nav-links');

  if (menu && links) {
    menu.addEventListener('click', (e) => {
      e.preventDefault();
      links.classList.toggle('open');
    });
  }

  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === here) a.classList.add('active');
  });

  const backToTopBtn = document.querySelector('.backtop');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      backToTopBtn.style.display = window.scrollY > 500 ? 'block' : 'none';
    });
    backToTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});
