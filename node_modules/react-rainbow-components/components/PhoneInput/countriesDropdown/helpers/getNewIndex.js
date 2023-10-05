"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getNewIndex;

function getNewIndex(newIndex, lenght) {
  if (newIndex < 0) {
    return 0;
  }

  if (newIndex >= lenght) {
    return lenght - 1;
  }

  return newIndex;
}