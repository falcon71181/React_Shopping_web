"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findItemByKey = findItemByKey;
exports.findItemIndex = findItemIndex;
exports.getChildMenuItemNodes = getChildMenuItemNodes;
exports.insertChildOrderly = insertChildOrderly;
exports.isPrintableCharacter = isPrintableCharacter;
exports.resolvePosition = resolvePosition;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _InternalOverlay = _interopRequireDefault(require("../InternalOverlay"));

var DEFAULT_MARGIN = 5;

function getRefIndex(nodes, ref) {
  return nodes.indexOf(ref);
}

function sortChildren(childrenRefs, nodes) {
  var _childrenRefs = (0, _toArray2["default"])(childrenRefs),
      newChildrenRefs = _childrenRefs.slice(0);

  newChildrenRefs.sort(function (refA, refB) {
    return getRefIndex(nodes, refA) - getRefIndex(nodes, refB);
  });
  return newChildrenRefs;
}

function insertChildOrderly(childrenRefs, childRef, nodes) {
  var newChildrenRefs = childrenRefs.concat([childRef]);
  var sortedChildren = sortChildren(newChildrenRefs, nodes);
  return sortedChildren;
}

function findItemByKey(key, childrenRefs, fromIndex) {
  var head = childrenRefs.slice(0, fromIndex);
  var tail = childrenRefs.slice(fromIndex + 1);
  return [].concat((0, _toConsumableArray2["default"])(tail), (0, _toConsumableArray2["default"])(head)).find(function (child) {
    return child.innerText.toLowerCase().indexOf(key.toLowerCase()) === 0;
  });
}

function findItemIndex(childrenRefs, item) {
  return childrenRefs.findIndex(function (child) {
    return child === item;
  });
}

function getChildMenuItemNodes(ref) {
  if (ref) {
    return ref.querySelectorAll('[role="menuitem"]');
  }

  return [];
}

function isPrintableCharacter(str) {
  if (typeof str !== 'string') return false;
  return str.length === 1 && /\S/.test(str);
}

function getDesiredPosition(options, alignment, margin) {
  var _options$trigger = options.trigger,
      leftUpAnchor = _options$trigger.leftUpAnchor,
      leftBottomAnchor = _options$trigger.leftBottomAnchor,
      rightUpAnchor = _options$trigger.rightUpAnchor,
      rightBottomAnchor = _options$trigger.rightBottomAnchor,
      triggerWidth = _options$trigger.width,
      _options$content = options.content,
      contentWidth = _options$content.width,
      contentHeight = _options$content.height;

  if (alignment === 'right') {
    return {
      left: rightBottomAnchor.x - contentWidth,
      top: rightBottomAnchor.y + margin
    };
  }

  if (alignment === 'bottom') {
    return {
      left: leftUpAnchor.x + (triggerWidth - contentWidth) / 2,
      top: leftUpAnchor.y - contentHeight - margin
    };
  }

  if (alignment === 'center') {
    return {
      left: leftBottomAnchor.x + (triggerWidth - contentWidth) / 2,
      top: leftBottomAnchor.y + margin
    };
  }

  if (alignment === 'bottom-right') {
    return {
      left: rightUpAnchor.x - contentWidth,
      top: leftUpAnchor.y - contentHeight - margin
    };
  }

  if (alignment === 'bottom-left') {
    return {
      left: leftUpAnchor.x,
      top: leftUpAnchor.y - contentHeight - margin
    };
  }

  return {
    left: leftBottomAnchor.x,
    top: leftBottomAnchor.y + margin
  };
}

function resolvePosition(options, alignment) {
  var defaultPosition = _InternalOverlay["default"].defaultPositionResolver(options);

  var desiredPosition = getDesiredPosition(options, alignment, DEFAULT_MARGIN);
  var _options$viewport = options.viewport,
      viewportWidth = _options$viewport.width,
      viewportHeight = _options$viewport.height,
      _options$content2 = options.content,
      contentWidth = _options$content2.width,
      contentHeight = _options$content2.height;

  if (viewportWidth - (desiredPosition.left + contentWidth) >= 0 && viewportHeight - (desiredPosition.top + contentHeight) >= 0) {
    return desiredPosition;
  }

  return defaultPosition;
}