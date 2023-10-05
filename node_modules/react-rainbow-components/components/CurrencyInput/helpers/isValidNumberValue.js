"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isValidNumberValue;

var _validation = require("@rainbow-modules/validation");

function isValidNumberValue(value) {
  var number = Number(value);
  return !(0, _validation.isBoolean)(value) && !(0, _validation.isEmpty)(value) && (0, _validation.isNumber)(number) && Number.isFinite(number);
}