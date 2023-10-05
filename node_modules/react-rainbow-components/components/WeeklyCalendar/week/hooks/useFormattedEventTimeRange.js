"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useFormattedEventTimeRange;

var _react = require("react");

var _helpers = require("../helpers");

function useFormattedEventTimeRange(startDate, endDate, locale) {
  return (0, _react.useMemo)(function () {
    return (0, _helpers.getFormattedEventTimeRange)(startDate, endDate, locale);
  }, [endDate, locale, startDate]);
}