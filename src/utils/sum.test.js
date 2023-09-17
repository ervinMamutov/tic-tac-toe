import sum from './sum.js';

describe('sum function', () => {
    test('should return the sum of two numbers', () => {
        expect(sum(5, 3)).toBe(8);
        expect(sum(-5, 5)).toBe(0);
        expect(sum(0, 0)).toBe(0);
    });

    test('should handle floating-point numbers', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('should throw an error when the first argument is not a number', () => {
        expect(() => sum('5', 3)).toThrowError(
            new TypeError('num1 and num2 should be numbers'),
        );
    });

    test('should throw an error when the second argument is not a number', () => {
        expect(() => sum(5, '3')).toThrowError(
            new TypeError('num1 and num2 should be numbers'),
        );
    });

    test('should throw an error when both arguments are not numbers', () => {
        expect(() => sum('5', '3')).toThrowError(
            new TypeError('num1 and num2 should be numbers'),
        );
    });

    test('should throw an error for non-number types', () => {
        expect(() => sum({}, [])).toThrowError(
            new TypeError('num1 and num2 should be numbers'),
        );
        expect(() => sum(null, undefined)).toThrowError(
            new TypeError('num1 and num2 should be numbers'),
        );
    });
});
