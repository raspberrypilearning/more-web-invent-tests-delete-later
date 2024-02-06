const dropdown = document.getElementById("dropdown-options");

function openDropdown(){
    if (dropdown.classList.contains("open")){
        dropdown.classList.remove("open");
    } else {
        dropdown.classList.add("open");
    };
};

const body = document.querySelector("body");
const instruction = document.querySelector("#instruction");
const content = document.querySelector("#content-holder");
const title = document.querySelector("#title");
const slot1 = document.querySelector("#slot-1");
const slot2 = document.querySelector("#slot-2");
const slot3 = document.querySelector("#slot-3");

function clear(){
    body.classList = '';
    slot1.classList = 'results';
    slot2.classList = 'news';
    slot3.classList = 'players';
    instruction.style.display = 'none';
    content.style.display = "grid";
    openDropdown();
}

function option1(){
    clear();
    
    body.classList.add("liverpool");

    title.innerHTML = "Liverpool FC";
    
    slot1.classList.add("liverpool");
    slot1.innerHTML = "<h1>Recent results</h1> \n \
        <p>Liverpool 4 - 1 Chelsea</p> \n \
        <p>Liverpool 5 - 2 Norwich City</p> \n \
        <p>Fulham 1 - 1 Liverpool</p> \n \
        <p>Bournemouth 0 - 4 Liverpool</p> \n \
        <p>Liverpool 2 - 1 Fulham</p>";
    
    slot2.classList.add("liverpool");
    slot2.innerHTML = "<h1>Recent News</h1> \n \
        <p>Jurgen Klopp is leaving Liverpool.</p>\n \
        <p>Alexis MacAllister will probably play against Arsenal.</p>\n \
        <p>Liverpool still title favourites, but only just.</p>";
    
    slot3.classList.add("liverpool");
    slot3.innerHTML = "<h1>Top Players</h1> \n \
        <p>Mohamed Salah</p>\n \
        <p>Virgil Van Dyke</p>\n \
        <p>Trent Alexander Arnold</p>";
}

function option2(){
    clear();
    
    body.classList.add("man-city");

    title.innerHTML = "Manchester City";

    slot1.classList.add("man-city");
    slot1.innerHTML = "<h1>Recent results</h1> \n \
        <p>Man City 3 - 1 Burnley</p> \n \
        <p>Tottenham 0 - 1 Man City</p> \n \
        <p>Newcastle 2 - 3 Man City</p> \n \
        <p>Man City 5 - 0 Huddersfield</p> \n \
        <p>Man City 2 - 0 Sheffield United</p>";
    
    slot2.classList.add("man-city");
    slot2.innerHTML = "<h1>Recent News</h1> \n \
        <p>Kevin De Bruyne is back!</p>\n \
        <p>Erling Haaland wants to leave Manchester for Real Madrid.</p>\n \
        <p>Pep Guardiola making exit plans, wants to leave.</p>";
    
    slot3.classList.add("man-city");
    slot3.innerHTML = "<h1>Top Players</h1> \n \
        <p>Erling Haaland</p>\n \
        <p>Phil Foden</p>\n \
        <p>Bernardo Silva</p>";
}

function option3(){
    clear();
    
    body.classList.add("tottenham");

    title.innerHTML = "Tottenham Hotspur";

    slot1.classList.add("tottenham");
    slot1.innerHTML = "<h1>Recent results</h1> \n \
        <p>Tottenham 3 - 2 Brentford</p> \n \
        <p>Tottenham 0 - 1 Man City</p> \n \
        <p>Man United 2 - 2 Tottenham</p> \n \
        <p>Tottenham 1 - 0 Burnley</p> \n \
        <p>Tottenham 3 - 1 Bournemouth</p>";
    
    slot2.classList.add("tottenham");
    slot2.innerHTML = "<h1>Recent News</h1> \n \
        <p>Lucas Bergvall chooses Tottenham over Barcelona.</p>\n \
        <p>Alfie Dorrington adds to growing list of hamstring injuries at Spurs.</p>\n \
        <p>Spurs still struggling to replace Harry Kane</p>";
    
    slot3.classList.add("tottenham");
    slot3.innerHTML = "<h1>Top Players</h1> \n \
        <p>Heung-Min Son</p>\n \
        <p>Richarlison</p>\n \
        <p>Pedro Porro</p>";
}

const slot1observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      console.log("results"); // Show learners the Console?
      slot1.classList.add("fade-in");
    }
});
slot1observer.observe(slot1);

const slot2observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      console.log("news"); // Show learners the Console?
      slot2.classList.add("grow-in");
    }
});
slot2observer.observe(slot2);

const slot3observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      console.log("news"); // Show learners the Console?
      slot3.classList.add("rise-in");
      slot3observer.unobserve(entries[0].target);
    }
});
slot3observer.observe(slot3);