"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getPageBorderRadius = function getPageBorderRadius(pages) {
  if (pages === 1) {
    return '100px';
  }

  return '0 100px 100px 0';
};

var _default = getPageBorderRadius;
exports["default"] = _default;