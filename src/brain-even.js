import getRandomInt from './randomFunction.js';
import readlineSync from 'readline-sync';

export default function evenGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const max = 50;
    const question = getRandomInt(max);
    console.log(`Question: ${question}`);
    const trueAnswer = (question % 2) === 0 ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== trueAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};