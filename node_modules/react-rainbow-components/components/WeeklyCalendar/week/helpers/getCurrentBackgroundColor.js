"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getCurrentBackgroundColor;

var _color = require("../../../../styles/helpers/color");

function getCurrentBackgroundColor(_ref) {
  var backgroundColor = _ref.backgroundColor,
      palette = _ref.palette;
  var brand = palette.brand;

  if (backgroundColor && (0, _color.isValidColor)(backgroundColor)) {
    return backgroundColor;
  }

  return brand.main;
}