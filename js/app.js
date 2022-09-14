/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game()
let startButton = document.getElementById("btn__reset")
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