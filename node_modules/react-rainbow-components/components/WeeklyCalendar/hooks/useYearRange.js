"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useYearRange;

var _react = require("react");

var _helpers = require("../../Calendar/helpers");

function useYearRange(minDate, maxDate, date) {
  return (0, _react.useMemo)(function () {
    return (0, _helpers.getYearsRange)({
      minDate: minDate,
      maxDate: maxDate,
      currentMonth: date.getMonth()
    });
  }, [minDate, maxDate, date]);
}