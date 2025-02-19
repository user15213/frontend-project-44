#!/usr/bin/env node

import readlineSync from "readline-sync";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const description = "What number is missing in the progression?";

const getProgression = () => {
  const length = getRandomInt(5, 10);
  const start = getRandomInt(1, 50);
  const step = getRandomInt(1, 10);

  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  const hiddenIndex = getRandomInt(0, length - 1);
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = "..";

  return { progression, hiddenValue };
};

const runGame = () => {
  const { progression, hiddenValue } = getProgression();
  const question = progression.join(" ");

  console.log(description);
  const userAnswer = readlineSync.question(
    `Question: ${question}\nYour answer: `
  );

  if (parseInt(userAnswer, 10) === hiddenValue) {
    console.log("Correct!");
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenValue}'.`
    );
    console.log("Let's try again!");
  }
};

runGame();
