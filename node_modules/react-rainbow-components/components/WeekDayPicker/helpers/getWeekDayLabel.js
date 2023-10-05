"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getWeekDayLabel;

var _getWeekDays = _interopRequireDefault(require("./getWeekDays"));

var weekDays = (0, _getWeekDays["default"])();

function getWeekDayLabel(weekDay, locale) {
  if (weekDay && weekDays.includes(weekDay)) {
    try {
      var dayIndex = weekDays.findIndex(function (value) {
        return value === weekDay;
      });
      var dayString = "January ".concat(dayIndex + 2, ", 2000 00:00:00");
      var date = new Date(dayString);
      var config = {
        weekday: 'narrow'
      };
      return new Intl.DateTimeFormat(locale, config).format(date);
    } catch (error) {
      return '';
    }
  }

  return '';
}