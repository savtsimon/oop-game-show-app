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

const game = new Game()

startButton.addEventListener("click", e => {
    game.startGame()
})

let screenKeyboard = document.getElementById("qwerty")
screenKeyboard.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
        game.handleInteraction(e.target.textContent)
    }
})
document.addEventListener("keydown", e => {
    game.handleInteraction(e.key)
})