"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getPrevHour;

function getPrevHour(value) {
  var hour24 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var number = Number(value);

  if ((!value || number === 1 || number === 0) && !hour24) {
    return '12';
  }

  if ((!value || number === 0) && hour24) {
    return '23';
  }

  return String(number - 1);
}