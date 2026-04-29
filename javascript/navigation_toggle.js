const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-track > *');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
const dots = document.querySelectorAll('.slider-dots button');

let index = 0;
let timer = null;

function showSlide(n) {
  index = (n + slides.length) % slides.length;
  track.style.transform = `translateX(-${index * 100}%)`;

  // update dots status
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });

  resetAutoPlay();
}

function resetAutoPlay() {
  clearTimeout(timer);
  const currentSlide = slides[index];

  if (currentSlide.tagName.toLowerCase() === 'video') {
    // make sure video can pay
    currentSlide.play().catch(err => console.log("Autoplay blocked:", err));
    // next after finished pay
    currentSlide.addEventListener('ended', () => {
      showSlide(index + 1);
    }, { once: true });
  } else {
    // image: hold 5secs then next
    timer = setTimeout(() => {
      showSlide(index + 1);
    }, 5000);
  }
}

// manual control
prevBtn.addEventListener('click', () => {
  showSlide(index - 1);
});

nextBtn.addEventListener('click', () => {
  showSlide(index + 1);
});

// dots onclick event
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showSlide(i);
  });
});

// initialize
resetAutoPlay();