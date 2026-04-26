const navb = document.getElementById("navButton");

navb.addEventListener("click", function () {
  if (navb.innerText === "💠🟰") {
    navb.innerText = "✖️";
  } else {
    navb.innerText = "💠🟰";
  }
});

// control guide visible
const heading = document.querySelector('.guide-heading');
const menu = document.querySelector('.guide ul');

heading.addEventListener('click', () => {
  menu.classList.toggle('show');
});