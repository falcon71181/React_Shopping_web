"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isInArray;

function isInArray(array, item) {
  return array.some(function (element) {
    return element === item;
  });
}