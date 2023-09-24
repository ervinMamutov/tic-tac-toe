import dom from '../dom.js';
import selectHandler from '../handlers/selectHandler.js';
import data from '../data.js';

const selectEvent = () => {
  debugger;
  const selectPlayerOne = dom.selectPlayerOne;
  const selectPlayerTwo = dom.selectPlayerTwo;

  if (!selectPlayerOne.value && !selectPlayerTwo.value) {
    dom.error.style.display = 'block';
    dom.error.innerText = 'Select player preference';
    data.isGameActive = false;
    return;
  } else {
    selectPlayerOne.addEventListener('change', () => {
      const valuePlayerOne = selectPlayerOne.value;
      const valuePlayerTwo = selectPlayerTwo.value;
      selectHandler(valuePlayerOne, valuePlayerTwo);
    });

    selectPlayerTwo.addEventListener('change', () => {
      const valuePlayerOne = selectPlayerOne.value;
      const valuePlayerTwo = selectPlayerTwo.value;
      selectHandler(valuePlayerOne, valuePlayerTwo);
    });
  }
};

export default selectEvent;

/* 
const valuePlayerOne = selectPlayerOne.value;
  const valuePlayerTwo = selectPlayerTwo.value;

  if (valuePlayerOne && valuePlayerTwo) {
    dom.error.style.display = 'none';
    selectPlayerOne.addEventListener('change', (e) => {
      selectHandler(e);
    });

    selectPlayerTwo.addEventListener('change', (e) => {
      selectHandler(e);
    });
  } else {
    dom.error.style.display = 'block';
    dom.error.innerText = 'Select player preference';
    data.isGameActive = false;
    return;
  }
 */
