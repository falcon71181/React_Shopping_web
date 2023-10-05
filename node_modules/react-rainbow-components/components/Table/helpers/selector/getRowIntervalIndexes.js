"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getRowIntervalIndexes;

var _getRowIndexByKey = _interopRequireDefault(require("../rows/getRowIndexByKey"));

function getRowIntervalIndexes(_ref) {
  var indexes = _ref.indexes,
      startRowKey = _ref.startRowKey,
      endRowKey = _ref.endRowKey;
  var start = (0, _getRowIndexByKey["default"])(indexes, startRowKey);
  var end = (0, _getRowIndexByKey["default"])(indexes, endRowKey);
  return {
    start: Math.min(start, end),
    end: Math.max(start, end)
  };
}