window.onload = function () {
  if (!!window.IntersectionObserver) {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry);

            //DO THE THING HERE, for example:

            for (var i = 1; i <= 5; i++) {
              var element = document.getElementById("letter" + i);
              element.classList.remove("hide");
            }
          } else {
            entry.classList.add("hide");
          }
        });
      },
      { rootMargin: "0% 0% -50% 0%" }
    );
    document.querySelectorAll("p").forEach((p) => {
      observer.observe(p);
    });

    const snail_animation = document.querySelectorAll(".crawl");

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

    const letter_animation = document.querySelectorAll(".snail_letter");

    const letter_observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry);
            entry.target.classList.add("snail_letter_animate");
          } else {
            entry.target.classList.remove("snail_letter_animate");
          }
        });
      },
      { rootMargin: "0% 0% -50% 0%" }
    );

    for (let i = 0; i < letter_animation.length; i++) {
      const elements = letter_animation[i];

      letter_observer.observe(elements);
    }
  } else document.querySelector("#warning").style.display = "block";
};

// ^^^^^^^^^^^^^ WORKING!!! ^^^^^^^^^^^^^^^^^^^^^//

/* Me trying to get one observer handler with different actions when obserbving different classes

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
