"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getPrevMinute;

function getPrevMinute(value) {
  var number = Number(value);

  if (!value || number === 0) {
    return '59';
  }

  return String(number - 1);
}