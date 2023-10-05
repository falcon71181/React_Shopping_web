"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = hexToRgba;

function hexToRgba(color) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (color.charAt(0) !== '#') {
    return '';
  }

  color = color.substr(1);

  if (color.length !== 3 && color.length !== 6) {
    return '';
  }

  var regex = new RegExp(".{1,".concat(color.length / 3, "}"), 'g');
  var colors = color.match(regex);

  if (colors && colors[0].length === 1) {
    colors = colors.map(function (value) {
      return value + value;
    });
  }

  return colors ? "rgba(".concat(colors.map(function (value) {
    return parseInt(value, 16);
  }).join(', '), ", ").concat(alpha, ")") : '';
}