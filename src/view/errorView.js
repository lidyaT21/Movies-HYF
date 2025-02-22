import { constants } from "../constants.js";

/**
 * Creates an error message element.
 * @param {string} error - The error message to display.
 * @param {boolean} isButton - Whether to include a "Go home" button.
 * @returns {HTMLElement} - The error element.
 */
export const createErrorElement = (error) => {
  const errorElement = document.createElement("h2");
  errorElement.innerText = error;
  errorElement.id = constants.ERROR_ELEMENT_ID;
  errorElement.classList.add(constants.ERROR_MESSAGE_CLASS);

  return errorElement;
};
