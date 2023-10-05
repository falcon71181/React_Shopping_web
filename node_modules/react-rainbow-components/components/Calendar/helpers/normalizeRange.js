"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = normalizeRange;

var _normalizeDate = _interopRequireDefault(require("./normalizeDate"));

function normalizeRange(range) {
  if (Array.isArray(range)) return range.map(function (date, index) {
    if (index >= 1) {
      date.setHours(23, 59, 59, 999);
    }

    return (0, _normalizeDate["default"])(date);
  });
  if (range) return [(0, _normalizeDate["default"])(range)];
  return [];
}