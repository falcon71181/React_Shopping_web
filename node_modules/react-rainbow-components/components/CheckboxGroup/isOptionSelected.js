"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isOptionSelected;

function isOptionSelected(values, option) {
  if (values && Array.isArray(values)) {
    return values.some(function (value) {
      return value === option.value;
    });
  }

  return false;
}