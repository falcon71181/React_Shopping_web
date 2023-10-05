"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isDark;

var _getBrightness = _interopRequireDefault(require("./getBrightness"));

function isDark(color) {
  return (0, _getBrightness["default"])(color) < 128;
}