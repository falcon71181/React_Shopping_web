"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getExpectedTableWidth;

var _getMinExpectedTableWidth = _interopRequireDefault(require("./getMinExpectedTableWidth"));

var _hasNoFlexibleColumns = _interopRequireDefault(require("./hasNoFlexibleColumns"));

function getExpectedTableWidth(domTableWidth, widthsMeta) {
  var minExpectedTableWidth = (0, _getMinExpectedTableWidth["default"])(widthsMeta);
  return (0, _hasNoFlexibleColumns["default"])(widthsMeta) ? minExpectedTableWidth : Math.max(minExpectedTableWidth, domTableWidth);
}