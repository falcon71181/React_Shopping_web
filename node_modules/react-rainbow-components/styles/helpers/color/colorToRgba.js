"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = colorToRgba;

var _decomposeColor2 = _interopRequireDefault(require("./decomposeColor"));

var _rgbToRgba = _interopRequireDefault(require("./rgbToRgba"));

var _hslToRgb = _interopRequireDefault(require("./hslToRgb"));

var _recomposeColor = _interopRequireDefault(require("./recomposeColor"));

function colorToRgba(color) {
  if (typeof color !== 'string') return '';

  try {
    var _decomposeColor = (0, _decomposeColor2["default"])(color),
        type = _decomposeColor.type,
        values = _decomposeColor.values;

    if (!['rgb', 'rgba', 'hsl', 'hsla'].includes(type)) return '';
    if (type === 'rgb') return (0, _rgbToRgba["default"])(color);
    if (type === 'hsl') return (0, _rgbToRgba["default"])((0, _hslToRgb["default"])(color));
    if (type === 'hsla') return (0, _hslToRgb["default"])(color);
    return (0, _recomposeColor["default"])({
      type: type,
      values: values
    });
  } catch (error) {
    return '';
  }
}