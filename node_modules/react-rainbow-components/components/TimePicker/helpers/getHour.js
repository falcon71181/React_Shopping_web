"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getHour;

function getHour(value) {
  if (value) {
    return value.split(':')[0];
  }

  return '';
}