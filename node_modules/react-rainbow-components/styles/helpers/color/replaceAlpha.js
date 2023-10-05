"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = replaceAlpha;

function replaceAlpha(color, alpha) {
  if (color.substring(0, 4) !== 'rgba' || alpha === undefined) {
    return '';
  }

  var rgx = /^rgba\(((,?\s*\d+){3}).+$/;
  return color.replace(rgx, "rgba($1, ".concat(alpha, ")"));
}