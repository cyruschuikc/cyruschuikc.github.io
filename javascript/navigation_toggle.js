// navigation_toggle.js

document.addEventListener("DOMContentLoaded", () => {
  const navButton = document.getElementById("navButton");
  const guideNav = document.querySelector(".guide");

  if (navButton && guideNav) {
    navButton.addEventListener("click", () => {
      // Toggle button text
      navButton.innerText = navButton.innerText === "💠🟰" ? "✖️" : "💠🟰";

      // Toggle nav visibility
      guideNav.classList.toggle("open");

      // Accessibility attributes
      const expanded = guideNav.classList.contains("open");
      navButton.setAttribute("aria-expanded", expanded);
      guideNav.setAttribute("aria-hidden", !expanded);
    });
  }
});