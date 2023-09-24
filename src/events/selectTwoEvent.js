import dom from '../dom.js';
import selectTwoHandler from '../handlers/selectTwoHandler.js';

const selectTwoEvent = () => {
  const selectTwo = dom.selectPlayerTwo;
  selectTwo.addEventListener('change', () => {
    selectTwoHandler();
  });
};

export default selectTwoEvent;
