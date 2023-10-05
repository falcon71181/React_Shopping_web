"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = buildPlainListFromTree;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _getNodeName = _interopRequireDefault(require("./getNodeName"));

var _getNodeLevel = _interopRequireDefault(require("./getNodeLevel"));

function buildPlainListFromTree(tree, parentName, parentPath) {
  if (!Array.isArray(tree)) return [];
  return tree.reduce(function (result, node, index) {
    var nodeName = (0, _getNodeName["default"])({
      parentName: parentName,
      index: index
    });
    var level = (0, _getNodeLevel["default"])({
      name: nodeName
    });
    var nodePath = parentPath ? [].concat((0, _toConsumableArray2["default"])(parentPath), [index]) : [index];
    var nodeLabel = typeof node.label === 'string' ? node.label.toLowerCase() : node.label;

    if (node.isExpanded) {
      return [].concat((0, _toConsumableArray2["default"])(result), [{
        name: nodeName,
        label: nodeLabel,
        level: level,
        nodePath: nodePath,
        isExpanded: node.isExpanded,
        hasChildren: node.children && node.children.length > 0
      }], (0, _toConsumableArray2["default"])(buildPlainListFromTree(node.children, nodeName, nodePath)));
    }

    return [].concat((0, _toConsumableArray2["default"])(result), [{
      name: nodeName,
      label: nodeLabel,
      level: level,
      nodePath: nodePath,
      isExpanded: node.isExpanded,
      hasChildren: node.children && node.children.length > 0
    }]);
  }, []);
}