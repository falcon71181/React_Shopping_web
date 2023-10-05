"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isValidColor;

var _utils = require("../../../libs/utils");

function isValidColor(color) {
  if (_utils.isServer) return true;
  var element = document.createElement('a');
  element.style.color = color;
  return element.style.color !== '';
}