// var button = document.querySelector("#hidey");
// var list = document.querySelectorAll("li");

// var items = [...list];


// button.addEventListener("click", hide);

// function hide(){
//     items.forEach(function (li){
//         li.classList.remove("hidden");
//     });
// }

//Trying to figure out how to select each map item
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

var progress = document.querySelector(".progress");
var width = 0;


//adding click event to areas

function prevent(e) {
    e.preventDefault();
    switch(e.target.title) {
        case "degree":
            progressBar();
                break;
        case "collector":
            progressBar();
                break;
        case "aquarium":
        progressBar();
            break;
        case "fantasy":
        progressBar();
            break;
        case "cartoons":
        progressBar();
            break;
        case "married":
        progressBar();
            break;
        case "cats":
        progressBar();
            break;
        case "selftaught":
        progressBar();
            break;
        case "actor":
        progressBar();
            break;
        case "gaming":
        progressBar();
            break;
        

    }
}

function progressBar() {
    if (width >= 100) {
        return;
    } else {
    width += 10;
    progress.style.width = width + "%";
    }
    
}

function reveal() {

}



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





// code for once   
// button.addEventListener('click', () => {
//     console.log('Click!!!');
// }, {
//   once: true
// });
