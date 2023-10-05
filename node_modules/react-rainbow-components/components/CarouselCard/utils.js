"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCarouselCardContainerStyles = getCarouselCardContainerStyles;
exports.getChildTabNodes = getChildTabNodes;
exports.getItemIndex = getItemIndex;
exports.insertChildOrderly = insertChildOrderly;

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

function getItemIndex(children, id) {
  return children.findIndex(function (child) {
    return child.indicatorID === id;
  });
}

function getChildTabNodes(ref) {
  if (ref) {
    return ref.querySelectorAll('[role="tabpanel"]');
  }

  return [];
}

function getRefIndex(nodes, ref) {
  return nodes.indexOf(ref);
}

function sortChildren(childrenRefs, nodes) {
  var _childrenRefs = (0, _toArray2["default"])(childrenRefs),
      newChildrenRefs = _childrenRefs.slice(0);

  newChildrenRefs.sort(function (refA, refB) {
    return getRefIndex(nodes, refA.ref) - getRefIndex(nodes, refB.ref);
  });
  return newChildrenRefs;
}

function insertChildOrderly(childrenRefs, childRef, nodes) {
  var newChildrenRefs = childrenRefs.concat([childRef]);
  return sortChildren(newChildrenRefs, nodes);
}

function getCarouselCardContainerStyles(ref) {
  if (ref && ref.parentNode) {
    var parentHeight = ref.parentNode.style.height;

    if (!parentHeight) {
      return {
        height: 340
      };
    }

    return {
      height: '100%'
    };
  }

  return null;
}