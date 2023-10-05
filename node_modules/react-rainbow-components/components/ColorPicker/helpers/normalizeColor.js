"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = normalizeColor;
exports.defaultColor = void 0;

var _color = require("../../../styles/helpers/color");

function getRgba(value, isValidHex) {
  if (isValidHex) {
    return (0, _color.hexToRgba)(value.hex);
  }

  return (0, _color.rgbToRgba)((0, _color.hsvToRgb)((0, _color.recomposeColor)({
    type: 'hsv',
    values: value.hsv
  })), 1);
}

var defaultColor = {
  hex: '#000000',
  rgba: [0, 0, 0, 1],
  hsv: [0, 0, 0]
};
exports.defaultColor = defaultColor;

function normalizeColor(value) {
  var hex = value.hex,
      rgba = value.rgba,
      hsv = value.hsv;
  var isValidHex = (0, _color.isValidColor)(hex);
  var isValidRgba = (0, _color.isValidColor)((0, _color.recomposeColor)({
    type: 'rgba',
    values: rgba
  }));
  var isValidHsv = (0, _color.isHsvColor)((0, _color.recomposeColor)({
    type: 'hsv',
    values: hsv
  }));

  if (!isValidHex && !isValidRgba && !isValidHsv) {
    return defaultColor;
  }

  var rgbaColor = isValidRgba ? (0, _color.recomposeColor)({
    type: 'rgba',
    values: rgba
  }) : getRgba(value, isValidHex);
  var hexColor = isValidHex ? hex : "#".concat((0, _color.rgbaToHex)(rgbaColor));
  var hsvColor = isValidHsv ? hsv : (0, _color.decomposeColor)((0, _color.rgbToHsv)(rgbaColor)).values;
  return {
    hex: hexColor,
    rgba: (0, _color.decomposeColor)(rgbaColor).values,
    hsv: hsvColor
  };
}