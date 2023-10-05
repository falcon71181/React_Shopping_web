"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = recomposeColor;

function recomposeColor(color) {
  var type = color.type,
      values = color.values;

  if (!type || !values) {
    return '';
  }

  var valuesOutput = values.map(function (value, index) {
    if (['hsl', 'hsla', 'hsv'].includes(type) && index > 0 && index < 3) {
      return "".concat(value, "%");
    }

    return value;
  });
  return "".concat(type, "(").concat(valuesOutput.join(', '), ")");
}