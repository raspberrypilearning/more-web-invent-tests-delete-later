// Update Copyright Year function 
const currentYear = new Date();
document.querySelector("#currentYear").innerHTML = `${currentYear.getFullYear()}`;

function changeDisplay(id){
    var input = document.querySelector("#" + id);
    var inputSection = document.querySelector("#" + id + "-input");
    var displaySection = document.querySelector("#" + id + "-display");
    var valueDisplay = document.querySelector("#" + id + "-span");

    valueDisplay.textContent = input.value;
    inputSection.style.display = "none";
    displaySection.style.display = "flex";
}
