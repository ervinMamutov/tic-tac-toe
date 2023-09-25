import dom from '../dom.js';
import stopGameHandler from '../handlers/stopGameHandler.js';

const stopGameEvent = () => {
  dom.stopGame.addEventListener('click', () => {
    stopGameHandler();
  });
};

export default stopGameEvent;
