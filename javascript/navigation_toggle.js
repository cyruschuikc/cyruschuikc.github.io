// javascript/navigation_toggle.js
document.addEventListener("DOMContentLoaded", () => {
  const navButton = document.getElementById("navButton");
  const guide = document.getElementById("guide");

  if (!navButton || !guide) return;

  // define icon
  const ICON_OPEN = "✖️";
  const ICON_CLOSED = "💠🟰";

  // update UI status
  const updateUI = (isOpen) => {
    navButton.textContent = isOpen ? ICON_OPEN : ICON_CLOSED;
    navButton.setAttribute("aria-expanded", String(isOpen));
    guide.setAttribute("aria-expanded", String(isOpen));
  };

  // switch status
  const toggleNav = () => {
    const isOpen = guide.classList.toggle("open");
    updateUI(isOpen);
  };

  // click to switch 
  navButton.addEventListener("click", toggleNav);

  // keyboard control support (Enter / Space)
  navButton.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleNav();
    }
  });

  // initialize
  updateUI(false);
});