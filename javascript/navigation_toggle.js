// navigation_toggle.js
document.addEventListener("DOMContentLoaded", () => {
  const navButton = document.getElementById("navButton");
  const guide = document.getElementById("guide");

  if (navButton && guide) {
    navButton.addEventListener("click", () => {
      const expanded = navButton.getAttribute("aria-expanded") === "true";

      // switch aria-expanded
      navButton.setAttribute("aria-expanded", String(!expanded));

      // change button text
      navButton.textContent = expanded ? "💠🟰" : "✖️";

      // change guide visible
      guide.classList.toggle("open", !expanded);
    });
  }
});