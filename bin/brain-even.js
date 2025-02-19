#!/usr/bin/env node

import readlineSync from 'readline-sync';

function welcomeUser() {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  return name;
}

function generateQuestion() {
  const number = Math.floor(Math.random() * 100) + 1; // случайное число от 1 до 100
  const correctAnswer = (number % 2 === 0) ? "yes" : "no";
  return { number, correctAnswer };
}

function playGame() {
  const name = welcomeUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const { number, correctAnswer } = generateQuestion();

    // Получаем ответ пользователя
    const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `);

    if (userAnswer === null) {
      console.log("You cancelled the input. Let's try again!");
      return;
    }

    if (userAnswer.toLowerCase() !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log("Correct!");
    correctAnswersCount += 1;
  }

  console.log(`Congratulations, ${name}!`);
}

// Запуск игры
playGame();

