import stopGameHandler from '../handlers/stopGameHandler.js';
import restartHandler from '../handlers/restartHandler.js';

const winnerComponent = (data, winner) => {
  const container = document.createElement('div');
  container.classList.add('winner-container');

  const textBox = document.createElement('div');
  textBox.classList.add('text-winner');

  const textWinnerHeader = document.createElement('h2');
  textWinnerHeader.classList.add('text-winner-header');

  textWinnerHeader.innerText = data.title;

  const textWinner = document.createElement('h3');
  textWinner.classList.add('winner');
  winner ? (textWinner.innerText = winner) : '';

  winner
    ? textBox.append(textWinnerHeader, textWinner)
    : textBox.append(textWinnerHeader);

  const btnBox = document.createElement('div');
  btnBox.classList.add('btn-box');

  const btnStopGame = document.createElement('button');
  btnStopGame.classList.add('btn');
  btnStopGame.id = 'btn-stop';
  btnStopGame.innerText = 'Stop Game';
  btnStopGame.addEventListener('click', () => {
    stopGameHandler();
  });

  const btnNextGame = document.createElement('button');
  btnNextGame.classList.add('btn');
  btnNextGame.id = 'btn-next';
  btnNextGame.innerText = 'Next Game';
  btnNextGame.addEventListener('click', (e) => {
    restartHandler(e);
  });

  btnBox.append(btnStopGame, btnNextGame);

  container.append(textBox, btnBox);
  return container;
};

export default winnerComponent;
