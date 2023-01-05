import startGame from '../index.js';
import getRandomInt from '../randomFunction.js';

const rulesOfGame = 'What is the result of the expression?';

const operation = ['+', '-', '*'];

const calcAnswer = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 'Error! Unknown operator.';
  }
};

const setGame = () => {
  const firstNum = getRandomInt(0, 10);
  const secondNum = getRandomInt(0, 10);
  const randomOperator = operation[getRandomInt(0, operation.length - 1)];
  const question = `${firstNum} ${randomOperator} ${secondNum}`;
  const answer = `${calcAnswer(randomOperator, firstNum, secondNum)}`;
  return [question, answer];
};

const calcGame = () => startGame(rulesOfGame, setGame);

export default calcGame;
