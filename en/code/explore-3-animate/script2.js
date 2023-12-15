window.onload = function () {
  const storedType = localStorage.getItem("selectedType");
  console.log(storedType);
  if (storedType == "magic" || storedType == "spooky") {
    var element = document.getElementById("plot");
    element.classList.remove("hide");
  }
};


function updateMiddle() {
  var e = document.getElementById("middleDropdown");
  if (e.selectedIndex > 0) {
    console.log(e.options[e.selectedIndex].value);
    if ("door" === e.options[e.selectedIndex].value) {
      var element = document.getElementById("door");
      element.classList.remove("hide");
      var element = document.getElementById("clock");
      element.classList.add("hide");
      var element = document.getElementById("selectMiddle");
      element.classList.remove("middle-selector");
    } else if ("clock" === e.options[e.selectedIndex].value) {
      var element = document.getElementById("clock");
      element.classList.remove("hide");
      var element = document.getElementById("door");
      element.classList.add("hide");
      var element = document.getElementById("selectMiddle");
      element.classList.remove("middle-selector");
    }
  }
}

/* On update of dropdown... remove hide from middle1 or middle2, depending on choice */
