"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = buildNewRangeFromValue;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _compareDates = _interopRequireDefault(require("./compareDates"));

function buildNewRangeFromValue(value, currentRange) {
  if (currentRange && currentRange.length > 0) {
    var _currentRange = (0, _slicedToArray2["default"])(currentRange, 2),
        rangeStart = _currentRange[0],
        rangeEnd = _currentRange[1];

    var newRangeStart = new Date(rangeStart);
    newRangeStart.setHours(0, 0, 0, 0);

    if (!rangeEnd) {
      if ((0, _compareDates["default"])(value, newRangeStart) <= 0) {
        value.setHours(0, 0, 0, 0);
        return {
          range: [value]
        };
      }

      value.setHours(23, 59, 59, 999);
      return {
        range: [newRangeStart, value]
      };
    }
  }

  value.setHours(0, 0, 0, 0);
  return {
    range: [value]
  };
}