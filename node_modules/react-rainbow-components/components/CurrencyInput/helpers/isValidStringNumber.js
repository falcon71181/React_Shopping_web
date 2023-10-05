"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isValidStringNumber;

function isValidStringNumber(str) {
  return str === '-' || !Number.isNaN(Number(str));
}