import useEngineForAllGames from '../index.js';
import getRandomInt from '../getRandomInt.js';

const minNumber = 1;
const maxNumber = 50;
const gameRulesPrime =
  'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRoundData = () => {
  const number = getRandomInt(minNumber, maxNumber);

  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const playPrimeGame = () =>
  useEngineForAllGames(gameRulesPrime, generateRoundData);

export default playPrimeGame;
