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
    menu.style.display = 'block';
    setTimeout(() => {
      menu.classList.add('show');
    }, 10);
  } else {
    menu.classList.remove('show'); 
    setTimeout(() => {
      menu.style.display = 'none'; 
    }, 300);
  }
}