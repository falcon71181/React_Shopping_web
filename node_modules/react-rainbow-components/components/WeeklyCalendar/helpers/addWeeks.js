"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = addWeeks;

function addWeeks(date, weeks) {
  var clone = new Date(date);
  clone.setDate(date.getDate() + weeks * 7);
  return clone;
}