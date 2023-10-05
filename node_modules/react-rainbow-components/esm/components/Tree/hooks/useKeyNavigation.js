import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useCallback, useState, useMemo, useEffect } from 'react';
import { RIGHT_KEY, LEFT_KEY, UP_KEY, DOWN_KEY, HOME_KEY, END_KEY, SPACE_KEY, ENTER_KEY } from '../../../libs/constants';
import getNextFocusedNode from '../helpers/getNextFocusedNode';
import getLastVisibleNodeName from '../helpers/getLastVisibleNodeName';
import isPrintableCharacter from '../helpers/isPrintableCharacter';
import findNodeByFirstLetter from '../helpers/findNodeByFirstLetter';
import findExpandableNodesAtLevel from '../helpers/findExpandableNodesAtLevel';
export default function useKeyNavigation(_ref) {
  var visibleNodes = _ref.visibleNodes,
      selectedNode = _ref.selectedNode,
      onNodeSelect = _ref.onNodeSelect,
      onNodeExpand = _ref.onNodeExpand;

  var _useState = useState(selectedNode),
      _useState2 = _slicedToArray(_useState, 2),
      focusedNode = _useState2[0],
      setFocusedNode = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      enableNavKeys = _useState4[0],
      setEnableNavKeys = _useState4[1];

  var keyHandlerMap = useMemo(function () {
    var _ref4;

    return _ref4 = {}, _defineProperty(_ref4, UP_KEY, function (_ref2) {
      var name = _ref2.name;
      var nextFocusedNode = getNextFocusedNode(visibleNodes, name, -1);
      setFocusedNode(nextFocusedNode);
    }), _defineProperty(_ref4, DOWN_KEY, function (_ref3) {
      var name = _ref3.name;
      var nextFocusedNode = getNextFocusedNode(visibleNodes, name, 1);
      setFocusedNode(nextFocusedNode);
    }), _defineProperty(_ref4, LEFT_KEY, function (props) {
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
    }), _defineProperty(_ref4, RIGHT_KEY, function (props) {
      var name = props.name,
          nodePath = props.nodePath,
          isExpanded = props.isExpanded,
          children = props.children;
      if (children && !isExpanded) return onNodeExpand({
        name: name,
        nodePath: nodePath
      });
      return null;
    }), _defineProperty(_ref4, HOME_KEY, function () {
      if (visibleNodes.length > 0) setFocusedNode('node-1');
    }), _defineProperty(_ref4, END_KEY, function () {
      setFocusedNode(getLastVisibleNodeName(visibleNodes));
    }), _defineProperty(_ref4, ENTER_KEY, function (props) {
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
    }), _defineProperty(_ref4, SPACE_KEY, function (props) {
      var name = props.name,
          nodePath = props.nodePath,
          children = props.children;
      if (children) onNodeExpand({
        name: name,
        nodePath: nodePath
      });
    }), _ref4;
  }, [visibleNodes, onNodeExpand, onNodeSelect]);
  var processPrintableCharacter = useCallback(function (_char) {
    if (_char === '*') {
      var currentNode = visibleNodes.find(function (node) {
        return node.name === focusedNode;
      });

      if (currentNode) {
        var expandableNodes = findExpandableNodesAtLevel(visibleNodes, currentNode.level);
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
      var nextNode = findNodeByFirstLetter(visibleNodes, _char, currentIndx);
      if (nextNode) setFocusedNode(nextNode.name);
    }
  }, [focusedNode, onNodeExpand, visibleNodes]);
  var keyDownHandler = useCallback(function (event, childProps) {
    var key = event.key,
        keyCode = event.keyCode,
        target = event.target,
        currentTarget = event.currentTarget;

    if (target.id === currentTarget.id) {
      if (keyHandlerMap[keyCode]) {
        event.preventDefault();
        keyHandlerMap[keyCode](childProps);
      } else if (isPrintableCharacter(key)) {
        event.preventDefault();
        processPrintableCharacter(key, childProps);
      }
    }
  }, [keyHandlerMap, processPrintableCharacter]);
  var setFocus = useCallback(function (event, node) {
    if (event.target.id === event.currentTarget.id) {
      setFocusedNode(node);
      setEnableNavKeys(true);
    }
  }, [setEnableNavKeys]);
  var clearFocus = useCallback(function (event, node) {
    if (event.target.id === event.currentTarget.id) {
      setEnableNavKeys(false);
      if (focusedNode === node) setFocusedNode(selectedNode);
    }
  }, [focusedNode, selectedNode]);
  useEffect(function () {
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