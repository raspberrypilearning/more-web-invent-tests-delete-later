// Responsive menu function
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('#nav');
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

//Animation function
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  // Update Copyright Year function
  const currentYear = new Date();
  document.querySelector("#currentYear").innerHTML = `${currentYear.getFullYear()}`;

// Take Quiz button function
  function musicFunction() {
    window.location.href = "quizapp.html"
  }

  function filterQuiz(topic) {
    var cards = document.getElementsByClassName('card');
    for (var i = 0; i < cards.length; i++) {
        if (topic === 'All' || cards[i].dataset.topic=== topic) {
            cards[i].style.display = 'block';
        } else {
            cards[i].style.display = 'none';
        }
    }
}