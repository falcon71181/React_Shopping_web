"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = addDays;

function addDays(date, days) {
  var ret = new Date(date);
  ret.setDate(ret.getDate() + days);
  return new Date(ret);
}