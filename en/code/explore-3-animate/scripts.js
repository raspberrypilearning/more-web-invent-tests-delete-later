// GENRE CHOICE - Update text AND localStorage

window.onload = function () {

  document.getElementById("spooky").addEventListener("click", chooseSpooky);

  function chooseSpooky() {
    document.getElementById("magic").style.opacity = 0.3;
    document.getElementById("spookychosen").innerHTML = "YOU CHOSE SPOOKY!";
    document.getElementById("spooky").style.opacity = 0.8;
    document.getElementById("magicchosen").innerHTML = "Spooky";
    // Store the selected team in localStorage
    localStorage.setItem("selectedType", "spooky");
  }

  document.getElementById("magic").addEventListener("click", chooseMagic);

  function chooseMagic() {
    document.getElementById("spooky").style.opacity = 0.3;
    document.getElementById("magicchosen").innerHTML = "YOU CHOSE MAGIC!";
    document.getElementById("magic").style.opacity = 0.8;
    document.getElementById("spookychosen").innerHTML = "Magic";
    // Store the selected team in localStorage
    localStorage.setItem("selectedType", "none");
  }
};

function populateDropdown() {
  const doorDropdown = document.getElementById("doorDropdown");

  // Set the selected team from localStorage if available
  const storedDoor = localStorage.getItem("selectedDoor");
  if (storedDoor) {
    const option = document.createElement("option");
    option.value = storedDoor.toLowerCase().replace(/\s/g, ""); // Convert to lowercase and remove spaces
    option.text = storedDoor;
    doorDropdown.add(option);
    doorDropdown.value = option.value; // Set the selected value
    updateHeaderText();
  }
}

// Change Display function - Thanks, Mac!
function changeDisplay(id) {
  var input = document.querySelector("#" + id);
  var inputSection = document.querySelector("#" + id + "-input");
  var displaySection = document.querySelector("#" + id + "-display");
  var valueDisplay = document.querySelector("#" + id + "-span");

  valueDisplay.textContent = input.value;
  inputSection.style.display = "none";
  displaySection.style.display = "flex";
}

// Fix the stroy type in localStorage
function updateStoryType() {
  const teamDropdown = document.getElementById("teamDropdown");
  const headerText = document.getElementById("headerText");

  // Get the selected team from the dropdown
  const selectedTeam = teamDropdown.options[teamDropdown.selectedIndex].text;

  // Update the header text
  headerText.textContent = `Go, ${selectedTeam}!`;

  // Store the selected team in localStorage
  localStorage.setItem("selectedTeam", selectedTeam);
}

// Call the function to populate the dropdown and change the text from localStorage on page load window.onload = populateDropdown
