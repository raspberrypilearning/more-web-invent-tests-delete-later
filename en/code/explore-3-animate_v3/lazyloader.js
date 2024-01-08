window.onload = function () {
  // LAZY LOADER

  const lazyimages = document.querySelectorAll(".lazy");

  const image_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.getAttribute("data-src");
      }
    });
      {
        rootMargin: "0px 0px -200px 0px"; /* WANT TO CHECK THIS IS RIGHT - WHY is rootMargin GREYED OUT? */
      }
  });
  for (let i = 0; i < lazyimages.length; i++) {
    const lazyimage = lazyimages[i];
    image_observer.observe(lazyimage);
  }
};
