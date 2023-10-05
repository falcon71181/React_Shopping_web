"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getContrastText;

var _colors = require("../../colors");

var _darken = _interopRequireDefault(require("./darken"));

var _getContrastRatio = _interopRequireDefault(require("./getContrastRatio"));

var _colorToRgba = _interopRequireDefault(require("./colorToRgba"));

var light = {
  text: {
    primary: 'rgba(0, 0, 0, 0.87)'
  }
};
var dark = {
  text: {
    primary: 'rgba(255, 255, 255, 1)'
  }
};
var contrastThreshold = 3;

function getContrastText(background) {
  if (!background) {
    throw new TypeError("Missing background argument in getContrastText(".concat(background, ")."));
  }

  var isDefaultBackground = background === (0, _colorToRgba["default"])(_colors.COLOR_BRAND) || background === (0, _colorToRgba["default"])((0, _darken["default"])(_colors.COLOR_BRAND)) || background === (0, _colorToRgba["default"])(_colors.COLOR_SUCCESS) || background === (0, _colorToRgba["default"])((0, _darken["default"])(_colors.COLOR_SUCCESS));
  var contrastText = (0, _getContrastRatio["default"])(background, dark.text.primary) >= contrastThreshold || isDefaultBackground ? dark.text.primary : light.text.primary;
  return contrastText;
}