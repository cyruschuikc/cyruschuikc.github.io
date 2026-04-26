const navb = document.getElementById("navButton");

navb.addEventListener("click", function () {
  if (navb.innerText === "💠🟰") {
    navb.innerText = "✖️";
  } else {
    navb.innerText = "💠🟰";
  }
});

function ToggleNavigation() {
  const menu = document.querySelector('.navMain');
  menu.classList.toggle('show');
}