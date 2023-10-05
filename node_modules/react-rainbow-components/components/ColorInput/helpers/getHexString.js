"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getHexString = function getHexString(value) {
  if (typeof value !== 'string') return '';
  return value.startsWith('#') ? value : "#".concat(value);
};

var _default = getHexString;
exports["default"] = _default;