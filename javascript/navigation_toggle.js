const navb = document.getElementById("navButton");
const menu = document.querySelector(".navMain");

navb.addEventListener("click", () => {
  navb.innerText = navb.innerText === "💠🟰" ? "✖️" : "💠🟰";
  ToggleNavigation();
});

document.addEventListener("DOMContentLoaded", () => {
  const navButton = document.getElementById("navButton");
  const guideNav = document.querySelector(".guide");

  if (navButton && guideNav) {
    navButton.addEventListener("click", () => {
      // Toggle a class on the guide nav
      guideNav.classList.toggle("open");

      // Update accessibility attributes
      const expanded = guideNav.classList.contains("open");
      navButton.setAttribute("aria-expanded", expanded);
      guideNav.setAttribute("aria-hidden", !expanded);
    });
  }
});