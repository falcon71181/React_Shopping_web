"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = rgbaToHex;

var _decomposeColor = _interopRequireDefault(require("./decomposeColor"));

function pad2(value) {
  return value.length === 1 ? "0".concat(value) : "".concat(value);
}

function rgbaToHex(color) {
  var rgbaColor = (0, _decomposeColor["default"])(color);

  if (rgbaColor.type !== 'rgba') {
    return '';
  }

  var hex = [pad2(Math.round(rgbaColor.values[0]).toString(16)), pad2(Math.round(rgbaColor.values[1]).toString(16)), pad2(Math.round(rgbaColor.values[2]).toString(16))];
  return hex.join('');
}