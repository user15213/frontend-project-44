import useEngineForAllGames from '../index.js';
import getRandomInt from '../getRandomInt.js';

const minNumber = 1;
const maxNumber = 99;
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRoundData = () => {
  const number = getRandomInt(minNumber, maxNumber);
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const playEvenGame = () => useEngineForAllGames(gameRules, generateRoundData);

export default playEvenGame;
