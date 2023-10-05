"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getOptionsLength;

function getOptionsLength() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var number = 0;
  options.forEach(function (option) {
    if (option.type !== 'header') {
      number += 1;
    }
  });
  return number;
}