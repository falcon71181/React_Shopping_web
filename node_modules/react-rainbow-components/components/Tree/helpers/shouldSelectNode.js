"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = shouldSelectNode;

function shouldSelectNode(element, name) {
  var parentElement = element;

  while (parentElement) {
    if (parentElement.getAttribute('data-id') === 'no-selectable-container') {
      return false;
    }

    if (parentElement.tagName === 'LI') {
      return parentElement.id === name;
    }

    parentElement = parentElement.parentNode;
  }

  return false;
}