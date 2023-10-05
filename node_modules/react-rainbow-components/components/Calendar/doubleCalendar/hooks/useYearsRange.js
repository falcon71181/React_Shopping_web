"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useYearsRange;

var _react = require("react");

var _helpers = require("../../helpers");

function useYearsRange(minDate, maxDate, currentMonth) {
  return (0, _react.useMemo)(function () {
    return (0, _helpers.getYearsRange)({
      minDate: minDate,
      maxDate: maxDate,
      currentMonth: currentMonth.getMonth()
    });
  }, [minDate, maxDate, currentMonth]);
}