document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider-top-images");
  const images = document.querySelectorAll(".slider-top-images img");
  const prevBtn = document.querySelector(".slider-controls .prev");
  const nextBtn = document.querySelector(".slider-controls .next");

  let currentIndex = 0;

  // Function to update slider position
  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Event listeners
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  });

  // Auto-slide every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  }, 5000);
});
