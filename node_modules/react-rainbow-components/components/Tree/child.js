"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Child;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _context = require("./context");

var _treeChildren = _interopRequireDefault(require("./treeChildren"));

var _expandCollapseButton = _interopRequireDefault(require("./expandCollapseButton"));

var _itemContainerLi = _interopRequireDefault(require("./styled/itemContainerLi"));

var _nodeContainer = _interopRequireDefault(require("./styled/nodeContainer"));

var _label = _interopRequireDefault(require("./styled/label"));

var _iconContainer = _interopRequireDefault(require("./styled/iconContainer"));

var _inputCheckbox = _interopRequireDefault(require("./styled/inputCheckbox"));

var _childrenContainer = _interopRequireDefault(require("./styled/childrenContainer"));

var _innerContainer = _interopRequireDefault(require("./styled/innerContainer"));

var _getNodeLevel = _interopRequireDefault(require("./helpers/getNodeLevel"));

var _getTabIndex = _interopRequireDefault(require("./helpers/getTabIndex"));

var _getNodePath = _interopRequireDefault(require("./helpers/getNodePath"));

var _shouldSelectNode = _interopRequireDefault(require("./helpers/shouldSelectNode"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Child(props) {
  var label = props.label,
      isExpanded = props.isExpanded,
      isLoading = props.isLoading,
      children = props.children,
      isChecked = props.isChecked,
      icon = props.icon,
      nodePath = props.nodePath,
      onNodeExpand = props.onNodeExpand,
      onNodeCheck = props.onNodeCheck,
      onNodeSelect = props.onNodeSelect,
      isSelected = props.isSelected,
      name = props.name,
      selectedNode = props.selectedNode,
      isFirstNode = props.isFirstNode;

  var _useContext = (0, _react.useContext)(_context.TreeContext),
      autoFocus = _useContext.autoFocus,
      focusedNode = _useContext.focusedNode,
      onPrivateFocusNode = _useContext.onPrivateFocusNode,
      onPrivateBlurNode = _useContext.onPrivateBlurNode,
      onPrivateKeyDown = _useContext.onPrivateKeyDown;

  var hasChildren = Array.isArray(children);
  var hasCheckbox = typeof isChecked === 'boolean' || isChecked === 'indeterminate';
  var hasIcon = !!icon;
  var ariaLevelValue = (0, _getNodeLevel["default"])({
    name: name
  });
  var ariaExpandedValue = hasChildren ? isExpanded : undefined;
  var ariaSelectedValue = isSelected === true ? isSelected : undefined;
  var tabIndex = (0, _getTabIndex["default"])({
    name: name,
    selectedNode: selectedNode,
    focusedNode: focusedNode,
    isFirstNode: isFirstNode,
    isSelected: isSelected
  });
  var itemRef = (0, _react.useRef)();

  var handleNodeSelect = function handleNodeSelect(event) {
    if ((0, _shouldSelectNode["default"])(event.target, name)) {
      onNodeSelect({
        name: name,
        nodePath: nodePath
      });
    }
  };

  var handleNodeExpand = function handleNodeExpand() {
    return onNodeExpand({
      name: name,
      nodePath: nodePath
    });
  };

  var handleNodeCheck = function handleNodeCheck() {
    onNodeCheck({
      name: name,
      nodePath: nodePath
    });
  };

  (0, _react.useEffect)(function () {
    if (autoFocus && focusedNode === name && itemRef.current) itemRef.current.focus();
  }, [autoFocus, focusedNode, name]);
  return _react["default"].createElement(_itemContainerLi["default"], {
    id: name,
    ref: itemRef,
    "data-id": "node-element-li",
    "data-path": (0, _getNodePath["default"])(nodePath),
    icon: icon,
    hasChildren: hasChildren,
    onClick: handleNodeSelect,
    onFocus: function onFocus(event) {
      return onPrivateFocusNode(event, name);
    },
    onBlur: function onBlur(event) {
      return onPrivateBlurNode(event, name);
    },
    role: "treeitem",
    "aria-level": ariaLevelValue,
    "aria-expanded": ariaExpandedValue,
    "aria-selected": ariaSelectedValue,
    tabIndex: tabIndex,
    onKeyDown: function onKeyDown(event) {
      return onPrivateKeyDown(event, props);
    }
  }, _react["default"].createElement(_nodeContainer["default"], {
    "data-id": "node-element",
    isSelected: isSelected,
    ariaLevelValue: ariaLevelValue,
    hasChildren: hasChildren
  }, _react["default"].createElement(_innerContainer["default"], {
    "data-id": "no-selectable-container"
  }, _react["default"].createElement(_expandCollapseButton["default"], {
    hasChildren: hasChildren,
    isExpanded: isExpanded === true,
    isLoading: isLoading === true,
    onClick: handleNodeExpand
  }), _react["default"].createElement(_RenderIf["default"], {
    isTrue: hasCheckbox
  }, _react["default"].createElement(_inputCheckbox["default"], {
    label: label,
    checked: isChecked,
    onChange: handleNodeCheck
  }))), _react["default"].createElement(_RenderIf["default"], {
    isTrue: hasIcon
  }, _react["default"].createElement(_iconContainer["default"], null, icon)), _react["default"].createElement(_label["default"], {
    isSelected: isSelected,
    icon: icon
  }, label)), _react["default"].createElement(_RenderIf["default"], {
    isTrue: hasChildren && isExpanded
  }, _react["default"].createElement(_childrenContainer["default"], {
    icon: icon,
    isChecked: isChecked,
    ariaLevelValue: ariaLevelValue,
    role: "group"
  }, _react["default"].createElement(_treeChildren["default"], {
    data: children,
    onNodeCheck: onNodeCheck,
    onNodeExpand: onNodeExpand,
    nodePath: nodePath,
    parentName: name,
    onNodeSelect: onNodeSelect,
    selectedNode: selectedNode
  }))));
}

Child.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  isChecked: _propTypes["default"].oneOf([true, false, 'indeterminate']),
  isExpanded: _propTypes["default"].bool,
  isLoading: _propTypes["default"].bool,
  icon: _propTypes["default"].node,
  children: _propTypes["default"].array,
  onNodeCheck: _propTypes["default"].func,
  onNodeExpand: _propTypes["default"].func,
  nodePath: _propTypes["default"].array,
  onNodeSelect: _propTypes["default"].func,
  isSelected: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  selectedNode: _propTypes["default"].string,
  isFirstNode: _propTypes["default"].bool
};
Child.defaultProps = {
  label: undefined,
  isChecked: undefined,
  isExpanded: undefined,
  isLoading: undefined,
  children: undefined,
  icon: null,
  onNodeExpand: function onNodeExpand() {},
  onNodeCheck: function onNodeCheck() {},
  nodePath: [],
  onNodeSelect: undefined,
  isSelected: undefined,
  name: undefined,
  selectedNode: undefined,
  isFirstNode: undefined
};