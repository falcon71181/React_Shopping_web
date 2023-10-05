"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Tree;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("./context");

var _treeChildren = _interopRequireDefault(require("./treeChildren"));

var _treeContainerUl = _interopRequireDefault(require("./styled/treeContainerUl"));

var _getNode = _interopRequireDefault(require("./helpers/getNode"));

var _useKeyNavigation2 = _interopRequireDefault(require("./hooks/useKeyNavigation"));

var _useTreeNodesAsPlainList = _interopRequireDefault(require("./hooks/useTreeNodesAsPlainList"));

function Tree(props) {
  var data = props.data,
      onNodeExpand = props.onNodeExpand,
      onNodeCheck = props.onNodeCheck,
      onNodeSelect = props.onNodeSelect,
      selectedNode = props.selectedNode,
      className = props.className,
      style = props.style,
      id = props.id,
      ariaLabel = props.ariaLabel,
      ariaLabelledBy = props.ariaLabelledBy;
  var visibleNodes = (0, _useTreeNodesAsPlainList["default"])(data);

  var _useKeyNavigation = (0, _useKeyNavigation2["default"])({
    visibleNodes: visibleNodes,
    selectedNode: selectedNode,
    onNodeSelect: onNodeSelect,
    onNodeExpand: onNodeExpand
  }),
      autoFocus = _useKeyNavigation.autoFocus,
      focusedNode = _useKeyNavigation.focusedNode,
      setFocusedNode = _useKeyNavigation.setFocusedNode,
      clearFocusedNode = _useKeyNavigation.clearFocusedNode,
      keyDownHandler = _useKeyNavigation.keyDownHandler;

  var treeData = Array.isArray(data) ? data : [];
  return _react["default"].createElement(_context.Provider, {
    value: {
      autoFocus: autoFocus,
      focusedNode: focusedNode,
      onPrivateFocusNode: setFocusedNode,
      onPrivateBlurNode: clearFocusedNode,
      onPrivateKeyDown: keyDownHandler
    }
  }, _react["default"].createElement(_treeContainerUl["default"], {
    className: className,
    style: style,
    id: id,
    role: "tree",
    "aria-labelledby": ariaLabelledBy,
    "aria-label": ariaLabel
  }, _react["default"].createElement(_treeChildren["default"], {
    data: treeData,
    onNodeExpand: onNodeExpand,
    onNodeCheck: onNodeCheck,
    nodePath: [],
    selectedNode: selectedNode,
    onNodeSelect: onNodeSelect
  })));
}

Tree.propTypes = {
  data: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].node,
    icon: _propTypes["default"].node,
    isExpanded: _propTypes["default"].bool,
    isLoading: _propTypes["default"].bool,
    isChecked: _propTypes["default"].oneOf([true, false, 'indeterminate']),
    children: _propTypes["default"].array
  })),
  onNodeExpand: _propTypes["default"].func,
  onNodeCheck: _propTypes["default"].func,
  onNodeSelect: _propTypes["default"].func,
  selectedNode: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  id: _propTypes["default"].string,
  ariaLabelledBy: _propTypes["default"].string,
  ariaLabel: _propTypes["default"].string
};
Tree.defaultProps = {
  data: [],
  onNodeExpand: function onNodeExpand() {},
  onNodeCheck: function onNodeCheck() {},
  onNodeSelect: function onNodeSelect() {},
  selectedNode: undefined,
  className: undefined,
  style: undefined,
  id: undefined,
  ariaLabelledBy: undefined,
  ariaLabel: undefined
};
Tree.getNode = _getNode["default"];