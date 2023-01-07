import startGame from '../index.js';
import getRandomInt from '../randomFunction.js';

const rulesOfGame = 'What number is missing in the progression?';

const generationProgression = (firstNumber, step, size) => {
  const array = [];
  for (let i = 0; i < size; i += 1) {
    const result = (firstNumber + (step * i));
    array.push(result);
  }
  return array;
};

const setGame = () => {
  const first = getRandomInt(1, 10);
  const step = getRandomInt(1, 10);
  const length = getRandomInt(5, 10);
  const progression = generationProgression(first, step, length);
  const randomIndex = getRandomInt(0, progression.length - 1);
  const hiddenIndex = progression[randomIndex];
  const answer = `${hiddenIndex}`;
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const progressionGame = () => startGame(rulesOfGame, setGame);

export default progressionGame;
