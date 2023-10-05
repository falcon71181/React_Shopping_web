"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getFirstDayOfWeek;

function getFirstDayOfWeek(date) {
  if (date === Infinity || date === -Infinity) {
    return date;
  }

  var clone = new Date(date);
  var isValidDate = !isNaN(clone.getTime());

  if (isValidDate) {
    clone.setDate(clone.getDate() - clone.getDay());
    clone.setHours(0, 0, 0, 0);
    return clone;
  }

  var today = new Date();
  today.setDate(today.getDate() - today.getDay());
  today.setHours(0, 0, 0, 0);
  return today;
}