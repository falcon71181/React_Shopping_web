"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getYearsRange;

function isDisabled(params) {
  var minDate = params.minDate,
      maxDate = params.maxDate,
      currentMonth = params.currentMonth,
      year = params.year;

  if (maxDate && maxDate.getFullYear() === year && maxDate.getMonth() < currentMonth) {
    return true;
  }

  if (minDate && minDate.getFullYear() === year && minDate.getMonth() > currentMonth) {
    return true;
  }

  return false;
}

function getYearsRange(_ref) {
  var minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      currentMonth = _ref.currentMonth;
  var todayYear = new Date().getFullYear();
  var from;
  var to;

  if (minDate) {
    from = new Date(minDate).getFullYear();
  } else {
    from = new Date(todayYear - 100, 0, 1).getFullYear();
  }

  if (maxDate && maxDate > from) {
    to = new Date(maxDate).getFullYear();
  } else {
    to = new Date(todayYear + 100, 0, 1).getFullYear();
  }

  var range = [];

  for (var i = from; i <= to; i += 1) {
    range.push({
      value: i,
      label: i,
      disabled: isDisabled({
        minDate: minDate,
        maxDate: maxDate,
        currentMonth: currentMonth,
        year: i
      })
    });
  }

  return range;
}