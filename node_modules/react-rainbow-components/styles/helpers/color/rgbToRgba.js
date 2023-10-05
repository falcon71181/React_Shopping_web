"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = rgbToRgba;

function rgbToRgba(color) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (color.substring(0, 3) !== 'rgb') {
    return '';
  }

  if (color.substring(0, 4) === 'rgba') {
    return color;
  }

  var rgx = /^rgb\(((,?\s*\d+){3}).+$/;
  return color.replace(rgx, "rgba($1, ".concat(alpha, ")"));
}