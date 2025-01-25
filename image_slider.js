let currentSlide = 0;

const items = document.querySelectorAll('.carousel-item');
const totalSlides = items.length;

function updateSlides() {
  items.forEach((item, index) => {
    item.classList.remove('active', 'prev', 'next');

    if (index === currentSlide) {
      item.classList.add('active');
    } else if (index === (currentSlide - 1 + totalSlides) % totalSlides) {
      item.classList.add('prev');
    } else if (index === (currentSlide + 1) % totalSlides) {
      item.classList.add('next');
    }
  });
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlides();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlides();
}
updateSlides();
setInterval(nextSlide, 4000);
