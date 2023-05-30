var scoreHomeDisplay = document.getElementById("scoreHome")
var scoreGuestDisplay = document.getElementById("scoreGuest")

scoreHomeDisplay.textContent = 0
scoreGuestDisplay.textContent = 0

var scoreHome = 0 
var scoreGuest = 0

function homeAdd1() {
    scoreHome += 1
    scoreHomeDisplay.textContent = scoreHome
}

function homeAdd2() {
    scoreHome += 2
    scoreHomeDisplay.textContent = scoreHome
}

function homeAdd3() {
    scoreHome += 3
    scoreHomeDisplay.textContent = scoreHome
}

function guestAdd1() {
    scoreGuest += 1
    scoreGuestDisplay.textContent = scoreGuest
}

function guestAdd2() {
    scoreGuest += 2
    scoreGuestDisplay.textContent = scoreGuest
}

function guestAdd3() {
    scoreGuest += 3
    scoreGuestDisplay.textContent = scoreGuest
}