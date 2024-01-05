// Update Copyright Year function 
const currentYear = new Date();
document.querySelector("#currentYear").innerHTML = `${currentYear.getFullYear()}`;

// Update Create Comic function 
function changeDisplay(id){
    var input = document.querySelector("#" + id);
    var inputSection = document.querySelector("#" + id + "-input");
    var displaySection = document.querySelector("#" + id + "-display");
    var valueDisplay = document.querySelector("#" + id + "-span");

    valueDisplay.textContent = input.value;
    inputSection.style.display = "none";
    displaySection.style.display = "flex";
}


// Hero slider function 
let currentHeroIndex = 0;
const totalHeroSlides = document.querySelectorAll('.hero-slide').length;

function nextHero() {
    currentHeroIndex = (currentHeroIndex + 1) % totalHeroSlides;
    updateHeroSlider();
}

function prevHero() {
    currentHeroIndex = (currentHeroIndex - 1 + totalHeroSlides) % totalHeroSlides;
    updateHeroSlider();
}

function updateHeroSlider() {
    const heroSlider = document.querySelector('.hero-slider');
    const heroSlideWidth = document.querySelector('.hero-slide').offsetWidth;
    heroSlider.style.transform = `translateX(${-currentHeroIndex * heroSlideWidth}px)`;
}

