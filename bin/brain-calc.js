#!/usr/bin/env node

import readlineSync from "readline-sync";

const generateQuestion = () => {
  const operations = ["+", "-", "*"];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  let answer;

  switch (operation) {
    case "+":
      answer = num1 + num2;
      break;
    case "-":
      answer = num1 - num2;
      break;
    case "*":
      answer = num1 * num2;
      break;
  }

  return {
    question: `${num1} ${operation} ${num2}`,
    answer: String(answer),
  };
};

const askName = () => {
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  return userName;
};

const brainCalcGame = () => {
  const userName = askName();
  console.log("What is the result of the expression?");

  let correctAnswers = 0;

  for (let i = 0; i < 3; i++) {
    const { question, answer } = generateQuestion();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question("Your answer: ");

    if (userAnswer !== answer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log("Correct!");
    correctAnswers += 1;
  }

  console.log(
    `Congratulations, ${userName}! You got ${correctAnswers} correct answers!`
  );
};

brainCalcGame();
