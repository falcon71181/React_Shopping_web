"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isStepSelected;

function isStepSelected(params) {
  var hoveredIndex = params.hoveredIndex,
      selectedIndex = params.selectedIndex,
      index = params.index;
  if (hoveredIndex !== -1) return false;
  return selectedIndex === index;
}