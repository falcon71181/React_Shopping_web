"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getNormalizeValue;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function getNormalizeValue(value) {
  if (value && (0, _typeof2["default"])(value) === 'object' && !Array.isArray(value)) {
    return value;
  }

  return {};
}