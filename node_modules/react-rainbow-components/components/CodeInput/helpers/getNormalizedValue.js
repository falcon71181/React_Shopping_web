"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getNormalizedValue;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _isNumeric = _interopRequireDefault(require("./isNumeric"));

function getNormalizedValue(inputValue, inputIndex, value) {
  if ((0, _isNumeric["default"])(inputValue) || inputValue === '') {
    var newValue = (0, _toConsumableArray2["default"])(value);
    newValue[inputIndex] = inputValue;
    return newValue.join('').trim('');
  }

  return value.join('').trim();
}