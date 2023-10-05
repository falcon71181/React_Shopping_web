"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isPrintableCharacter;

function isPrintableCharacter(str) {
  if (typeof str !== 'string') return false;
  return str.length === 1 && /\S/.test(str);
}