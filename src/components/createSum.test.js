/**
 * @jest-environment jsdom
 */

import createSum from './createSum.js';

describe('createSum function', () => {
    test('should return a div with the id "container"', () => {
        const sumData = { result: 5 };
        const container = createSum(sumData);
        expect(container.id).toEqual('container');
        expect(container.tagName).toEqual('DIV');
    });

    test('should include a paragraph with the correct sum result', () => {
        const sumData = { result: 10 };
        const container = createSum(sumData);
        const resultParagraph = container.querySelector('p');
        expect(resultParagraph.innerText).toEqual(10);
    });

    test('should append the result paragraph to the container', () => {
        const sumData = { result: 7 };
        const container = createSum(sumData);
        expect(container.children.length).toEqual(1);
        expect(container.firstChild.tagName).toEqual('P');
    });

    test('should handle non-numeric results', () => {
        const sumData = { result: 'Test Result' };
        const container = createSum(sumData);
        const resultParagraph = container.querySelector('p');
        expect(resultParagraph.innerText).toEqual('Test Result');
    });

    test('should handle missing result', () => {
        const sumData = {};
        const container = createSum(sumData);
        const resultParagraph = container.querySelector('p');
        expect(resultParagraph.innerText).toEqual(undefined);
    });
});
