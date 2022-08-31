let playerScore = 0;
let cpuScore = 0;

game();

function game() {
  for (let i = 0; i < 5; i++) {
    getPlayerChoice();
  }
  declareWinner();
}

function getPlayerChoice() {
  let playerChoice = prompt("rock, paper, or scissors?").toLowerCase();
  getComputerChoice(playerChoice);
}

function getComputerChoice(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  let random = choices[Math.floor(Math.random() * choices.length)];
  console.log("cpu choice is " + random + " player choice is " + playerChoice);
  playRound(playerChoice, random);
}

function playRound(playerChoice, random) {
  if (
    (playerChoice === "rock" && random === "rock") ||
    (playerChoice === "paper" && random === "rock") ||
    (playerChoice === "scissors" && random === "scissors")
  ) {
    console.log("It's a tie!");
  } else if (
    (playerChoice === "rock" && random === "scissors") ||
    (playerChoice === "paper" && random === "rock") ||
    (playerChoice === "scissors" && random === "paper")
  ) {
    console.log("You win this round!");
    playerScore += 1;
  } else {
    console.log("You loose this round!");
    cpuScore += 1;
  }
}

function declareWinner() {
  if (playerScore > cpuScore) {
    console.log("You won best out of 5!");
  } else if (playerScore < cpuScore) {
    console.log("You lost best out of 5!");
  } else {
    console.log("We tied best out of 5!");
  }
}
