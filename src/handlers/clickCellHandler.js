import winnerComponent from '../components/winnerComponent.js';
import data from '../data.js';
import checkWinner from '../utils/checkWinner.js';
import dom from '../dom.js';
import nextMessage from '../components/nextMessage.js';
import selectOneEvent from '../events/selectOneEvent.js';

const clickCellHandler = (e) => {
  // let isGameActive = data.isGameActive;
  let isPlayerX = data.status;
  let count = data.count;
  const error = dom.error;

  selectOneEvent();

  if (!data.playerOne) {
    error.style.display = 'block';
    error.innerText = 'Select Player One preference';
    return;
  } else {
    error.style.display = 'none';
    // data.isGameActive = true;
  }

  console.log(data.playerOne);

  if (!data.isGameActive) {
    return;
  }

  const gameValueContainer = e.target;
  const gameValueText = gameValueContainer.querySelector('.value-text');

  error.style.display = 'none';
  const isSelect = false;

  if (!gameValueText) {
    error.style.display = 'block';
    error.innerText = 'This cell is not empty';
    return;
  } else {
    error.style.display = 'none';
    isPlayerX
      ? (gameValueText.innerText = 'O')
      : (gameValueText.innerText = 'X');
  }

  data.status = !isPlayerX;
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
    data.status = !isPlayerX;

    return;
  } else if (count < 8) {
    if (!messageNext) {
      isPlayerX
        ? nextContainer.append(nextMessage('player X is next'))
        : nextContainer.append(nextMessage('player O is next'));
    } else {
      messageNext.remove();
      isPlayerX
        ? nextContainer.append(nextMessage('player X is next'))
        : nextContainer.append(nextMessage('player O is next'));
    }
  } else {
    dom.hidden.style.display = 'block';
    dom.message.style.backgroundImage = `url(${data.draw.url})`;
    massage.append(winnerComponent(data.draw));
    data.array = [];
  }
};

export default clickCellHandler;
