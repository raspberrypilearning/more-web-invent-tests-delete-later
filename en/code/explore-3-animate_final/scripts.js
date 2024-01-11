window.onload = function () {
  
  const bounceObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      console.log("BOUNCE TRIGGER IN VIEWPORT");
      document.getElementById("bounce").style.opacity = 0;
    }
  });
  bounceObserver.observe(document.getElementById("bounceTrigger"));

  const lazyImages = document.querySelectorAll(".lazy");
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(
      (entry) => {
        if (entry.isIntersecting) {
          console.log(entry);
          setTimeout(() => (entry.target.src = entry.target.getAttribute("data-src")),1000);
          console.log(entry.target);
          imageObserver.unobserve(entry.target);
        }
      },
      { root: null, threshold: -1 }
    );
  });
  lazyImages.forEach((lazyImage) => imageObserver.observe(lazyImage));

  const riseObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        console.log("RISE TRIGGER IN VIEWPORT"); 
        console.log(entry); 
        entry.target.classList.add("rise");
      }
    },
    { rootMargin: "100% 0% 0% 0%" }
  );
  riseObserver.observe(document.getElementById("riser")); 

  const headerObserver = new IntersectionObserver(([entry]) => {
    document.getElementById("bounceTrigger").classList.toggle("enabled", !entry.isIntersecting);
  });
  headerObserver.observe(document.getElementById("headerTrigger"));

  const snailObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("startCrawl");
      }
    },
    { threshold: 0.5 }
  );
  snailObserver.observe(document.getElementById("crawl"));
};
