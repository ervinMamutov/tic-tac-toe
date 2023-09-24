import clickCellHandler from '../handlers/clickCellHandler.js';

const createGameBoard = (i, j) => {
  const container = document.createElement('div');

  const cell = document.createElement('div');
  cell.classList.add('cell-container');
  cell.id = `${i}${j}`;
  cell.addEventListener('click', (e) => {
    clickCellHandler(e);
  });

  const gameValueContainer = document.createElement('div');
  gameValueContainer.classList.add('value-container');

  const gameValueText = document.createElement('h2');

  gameValueText.classList.add('value-text');
  gameValueContainer.append(gameValueText);

  cell.append(gameValueContainer);

  return cell;
};

export default createGameBoard;
