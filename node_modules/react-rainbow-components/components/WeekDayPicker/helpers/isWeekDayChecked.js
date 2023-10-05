"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isWeekDayChecked;

function isWeekDayChecked(weekDay, value, multiple) {
  if (multiple) {
    if (Array.isArray(value)) {
      return value.some(function (day) {
        return day === weekDay;
      });
    }

    return false;
  }

  return weekDay === value;
}