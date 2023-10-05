"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getAmPm;

function getAmPm(value) {
  if (value) {
    return value.split(' ')[1];
  }

  return undefined;
}