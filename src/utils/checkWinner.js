import data from '../data.js';

const checkWinner = (objValue) => {
  console.log({ objValue });

  let positionI = Math.round(objValue.idValue / 10);
  let positionJ = objValue.idValue % 10;

  console.log(positionI, positionJ);
};

export default checkWinner;
