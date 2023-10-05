"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = findExpandableNodesAtLevel;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

function findExpandableNodesAtLevel(nodes, level) {
  return nodes.reduce(function (list, node) {
    if (node.hasChildren && !node.isExpanded && node.level === level) {
      return [].concat((0, _toConsumableArray2["default"])(list), [node]);
    }

    return list;
  }, []);
}