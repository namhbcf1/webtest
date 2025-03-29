/**
 * Ultra minimal getWindow implementation
 */

// Store global window reference
const globalWindow = window;

// Simplest possible function - always returns the same window reference
function getWindow() {
  return globalWindow;
}

// Add to window
window.getWindow = getWindow;

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getWindow };
} 