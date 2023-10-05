"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useFormattedMonth;

var _react = require("react");

var _helpers = require("../../helpers");

function useFormattedMonth(month, locale) {
  return (0, _react.useMemo)(function () {
    return (0, _helpers.getFormattedMonth)(month, locale);
  }, [month, locale]);
}