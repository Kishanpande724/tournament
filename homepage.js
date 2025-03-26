// Add interactivity for the register buttons
document.addEventListener("DOMContentLoaded", function () {
    const registerButtons = document.querySelectorAll('.register-btn');
    registerButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Registration is now open! Please follow the instructions.');
        });
    });
});
let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    index = (index + step + totalSlides) % totalSlides;  // Ensure the index stays within bounds

    // Move the carousel by changing the transform property
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${index * 100}%)`;
}
