"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var getRefIndex = function getRefIndex(nodes, ref) {
  return nodes.indexOf(ref);
};

var sortChildren = function sortChildren(childrenRefs, nodes) {
  var _childrenRefs = (0, _toArray2["default"])(childrenRefs),
      newChildrenRefs = _childrenRefs.slice(0);

  newChildrenRefs.sort(function (refA, refB) {
    return getRefIndex(nodes, refA.ref) - getRefIndex(nodes, refB.ref);
  });
  return newChildrenRefs;
};

var insertChildOrderly = function insertChildOrderly(_ref) {
  var children = _ref.children,
      child = _ref.child,
      nodes = _ref.nodes;
  return sortChildren([].concat((0, _toConsumableArray2["default"])(children), [child]), nodes);
};

var _default = insertChildOrderly;
exports["default"] = _default;