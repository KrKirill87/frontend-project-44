import startGame from '../index.js';
import getRandomInt from '../randomFunction.js';

const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const setGame = () => {
  const question = getRandomInt(1, 10);
  const answer = (question % 2) === 0 ? 'yes' : 'no';
  return [question, answer];
};

const evenGame = () => startGame(rulesOfGame, setGame);

export default evenGame;
