import data from '../data.js';
import checkArray from '../utils/checkArray.js';
import checkWinner from '../utils/checkWinner.js';

const clickCellHandler = (e) => {
  let isSecond = data.status;
  let count = data.count;
  const gameValueContainer = e.target;

  const gameValueText = gameValueContainer.querySelector('.value-text');

  isSecond ? (gameValueText.innerText = 'O') : (gameValueText.innerText = 'X');

  data.status = !isSecond;
  data.count = count + 1;

  const objValue = {
    count: data.count,
    value: gameValueText.innerText,
    idValue: gameValueContainer.id,
  };

  console.log(objValue);
  // checkArray(objValue);

  if (count < 4) {
    return;
  } else {
    checkWinner(objValue);
  }
};

export default clickCellHandler;
