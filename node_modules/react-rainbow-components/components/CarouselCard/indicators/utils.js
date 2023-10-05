"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChildTabNodes = getChildTabNodes;
exports.insertChildOrderly = insertChildOrderly;

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

function getChildTabNodes(ref) {
  if (ref) {
    return ref.querySelectorAll('[role="tab"]');
  }

  return [];
}

function getRefIndex(nodes, ref) {
  return nodes.indexOf(ref.current);
}

function sortChildren(childrenRefs, nodes) {
  var _childrenRefs = (0, _toArray2["default"])(childrenRefs),
      newChildrenRefs = _childrenRefs.slice(0);

  newChildrenRefs.sort(function (refA, refB) {
    return getRefIndex(nodes, refA.ref) - getRefIndex(nodes, refB.ref);
  });
  return newChildrenRefs;
}

function insertChildOrderly(childrenRefs, childRef, nodes) {
  var newChildrenRefs = childrenRefs.concat([childRef]);
  return sortChildren(newChildrenRefs, nodes);
}