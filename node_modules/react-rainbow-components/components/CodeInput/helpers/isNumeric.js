"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isNumeric;

function isNumeric(value) {
  if (value) {
    return !isNaN(value);
  }

  return false;
}