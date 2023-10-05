"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getBrowserLocale;

var _isServer = _interopRequireDefault(require("./isServer"));

function getBrowserLocale() {
  if (_isServer["default"]) return 'en-US';
  if (navigator.languages && navigator.languages.length > 0) return navigator.languages[0];
  if (navigator.language) return navigator.language;
  return 'en-US';
}