"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useFormattedWeek;

var _react = require("react");

var _helpers = require("../helpers");

function useFormattedWeek(week, locale) {
  return (0, _react.useMemo)(function () {
    return (0, _helpers.getFormattedWeek)(week, locale);
  }, [locale, week]);
}