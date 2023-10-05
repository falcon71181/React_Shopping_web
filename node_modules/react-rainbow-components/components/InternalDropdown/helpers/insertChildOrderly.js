"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = insertChildOrderly;

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

function getRefIndex(nodes, ref) {
  return nodes.indexOf(ref);
}

function sortChildren(children, nodes) {
  var _children = (0, _toArray2["default"])(children),
      newChildren = _children.slice(0);

  newChildren.sort(function (childA, childB) {
    return getRefIndex(nodes, childA.ref) - getRefIndex(nodes, childB.ref);
  });
  return newChildren;
}

function insertChildOrderly(children, child, nodes) {
  var newChildren = children.concat([child]);
  var sortedChildren = sortChildren(newChildren, nodes);
  return sortedChildren;
}