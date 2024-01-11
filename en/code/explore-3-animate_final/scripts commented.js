window.onload = function () {
  // BOUNCE REMOVER
  const bounceObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      // Using entries and entries[0] here, but could use [entry] and entry (destructuring the entries array)?
      console.log("BOUNCE TRIGGER IN VIEWPORT"); // Show learners the Console?
      document.getElementById("bounce").style.opacity = 0;
      // Add this DISCONNECT for bounceObserver TO MODEL BEST PRACTICE IN PERFORMANCE:
      // bounceObserver.disconnect();
    }
  });
  bounceObserver.observe(document.getElementById("bounceTrigger"));

  // LAZY IMAGE LOADER
  const lazyImages = document.querySelectorAll(".lazy");
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(
      (entry) => {
        if (entry.isIntersecting) {
          console.log(entry);
          // USING setTimeout HERE (with Arrow syntax) SO THEY CAN SEE the change HAPPEN! Arrow syntax is equivalent of using the function keyword: setTimeout(function () { (entry.target.src = entry.target.getAttribute("data-src")),
          setTimeout(
            () => (entry.target.src = entry.target.getAttribute("data-src")),
            1000
          );

          console.log(entry.target); // Show learners the Console?
          imageObserver.unobserve(entry.target); // To decrease load on resources (stops it being observed next time scroll up to put image in VP again)
          // Use disconnect to show them the spinner working?
          // imageObserver.disconnect()
        }
      },
      { root: null, threshold: -1 }
    );
  });
  lazyImages.forEach((lazyImage) => imageObserver.observe(lazyImage));

  // RISING TEXT (Not used in index.html so throws an error in the Console.log)
  const riseObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        console.log("RISE TRIGGER IN VIEWPORT"); // Show learners the Console?
        console.log(entry); // FOR TESTING TO SHOW IT KEEPS FIRING
        entry.target.classList.add("rise");
        // DISCONNECT riseObserver TO MODEL BEST PRACTICE IN PERFORMANCE:
        // riseObserver.disconnect();
      }
    },
    { rootMargin: "100% 0% 0% 0%" }
  );
  riseObserver.observe(document.getElementById("riser")); // Is riser being attached to <p> a good idea or move it to lower in <p>? Maybe I need to put p n a div and use the height of the div for the trigger % - the same for .snail?

  // HEADER COLOUR CHANGES // Can I combine this with BounceObserver? It uses negation, so can show when enters, it triggers bounce to opacity 1 and then when it leaves view port it triggers colour change. But the other one wants a disconnect. Defo make the link between in and out of VP though.
  const headerElement = document.getElementById("bounceTrigger");
  const headerObserver = new IntersectionObserver(([entry]) => {
    headerElement.classList.toggle("enabled", !entry.isIntersecting);
    // EXPLAIN WHY WE WOULD NOT WANT TO USE A DISCONNECT ON headerObserver. Maybe show them:?
    // headerObserver.disconnect();
  });
  headerObserver.observe(document.getElementById("headerTrigger"));

  // CRAWLING SNAIL
  const snailObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("startCrawl");
        // DISCONNECT snailObserver TO MODEL BEST PRACTICE IN PERFORMANCE:
        // snailObserver.disconnect();
      }
    },
    { threshold: 0.5 } // This triggers when half the image is in the viewport
  );
  snailObserver.observe(document.getElementById("crawl"));
};
