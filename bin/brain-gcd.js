#!/usr/bin/env node

import readlineSync from "readline-sync";

const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

console.log("Welcome to the Brain Games!");
const name = readlineSync.question("May I have your name? ");
console.log(`Hello, ${name}!`);
console.log("Find the greatest common divisor of given numbers.");

const playGame = () => {
  for (let i = 0; i < 3; i++) {
    const number1 = Math.floor(Math.random() * 100) + 1;
    const number2 = Math.floor(Math.random() * 100) + 1;

    console.log(`Question: ${number1} ${number2}`);

    const answer = readlineSync.question("Your answer: ");

    const correctAnswer = gcd(number1, number2).toString();

    if (answer === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

playGame();
