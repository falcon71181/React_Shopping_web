"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = calculateSaturation;

function calculateSaturation(event, rect) {
  var width = rect.width,
      left = rect.left;
  var x = typeof event.pageX === 'number' ? event.pageX : event.touches[0].pageX;
  var relativeLeft = Math.min(Math.max(0, x - (left + window.pageXOffset)), width);
  return Math.round(relativeLeft / width * 100);
}