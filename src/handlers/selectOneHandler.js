import data from '../data.js';
import dom from '../dom.js';

const selectOneHandler = (e) => {
  dom.error.style.display = 'none';
  const valueOne = e.target.value;

  if (valueOne === 'X') {
    dom.selectPlayerTwo.value = 'O';
    data.playerTwo = 'O';
  } else {
    dom.selectPlayerTwo.value = 'X';
    data.playerTwo = 'X';
  }

  console.log(valueOne);

  data.playerOne = valueOne;
};

export default selectOneHandler;
