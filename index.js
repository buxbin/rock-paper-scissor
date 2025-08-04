"use strict";

const getComputerChoice = function () {
  let randomNum = Math.trunc(Math.random() * 3);

  switch (randomNum) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
  }
};

const getHumanChoice = function (choice) {
  return choice;
};

let humanInput = prompt("Choose rock, paper, scissor");
