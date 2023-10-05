"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getLastDayOfWeek;

function getLastDayOfWeek(date) {
  var clone = new Date(date);
  clone.setDate(clone.getDate() + (6 - clone.getDay()));
  clone.setHours(0, 0, 0, 0);
  return clone;
}