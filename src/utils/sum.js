/**
 * Sums two numbers.
 *
 * @param {number} num1 - The first number to be added.
 * @param {number} num2 - The second number to be added.
 * @returns {number} The sum of num1 and num2.
 * @throws {TypeError} If either num1 or num2 is not a number.
 *
 * @example
 * const total = sum(5, 3);
 * console.log(total); // Output: 8
 */
const sum = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new TypeError('num1 and num2 should be numbers');
    }
    return num1 + num2;
};

export default sum;
