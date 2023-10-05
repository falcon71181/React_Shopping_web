"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getMaxHeight;

function getMaxHeight(children, isExpanded) {
  var height = 0;

  if (isExpanded && children && children.length) {
    height = children.length * 45;
  }

  if (isExpanded && children && !children.length) {
    height = 45;
  }

  return height;
}