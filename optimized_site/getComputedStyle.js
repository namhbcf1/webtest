let getWindow;
try {
    const windowModule = require('./getWindow');
    getWindow = windowModule.getWindow;
} catch (e) {
    getWindow = function(node) {
        if (!node) return window;
        try {
            if (node === window) return window;
            if (node.ownerDocument && node.ownerDocument.defaultView) {
                return node.ownerDocument.defaultView;
            }
            return window;
        } catch (err) {
            return window;
        }
    };
}
const computedStyleCache = new WeakMap();
function getComputedStyle(element, pseudoElt) {
    if (!element) return null;
    const cacheKey = pseudoElt ? `${element}:${pseudoElt}` : element;
    if (computedStyleCache.has(cacheKey)) {
        return computedStyleCache.get(cacheKey);
    }
    try {
        if (element instanceof HTMLCanvasElement ||
            element instanceof HTMLImageElement ||
            element instanceof SVGElement) {
            const defaultStyle = {
                getPropertyValue: () => '',
                setProperty: () => {}
            };
            computedStyleCache.set(cacheKey, defaultStyle);
            return defaultStyle;
        }
        const win = getWindow(element);
        if (!win || !win.getComputedStyle) {
            return null;
        }
        const style = win.getComputedStyle(element, pseudoElt);
        computedStyleCache.set(cacheKey, style);
        return style;
    } catch (error) {
        console.warn('Error in getComputedStyle:', error);
        return null;
    }
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getComputedStyle
    };
} 