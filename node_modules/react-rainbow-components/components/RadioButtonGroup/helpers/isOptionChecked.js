"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isOptionChecked;

function isOptionChecked(option, currentValue) {
  if (!currentValue) {
    return false;
  }

  return !option.disabled && option.value === currentValue;
}