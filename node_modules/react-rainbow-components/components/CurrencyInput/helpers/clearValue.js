"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = clearValue;

function clearValue(value, decimalSeparator) {
  if (decimalSeparator === '.') {
    return value.replace(/[^\d\.-]/g, '');
  }

  return value.replace(/[^\d\,-]/g, '').replaceAll(',', '.');
}