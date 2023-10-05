"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getNormalizedValue = function getNormalizedValue(number) {
  return parseFloat(number.toFixed(10));
};

var _default = getNormalizedValue;
exports["default"] = _default;