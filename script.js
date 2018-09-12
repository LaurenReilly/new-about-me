//Selecting each map area
var degree = document.querySelector("area[title='degree']");
var collector = document.querySelector("area[title='collector']");
var aquarium = document.querySelector("area[title='aquarium']");
var fantasy = document.querySelector("area[title='fantasy']");
var cartoons = document.querySelector("area[title='cartoons']");
var married = document.querySelector("area[title='married']");
var cats = document.querySelector("area[title='cats']");
var selfTaught = document.querySelector("area[title='selftaught']");
var actor = document.querySelector("area[title='actor']");
var gaming = document.querySelector("area[title='gaming']");

//selecting progress bar and setting initial width
var progress = document.querySelector(".progress");
var width = 0;

//getting references to each dt item
var degreeList = document.querySelector(".degree");
var collectorList = document.querySelector(".collector");
var aquariumList = document.querySelector(".aquarium");
var fantasyList = document.querySelector(".fantasy");
var cartoonsList = document.querySelector(".cartoons");
var marriedList = document.querySelector(".married");
var catsList = document.querySelector(".cats");
var selfTaughtList = document.querySelector(".selftaught");
var actorList = document.querySelector(".actor");
var gamingList = document.querySelector(".gaming");

//stop page refreshing, add 10% to progress bar, remove hidden class from list items
function prevent(e) {
    e.preventDefault();
    progressBar();
    switch(e.target.title) {
        case "degree":
            degreeList.classList.remove("hidden");
                break;
        case "collector":
            collectorList.classList.remove("hidden");
                break;
        case "aquarium":
            aquariumList.classList.remove("hidden");
                break;
        case "fantasy":
            fantasyList.classList.remove("hidden");
                break;
        case "cartoons":
            cartoonsList.classList.remove("hidden");
                break;
        case "married":
            marriedList.classList.remove("hidden");
                break;
        case "cats":
            catsList.classList.remove("hidden");
                break;
        case "selftaught":
            selfTaughtList.classList.remove("hidden");
                break;
        case "actor":
            actorList.classList.remove("hidden");
                break;
        case "gaming":
            gamingList.classList.remove("hidden");
                break;  
    }
}

//add 10% width to progress bar when each area is clicked (bug: can be clicked multiple times atm)
function progressBar() {
    if (width >= 100) {
        return;
    } else {
    width += 10;
    progress.style.width = width + "%";
    }  
}

//adding click event to each area
degree.addEventListener("click", prevent);
collector.addEventListener("click", prevent);
aquarium.addEventListener("click", prevent);
fantasy.addEventListener("click", prevent);
cartoons.addEventListener("click", prevent);
married.addEventListener("click", prevent);
cats.addEventListener("click", prevent);
selfTaught.addEventListener("click", prevent);
actor.addEventListener("click", prevent);
gaming.addEventListener("click", prevent);
