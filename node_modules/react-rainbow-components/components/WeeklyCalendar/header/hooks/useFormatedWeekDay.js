"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useFormatedWeekDay;

var _react = require("react");

function useFormatedWeekDay(locale) {
  return (0, _react.useCallback)(function (day) {
    return new Intl.DateTimeFormat(locale, {
      weekday: 'short'
    }).format(day);
  }, [locale]);
}