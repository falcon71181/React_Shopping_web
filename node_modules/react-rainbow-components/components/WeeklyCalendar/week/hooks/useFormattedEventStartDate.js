"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useFormattedEventStartDate;

var _react = require("react");

var _helpers = require("../helpers");

function useFormattedEventStartDate(startDate, locale) {
  return (0, _react.useMemo)(function () {
    return (0, _helpers.getFormattedEventStartDate)(startDate, locale);
  }, [locale, startDate]);
}