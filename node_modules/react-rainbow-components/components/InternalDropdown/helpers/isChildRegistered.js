"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isChildRegistered;

function isChildRegistered(name, activeChildren) {
  return activeChildren.findIndex(function (child) {
    return child.name === name;
  }) !== -1;
}