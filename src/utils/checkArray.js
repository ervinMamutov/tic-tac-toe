import data from '../data.js';

const checkArray = ({ value, idValue }) => {
  const array = data.array;
  const objValue = {};
  let idI = 0;
  let idJ = idValue % 10;
  idValue < 10 ? (idI = 0) : (idI = Math.floor(idValue / 10));

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === idI && j === idJ) {
        data.array.push(value);
        objValue.idValue = value
      }
    }
  }
};

export default checkArray;
