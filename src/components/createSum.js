/**
 * Creates a DOM container element containing the sum result.
 *
 * @param {Object} sumData - An object containing the sum result.
 * @param {number|string} sumData.result - The result of the sum to be displayed.
 * @returns {HTMLElement} A container div element with a paragraph displaying the sum result.
 *
 * @example
 * const sumData = { result: 10 };
 * const sumContainer = createSum(sumData);
 * document.body.append(sumContainer);
 */

const createSum = (sumData) => {
    // container
    const container = document.createElement('div');
    container.id = 'container';

    // result
    const result = document.createElement('p');
    result.innerText = sumData.result;

    // append
    container.append(result);

    return container;
};

export default createSum;
