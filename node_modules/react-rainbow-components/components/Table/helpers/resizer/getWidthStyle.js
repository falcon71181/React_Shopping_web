"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getWidthStyle;

function getWidthStyle(pixels) {
  return pixels > 0 ? "width: ".concat(pixels, "px") : '';
}