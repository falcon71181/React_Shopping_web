"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getLastDayMonth;

function getLastDayMonth(value) {
  var date = new Date(value);
  date.setMonth(date.getMonth() + 1);
  date.setDate(1);
  date.setDate(date.getDate() - 1);
  return date;
}