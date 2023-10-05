"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isMenuOpen;

function isMenuOpen(options, isFocused) {
  return isFocused && Array.isArray(options) && !!options.length;
}