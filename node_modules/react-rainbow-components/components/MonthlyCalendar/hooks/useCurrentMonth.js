"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useCurrentMonth;

var _react = require("react");

var _getCurrentMonth = _interopRequireDefault(require("../helpers/getCurrentMonth"));

function useCurrentMonth(currentMonth, minDate, maxDate) {
  return (0, _react.useMemo)(function () {
    return (0, _getCurrentMonth["default"])(currentMonth, minDate, maxDate);
  }, [currentMonth, minDate, maxDate]);
}