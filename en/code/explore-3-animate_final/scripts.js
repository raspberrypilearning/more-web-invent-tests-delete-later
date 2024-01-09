window.onload = function () {
  // BOUNCE REMOVER
  const bouncingElement = document.getElementById("bounce");
  const opacityTrigger = document.getElementById("trig");
  const bounceObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      console.log("TRIGGER IN VIEWPORT"); // Show learners the Console?
      bouncingElement.style.opacity = 0;
    }
  });
  bounceObserver.observe(opacityTrigger);
  // bounce_observer.disconnect; // ADD THIS LATER TO MODEL BEST PRACTICE IN PERFORMANCE?

  // LAZY IMAGE LOADER
  const lazyImages = document.querySelectorAll(".lazy");
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.getAttribute("data-src");
      }
    });
  });
  lazyImages.forEach((lazyImage) => imageObserver.observe(lazyImage));

  // RISING TEXT
  const riseAnimation = document.getElementById("riser");
  const riseObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry); // FOR TESTING TO SHOW IT KEEPS FIRING
          entry.target.classList.add("rise");
        }
      });
    },
    { rootMargin: "0% 0% 10% 0%" }
  );
  riseObserver.observe(riseAnimation);
  // rise_observer.disconnect; // ADD THIS LATER (AND REMOVE THE ELSE) TO MODEL BEST PRACTICE IN PERFORMANCE? (Also stops it refiring when scroll back into the viewport from below).

  // STICKY HEADER
  const headerEl = document.querySelector(".header");
  const triggerEl = document.getElementById("header_trigger");
  const observer = new IntersectionObserver((entries) => {
    headerEl.classList.toggle("enabled", !entries[0].isIntersecting);
  });
  observer.observe(triggerEl);

  // CRAWLING SNAIL
  const snailAnimation = document.getElementById("crawl");
  const snailObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("start-crawl", entry.isIntersecting);
      });
    },
    { rootMargin: "0% 0% -20% 0%" } // This is because the .snail height is 20vh, so it triggers when the bottom of image is in the viewport
  );
  snailObserver.observe(snailAnimation);
};
