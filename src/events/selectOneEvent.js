import dom from '../dom.js';
import selectOneHandler from '../handlers/selectOneHandler.js';

const selectOneEvent = () => {
  const selectOne = dom.selectPlayerOne;
  selectOne.addEventListener('change', (e) => {
    selectOneHandler(e);
  });
};

export default selectOneEvent;
