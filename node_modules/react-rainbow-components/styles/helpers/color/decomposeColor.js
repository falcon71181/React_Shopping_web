"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = decomposeColor;

var _hexToRgba = _interopRequireDefault(require("./hexToRgba"));

function decomposeColor(color) {
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor((0, _hexToRgba["default"])(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla', 'hsv'].indexOf(type) === -1) {
    throw new Error(["Unsupported `".concat(color, "` color."), 'We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), hsv().'].join('\n'));
  }

  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });
  return {
    type: type,
    values: values
  };
}