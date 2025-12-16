const slidesWrapper = document.querySelector('.slds');
const slides = document.querySelectorAll('.sld');
const dotsContainer = document.querySelector('.slider-dots');

let currentSlide = 0;
const totalSlides = slides.length;

for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    
    dot.addEventListener('click', () => {
        goToSlide(i);
    });
    
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function goToSlide(slideNumber) {
    slidesWrapper.style.transform = `translateX(-${slideNumber * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[slideNumber]) {
        dots[slideNumber].classList.add('active');
    }
    
    currentSlide = slideNumber;
}

function nextSlide() {
    let nextSlideIndex = (currentSlide + 1) % totalSlides;
    goToSlide(nextSlideIndex);
}

if (totalSlides > 0) {
    goToSlide(0);
    setInterval(nextSlide, 3000);
}