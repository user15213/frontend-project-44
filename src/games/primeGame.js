#!/usr/bin/env node

import useEngineForAllGames from "../index.js";
import getRandomInt from "../getRandomInt.js";

const gameRulesPrime =
  'Answer "yes" if given number is prime. Otherwise answer "no"';

const primeNumber = (num) => {
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

const startRoundPrime = () => {
  const number = getRandomInt(1, 50);

  const question = `${number}`;
  const correctAnswer = primeNumber(number) ? "yes" : "no";

  return [question, correctAnswer];
};

const playPrimeGame = () =>
  useEngineForAllGames(gameRulesPrime, startRoundPrime);

export default playPrimeGame;
