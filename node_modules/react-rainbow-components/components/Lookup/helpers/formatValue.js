"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = formatValue;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function formatValue(value) {
  if ((0, _typeof2["default"])(value) === 'object' && value !== null && !Array.isArray(value)) {
    return value;
  }

  return {};
}