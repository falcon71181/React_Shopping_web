"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = normalizeValue;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _formatInteger = _interopRequireDefault(require("./formatInteger"));

var _isValidNumberValue = _interopRequireDefault(require("./isValidNumberValue"));

function normalizeValue(_ref) {
  var value = _ref.value,
      locale = _ref.locale,
      decimalSeparator = _ref.decimalSeparator,
      options = _ref.options;
  var stringValue = String(value);

  if (value === '-') {
    return value;
  }

  if ((0, _isValidNumberValue["default"])(value)) {
    var _stringValue$split = stringValue.split('.'),
        _stringValue$split2 = (0, _slicedToArray2["default"])(_stringValue$split, 2),
        integer = _stringValue$split2[0],
        fraction = _stringValue$split2[1];

    var formattedInteger = (0, _formatInteger["default"])({
      integer: integer,
      locale: locale,
      options: options
    });
    return stringValue.indexOf('.') !== -1 ? "".concat(formattedInteger).concat(decimalSeparator).concat(fraction || '') : formattedInteger;
  }

  return '';
}