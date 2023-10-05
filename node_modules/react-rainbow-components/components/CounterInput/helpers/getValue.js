"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getValue = function getValue(value) {
  if (isNaN(value)) {
    return 0;
  }

  return value;
};

var _default = getValue;
exports["default"] = _default;