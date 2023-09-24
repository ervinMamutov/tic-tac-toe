import data from '../data.js';
import dom from '../dom.js';

const selectTwoHandler = (e) => {
  dom.error.style.display = 'none';
  const selectTwo = e.target.value;
  data.playerTwo = selectTwo.value;
};

export default selectTwoHandler;
