"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = extractTime;

var _isValidDate = _interopRequireDefault(require("./isValidDate"));

var _zeroFill = _interopRequireDefault(require("./zeroFill"));

function extractTime(date) {
  var hour24 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (date) {
    var value = typeof date === 'string' ? new Date(date) : date;

    if (!(0, _isValidDate["default"])(value)) {
      return '';
    }

    if (!hour24) {
      var _hours = (value.getHours() + 11) % 12 + 1;

      var suffix = value.getHours() >= 12 ? 'PM' : 'AM';

      var _minutes = value.getMinutes();

      return "".concat((0, _zeroFill["default"])(_hours, 2), ":").concat((0, _zeroFill["default"])(_minutes, 2), " ").concat(suffix);
    }

    var hours = value.getHours();
    var minutes = value.getMinutes();
    return "".concat((0, _zeroFill["default"])(hours, 2), ":").concat((0, _zeroFill["default"])(minutes, 2));
  }

  return '';
}