"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isPercentage;

function isPercentage(value) {
  return typeof value === 'string' && value.indexOf('%') !== -1;
}