/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0
        this.phrases = [new Phrase("no worry be happy"), new Phrase("you win"), new Phrase("no pain no pain"), new Phrase("kpop is the way"), new Phrase("taylor swift is queen")]
        this.activePhrase = null
        this.guesses = []
    }
    /*
     * Picks random phrase using random number
     */
    getRandomPhrase() {
        let randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)]
        return randomPhrase
    }
    /*
     * Resets game display and sets display for new game
     */
    startGame() {
        // Reset the ul containing a new phrase
        letters.innerHTML = ""
        // Reset the on-screen keyboard
        for (let key of keys) {
            key.className = "key"
            key.disabled = false
        }
        // Reset the heart lives
        for (let pic of heartList) {
            pic.src = "file:///Users/s/Documents/GitHub/oop-game-show-app/images/liveHeart.png"
        }
        // Reset the start screen classes and hide start overlay screen
        startScreen.className = "start"
        startScreen.style.display = "none"
        // Choose random phrase and display
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay()
    }
    /**
     * Branches and updates keyboard and phrase display based on the inputted letter
     * @param {string} letter - the inputted letter
     */
    handleInteraction(letter) {
        // Don't process event if the letter has already been guessed or if the game is over
        if (this.missed >= 5 || this.guesses.includes(letter)) {
            return
        } else {
            this.guesses.push(letter)
        }

        // Check if the letter is in the phrase
        if (this.activePhrase.checkLetter(letter)) {
            // Call function to show each matching letter in the phrase
            for (let i = 0; i < phraseLetters.length; i++) {
                if (phraseLetters[i].textContent === letter) {
                    this.activePhrase.showMatchedLetter(letter)
                }
            }
            // Disable and correctly highlight matched on-screen keyboard letter
            for (let key of keys) {
                if (key.textContent === letter) {
                    key.classList.add("chosen")
                    key.disabled = true
                }
            }
            if (this.checkForWin()) {
                this.gameOver()
            }
        }
        // If letter is not in the phrase
        else {
            // Disable and correctly highlight matched on-screen keyboard letter
            for (let key of keys) {
                if (key.textContent === letter) {
                    key.classList.add("wrong")
                    key.disabled = true
                }
            }
            this.removeLife()
        }
    }
    /*
     * Checks if the player won the game
     */
    checkForWin() {
        for (let i = 0; i < phraseLetters.length; i++) {
            // If any letters are hidden, no win
            if (phraseLetters[i].classList.contains("hide")) {
                return false
            }
        }
        return true
    }
    /*
     * Update hearts to show lost heart
     */
    removeLife() {
        // Update image to lost heart on the current heart
        heartList[this.missed].src = "file:///Users/s/Documents/GitHub/oop-game-show-app/images/lostHeart.png"
        this.missed += 1
        if (this.missed === 5) {
            this.gameOver()
        }
    }
    /*
     * Display game over message - either win or lose.
     */
    gameOver() {
        startScreen.style.display = "flex"
        if (this.checkForWin()) {
            gameOverMessage.textContent = "You win!"
            startScreen.classList.add("win")
        } else {
            gameOverMessage.textContent = "You ran out of lives!"
            startScreen.classList.add("lose")
        }
    }
}