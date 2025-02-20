#!/usr/bin/env node

import useEngineForAllGames from "../index.js";
import getRandomInt from "../getRandomInt.js";

const gameRulesCalc = "What is the result of the expression?";

const signOfArithmetic = ["+", "-", "*"];

const expression = (num1, operator, num2) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    default:
      return null;
  }
};

const startRound = () => {
  const num1 = getRandomInt(1, 30);
  const num2 = getRandomInt(1, 30);
  const randomOperator =
    signOfArithmetic[getRandomInt(0, signOfArithmetic.length - 1)];

  const question = `${num1} ${randomOperator} ${num2}`;
  const correctAnswer = `${expression(num1, randomOperator, num2)}`;

  return [question, correctAnswer];
};

const playCalcGame = () => useEngineForAllGames(gameRulesCalc, startRound);

export default playCalcGame;
