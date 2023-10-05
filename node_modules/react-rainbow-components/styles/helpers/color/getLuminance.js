"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getLuminance;

var _decomposeColor = _interopRequireDefault(require("./decomposeColor"));

var _hslToRgb = _interopRequireDefault(require("./hslToRgb"));

function getLuminance(color) {
  color = (0, _decomposeColor["default"])(color);
  var rgb = color.type === 'hsl' ? (0, _decomposeColor["default"])((0, _hslToRgb["default"])(color)).values : color.values;
  rgb = rgb.map(function (val) {
    val /= 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}