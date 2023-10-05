"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getCurrentMonth;

var _helpers = require("../../Calendar/helpers");

function getCurrentMonth(currentMonth, minDate, maxDate) {
  var month = (0, _helpers.getFirstDayMonth)((0, _helpers.normalizeDate)(currentMonth));
  month.setHours(0, 0, 0, 0);

  if (minDate) {
    var minMonth = (0, _helpers.getFirstDayMonth)((0, _helpers.normalizeDate)(minDate));
    minMonth.setHours(0, 0, 0, 0);
    if ((0, _helpers.isDateBelowLimit)(month, minMonth)) return minMonth;
  }

  if (maxDate) {
    var maxMonth = (0, _helpers.getFirstDayMonth)((0, _helpers.normalizeDate)(maxDate));
    maxMonth.setHours(0, 0, 0, 0);
    if ((0, _helpers.isDateBeyondLimit)(month, maxMonth)) return maxMonth;
  }

  return month;
}