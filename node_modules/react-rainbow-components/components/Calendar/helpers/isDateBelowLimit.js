"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isDateBelowLimit;

var _compareDates = _interopRequireDefault(require("./compareDates"));

function isDateBelowLimit(date, limit) {
  return (0, _compareDates["default"])(date, limit) < 0;
}