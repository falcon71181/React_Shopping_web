"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getNextFocusedDate;

var _isSameMonth = _interopRequireDefault(require("./isSameMonth"));

var _isSameYear = _interopRequireDefault(require("./isSameYear"));

var _getFirstDayMonth = _interopRequireDefault(require("./getFirstDayMonth"));

function getNextFocusedDate(currentDate, nextDate) {
  if (!currentDate && !nextDate) return (0, _getFirstDayMonth["default"])(new Date());
  return (0, _isSameMonth["default"])(currentDate, nextDate) && (0, _isSameYear["default"])(currentDate, nextDate) ? currentDate : (0, _getFirstDayMonth["default"])(nextDate);
}