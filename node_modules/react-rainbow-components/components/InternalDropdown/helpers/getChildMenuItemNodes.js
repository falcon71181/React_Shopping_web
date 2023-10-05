"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getChildMenuItemNodes;

function getChildMenuItemNodes(ref) {
  if (ref) {
    return ref.querySelectorAll('div[role="option"]');
  }

  return [];
}