/**
 * Minimal getWindow function with no recursion
 */

// The simplest possible solution with no chance of recursion
const globalWindow = window;

// Ultra minimal function - no parameters, always returns the global window
function getWindow() {
  return globalWindow;
}

// No other functions, no dependencies
window.getWindow = getWindow;

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getWindow };
} 