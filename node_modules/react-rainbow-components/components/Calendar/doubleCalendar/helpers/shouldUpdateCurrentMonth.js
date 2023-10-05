"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = shouldUpdateCurrentMonth;

var _helpers = require("../../helpers");

function shouldUpdateCurrentMonth(value, currentMonth, rightMonth) {
  if ((0, _helpers.isSameMonth)(value, rightMonth) || (0, _helpers.isSameMonth)(value, currentMonth)) return false;
  return true;
}