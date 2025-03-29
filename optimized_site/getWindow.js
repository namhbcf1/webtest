function getWindow(node) {
    if (!node) return window;
    if (window._getWindowCache && window._getWindowCache.has(node)) {
        return window._getWindowCache.get(node);
    }
    if (!window._getWindowCache) {
        window._getWindowCache = new WeakMap();
    }
    let result = window;
    try {
        if (node === window) {
            result = window;
        }
        else if (node.ownerDocument && node.ownerDocument.defaultView) {
            result = node.ownerDocument.defaultView;
        }
        else if (node.document && node.location) {
            result = node;
        }
    } catch (e) {
        console.warn('Error in getWindow:', e);
        result = window;
    }
    window._getWindowCache.set(node, result);
    return result;
}
function safeGetComputedStyle(element) {
    try {
        if (!element) return null;
        const win = getWindow(element);
        return win.getComputedStyle(element);
    } catch (error) {
        console.error('Error getting computed style:', error);
        return null;
    }
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getWindow,
        safeGetComputedStyle
    };
} 