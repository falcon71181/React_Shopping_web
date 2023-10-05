"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isDateWithinRange;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _compareDates = _interopRequireDefault(require("./compareDates"));

function isDateWithinRange(date, range) {
  if (date && Array.isArray(range) && range.length > 1) {
    var _range = (0, _slicedToArray2["default"])(range, 2),
        rangeStart = _range[0],
        rangeEnd = _range[1];

    return (0, _compareDates["default"])(date, rangeStart) >= 0 && (0, _compareDates["default"])(date, rangeEnd) <= 0;
  }

  return false;
}