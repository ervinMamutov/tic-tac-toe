/**
 * Adds a click event listener to the button specified in the `dom` module.
 * When the button is clicked, the `sumHandler` function is invoked to perform
 * the sum calculation and update the display accordingly.
 *
 * @function
 * @example
 * sumListener(); // Binds the sumHandler function to the button's click event
 */

import dom from '../dom.js';
import sumHandler from '../handlers/sumHandler.js';

const sumListener = () => {
    dom.btn.addEventListener('click', sumHandler);
};

export default sumListener;
