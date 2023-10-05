"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getValue = _interopRequireDefault(require("./getValue"));

var isMin = function isMin(number, step, min) {
  if ((0, _getValue["default"])(Number(number)) - step < min) {
    return true;
  }

  return false;
};

var _default = isMin;
exports["default"] = _default;