import startGame from '../index.js';
import getRandomInt from '../randomFunction.js';

const rulesOfGame = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const setGame = () => {
  const number1 = getRandomInt(1, 50);
  const number2 = getRandomInt(1, 50);
  const question = `${number1} ${number2}`;
  const answer = `${gcd(number1, number2)}`;
  return [question, answer];
};

const gcdGame = () => startGame(rulesOfGame, setGame);

export default gcdGame;
