"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isNumber;
var NUMBER_REGEX = /^[0-9]{0,8}$/;

function isNumber(value) {
  return NUMBER_REGEX.test(value) && !Array.isArray(value) && value !== '';
}