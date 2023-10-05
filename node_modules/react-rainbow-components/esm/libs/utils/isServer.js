var isBrowser = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var isServer = !(isBrowser || isNative);
export default isServer;