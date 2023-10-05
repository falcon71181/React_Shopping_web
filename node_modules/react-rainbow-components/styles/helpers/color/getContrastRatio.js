"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getContrastRatio;

var _getLuminance = _interopRequireDefault(require("./getLuminance"));

function getContrastRatio(foreground, background) {
  var lumA = (0, _getLuminance["default"])(foreground);
  var lumB = (0, _getLuminance["default"])(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05).toFixed(3);
}