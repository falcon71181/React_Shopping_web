"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isChecked;

var _getAllValues = _interopRequireDefault(require("./getAllValues"));

function isChecked(value, children) {
  if (!value || value.length === 0) {
    return false;
  }

  if (value.length === (0, _getAllValues["default"])(children).length) {
    return true;
  }

  return 'indeterminate';
}