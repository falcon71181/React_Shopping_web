"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useTreeNodesAsPlainList;

var _react = require("react");

var _buildPlainListFromTree = _interopRequireDefault(require("../helpers/buildPlainListFromTree"));

function useTreeNodesAsPlainList(data) {
  var dataStr = JSON.stringify(data, ['label', 'isExpanded', 'children']);
  return (0, _react.useMemo)(function () {
    return (0, _buildPlainListFromTree["default"])(data);
  }, [dataStr]);
}