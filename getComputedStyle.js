/**
 * Minimal getComputedStyle implementation
 */

// Store original method
const originalGetComputedStyle = window.getComputedStyle;

// Super simple wrapper with no recursion
function safeGetComputedStyle(element, pseudoElt) {
  // Handle null inputs
  if (!element) {
    return { getPropertyValue: () => '' };
  }
  
  try {
    // Direct call to native implementation
    return originalGetComputedStyle(element, pseudoElt);
  } catch (e) {
    // Return empty object with minimal implementation
    return { getPropertyValue: () => '' };
  }
}

// Replace window method
window.getComputedStyle = safeGetComputedStyle;

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getComputedStyle: safeGetComputedStyle };
} 