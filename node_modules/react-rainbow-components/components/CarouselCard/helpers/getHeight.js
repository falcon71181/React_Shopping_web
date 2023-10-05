"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getHeight = function getHeight(ref) {
  return ref && ref.parentNode && ref.parentNode.style.height ? '100%' : 340;
};

var _default = getHeight;
exports["default"] = _default;