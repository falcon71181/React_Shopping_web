"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isDateBeyondLimit;

var _compareDates = _interopRequireDefault(require("./compareDates"));

function isDateBeyondLimit(date, limit) {
  return (0, _compareDates["default"])(date, limit) > 0;
}