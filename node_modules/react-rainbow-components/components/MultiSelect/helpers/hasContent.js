"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = hasContent;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function hasContent(value) {
  if (!value) {
    return false;
  }

  if (Array.isArray(value)) {
    return value.length > 0;
  }

  return (0, _typeof2["default"])(value) === 'object';
}