//primitive objects = string, number, boolean, null, undefined

//Object: myObject --> Object.prototype --> null
//Array: myArray --> Array.prototype --> Object.prototype --> null
//Function: myFunc --> Function.prototype --> Object.prototype --> null
//String: myString --> String.prototype --> Object.prototype --> null
//Number: myNumber --> Number.prototype --> Object.prototype --> null
//Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

// const product = 'Computer'
// console.log(product)
// const otherProduct = new String('Phone')
// console.log(otherProduct)

//Hyper Text Transfer Protocol: http
// Request - what do we want to do
//Response - what was actually done

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = '<h1></h1>'
    guessesEl.textContent = game1.statusMessage

    game1.puzzle.split('').forEach((letter) => {
          const letterEl = document.createElement('span')
          letterEl.textContent = letter
          puzzleEl.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((err) => {
    console.log(`Error: ${err}`)
})

