"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getChildStepsNodes;

function getChildStepsNodes(ref) {
  if (ref) {
    return ref.querySelectorAll('li[role="option"]');
  }

  return [];
}