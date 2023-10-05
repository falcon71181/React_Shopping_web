"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useRangeStartDate;

var _react = require("react");

var _helpers = require("../helpers");

function useRangeStartDate(date, currentRange) {
  return (0, _react.useMemo)(function () {
    return (0, _helpers.isEmptyRange)(currentRange) ? false : (0, _helpers.isSameDay)(date, currentRange[0]);
  }, [date, currentRange]);
}