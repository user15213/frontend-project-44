import useEngineForAllGames from '../index.js';
import getRandomIntInRange, { getRandomNonNegative } from '../getRandomInt.js';

const minValue = 1;
const maxValue = 10;
const minLength = 5;
const maxLength = 10;
const gameRulesProgression = 'What number is missing in the progression?';

const generateProgression = (firstItem, step, length) => {
  const array = [];
  for (let i = 0; i < length; i += 1) {
    const result = firstItem + step * i;
    array.push(result);
  }
  return array;
};

const generateRoundData = () => {
  const first = getRandomIntInRange(minValue, maxValue);
  const step = getRandomIntInRange(minValue, maxValue);
  const length = getRandomIntInRange(minLength, maxLength);

  const progression = generateProgression(first, step, length);
  const randIndex = getRandomNonNegative() * progression.length;

  const correctAnswer = `${progression[randIndex]}`;
  progression[randIndex] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

const playProgressionGame = () => useEngineForAllGames(gameRulesProgression, generateRoundData);

export default playProgressionGame;
