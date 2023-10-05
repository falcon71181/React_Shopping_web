"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = addMonths;

function addMonths(date, months) {
  var clone = new Date(date);
  clone.setMonth(date.getMonth() + months);
  return clone;
}