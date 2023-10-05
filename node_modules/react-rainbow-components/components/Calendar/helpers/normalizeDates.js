"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = normalizeDates;

var _normalizeDate = _interopRequireDefault(require("./normalizeDate"));

function normalizeDates(dates) {
  return dates.filter(function (date) {
    return date && (typeof date === 'string' || date instanceof Date);
  }).map(function (date) {
    return (0, _normalizeDate["default"])(date);
  });
}