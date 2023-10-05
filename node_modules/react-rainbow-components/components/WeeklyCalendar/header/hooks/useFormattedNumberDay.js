"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useFormattedNumberDay;

var _react = require("react");

function useFormattedNumberDay(locale) {
  return (0, _react.useCallback)(function (day) {
    return new Intl.DateTimeFormat(locale, {
      day: 'numeric'
    }).format(day);
  }, [locale]);
}