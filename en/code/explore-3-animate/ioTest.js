window.onload = function () {
  if (!!window.IntersectionObserver) {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry);
            /* DO THE THING HERE, for example: */
            for (var i = 1; i <= 5; i++) {
              var element = document.getElementById("letter" + i);
              element.classList.remove("hide");
            }

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
