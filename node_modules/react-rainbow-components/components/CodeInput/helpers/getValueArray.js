"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getValueArray;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

function getValueArray(value, maxLength) {
  if (value) {
    var extractedNumbers = value.toString().match(/\d+/g);

    if (extractedNumbers) {
      var numbersArray = extractedNumbers.join('').slice(0, maxLength).split('');
      var emptyFieldsArray = Array(maxLength - numbersArray.length).fill('');
      return numbersArray.concat.apply(numbersArray, (0, _toConsumableArray2["default"])(emptyFieldsArray));
    }
  }

  return Array(maxLength).fill('');
}