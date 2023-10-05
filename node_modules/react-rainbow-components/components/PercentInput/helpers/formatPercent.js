"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = formatPercent;

var _helpers = require("../../CurrencyInput/helpers");

function formatPercent(_ref) {
  var value = _ref.value,
      locale = _ref.locale,
      options = _ref.options;

  if (value === '-') {
    return value;
  }

  if ((0, _helpers.isValidNumberValue)(value)) {
    return new Intl.NumberFormat(locale, options).format(Number(value) / 100);
  }

  return '';
}