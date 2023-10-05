"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = removeItemFromArray;

function removeItemFromArray(array, item) {
  return array.filter(function (element) {
    return element !== item;
  });
}