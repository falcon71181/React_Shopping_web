"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getDefaultAmPm;

function getDefaultAmPm(value) {
  var numberValue = Number(value);
  return numberValue > 11 && numberValue < 20 ? 'PM' : 'AM';
}