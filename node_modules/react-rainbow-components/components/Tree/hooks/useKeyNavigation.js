"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useKeyNavigation;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _constants = require("../../../libs/constants");

var _getNextFocusedNode = _interopRequireDefault(require("../helpers/getNextFocusedNode"));

var _getLastVisibleNodeName = _interopRequireDefault(require("../helpers/getLastVisibleNodeName"));

var _isPrintableCharacter = _interopRequireDefault(require("../helpers/isPrintableCharacter"));

var _findNodeByFirstLetter = _interopRequireDefault(require("../helpers/findNodeByFirstLetter"));

var _findExpandableNodesAtLevel = _interopRequireDefault(require("../helpers/findExpandableNodesAtLevel"));

function useKeyNavigation(_ref) {
  var visibleNodes = _ref.visibleNodes,
      selectedNode = _ref.selectedNode,
      onNodeSelect = _ref.onNodeSelect,
      onNodeExpand = _ref.onNodeExpand;

  var _useState = (0, _react.useState)(selectedNode),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      focusedNode = _useState2[0],
      setFocusedNode = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      enableNavKeys = _useState4[0],
      setEnableNavKeys = _useState4[1];

  var keyHandlerMap = (0, _react.useMemo)(function () {
    var _ref4;

    return _ref4 = {}, (0, _defineProperty2["default"])(_ref4, _constants.UP_KEY, function (_ref2) {
      var name = _ref2.name;
      var nextFocusedNode = (0, _getNextFocusedNode["default"])(visibleNodes, name, -1);
      setFocusedNode(nextFocusedNode);
    }), (0, _defineProperty2["default"])(_ref4, _constants.DOWN_KEY, function (_ref3) {
      var name = _ref3.name;
      var nextFocusedNode = (0, _getNextFocusedNode["default"])(visibleNodes, name, 1);
      setFocusedNode(nextFocusedNode);
    }), (0, _defineProperty2["default"])(_ref4, _constants.LEFT_KEY, function (props) {
      var name = props.name,
          nodePath = props.nodePath,
          isExpanded = props.isExpanded,
          children = props.children;

      if (children && isExpanded) {
        onNodeExpand({
          name: name,
          nodePath: nodePath
        });
      } else {
        var parentNode = name.substr(0, name.lastIndexOf('.'));
        if (parentNode) setFocusedNode(parentNode);
      }
    }), (0, _defineProperty2["default"])(_ref4, _constants.RIGHT_KEY, function (props) {
      var name = props.name,
          nodePath = props.nodePath,
          isExpanded = props.isExpanded,
          children = props.children;
      if (children && !isExpanded) return onNodeExpand({
        name: name,
        nodePath: nodePath
      });
      return null;
    }), (0, _defineProperty2["default"])(_ref4, _constants.HOME_KEY, function () {
      if (visibleNodes.length > 0) setFocusedNode('node-1');
    }), (0, _defineProperty2["default"])(_ref4, _constants.END_KEY, function () {
      setFocusedNode((0, _getLastVisibleNodeName["default"])(visibleNodes));
    }), (0, _defineProperty2["default"])(_ref4, _constants.ENTER_KEY, function (props) {
      var name = props.name,
          nodePath = props.nodePath,
          children = props.children,
          isSelected = props.isSelected;

      if (isSelected && children) {
        onNodeExpand({
          name: name,
          nodePath: nodePath
        });
      } else {
        onNodeSelect({
          name: name,
          nodePath: nodePath
        });
      }
    }), (0, _defineProperty2["default"])(_ref4, _constants.SPACE_KEY, function (props) {
      var name = props.name,
          nodePath = props.nodePath,
          children = props.children;
      if (children) onNodeExpand({
        name: name,
        nodePath: nodePath
      });
    }), _ref4;
  }, [visibleNodes, onNodeExpand, onNodeSelect]);
  var processPrintableCharacter = (0, _react.useCallback)(function (_char) {
    if (_char === '*') {
      var currentNode = visibleNodes.find(function (node) {
        return node.name === focusedNode;
      });

      if (currentNode) {
        var expandableNodes = (0, _findExpandableNodesAtLevel["default"])(visibleNodes, currentNode.level);
        expandableNodes.forEach(function (node) {
          var name = node.name,
              nodePath = node.nodePath;
          onNodeExpand({
            name: name,
            nodePath: nodePath
          });
        });
      }
    } else {
      var currentIndx = visibleNodes.findIndex(function (node) {
        return node.name === focusedNode;
      });
      var nextNode = (0, _findNodeByFirstLetter["default"])(visibleNodes, _char, currentIndx);
      if (nextNode) setFocusedNode(nextNode.name);
    }
  }, [focusedNode, onNodeExpand, visibleNodes]);
  var keyDownHandler = (0, _react.useCallback)(function (event, childProps) {
    var key = event.key,
        keyCode = event.keyCode,
        target = event.target,
        currentTarget = event.currentTarget;

    if (target.id === currentTarget.id) {
      if (keyHandlerMap[keyCode]) {
        event.preventDefault();
        keyHandlerMap[keyCode](childProps);
      } else if ((0, _isPrintableCharacter["default"])(key)) {
        event.preventDefault();
        processPrintableCharacter(key, childProps);
      }
    }
  }, [keyHandlerMap, processPrintableCharacter]);
  var setFocus = (0, _react.useCallback)(function (event, node) {
    if (event.target.id === event.currentTarget.id) {
      setFocusedNode(node);
      setEnableNavKeys(true);
    }
  }, [setEnableNavKeys]);
  var clearFocus = (0, _react.useCallback)(function (event, node) {
    if (event.target.id === event.currentTarget.id) {
      setEnableNavKeys(false);
      if (focusedNode === node) setFocusedNode(selectedNode);
    }
  }, [focusedNode, selectedNode]);
  (0, _react.useEffect)(function () {
    setFocusedNode(selectedNode);
  }, [selectedNode]);
  return {
    autoFocus: enableNavKeys,
    focusedNode: focusedNode,
    setFocusedNode: setFocus,
    clearFocusedNode: clearFocus,
    keyDownHandler: keyDownHandler
  };
}