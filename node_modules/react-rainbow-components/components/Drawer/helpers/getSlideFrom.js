"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getSlideFrom;

function getSlideFrom(value, fallback) {
  return ['left', 'right'].includes(value) ? value : fallback;
}