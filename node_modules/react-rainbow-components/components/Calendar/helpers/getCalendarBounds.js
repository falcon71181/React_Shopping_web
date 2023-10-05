"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getCalendarBounds;

function getCalendarBounds(minDate, maxDate) {
  var today = new Date();
  var minCalendarDate = minDate || new Date(today.getFullYear() - 100, 0, 1);
  var maxCalendarDate = maxDate || new Date(today.getFullYear() + 100, 11, 31);
  return {
    minCalendarDate: minCalendarDate,
    maxCalendarDate: maxCalendarDate
  };
}