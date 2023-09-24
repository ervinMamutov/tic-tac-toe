import dom from '../dom.js';
import data from '../data.js';

const selectHandler = (valuePlayerOne, valuePlayerTwo) => {
  debugger;

  console.log(valuePlayerOne, valuePlayerTwo);

  const error = dom.error;
  console.log(error);
  if (!valuePlayerOne && !valuePlayerTwo) {
    error.style.display = 'block';
    error.innerText = 'Select player preference';
    data.isGameActive = false;
  } else {
    error.style.display = 'none';
    data.isGameActive = true;
  }
};

export default selectHandler;
