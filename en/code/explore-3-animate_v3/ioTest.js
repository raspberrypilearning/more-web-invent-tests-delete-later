window.onload = function () {
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
    { rootMargin: "0% 0% -20% 0%" }
  );
  snail_observer.observe(snail_animation);

  // RISING TEXT

  const rise_animation = document.getElementById("riser");

  const rise_observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry); // FOR TESTING
          entry.target.classList.add("rise");
        } else {
          entry.target.classList.remove("rise");
        }
      });
    },
    { rootMargin: "0% 0% 20% 0%" }
  );
  rise_observer.observe(rise_animation);
  // rise_observer.disconnect; // ADD THIS LATER (AND REMOVE THE ELSE) TO MODEL BET PRACTICE IN PERFORMANCE?

  // STICKY HEADER

  const headerEl = document.querySelector(".header");
  const triggerEl = document.querySelector(".trigger");

  const header_handler = (entries) => {
    console.log(entries);
    // entries is an array of observed dom nodes
    // we're only interested in the first one at [0]
    // because that's our .trigger node.
    // Here observe whether or not that node is in the viewport
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
};

// ^^^^^^^^^^^^^ WORKING!!! ^^^^^^^^^^^^^^^^^^^^^//

/* Me trying to get one observer handler with different actions when observing different classes

window.onload = function () {
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // The observed element is entering the viewport

        // Do something for elements with class 'page1'
        if (entry.target.classList.contains("page1")) {
          for (var i = 1; i <= 5; i++) {
            var element = document.getElementById("letter" + i);
            element.classList.remove("hide");
          }
          console.log('Element with class "page1" is entering the viewport');
        } else if (entry.target.classList.contains("crawl")) {
          // Do something for elements with class 'crawl'
          entry.target.classList.add("start-crawl");
          console.log('Element with class "crawl" is entering the viewport');
        }
        // Add more conditions as needed for different element types
      } else {
        if (entry.target.classList.contains("page1")) {
          for (var i = 1; i <= 5; i++) {
            var element = document.getElementById("letter" + i);
            element.classList.add("hide");
          }
        } else if (entry.target.classList.contains("crawl")) {
          entry.target.classList.remove("start-crawl");
        }
      }
    });
  }

  // Create an Intersection Observer with the callback and options
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5,
    rootMargin: "0% 0% -50% 0%",
  });

  // Get the elements you want to observe
  const elementsToObserve = document.querySelectorAll(".observe");

  // Start observing each element
  elementsToObserve.forEach((element) => {
    observer.observe(element);
  });
};
*/
