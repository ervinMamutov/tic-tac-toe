import gameBoardHandler from '../handlers/gameBoardHandler.js';

const loadEvent = () => {
  window.addEventListener('load', gameBoardHandler());
};

export default loadEvent;
