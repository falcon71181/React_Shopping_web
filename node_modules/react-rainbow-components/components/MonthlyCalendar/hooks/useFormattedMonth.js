"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useFormattedMonth;

var _react = require("react");

var _helpers = require("../../Calendar/helpers");

function useFormattedMonth(month, currentLocale) {
  return (0, _react.useMemo)(function () {
    return (0, _helpers.getFormattedMonth)(month, currentLocale);
  }, [currentLocale, month]);
}