"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = compareDates;

var _getSign = _interopRequireDefault(require("./getSign"));

function compareDates(value1, value2) {
  var date1 = new Date(value1).setHours(0, 0, 0, 0);
  var date2 = new Date(value2).setHours(0, 0, 0, 0);
  return (0, _getSign["default"])(date1 - date2);
}