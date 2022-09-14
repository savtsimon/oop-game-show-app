/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
let letters = document.querySelector("ul")

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase()
    }
    addPhraseToDisplay(phrase) {
        for (let i = 0; i < this.phrase.length; i++) {
            let letter = document.createElement("li")
            if (this.phrase[i] === " ") {
                letter.className = "space"
                letter.textContent = " "
            } else {
                letter.className = `hide letter ${this.phrase[i]}`
                letter.textContent = this.phrase[i]
            }
            letters.appendChild(letter)
        }
    }
    checkLetter(letter) {
        if (phrase.indexOf(letter) !== -1 && letter !== " ") {
            for (let char of letters) {
                if (char.classList.contains(letter)) {
                    char.classList.remove("hide")
                }
            }
        }
    }
    showMatchedLetter() { }
}