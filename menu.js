document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('nav-links');

  // Toggle nav menu on click
  menuToggle?.addEventListener('click', () => {
    nav?.classList.toggle('nav-visible');
  });

  // Close nav on outside click (mobile)
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
        nav.classList.remove('nav-visible');
      }
    }
  });

  // Optional: animate menu button on hover
  menuToggle?.addEventListener('mouseenter', () => {
    menuToggle.classList.add('animate');
    setTimeout(() => menuToggle.classList.remove('animate'), 400);
  });

  // Header shadow on scroll
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 10) {
      header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.25)";
    } else {
      header.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
    }
  });
});
