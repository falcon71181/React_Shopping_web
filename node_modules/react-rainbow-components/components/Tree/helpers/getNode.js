"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getNode = function getNode(tree, nodePath) {
  var firstNode = tree[nodePath[0]];

  if (nodePath.length === 1) {
    return firstNode;
  }

  return getNode(firstNode.children, nodePath.slice(1, nodePath.length));
};

var _default = getNode;
exports["default"] = _default;