const dropdown = document.getElementById("dropdown-options");

function openDropdown(){
    console.log("clicked");
    if (dropdown.classList.contains("open")){
        dropdown.classList.remove("open");
    } else {
        dropdown.classList.add("open");
    };
};

function option1(){
    document.querySelector("body").classList.add("liverpool");
}