// navigation_toggle.js
document.addEventListener("DOMContentLoaded", () => {
  const navButton = document.getElementById("navButton");
  const guideNav = document.querySelector(".guide");

  if (!navButton || !guideNav) return;

  const ICON_OPEN = "✖️";
  const ICON_CLOSED = "💠🟰";

  const updateUI = (isOpen) => {
    navButton.textContent = isOpen ? ICON_OPEN : ICON_CLOSED;
    navButton.setAttribute("aria-expanded", isOpen);
    guideNav.setAttribute("aria-hidden", !isOpen);
  };

  navButton.addEventListener("click", () => {
    const isOpen = guideNav.classList.toggle("open");
    updateUI(isOpen);
  });

  updateUI(false);
});