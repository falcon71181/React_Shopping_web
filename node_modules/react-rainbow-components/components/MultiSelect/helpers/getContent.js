"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getContent;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function getContent(value) {
  if (Array.isArray(value)) {
    return value.map(function (item) {
      return item.label;
    }).join(', ');
  }

  if (value && (0, _typeof2["default"])(value) === 'object') {
    return value.label;
  }

  return null;
}