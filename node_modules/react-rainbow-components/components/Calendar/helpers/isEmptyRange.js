"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isEmptyRange;

function isEmptyRange(range) {
  if (Array.isArray(range) && range.length > 0) {
    return range.filter(function (item) {
      return !!item;
    }).length === 0;
  }

  return true;
}