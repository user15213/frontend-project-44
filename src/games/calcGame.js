import useEngineForAllGames from "../index.js";
import getRandomInt from "../getRandomInt.js";

const minRandomNumber = 1;
const maxRandomNumber = 30;
const arithmeticOperators = ["+", "-", "*"];

const gameRulesCalc = "What is the result of the expression?";

const calculateExpression = (num1, operator, num2) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    default:
      throw new Error(`Unsupported operator: ${operator}`);
  }
};

const generateRoundData = () => {
  const num1 = getRandomInt(minRandomNumber, maxRandomNumber);
  const num2 = getRandomInt(minRandomNumber, maxRandomNumber);
  const randomOperator =
    arithmeticOperators[getRandomInt(0, arithmeticOperators.length - 1)];

  const question = `${num1} ${randomOperator} ${num2}`;
  const correctAnswer = `${calculateExpression(num1, randomOperator, num2)}`;

  return [question, correctAnswer];
};

const playCalcGame = () =>
  useEngineForAllGames(gameRulesCalc, generateRoundData);

export default playCalcGame;
