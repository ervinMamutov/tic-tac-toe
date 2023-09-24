import winnerComponent from '../components/winnerComponent.js';
import data from '../data.js';
import checkWinner from '../utils/checkWinner.js';
import dom from '../dom.js';
import nextMessage from '../components/nextMessage.js';
import selectOneEvent from '../events/selectOneEvent.js';

const clickCellHandler = (e) => {
  let isPlayerX = data.isPlayerX;
  let count = data.count;
  const error = dom.error;
  const valueOne = dom.selectPlayerOne.value;

  if (valueOne) {
    if (valueOne === 'X') {
      data.playerOne = 'X';
      data.playerTwo = 'O';
      dom.selectPlayerTwo.value = 'O';
    } else {
      data.playerOne = 'O';
      data.playerTwo = 'X';
      dom.selectPlayerTwo.value = 'X';
    }
  } else {
    error.style.display = 'block';
    error.innerText = 'Select Player One preference';
    selectOneEvent();
    return;
  }

  if (!data.isGameActive) {
    return;
  }

  const gameValueContainer = e.target;
  const gameValueText = gameValueContainer.querySelector('.value-text');
  const inputValue = gameValueText.innerText;

  error.style.display = 'none';

  if (!gameValueText) {
    error.style.display = 'block';
    error.innerText = 'This cell is not empty';
    return;
  } else {
    error.style.display = 'none';
    isPlayerX
      ? (gameValueText.innerText = data.playerOne)
      : (gameValueText.innerText = data.playerTwo);
    data.isPlayerX = !isPlayerX;
  }

  data.count = count + 1;

  const board = {
    count: data.count,
    value: gameValueText.innerText,
    idValue: gameValueContainer.id,
  };

  data.array.push(board);

  const massage = dom.message;
  const winner = checkWinner();
  const nextContainer = dom.next;
  const messageNext = dom.next.querySelector('.message-next');

  if (winner) {
    dom.hidden.style.display = 'block';
    dom.message.style.backgroundImage = `url(${data.win.url})`;
    massage.append(winnerComponent(data.win, winner));
    data.isGameActive = false;
    data.isPlayerX = !isPlayerX;
    return;
  } else if (count < 8) {
    if (!messageNext) {
      !isPlayerX
        ? nextContainer.append(nextMessage('Player One'))
        : nextContainer.append(nextMessage('Player Two'));
    } else {
      messageNext.remove();
      !isPlayerX
        ? nextContainer.append(nextMessage('Player One'))
        : nextContainer.append(nextMessage('Player Two'));
    }
  } else {
    dom.hidden.style.display = 'block';
    dom.message.style.backgroundImage = `url(${data.draw.url})`;
    massage.append(winnerComponent(data.draw));
    data.array = [];
  }
};

export default clickCellHandler;
