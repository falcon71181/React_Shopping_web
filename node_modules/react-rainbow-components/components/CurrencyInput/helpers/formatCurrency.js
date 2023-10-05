"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = formatCurrency;

var _isValidNumberValue = _interopRequireDefault(require("./isValidNumberValue"));

function formatCurrency(_ref) {
  var value = _ref.value,
      locale = _ref.locale,
      options = _ref.options;

  if (value === '-') {
    return value;
  }

  if ((0, _isValidNumberValue["default"])(value)) {
    return new Intl.NumberFormat(locale, options).format(Number(value));
  }

  return '';
}