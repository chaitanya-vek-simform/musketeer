/**
 * sanitize.js
 * Strips HTML tags from user-supplied strings to prevent XSS.
 * Always use this before inserting user input into the DOM.
 *
 * @param {string} str – raw user input
 * @returns {string} sanitized string
 */
function sanitize(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
