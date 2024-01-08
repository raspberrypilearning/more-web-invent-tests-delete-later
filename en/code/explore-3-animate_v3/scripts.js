window.onload = function () {
  // BOUNCE REMOVER
  const bouncing_element = document.getElementById("bounce");
  const opacity_trigger = document.getElementById("trig");

  const bounce_handler = (entries) => {
    // NOTES FOR PETE FOR WRITING:
    // Entries is an array of observed dom nodes. We're only interested in the first one at [0] because that's our .trigger node. Here, observe whether or not that node is in the viewport
    if (entries[0].isIntersecting) {
      console.log("TRIGGER IN VIEWPORT");
      bouncing_element.style.opacity = 0;
    }
  };
  // create the observer
  const bounce_observer = new IntersectionObserver(bounce_handler);
  // give the observer some dom nodes to keep an eye on
  bounce_observer.observe(opacity_trigger);
  // bounce_observer.disconnect; // ADD THIS LATER TO MODEL BEST PRACTICE IN PERFORMANCE?

  // LAZY IMAGE LOADER
  const lazyimages = document.querySelectorAll(".lazy");

  const image_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.getAttribute("data-src");
      }
    });
  });
  for (let i = 0; i < lazyimages.length; i++) {
    const lazyimage = lazyimages[i];
    image_observer.observe(lazyimage);
  }

  // RISING TEXT
  const rise_animation = document.getElementById("riser");

  const rise_observer = new IntersectionObserver(
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
  rise_observer.observe(rise_animation);
  // rise_observer.disconnect; // ADD THIS LATER (AND REMOVE THE ELSE) TO MODEL BEST PRACTICE IN PERFORMANCE? (Also stops it refiring when scroll back into the viewport from below).

  // STICKY HEADER
  const headerEl = document.querySelector(".header");
  const triggerEl = document.getElementById("header_trigger");

  const header_handler = (entries) => {
    console.log(entries);
    // NOTES FOR PETE FOR WRITING:
    // entries is an array of observed dom nodes
    // we're only interested in the first one at [0]
    // because that's our .trigger node.
    // Here, observe whether or not that node is in the viewport
    if (!entries[0].isIntersecting) {
      headerEl.classList.add("enabled");
    } else {
      headerEl.classList.remove("enabled");
    }
  };
  // create the observer
  const observer = new window.IntersectionObserver(header_handler);
  // give the observer some dom nodes to keep an eye on
  observer.observe(triggerEl);

  // CRAWLING SNAIL
  const snail_animation = document.getElementById("crawl");

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
    { rootMargin: "0% 0% -20% 0%" } // This is because the .snail height is 20vh, so it triggers when the bottom of image is in the viewport
  );
  snail_observer.observe(snail_animation);
};
