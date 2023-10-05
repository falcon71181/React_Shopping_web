"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getDiffMinutes;

function getDiffMinutes(date1, date2) {
  return (date2 - date1) / 60000;
}