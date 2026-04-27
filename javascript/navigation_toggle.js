// navigation_toggle.js
document.addEventListener("DOMContentLoaded", () => {
  const navButton = document.getElementById("navButton");
  const guideNav = document.querySelector(".guide");

  if (!navButton || !guideNav) return;

  const defaultIcon = "💠🟰";
  const closeIcon = "✖️";

  const toggleMenu = () => {
    const isOpen = guideNav.classList.toggle("open");

    navButton.textContent = isOpen ? closeIcon : defaultIcon;

    navButton.setAttribute("aria-expanded", isOpen);
    guideNav.setAttribute("aria-hidden", !isOpen);
  };

  navButton.addEventListener("click", toggleMenu);
});