import data from '../data.js';
import dom from '../dom.js';

const selectOneHandler = (e) => {
  dom.error.style.display = 'none';
  const valueOne = e.target.value;

  if (valueOne === 'X') {
    dom.selectPlayerTwo.value = 'O';
    data.playerOne = valueOne;
    data.playerTwo = 'O';
  } else {
    dom.selectPlayerTwo.value = 'X';
    data.playerOne = valueOne;
    console.log(valueOne);
    data.playerTwo = 'X';
  }
};

export default selectOneHandler;
