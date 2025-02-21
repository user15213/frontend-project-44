import useEngineForAllGames from '../index.js';
import getRandomInt from '../getRandomInt.js';

const minNumber = 1;
const maxNumber = 25;
const gameRulesGcd = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (num1, num2) => {
  if (num2 === 0){
    return num1;
  }
  return calculateGcd(num2, num1 % num2);
};

const generateRoundData = () => {
  const num1 = getRandomInt(minNumber, maxNumber);
  const num2 = getRandomInt(minNumber, maxNumber);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(calculateGcd(num1, num2));

  return [question, correctAnswer];
};

const playGcdGame = () => useEngineForAllGames(gameRulesGcd, generateRoundData);

export default playGcdGame;
