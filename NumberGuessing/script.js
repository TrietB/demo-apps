let secretNumber;
let lastGuess ;
let pastGuesses = [];
let guessesRemaining = 10;

const CORRECT_MESSAGE = "Correct! You must be a powerful psychic.";
const LOWER_MESSAGE = `Your guess of ${lastGuess} was too low`;
const HIGHER_MESSAGE = `Your guess of ${lastGuess} was too high`;


function generateNumber() {
  secretNumber = Math.floor(Math.random() * 10)
  console.log(secretNumber)
  return secretNumber;
  // MILESTONE 2: Right now the secret number is always 5. Change this
  // to return a secret number between 1 and 10. 
}

function checkIsCorrect() {
    // if(lastGuess === secretNumber){
    //     return true
    // }

    if(lastGuess === secretNumber){
        return 0
    }else if(lastGuess < secretNumber){
        return -1
    }else{
        return 1
    }

  // MILESTONE 4: Right now every guess will be true. Change
  // the above code so it checks to make sure lastGuess
  // is equal to secretNumber.
}


function makeGuess() {
  if(!secretNumber) {
    generateNumber();
  }
  // MILESTONE 3: ADD CODE HERE to pop up a dialog box
  // asking the user for a number.
    lastGuess = parseInt(prompt("What is your guess?"))
    pastGuesses.push(lastGuess)
    //duplicate guess? loop through array and check condition?
    console.log(pastGuesses)
    guessesRemaining = 10 - pastGuesses.length
    
  
  //--------------------------------------------
  updatePage();
}


// Don't worry about this part! Feel free to play around,
// but we'll teach you all about how JavaScript and HTML
// work together in the next section. If you're done Milestone
// 5, you'll need to fiddle around in here a bit.

function updatePage() {
  document.getElementById("last-guess").innerHTML = lastGuess;
  const correct = document.getElementById("correct");
  const isCorrect = checkIsCorrect();
  const displayPastGuesses = pastGuesses.join(', ') ;
  switch(isCorrect){
    case 0:
        correct.innerHTML = CORRECT_MESSAGE
        break
    case -1:
        correct.innerHTML = ` of ${lastGuess} was too low, your guesses are: ${displayPastGuesses}`
        
        break
    case 1:
        correct.innerHTML = ` of ${lastGuess} was too high, your guesses are: ${displayPastGuesses}`
        
        break
  }
  
  noMoreGuesses()
}

// when remaining guesses = 0
function noMoreGuesses() {
    if(guessesRemaining != 0){
    const remaining = document.getElementById("guesses-remaining");
    remaining.innerHTML = guessesRemaining;
    }else {
        alert('GameOver')
    }
}
generateNumber()

