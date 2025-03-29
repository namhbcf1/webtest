/**
 * Ultra minimal getComputedStyle implementation
 */

// Store original method
const originalMethod = window.getComputedStyle;

// Simple function that calls the original directly
function safeGetComputedStyle(element, pseudoElt) {
  // Return default for null inputs
  if (!element) {
    return { getPropertyValue: () => '' };
  }
  
  try {
    // Direct call to original method
    return originalMethod(element, pseudoElt);
  } catch (e) {
    // Fallback empty implementation
    return { getPropertyValue: () => '' };
  }
}

// Replace window method
window.getComputedStyle = safeGetComputedStyle;

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getComputedStyle: safeGetComputedStyle };
} 