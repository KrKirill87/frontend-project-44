import startGame from '../index.js';
import getRandomInt from '../randomFunction.js';

const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const setGame = () => {
  const question = getRandomInt(1, 50);
  const answer = prime(question) ? 'yes' : 'no';
  return [question, answer];
};

const primeGame = () => startGame(rulesOfGame, setGame);

export default primeGame;
