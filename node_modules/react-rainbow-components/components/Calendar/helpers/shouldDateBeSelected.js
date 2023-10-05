"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = shouldDateBeSelected;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _isSameDay = _interopRequireDefault(require("./isSameDay"));

function shouldDateBeSelected(date, currentValue, selectionType, currentRange) {
  if (selectionType === 'single') return (0, _isSameDay["default"])(date, currentValue);

  if (Array.isArray(currentRange) && currentRange.length > 0) {
    var _currentRange = (0, _slicedToArray2["default"])(currentRange, 2),
        rangeStart = _currentRange[0],
        rangeEnd = _currentRange[1];

    return (0, _isSameDay["default"])(date, rangeStart) || (0, _isSameDay["default"])(date, rangeEnd);
  }

  return false;
}