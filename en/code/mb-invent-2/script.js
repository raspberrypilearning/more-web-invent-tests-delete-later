let openHam = document.querySelector('#openHam');
let closeHam = document.querySelector('#closeHam');
let navigationItems = document.querySelector('.navigation-items')

const hamburgerEvent = (navigation, close, open) => {
    navigationItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
}

openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));

var root = document.querySelector(":root");
var rootVars = getComputedStyle(root);

function changeTheme(theme){

    if (theme != 'light'){
        root.style.setProperty( '--text-colour', rootVars.getPropertyValue('--light-text-colour'));
    } else {
        root.style.setProperty( '--text-colour', rootVars.getPropertyValue('--base-text-colour'));
    }

    root.style.setProperty( '--background-colour', rootVars.getPropertyValue('--'+theme+'-background-colour'));
    root.style.setProperty( '--foreground-colour', rootVars.getPropertyValue('--'+theme+'-foreground-colour'));
    root.style.setProperty( '--highlight-1', rootVars.getPropertyValue('--'+theme+'-highlight-1'));
    root.style.setProperty( '--highlight-2', rootVars.getPropertyValue('--'+theme+'-highlight-2'));
}

// Update Copyright Year function - Stolen from Tessy
const currentYear = new Date();
document.querySelector("#currentYear").innerHTML = `${currentYear.getFullYear()}`;

function changeDisplay(id){
    var input = document.querySelector("#" + id);
    var inputSection = document.querySelector("#" + id + "-input");
    var displaySection = document.querySelector("#" + id + "-display");
    var valueDisplay = document.querySelector("#" + id + "-span");

    valueDisplay.textContent = input.value;
    inputSection.style.display = "none";
    displaySection.style.display = "flex";
}

const ioConfiguration = {
    /**
     * This rootMargin creates a horizontal line vertically centered
     * that will help trigger an intersection at that the very point.
     */
    rootMargin: '-50% 0% -10% 0%',
  
    /**
     * This is the default so you could remove it.
     * I just wanted to leave it here to make it more explicit
     * as this threshold is the only one that works with the above
     * rootMargin
     */
    threshold: 0
  };

// Create the observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const timeline_item = entry.target.querySelector(".journey-content");

        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          timeline_item.classList.add('appear');
          timeline_item.style.opacity = "1";
          return;
        }

        //timeline_item.classList.remove('appear');
      });
  }, ioConfiguration);
  
  // Tell the observer which elements to track
const timeline = document.querySelectorAll('.journey-item');

timeline.forEach((element) => observer.observe(element));