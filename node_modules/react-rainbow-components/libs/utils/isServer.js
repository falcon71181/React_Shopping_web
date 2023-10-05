"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var isBrowser = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var isServer = !(isBrowser || isNative);
var _default = isServer;
exports["default"] = _default;