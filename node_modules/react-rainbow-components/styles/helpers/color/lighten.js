"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = lighten;

var _decomposeColor = _interopRequireDefault(require("./decomposeColor"));

var _recomposeColor = _interopRequireDefault(require("./recomposeColor"));

var _clamp = _interopRequireDefault(require("./clamp"));

function lighten(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.8;
  color = (0, _decomposeColor["default"])(color);
  coefficient = (0, _clamp["default"])(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
    color.values[2] = Math.floor(color.values[2]);
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var index = 0; index < 3; index += 1) {
      color.values[index] += (255 - color.values[index]) * coefficient;
      color.values[index] = Math.floor(color.values[index]);
    }
  }

  return (0, _recomposeColor["default"])(color);
}