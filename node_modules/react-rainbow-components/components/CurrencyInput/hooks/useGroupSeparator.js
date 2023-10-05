"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useGroupSeparator;

var _react = require("react");

var _helpers = require("../helpers");

function useGroupSeparator(_ref) {
  var locale = _ref.locale,
      style = _ref.style,
      currency = _ref.currency;
  return (0, _react.useMemo)(function () {
    return (0, _helpers.getSeparator)({
      locale: locale,
      type: 'group',
      style: style,
      currency: currency
    });
  }, [currency, locale, style]);
}