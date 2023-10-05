"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useYearsChange;

var _react = require("react");

var _helpers = require("../../Calendar/helpers");

function useYearsChange(minDate, maxDate, month) {
  return (0, _react.useMemo)(function () {
    return (0, _helpers.getYearsRange)({
      minDate: minDate,
      maxDate: maxDate,
      currentMonth: month.getMonth()
    });
  }, [minDate, maxDate, month]);
}