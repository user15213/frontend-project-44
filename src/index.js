#!/usr/bin/env node

import readlineSync from "readline-sync";

const countToRound = 3;

const useEngineForAllGames = (gameRules, dataForRound) => {
  console.log("Welcome to the Brain Games!");

  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  for (let i = 0; i < countToRound; i += 1) {
    const [question, correctAnswer] = dataForRound();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question("Your answer: ");

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log("Correct!");
  }

  console.log(`Congratulations, ${userName}!`);
};

export default useEngineForAllGames;
