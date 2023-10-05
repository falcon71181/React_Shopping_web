"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = sortWeekDays;

var _getWeekDays = _interopRequireDefault(require("./getWeekDays"));

var weekDays = (0, _getWeekDays["default"])();

var sortDays = function sortDays(itemA, itemB) {
  var weekDayA = weekDays.indexOf(itemA);
  var weekDayB = weekDays.indexOf(itemB);
  if (weekDayA > weekDayB) return 1;
  if (weekDayA < weekDayB) return -1;
  return 0;
};

function sortWeekDays(values) {
  return values.sort(sortDays);
}