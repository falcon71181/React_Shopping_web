"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChildTabNodes = getChildTabNodes;
exports.getChildrenTotalWidth = getChildrenTotalWidth;
exports.getChildrenTotalWidthUpToClickedTab = getChildrenTotalWidthUpToClickedTab;
exports.getLeftButtonDisabledState = getLeftButtonDisabledState;
exports.getRightButtonDisabledState = getRightButtonDisabledState;
exports.getTabIndexFromName = getTabIndexFromName;
exports.getUpdatedTabsetChildren = getUpdatedTabsetChildren;
exports.insertChildOrderly = insertChildOrderly;
exports.isNotSameChildren = isNotSameChildren;

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

function getChildTabNodes(ref) {
  if (ref) {
    return ref.querySelectorAll('[role="tab"]');
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

function getTabIndexFromName(tabChildren, name) {
  return tabChildren.findIndex(function (tab) {
    return tab.name === name;
  });
}

function getTotalWidth(children) {
  var totalWidth = 0;
  children.forEach(function (child) {
    totalWidth += child.ref.offsetWidth;
  });
  return totalWidth;
}

function getChildrenTotalWidth(children) {
  return getTotalWidth(children);
}

function getChildrenTotalWidthUpToClickedTab(children, index) {
  var childrenUpToClickedTab = children.slice(0, index);
  return getTotalWidth(childrenUpToClickedTab);
}

function isNotSameChildren(children, prevChildren) {
  if (Array.isArray(children)) {
    return children.some(function (child, index) {
      if (child && prevChildren[index]) {
        return child.props.name !== prevChildren[index].props.name;
      }

      return false;
    });
  }

  return children.props.name !== prevChildren.props.name;
}

function getUpdatedTabsetChildren(tabsetChildren, tab, nameToUpdate) {
  return tabsetChildren.map(function (child) {
    if (child.name === nameToUpdate) {
      return tab;
    }

    return child;
  });
}

function getLeftButtonDisabledState(params) {
  var activeTabName = params.activeTabName,
      tabsetChildren = params.tabsetChildren,
      screenWidth = params.screenWidth,
      scrollLeft = params.scrollLeft;
  var activeTabIndex = getTabIndexFromName(tabsetChildren, activeTabName);
  var isFirstTabActive = activeTabIndex === 0;
  var isFirstTabVisible = scrollLeft === 0;

  if (screenWidth < 600 && isFirstTabActive) {
    return true;
  }

  if (screenWidth > 600 && isFirstTabVisible) {
    return true;
  }

  return false;
}

function getRightButtonDisabledState(params) {
  var activeTabName = params.activeTabName,
      tabsetChildren = params.tabsetChildren,
      screenWidth = params.screenWidth,
      scrollLeft = params.scrollLeft,
      maxScroll = params.maxScroll;
  var lastTabIndex = tabsetChildren.length - 1;
  var activeTabIndex = getTabIndexFromName(tabsetChildren, activeTabName);
  var isLastTabActive = lastTabIndex === activeTabIndex;
  var isLastTabVisible = scrollLeft === maxScroll;

  if (screenWidth < 600 && isLastTabActive) {
    return true;
  }

  if (screenWidth > 600 && isLastTabVisible) {
    return true;
  }

  return false;
}