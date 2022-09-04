let playerScore = 0;
let cpuScore = 0;

const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const resultsDiv = document.querySelector(".round-results");
const playerScoreDiv = document.querySelector(".player-score");
const cpuScoreDiv = document.querySelector(".cpu-score");
const playerChoiceDiv = document.querySelector(".player-choice");
const cpuChoiceDiv = document.querySelector(".cpu-choice");
const buttonsDiv = document.querySelector(".buttons");
const roundResultsDiv = document.querySelector(".round-results");
const p = document.querySelector("p");
const playAgainBtn = document.createElement("button");

rockBtn.addEventListener("click", () => {
  let playerChoice = "Rock";
  getComputerChoice(playerChoice);
});

paperBtn.addEventListener("click", () => {
  let playerChoice = "Paper";
  getComputerChoice(playerChoice);
});

scissorsBtn.addEventListener("click", () => {
  let playerChoice = "Scissors";
  getComputerChoice(playerChoice);
});

function getComputerChoice(playerChoice) {
  const choices = ["Rock", "Paper", "Scissors"];
  let random = choices[Math.floor(Math.random() * choices.length)];
  playRound(playerChoice, random);
}

function playRound(playerChoice, random) {
  if (
    (playerChoice === "Rock" && random === "Rock") ||
    (playerChoice === "Paper" && random === "Paper") ||
    (playerChoice === "Scissors" && random === "Scissors")
  ) {
    playerChoiceDiv.innerHTML = "Player Chose: " + playerChoice;
    cpuChoiceDiv.innerHTML = "CPU Chose: " + random;
    resultsDiv.innerHTML = "This Round Is A Tie!";
  } else if (
    (playerChoice === "Rock" && random === "Scissors") ||
    (playerChoice === "Paper" && random === "Rock") ||
    (playerChoice === "Scissors" && random === "Paper")
  ) {
    playerChoiceDiv.innerHTML = "Player Chose: " + playerChoice;
    cpuChoiceDiv.innerHTML = "CPU Chose: " + random;
    resultsDiv.innerHTML = "You Win This Round!";
    playerScore += 1;
    updateScore();
  } else {
    playerChoiceDiv.innerHTML = "Player Chose: " + playerChoice;
    cpuChoiceDiv.innerHTML = "CPU Chose: " + random;
    resultsDiv.innerHTML = "You Loose This Round!";
    cpuScore += 1;
    updateScore();
  }
}

function updateScore() {
  playerScoreDiv.innerHTML = "Player Score: " + playerScore;
  cpuScoreDiv.innerHTML = "CPU Score: " + cpuScore;

  if (playerScore === 5) {
    p.innerHTML = "You Win The Game!";
    p.style.color = "#e68217";
    gameOver();
  } else if (cpuScore === 5) {
    p.innerHTML = "You Lost The Game!";
    p.style.color = "#e68217";
    gameOver();
  }
}

function gameOver() {
  rockBtn.remove();
  paperBtn.remove();
  scissorsBtn.remove();
  roundResultsDiv.remove();
  buttonsDiv.appendChild(playAgainBtn);
  playAgainBtn.innerHTML = "Play Again?";
  playAgainBtn.addEventListener("click", () => {
    window.location.reload();
  });
}
