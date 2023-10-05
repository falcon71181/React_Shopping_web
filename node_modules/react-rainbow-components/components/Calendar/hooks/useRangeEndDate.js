"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useRangeEndDate;

var _react = require("react");

var _helpers = require("../helpers");

function useRangeEndDate(date, currentRange) {
  return (0, _react.useMemo)(function () {
    return (0, _helpers.isEmptyRange)(currentRange) || currentRange.length < 2 ? false : (0, _helpers.isSameDay)(date, currentRange[1]);
  }, [date, currentRange]);
}