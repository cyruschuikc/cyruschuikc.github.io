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
  if (!menu.classList.contains('show')) {
    menu.style.display = 'flex';   // first make it visible
    setTimeout(() => {
      menu.classList.add('show');  // then expand
    }, 10);
  } else {
    menu.classList.remove('show'); // collapse
    setTimeout(() => {
      menu.style.display = 'none'; // hide after animation
    }, 300); // wait for transition to finish
  }
}