"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = hsvToRgb;

var _decomposeColor2 = _interopRequireDefault(require("./decomposeColor"));

var _bound = _interopRequireDefault(require("./bound01"));

function hsvToRgb(color) {
  var _decomposeColor = (0, _decomposeColor2["default"])(color),
      type = _decomposeColor.type,
      values = _decomposeColor.values;

  if (!type || !values || type !== 'hsv') {
    return '';
  }

  var h = (0, _bound["default"])(values[0], 360) * 6;
  var s = (0, _bound["default"])(values[1], 100);
  var v = (0, _bound["default"])(values[2], 100);
  var i = Math.floor(h);
  var f = h - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  var mod = i % 6;
  var r = [v, q, p, p, t, v][mod];
  var g = [t, v, v, q, p, p][mod];
  var b = [p, p, t, v, v, q][mod];
  return "rgb(".concat(Math.round(r * 255), ", ").concat(Math.round(g * 255), ", ").concat(Math.round(b * 255), ")");
}