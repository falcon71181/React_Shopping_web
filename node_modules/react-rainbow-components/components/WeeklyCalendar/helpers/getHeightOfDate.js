"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getHeightOfDate;

var _getHeightOfMinutes = _interopRequireDefault(require("./getHeightOfMinutes"));

function getHeightOfDate(date) {
  var clone = new Date(date);
  return (0, _getHeightOfMinutes["default"])(clone.getHours() * 60 + clone.getMinutes());
}