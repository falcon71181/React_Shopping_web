"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getNextMinute;

function getNextMinute(value) {
  var number = Number(value);

  if (!value || number === 59) {
    return '0';
  }

  return String(number + 1);
}