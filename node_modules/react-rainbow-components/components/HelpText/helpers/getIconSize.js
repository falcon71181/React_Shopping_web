"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getIconSize;
var ICON_SIZES = {
  small: 14,
  medium: 22
};

function getIconSize(size) {
  return ICON_SIZES[size] || ICON_SIZES.medium;
}