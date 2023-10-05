"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = bound01;

var _isOnePointZero = _interopRequireDefault(require("./isOnePointZero"));

var _isPercentage = _interopRequireDefault(require("./isPercentage"));

function bound01(value, max) {
  if ((0, _isOnePointZero["default"])(value)) {
    value = '100%';
  }

  var processPercent = (0, _isPercentage["default"])(value);
  value = Math.min(max, Math.max(0, parseFloat(value)));

  if (processPercent) {
    value = parseInt(value * max, 10) / 100;
  }

  if (Math.abs(value - max) < 0.000001) {
    return 1;
  }

  return value % max / parseFloat(max);
}