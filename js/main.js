// GO!

// TASK 1 -- Show/Hide Nav
var counter = 0
var hideButton = document.querySelector("#hide-nav button")
var NavMenuEl = document.querySelector("#hide-nav .nav-menu")
var modifyClickedElement = function(evt) {

    if (counter === 0) {
        evt.target.innerHTML = "showNav"
        NavMenuEl.className = "nav-menu-hidden"
        counter++
    } else if (counter === 1) {
        evt.target.innerHTML = "hideNav"
        NavMenuEl.className = "nav-menu"
        counter--
    }
}
hideButton.addEventListener('click', modifyClickedElement)



// TASK 2 -- Select an Icon
var wishList = document.querySelector(".wish-list")
   //console.log(wishList)
function modifyOptionsClicked(incident) {

    console.log(incident.target)
    if (incident.target.classList.contains("selected") === true) {
        incident.target.classList.remove("selected")
    } else if (incident.target.classList.contains("option")) {
        incident.target.classList.add("selected")
    }
}
wishList.addEventListener('click', modifyOptionsClicked)

// TASK 3 -- Move Item From List to List
console.log(document.querySelector('#list-2-list .answer-box'))
var gSL = document.querySelector(".good-standing-list")
var oPL = document.querySelector(".probation-list")
console.log(gSL)
console.log(oPL)

function moveToProbation(evnt) {
    var proBation = document.querySelector('.probation-section ul')
    console.log(proBation)
    proBation.appendChild(evnt.target)
}

function moveOffProbation(evnt) {
    var goodStanding = document.querySelector('.good-standing-section ul')
    console.log(goodStanding)
    goodStanding.appendChild(evnt.target)
}
gSL.addEventListener("click", moveToProbation)
oPL.addEventListener("click", moveOffProbation)

// TASK 4 -- Add Guest to List

// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
