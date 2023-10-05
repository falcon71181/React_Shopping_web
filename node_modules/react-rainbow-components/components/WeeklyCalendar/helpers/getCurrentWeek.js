"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getCurrentWeek;

var _getFirstDayOfWeek = _interopRequireDefault(require("./getFirstDayOfWeek"));

var _helpers = require("../../Calendar/helpers");

function getCurrentWeek(currentWeek, minDate, maxDate) {
  var week = (0, _getFirstDayOfWeek["default"])((0, _helpers.normalizeDate)(currentWeek));
  week.setHours(0, 0, 0, 0);

  if (minDate) {
    var minWeek = (0, _getFirstDayOfWeek["default"])(minDate);
    minWeek.setHours(0, 0, 0, 0);
    return new Date(Math.max(week, minWeek));
  }

  if (maxDate) {
    var maxWeek = (0, _getFirstDayOfWeek["default"])(maxDate);
    maxWeek.setHours(0, 0, 0, 0);
    return new Date(Math.min(week, maxWeek));
  }

  return week;
}