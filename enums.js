/**
 * Safe window property access without any errors
 */

(function() {
  // Create a local storage for properties we can't set
  const shadowProps = {};
  const readOnlyProps = ['top', 'parent', 'self', 'window', 'frames', 'location'];
  
  // Complete rewrite of safe property setter
  window.safeSetWindowProperty = function(prop, value) {
    // For read-only props, just store in shadow object
    if (readOnlyProps.includes(prop)) {
      shadowProps[prop] = value;
      console.log(`Property '${prop}' is read-only, storing locally`);
      return true;
    }
    
    // For normal props, try setting them
    try {
      window[prop] = value;
      return true;
    } catch (e) {
      // If failed, store in shadow object
      shadowProps[prop] = value;
      console.warn(`Couldn't set property '${prop}', using local storage`);
      return false;
    }
  };
  
  // Add getter for shadow properties
  window.safeGetWindowProperty = function(prop) {
    // If property exists in shadow props, return that
    if (prop in shadowProps) return shadowProps[prop];
    // Otherwise return from window
    return window[prop];
  };
  
  // Add a simple mock require
  if (!window.require) {
    window.require = function(moduleName) {
      console.log(`Mock require called for: ${moduleName}`);
      if (moduleName === '@popperjs/core' && typeof Popper !== 'undefined') {
        return Popper;
      }
      return {};
    };
  }
  
  // Export for module usage
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      safeSetWindowProperty: window.safeSetWindowProperty,
      safeGetWindowProperty: window.safeGetWindowProperty
    };
  }
})(); 