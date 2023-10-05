"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getNumbersFromClipboard;

function getNumbersFromClipboard(value) {
  if (value) {
    var extractedNumbers = value.match(/\d+/g);

    if (extractedNumbers) {
      return extractedNumbers.join('');
    }
  }

  return '';
}