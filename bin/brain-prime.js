#!/usr/bin/env node

import readlineSync from "readline-sync";

const isPrime = (number) => {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const description =
  'Answer "yes" if the given number is prime. Otherwise answer "no".';

const runGame = () => {
  const question = Math.floor(Math.random() * 100) + 1;

  console.log(description);

  const userAnswer = readlineSync.question(
    `Question: ${question}\nYour answer: `
  );

  const correctAnswer = isPrime(question) ? "yes" : "no";

  if (userAnswer.toLowerCase() === correctAnswer) {
    console.log("Correct!");
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
    );
    console.log("Let's try again!");
  }
};

runGame();
