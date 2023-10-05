"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = rgbToHsv;

var _bound = _interopRequireDefault(require("./bound01"));

var _decomposeColor2 = _interopRequireDefault(require("./decomposeColor"));

function rgbToHsv(color) {
  var _decomposeColor = (0, _decomposeColor2["default"])(color),
      type = _decomposeColor.type,
      values = _decomposeColor.values;

  if (!type || !values || type.indexOf('rgb') === -1) {
    return '';
  }

  var r = (0, _bound["default"])(values[0], 255);
  var g = (0, _bound["default"])(values[1], 255);
  var b = (0, _bound["default"])(values[2], 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var v = max;
  var d = max - min;
  var s = max === 0 ? 0 : d / max;
  var h;

  if (max === min) {
    h = 0;
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        h = (b - r) / d + 2;
        break;

      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return "hsv(".concat(Math.round(h * 360), ", ").concat(Math.round(s * 100), "%, ").concat(Math.round(v * 100), "%)");
}