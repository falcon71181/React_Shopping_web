"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useFormatDate;

var _react = require("react");

var _formatDate = _interopRequireDefault(require("../helpers/formatDate"));

var _helpers = require("../../Calendar/helpers");

function useFormatDate(_ref) {
  var value = _ref.value,
      format = _ref.format,
      locale = _ref.locale,
      selectionType = _ref.selectionType;
  return (0, _react.useMemo)(function () {
    if (selectionType === 'single') return (0, _formatDate["default"])(value, format, locale);
    if ((0, _helpers.isEmptyRange)(value)) return '';
    var formattedRange = value.map(function (date) {
      return (0, _formatDate["default"])(date, format, locale);
    });
    return formattedRange.join(' - ');
  }, [value, format, locale, selectionType]);
}