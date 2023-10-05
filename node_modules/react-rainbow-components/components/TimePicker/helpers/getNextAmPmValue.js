"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getNextAmPmValue;

function getNextAmPmValue(value) {
  if (value === 'AM' || value === undefined) {
    return 'PM';
  }

  return 'AM';
}