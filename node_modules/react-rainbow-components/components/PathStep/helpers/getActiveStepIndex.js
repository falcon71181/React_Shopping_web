"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getActiveStepIndex;

function getActiveStepIndex(params) {
  var hoveredIndex = params.hoveredIndex,
      selectedIndex = params.selectedIndex;
  if (hoveredIndex !== -1) return hoveredIndex;
  return selectedIndex;
}