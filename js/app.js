/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let letters = document.querySelector("ul")
let startScreen = document.getElementById("overlay")
let gameOverMessage = document.getElementById("game-over-message")
let phraseLetters = document.getElementsByClassName("letter")
let keyboard = document.getElementById("qwerty")
let keys = document.getElementsByClassName("key")
let heartList = document.getElementsByTagName("img")
let startButton = document.getElementById("btn__reset")

let game = null
// Create new game object when starting a game
startButton.addEventListener("click", e => {
    game = new Game()
    game.startGame()
})

let screenKeyboard = document.getElementById("qwerty")
// If a key button is pressed, call handleInteraction
screenKeyboard.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
        game.handleInteraction(e.target.textContent)
    }
})

// If keyboard is used, call handleInteraction() for letters
document.addEventListener("keydown", e => {
    // Check if key pressed is a letter and only send guesses as lowercase
    if (e.code >= 'KeyA' && e.code <= 'KeyZ') {
        game.handleInteraction(e.key.toLowerCase())
    }
})