document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider-top-images");
  const images = document.querySelectorAll(".slider-top-images img");
  const prevBtn = document.querySelector(".slider-controls .prev");
  const nextBtn = document.querySelector(".slider-controls .next");

  let currentIndex = 0;
  let autoSlideInterval;

  // Function to update slider position
  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Function to start auto-slide
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlider();
    }, 5000);
  }

  // Function to stop auto-slide
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Event listeners for buttons
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  });

  // Pause auto-slide on hover
  const sliderTop = document.querySelector(".slider-top");
  sliderTop.addEventListener("mouseenter", stopAutoSlide);
  sliderTop.addEventListener("mouseleave", startAutoSlide);

  // Start auto-slide initially
  startAutoSlide();
});