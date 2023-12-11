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

// Dark mode function 
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
  
    // Check if dark mode preference is stored in local storage
    const isDarkMode = localStorage.getItem("darkMode") === "true";
  
    // Set initial dark mode state based on the stored preference
    document.body.classList.toggle("dark-mode", isDarkMode);
    darkModeToggle.checked = isDarkMode;
  
    darkModeToggle.addEventListener("change", function () {
      const isDarkMode = darkModeToggle.checked;
  
      // Check if dark mode is already in the desired state
    if (isDarkMode !== document.body.classList.contains("dark-mode")) {
      // Update body class and store the user's preference in local storage
      document.body.classList.toggle("dark-mode", isDarkMode);
      localStorage.setItem("darkMode", isDarkMode.toString());
    }
    });
  });

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

// Username & password function
function checkCredentials() {
  const username = userNameInput.value;
  const password = passwordInput.value;

  
  if (username === "your_username" && password === "your_password") {
      loginSection.style.display = "none";
      successfulLoginSection.style.display = "block";
  } else {
      alertMessage.style.display = "block";
  }
}

// Function to load content on successful login
document.addEventListener("DOMContentLoaded", function () {
  const loginSection = document.getElementById("loginSection");
  const successfulLoginSection = document.getElementById("successfulLogin");
  const userNameInput = document.getElementById("userNameInput");
  const passwordInput = document.getElementById("passwordInput");
  const alertMessage = document.getElementById("alert");

  successfulLoginSection.style.display = "none";
});

 // Function to generate a random captcha string
document.addEventListener('DOMContentLoaded', function() {
  function generateCaptcha() {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let captcha = '';
      for (let i = 0; i < 6; i++) {
          captcha += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return captcha;
  }

  // Function to update the captcha image
  function updateCaptchaImage() {
      const captchaImage = document.getElementById('captchaImage');
      const captchaText = generateCaptcha();
      captchaImage.alt = captchaText;
      captchaImage.src = 'https://via.placeholder.com/150x50?text=' + captchaText;
  }

  // Function to check the entered captcha
  window.checkCaptcha = function() {
      const enteredCaptcha = document.getElementById('captchaInput').value;
      const correctCaptcha = document.getElementById('captchaImage').alt;

      const captchaAlert = document.getElementById('captchaAlert');
      const successfulLoginSection = document.getElementById('successfulLogin');

      if (enteredCaptcha === correctCaptcha) {
          captchaAlert.style.display = 'none';
          captchaSection.style.display = 'none';
          successfulLoginSection.style.display = 'block';
      } else {
          captchaAlert.style.display = 'block';
          successfulLoginSection.style.display = 'none';
      }
  };

  // Update the captcha image on page load
  updateCaptchaImage();
});
