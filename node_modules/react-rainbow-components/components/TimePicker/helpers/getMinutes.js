"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getMinutes;

function getMinutes(value) {
  if (value) {
    return value.split(':')[1].split(' ')[0];
  }

  return '';
}