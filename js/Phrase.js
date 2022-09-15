/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase()
    }
    /*
     * Updates display to show game with chosen phrase
     */
    addPhraseToDisplay() {
        // Create list elements for each phrase character and assign classes
        for (let i = 0; i < this.phrase.length; i++) {
            let letter = document.createElement("li")
            if (this.phrase[i] === " ") {
                letter.className = "space"
                letter.textContent = " "
            } else {
                letter.className = `hide letter ${this.phrase[i]}`
                letter.textContent = this.phrase[i]
            }
            // Append list element to the phrase list
            letters.appendChild(letter)
        }
    }
    /**
     * Checks if letter is in the phrase
     * @param {string} letter - the inputted letter
     */
    checkLetter(letter) {
        return this.phrase.indexOf(letter) !== -1 ? true : false
    }
    /**
     * Adds and removes classes to display the correctly inputted letters in phrase
     * @param {string} letter - the inputted letter
     */
    showMatchedLetter(letter) {
        // Check if the letter is in the phrase and that it is not a space
        if (this.checkLetter(letter) && letter !== " ") {
            let targetLetters = document.querySelectorAll(`.${letter}`)
            for (let i = 0; i < targetLetters.length; i++) {
                targetLetters[i].classList.remove("hide")
                targetLetters[i].classList.add("show")
            }
        }
    }
}