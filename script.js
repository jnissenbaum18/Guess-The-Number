// Guess The Number JS File

var secretNumber = 0
var guess = 0
var count = 7
var guesses = []

inputGuess = function () {
    // takes the user guess
    guess = document.getElementById('guess').value
}

range100 = function () {
    // generates a random number as well as resets all parameters and fields
    secretNumber = Math.floor(Math.random() * (100 - 1) + 1)
    count = 7
    guesses = []
    guess = 0
    document.getElementById('guess').value = null
    document.getElementById('message').innerHTML = "New Game!"
    document.getElementById('result').value = null
    document.getElementById('guesses').value = null
}

guessCounter = function () {
    // checks to for previous guesses, decreases count by 1, checks to see if there are guesses left 
    var tracker = 0
    for (var i in guesses) {
        if (guesses[i] === guess) {
            tracker += 1
        }
    }
    if (tracker === 0 && count > 0) {
        guesses.push(guess)
        count -= 1
        previous = false
        return true
    }
    else {
        return false
    }
}

temperature = function () {
    //tells if the guess was hot or cold
    if (Math.abs(guesses[guesses.length - 2] - secretNumber) > Math.abs(guess - secretNumber)) {
        return 'Hotter'
    }
    else {
        return 'Colder'
    }
}

showNumber = function () {
    // Displays the secret number
	document.getElementById('result').value = secretNumber
}

master = function () {
    inputGuess()
    if (guess > 100) {
        document.getElementById('message').innerHTML = 'Sorry, your guess was out of range. Try a lower number'
    }
    else if (guess < 1) {
    	document.getElementById('message').innerHTML = 'Sorry, your guess was out of range. Try a higher number'
    }
    else if (guess > 0 && guess < 101) {
        if (guessCounter()) {
        	document.getElementById('guesses').value = guesses
            document.getElementById('message').innerHTML = "Remaining Guesses is " + count + ' ' + '<br>'
            if (guess < secretNumber) {
            	document.getElementById('message').innerHTML += temperature() + ' and Higher'
            }
            else if (guess > secretNumber) {
                document.getElementById('message').innerHTML += temperature() + ' and Lower'
            }
            else {
                document.getElementById('message').innerHTML = 'Correct!'
            }
        }
        else if (guessCounter() === false) {
            document.getElementById('message').innerHTML = 'Sorry that was a previous guess, please try again'
        }
        else {
            range100()
            document.getElementById('message').innerHTML = "Sorry, you are out of guesses. I'll start a new game"
        }
    }
    else {
    	document.getElementById('message').innerHTML = "Sorry, I didn't understand that. Try a number between 1 and 100."
    }
}

range100()