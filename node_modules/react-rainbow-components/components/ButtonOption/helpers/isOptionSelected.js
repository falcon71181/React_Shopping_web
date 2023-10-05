"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isOptionSelected;

function isOptionSelected(values, name) {
  if (values && Array.isArray(values)) {
    return values.some(function (value) {
      return value === name;
    });
  }

  if (values && typeof values === 'string') {
    return values === name;
  }

  return false;
}