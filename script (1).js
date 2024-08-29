const carousel = document.querySelector('.carousel');
const cells = carousel.querySelectorAll('.carousel__cell');
const cellCount = cells.length;
let selectedIndex = 0;

document.querySelector('#prev').addEventListener('click', () => {
    selectedIndex--;
    rotateCarousel();
});

document.querySelector('#next').addEventListener('click', () => {
    selectedIndex++;
    rotateCarousel();
});

function rotateCarousel() {
    const angle = (selectedIndex / cellCount) * -360;
    carousel.style.transform = `translateZ(-288px) rotateY(${angle}deg)`;
}