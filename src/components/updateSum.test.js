/**
 * @jest-environment jsdom
 */

import createSum from './createSum.js';
import updateSum from './updateSum.js';

describe('updateSum function', () => {
    test('should update the paragraph with the correct sum result', () => {
        const sumDataInitial = { result: 10 };
        const sumDom = createSum(sumDataInitial);

        const sumDataNew = { result: 20 };
        updateSum(sumDom, sumDataNew);

        const resultParagraph = sumDom.querySelector('p');
        expect(resultParagraph.innerText).toEqual(20);
    });

    test('should handle non-numeric results', () => {
        const sumDataInitial = { result: 'Initial' };
        const sumDom = createSum(sumDataInitial);

        const sumDataNew = { result: 'Updated' };
        updateSum(sumDom, sumDataNew);

        const resultParagraph = sumDom.querySelector('p');
        expect(resultParagraph.innerText).toEqual('Updated');
    });

    test('should handle missing result', () => {
        const sumDataInitial = { result: 'Initial' };
        const sumDom = createSum(sumDataInitial);

        const sumDataNew = {};
        updateSum(sumDom, sumDataNew);

        const resultParagraph = sumDom.querySelector('p');
        expect(resultParagraph.innerText).toEqual(undefined);
    });
});
