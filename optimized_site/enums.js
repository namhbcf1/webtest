function safeSetWindowProperty(property, value) {
    try {
        const descriptor = Object.getOwnPropertyDescriptor(window, property);
        if (descriptor && !descriptor.configurable) {
            const safeProp = `${property}_safe`;
            Object.defineProperty(window, safeProp, {
                value: value,
                writable: true,
                configurable: true,
                enumerable: true
            });
            console.log(`Created safe property '${safeProp}' for read-only '${property}'`);
            return true;
        }
        window[property] = value;
        return true;
    } catch (e) {
        console.warn(`Could not set window.${property}:`, e);
        return false;
    }
}
if (typeof window !== 'undefined' && !window.require) {
    window.require = function(moduleName) {
        console.log(`Mock require called for: ${moduleName}`);
        if (moduleName === '@popperjs/core') {
            if (typeof Popper !== 'undefined') {
                return Popper;
            }
            return {};
        }
        return {};
    };
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { safeSetWindowProperty };
} 