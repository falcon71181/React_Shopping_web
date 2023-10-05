"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = normalizeMinutes;

var _isNumber = _interopRequireDefault(require("./isNumber"));

function normalizeMinutes(value) {
  if ((0, _isNumber["default"])(value)) {
    var number = Number(value);

    if (number < 10) {
      return "0".concat(number);
    }

    return String(number);
  }

  return '';
}