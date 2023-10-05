"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = normalizeHour;

var _isNumber = _interopRequireDefault(require("./isNumber"));

function normalizeHour(value) {
  var hour24 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if ((0, _isNumber["default"])(value)) {
    var number = Number(value);

    if (value === '000' && !hour24) {
      return '12';
    }

    if (number < 10) {
      return "0".concat(number);
    }

    if (number > 12 && number < 20 && !hour24) {
      return "0".concat(number - 12);
    }

    return String(number);
  }

  return '';
}