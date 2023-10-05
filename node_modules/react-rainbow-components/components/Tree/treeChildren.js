"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TreeChildren;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _child = _interopRequireDefault(require("./child"));

var _getNodeName = _interopRequireDefault(require("./helpers/getNodeName"));

function TreeChildren(props) {
  var data = props.data,
      onNodeCheck = props.onNodeCheck,
      onNodeExpand = props.onNodeExpand,
      nodePath = props.nodePath,
      parentName = props.parentName,
      selectedNode = props.selectedNode,
      onNodeSelect = props.onNodeSelect;
  return data.map(function (nodeProps, index) {
    var nodeName = (0, _getNodeName["default"])({
      parentName: parentName,
      index: index
    });
    var isSelected = selectedNode === nodeName;
    var isFirstNode = !parentName && index === 0;
    return _react["default"].createElement(_child["default"], (0, _extends2["default"])({}, nodeProps, {
      key: nodeName,
      onNodeCheck: onNodeCheck,
      onNodeExpand: onNodeExpand,
      nodePath: [].concat((0, _toConsumableArray2["default"])(nodePath), [index]),
      isSelected: isSelected,
      name: nodeName,
      onNodeSelect: onNodeSelect,
      selectedNode: selectedNode,
      isFirstNode: isFirstNode
    }));
  });
}

TreeChildren.propTypes = {
  data: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].node,
    icon: _propTypes["default"].node,
    isExpanded: _propTypes["default"].bool,
    isLoading: _propTypes["default"].bool,
    isChecked: _propTypes["default"].oneOf([true, false, 'indeterminate']),
    children: _propTypes["default"].array
  })),
  onNodeCheck: _propTypes["default"].func,
  onNodeCollapse: _propTypes["default"].func,
  parentName: _propTypes["default"].string,
  nodePath: _propTypes["default"].array,
  onNodeSelect: _propTypes["default"].func,
  selectedNode: _propTypes["default"].string
};
TreeChildren.defaultProps = {
  data: [],
  onNodeCheck: function onNodeCheck() {},
  onNodeExpand: function onNodeExpand() {},
  onNodeSelect: function onNodeSelect() {},
  parentName: undefined,
  nodePath: undefined,
  selectedNode: undefined
};