import data from '../data.js';

const checkWinner = () => {
  const board = data.array;

  const winCombinations = [
    // horizon
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22'],

    // vertical
    ['00', '10', '20'],
    ['01', '11', '21'],
    ['02', '12', '22'],

    //diagonal
    ['00', '11', '22'],
    ['02', '11', '20'],
  ];

  for (const combination of winCombinations) {
    const [a, b, c] = combination;

    const valueA = board.find((item) => item.idValue === a);
    const valueB = board.find((item) => item.idValue === b);
    const valueC = board.find((item) => item.idValue === c);

    if (
      valueA &&
      valueB &&
      valueC &&
      valueA.value === valueB.value &&
      valueA.value === valueC.value
    ) {
      return valueA.value;
    }
  }
};

export default checkWinner;
