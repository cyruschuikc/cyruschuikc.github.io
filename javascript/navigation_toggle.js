// navigation_toggle.js
document.addEventListener("DOMContentLoaded", () => {
  const navButton = document.getElementById("navButton");
  const guideNav = document.querySelector(".guide");

  if (!navButton || !guideNav) return;

  // Define icons
  const ICON_OPEN = "✖️";
  const ICON_CLOSED = "💠🟰";

  // Update UI state
  const updateUI = (isOpen) => {
    navButton.textContent = isOpen ? ICON_OPEN : ICON_CLOSED;
    navButton.setAttribute("aria-expanded", isOpen);
    guideNav.setAttribute("aria-hidden", !isOpen);
  };

  // Toggle on click
  navButton.addEventListener("click", () => {
    const isOpen = guideNav.classList.toggle("open");
    updateUI(isOpen);
  });

  // Initialize closed
  updateUI(false);
});