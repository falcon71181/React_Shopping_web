"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getValue = _interopRequireDefault(require("./getValue"));

var isMax = function isMax(number, step, max) {
  if ((0, _getValue["default"])(Number(number)) + step > max) {
    return true;
  }

  return false;
};

var _default = isMax;
exports["default"] = _default;