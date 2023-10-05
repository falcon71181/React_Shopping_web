"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isOnePointZero;

function isOnePointZero(value) {
  return typeof value === 'string' && value.indexOf('.') !== -1 && parseFloat(value) === 1;
}