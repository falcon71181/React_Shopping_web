"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isInArray;

var _isSameDay = _interopRequireDefault(require("./isSameDay"));

function isInArray(value, array) {
  if (!array) return false;
  return array.some(function (day) {
    return (0, _isSameDay["default"])(day, value);
  });
}