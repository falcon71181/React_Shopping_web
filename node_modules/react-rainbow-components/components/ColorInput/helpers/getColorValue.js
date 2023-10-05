"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _color = require("../../../styles/helpers/color");

var _isHexColor = _interopRequireDefault(require("../../../styles/helpers/color/isHexColor"));

var getColorValue = function getColorValue(value) {
  if (!value) return undefined;
  var hex = value.hex,
      alpha = value.alpha;
  if (!(0, _isHexColor["default"])(hex)) return undefined;
  var rgba = (0, _color.decomposeColor)((0, _color.hexToRgba)(hex, alpha)).values;
  return {
    hex: hex,
    rgba: rgba
  };
};

var _default = getColorValue;
exports["default"] = _default;