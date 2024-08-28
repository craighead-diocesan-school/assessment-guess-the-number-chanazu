let scoreboard = [];
function numberGame(){
alert("Let's Guess the Number game")

let name = prompt('What is your name?')
let answer = prompt ('Hi,' + name + "I'm thinking of a number between 1 and 20 inclusive.")

let userAttempt = prompt("What is your guess?")
let computerNumber = Math.floor(Math.random()*(20 - 1) + 1)

let count = 0
while (true){
  count = count + 1

  let userAttempt = prompt('Enter your gess.')
  if(userAttempt == computerNumber){
  alert("Well done!👀You've guessed the right number!")
  break;
  }else{
    alert("Nope!!😶")
  }
}
  result()
}
scoreboard.push({ name: name, score: count });
function displayScoreboard() {
  let scores = scoreboard
  alert ('name + score')
}

