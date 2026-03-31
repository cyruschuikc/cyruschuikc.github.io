document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.menu-toggle');
  const nav = document.getElementById('top-nav');
  if (!toggleButton || !nav) {
    console.warn('Menu toggle or nav not found');
    return;
  }

  /** Toggle Menu */
  function openMenu() {
    nav.classList.add('active');
    nav.style.height = nav.scrollHeight + 'px';
    toggleButton.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    nav.style.height = '0px';
    nav.classList.remove('active');
    toggleButton.setAttribute('aria-expanded', 'false');
  }

  function toggleMenu() {
    const isOpen = nav.classList.contains('active');
    isOpen ? closeMenu() : openMenu();
  }

  /* onclick Menu btn */
  toggleButton.addEventListener('click', (e) => {
    e.stopPropagation(); 
    toggleMenu();
  });

  /* onclick menu any item item link -> close up */
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  /* onclick other positions of the webP -> close up */
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggleButton.contains(e.target)) {
      closeMenu();
    }
  });

  /* window resize */
  window.addEventListener('resize', () => {
    if (nav.classList.contains('active')) {
      nav.style.height = nav.scrollHeight + 'px';
    }
  });
});
