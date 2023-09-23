import data from '../data.js';
import dom from '../dom.js';

const restartHandler = (e) => {
  data.array = [];
  data.count = 0;
  data.isGameActive = true;
  dom.hidden.style.display = 'none';
  const cellText = document.querySelectorAll('.value-text');
  cellText.forEach((element) => {
    element.innerText = '';
  });
  document.querySelector('.winner-container').remove();
};

export default restartHandler;
