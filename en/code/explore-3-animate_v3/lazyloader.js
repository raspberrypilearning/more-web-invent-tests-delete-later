window.onload = function () {
  // LAZY LOADER

  const lazyimages = document.querySelectorAll(".lazy");

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.getAttribute("data-src");
      }
    });
  });

  for (let i = 0; i < lazyimages.length; i++) {
    const lazyimage = lazyimages[i];
    io.observe(lazyimage);
  }
};

/*

  const snail_animation = document.querySelectorAll("lazy");

  const snail_observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("start-crawl");
        } else {
          entry.target.classList.remove("start-crawl");
        }
      });
    },
    { threshold: 0.1 }
  );

  for (let i = 0; i < snail_animation.length; i++) {
    const elements = snail_animation[i];

    snail_observer.observe(elements);
  }
  */
