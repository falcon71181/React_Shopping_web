"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getFormattedEventTime;

function getFormattedEventTime(parts) {
  return parts.filter(function (_ref, index, arr) {
    var type = _ref.type,
        value = _ref.value;

    if (type === 'minute' && value === '00') {
      return false;
    }

    var next = arr[index + 1];

    if (next && next.type === 'minute' && next.value === '00') {
      return false;
    }

    return true;
  }).map(function (_ref2) {
    var value = _ref2.value;
    return value;
  }).reduce(function (string, part) {
    return string + part;
  });
}