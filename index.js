"use strict";

let computerScore = 0,
  humanScore = 0;

let humanInput = prompt("Choose rock, paper, scissor").toLowerCase();

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function getComputerChoice() {
  let randomNum = Math.trunc(Math.random() * 3);

  switch (randomNum) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
  }
}

function getHumanChoice(choice) {
  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock");
  } else if (humanChoice === "rock" && computerChoice === "scissor") {
    console.log("You win! Rock beats Scissor!");
  } else if (humanChoice === "paper" && computerChoice == "rock") {
    console.log("You win! Paper beats Rock!");
  } else if (humanChoice === computerChoice) {
    console.log(
      `Its a draw! ${humanChoice
        .charAt(0)
        .toUpperCase()} can't beat ${computerChoice.charAt(0).toUpperCase()}`
    );
  }
}
