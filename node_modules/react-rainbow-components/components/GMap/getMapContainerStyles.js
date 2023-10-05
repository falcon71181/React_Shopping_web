"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getMapContainerStyles;

function getMapContainerStyles(ref) {
  if (ref && ref.parentNode) {
    var parentHeight = ref.parentNode.style.height;

    if (!parentHeight) {
      return {
        minHeight: 300
      };
    }

    return null;
  }

  return null;
}