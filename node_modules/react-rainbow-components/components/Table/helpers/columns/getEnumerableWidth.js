"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getEnumerableWidth;
var singleNumberWidth = 8;

function getEnumerableWidth(numberValue, variant) {
  var enumerableColumnOffset = variant === 'listview' ? 10 : 40;

  if (numberValue) {
    var valuePlusOne = Number(numberValue) + 1;
    var enumerableStringWidth = singleNumberWidth * valuePlusOne.toString().length;
    return enumerableStringWidth + enumerableColumnOffset;
  }

  return enumerableColumnOffset + singleNumberWidth;
}