"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getTableWidth;

function getTableWidth() {
  var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return columns.reduce(function (seed, acc) {
    return seed + acc.computedWidth;
  }, 0);
}