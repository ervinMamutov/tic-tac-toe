import createGameBoard from '../components/createGameBoard.js';
import dom from '../dom.js';

const gameBoardHandler = () => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      dom.root.append(createGameBoard(i, j));
    }
  }
};

export default gameBoardHandler;
