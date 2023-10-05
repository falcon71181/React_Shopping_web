"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = findNodeByFirstLetter;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

function findNodeByFirstLetter(nodes, searchTerm, fromIndex) {
  var head = nodes.slice(0, fromIndex);
  var tail = nodes.slice(fromIndex + 1);
  return [].concat((0, _toConsumableArray2["default"])(tail), (0, _toConsumableArray2["default"])(head)).find(function (node) {
    if (typeof node.label === 'string') {
      return node.label.indexOf(searchTerm.toLowerCase()) === 0;
    }

    return false;
  });
}