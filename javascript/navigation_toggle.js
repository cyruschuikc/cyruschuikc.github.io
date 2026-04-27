const navb = document.getElementById("navButton");
const menu = document.querySelector(".navMain");

navb.addEventListener("click", () => {
  navb.innerText = navb.innerText === "💠🟰" ? "✖️" : "💠🟰";
  ToggleNavigation();
});

function ToggleNavigation() {
  if (!menu.classList.contains("show")) {
    menu.style.display = "flex";
    setTimeout(() => {
      menu.classList.add("show");
    }, 10);
  } else {
    menu.classList.remove("show");
    setTimeout(() => {
      menu.style.display = "none";
    }, 300);
  }
}