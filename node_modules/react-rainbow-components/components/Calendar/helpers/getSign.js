"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getSign;

function getSign(number) {
  if (!number || number === 0 || number === -0) return 0;
  return Math.abs(number) / number;
}