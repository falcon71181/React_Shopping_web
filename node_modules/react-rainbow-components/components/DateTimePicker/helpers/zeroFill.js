"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = zeroFill;

function zeroFill(value, length) {
  if ([undefined, null, ''].includes(value)) return '';
  var string = "".concat(value);
  var size = length - string.length;

  if (size > 0) {
    var zerofill = new Array(size + 1).join('0').substr(0, size);
    return "".concat(zerofill).concat(string);
  }

  return "".concat(string);
}