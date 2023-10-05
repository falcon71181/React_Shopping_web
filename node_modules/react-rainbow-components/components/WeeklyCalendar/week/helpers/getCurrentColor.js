"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getCurrentColor;

var _color = require("../../../../styles/helpers/color");

function getCurrentColor(_ref) {
  var color = _ref.color,
      backgroundColor = _ref.backgroundColor,
      palette = _ref.palette;
  var getContrastText = palette.getContrastText,
      brand = palette.brand;

  if (color && (0, _color.isValidColor)(color)) {
    return color;
  }

  if (backgroundColor && (0, _color.isValidColor)(backgroundColor)) {
    return getContrastText(backgroundColor);
  }

  return getContrastText(brand.main);
}