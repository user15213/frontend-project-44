#!/usr/bin/env node

import useEngineForAllGames from "../index.js";
import getRandomInt, { getRandomInt2 } from "../getRandomInt.js";

const gameRulesProgression = "What number is missing in the progression?";

const generateProgression = (firstItem, step, length) => {
  const array = [];
  for (let i = 0; i < length; i += 1) {
    const result = firstItem + step * i;
    array.push(result);
  }
  return array;
};

const startRoundProgression = () => {
  const first = getRandomInt(1, 10);
  const step = getRandomInt(1, 10);
  const length = getRandomInt(5, 10);

  const progression = generateProgression(first, step, length);
  const randIndex = getRandomInt2(progression.length);

  const correctAnswer = `${progression[randIndex]}`;
  progression[randIndex] = "..";

  const question = progression.join(" ");

  return [question, correctAnswer];
};

const playProgressionGame = () =>
  useEngineForAllGames(gameRulesProgression, startRoundProgression);

export default playProgressionGame;
