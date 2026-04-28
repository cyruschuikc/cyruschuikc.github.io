const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-track > *');
let index = 0;
let timer = null;

function showSlide(n) {
  index = (n + slides.length) % slides.length;
  track.style.transform = `translateX(-${index * 100}%)`;
  resetAutoPlay();
}

function resetAutoPlay() {
  clearTimeout(timer);
  const currentSlide = slides[index];

  if (currentSlide.tagName.toLowerCase() === 'video') {
    // make sure video in pay
    currentSlide.play().catch(err => console.log("Autoplay blocked:", err));
    // jump next if finished pay video
    currentSlide.addEventListener('ended', () => {
      showSlide(index + 1);
    }, { once: true });
  } else {
    // image Stay 5sec then move to next
    timer = setTimeout(() => {
      showSlide(index + 1);
    }, 5000);
  }
}

// initialize
resetAutoPlay();