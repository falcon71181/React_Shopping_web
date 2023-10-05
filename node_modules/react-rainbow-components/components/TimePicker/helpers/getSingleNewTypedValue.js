"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getSingleNewTypedValue;

function getDifference(a, b) {
  var i = 0;
  var j = 0;
  var result = '';

  while (j < b.length) {
    if (a[i] !== b[j] || i === a.length) {
      result += b[j];
    } else {
      i += 1;
    }

    j += 1;
  }

  return result;
}

function getSingleNewTypedValue(prevValue, value) {
  var hasValidPrevValue = prevValue && typeof prevValue === 'string';
  var hasValidValue = value && typeof value === 'string';

  if (!prevValue && hasValidValue) {
    return value;
  }

  if (hasValidPrevValue && hasValidValue) {
    return getDifference(prevValue, value) || null;
  }

  return null;
}