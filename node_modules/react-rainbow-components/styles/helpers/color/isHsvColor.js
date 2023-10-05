"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isHsvColor;

var _decomposeColor2 = _interopRequireDefault(require("./decomposeColor"));

function isHsvColor(color) {
  if (typeof color === 'string' && color !== '') {
    var _decomposeColor = (0, _decomposeColor2["default"])(color),
        type = _decomposeColor.type,
        values = _decomposeColor.values;

    if (type === 'hsv' && Array.isArray(values) && values.length === 3) {
      return values.filter(function (value, index) {
        return index === 0 && value >= 0 && value <= 360 || value >= 0 && value <= 100;
      }).length === 3;
    }
  }

  return false;
}