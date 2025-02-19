import readlineSync from 'readline-sync';

const welcomeUser = () => {
  const name = readlineSync.question('What is your name? ');
  console.log(`Hello, ${name}! Welcome to the Brain Games!`);
};

export default welcomeUser;
