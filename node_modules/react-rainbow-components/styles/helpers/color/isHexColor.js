"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isHexColor;
var matcher = /^#[a-f0-9]{3}([a-f0-9]{3})?$/i;

function isHexColor(string) {
  return matcher.test(string);
}