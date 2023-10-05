"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getBrightness;

var _decomposeColor = _interopRequireDefault(require("./decomposeColor"));

var _hslToRgb = _interopRequireDefault(require("./hslToRgb"));

function getBrightness(color) {
  var rgb = (0, _decomposeColor["default"])(color);

  if (rgb.type.indexOf('hsl') !== -1) {
    rgb = (0, _hslToRgb["default"])(rgb);
  }

  return (rgb.values[0] * 299 + rgb.values[1] * 587 + rgb.values[2] * 114) / 1000;
}