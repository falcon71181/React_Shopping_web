"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getNextHour;

function getNextHour(value) {
  var hour24 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var number = Number(value);

  if ((!value || number === 12) && !hour24) {
    return '1';
  }

  if ((!value || number === 23) && hour24) {
    return '0';
  }

  return String(number + 1);
}