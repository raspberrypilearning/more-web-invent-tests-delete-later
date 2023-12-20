window.onload = function () {
  if (!!window.IntersectionObserver) {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry);
            /* DO THE THING HERE, for example: */
            var element = document.getElementById("letter1");
            element.classList.remove("hide");
            
            var element = document.getElementById("letter2");
            element.classList.remove("hide");
            
            var element = document.getElementById("letter3");
            element.classList.remove("hide");
            
            var element = document.getElementById("letter4");
            element.classList.remove("hide");
            
            var element = document.getElementById("letter5");
            element.classList.remove("hide");
            
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0% 0% -50% 0%" }
    );
    document.querySelectorAll("p").forEach((p) => {
      observer.observe(p);
    });
  } else document.querySelector("#warning").style.display = "block";
};
