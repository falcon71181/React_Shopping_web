"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = valuePropValidation;

var _getWeekDays = _interopRequireDefault(require("./getWeekDays"));

var weekDays = (0, _getWeekDays["default"])();

function valuePropValidation(propValue, key, componentName, location, propFullName) {
  if (!weekDays.some(function (day) {
    return day === propValue[key];
  })) {
    return new Error("Invalid prop ".concat(propFullName, " supplied to ").concat(componentName, " Validation failed."));
  }

  return null;
}