/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0
        this.phrases = [new Phrase()] * 5
        this.activePhrase = null
    }
    startGame() { }
    getRandomPhrase() { }
    handleInteraction() { }
    checkForWin() { }
    removeLife() { }
    gameOver() { }
}