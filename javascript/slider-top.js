document.addEventListener("DOMContentLoaded", () => {
  const sliderTrack = document.querySelector(".slider-track");
  const images = document.querySelectorAll(".slider-track img");
  const prevBtn = document.querySelector(".slider-prev");
  const nextBtn = document.querySelector(".slider-next");
  const indicators = document.querySelectorAll(".slider-indicators button");

  let currentIndex = 0;
  let autoSlideInterval;

  // Function to update slider position
  function updateSlider() {
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicators();
  }

  // Function to update dot indicators
  function updateIndicators() {
    if (!indicators.length) return;
    indicators.forEach((dot, i) => {
      if (i === currentIndex) {
        dot.setAttribute("aria-current", "true");
      } else {
        dot.removeAttribute("aria-current");
      }
    });
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

  // Event listeners for indicators
  indicators.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentIndex = i;
      updateSlider();
    });
  });

  // Pause auto-slide on hover
  const slider = document.querySelector(".slider");
  slider.addEventListener("mouseenter", stopAutoSlide);
  slider.addEventListener("mouseleave", startAutoSlide);

  // Start auto-slide initially
  startAutoSlide();
});