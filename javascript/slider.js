document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".sliderImages");
  const images = document.querySelectorAll(".sliderImages img");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentIndex = 0;

  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  });

  // auto pay (5 sec/slide)
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  }, 5000);
});