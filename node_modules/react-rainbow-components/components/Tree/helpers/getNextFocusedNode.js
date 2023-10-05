"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getNextFocusedNode;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

function getNextFocusedNode(nodes, currentFocusedNode, dir) {
  if (nodes.length === 0) return undefined;
  var namesList = nodes.reduce(function (result, node) {
    return [].concat((0, _toConsumableArray2["default"])(result), [node.name]);
  }, []);
  var currentIndex = namesList.indexOf(currentFocusedNode);
  var nextIndex = Math.max(0, Math.min(nodes.length, currentIndex + dir));
  return namesList[nextIndex];
}