import _toArray from "@babel/runtime/helpers/toArray";
export function getChildTabNodes(ref) {
  if (ref) {
    return ref.querySelectorAll('[role="tab"]');
  }

  return [];
}

function getRefIndex(nodes, ref) {
  return nodes.indexOf(ref);
}

function sortChildren(childrenRefs, nodes) {
  var _childrenRefs = _toArray(childrenRefs),
      newChildrenRefs = _childrenRefs.slice(0);

  newChildrenRefs.sort(function (refA, refB) {
    return getRefIndex(nodes, refA.ref) - getRefIndex(nodes, refB.ref);
  });
  return newChildrenRefs;
}

export function insertChildOrderly(childrenRefs, childRef, nodes) {
  var newChildrenRefs = childrenRefs.concat([childRef]);
  return sortChildren(newChildrenRefs, nodes);
}
export function getTabIndexFromName(tabChildren, name) {
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

export function getChildrenTotalWidth(children) {
  return getTotalWidth(children);
}
export function getChildrenTotalWidthUpToClickedTab(children, index) {
  var childrenUpToClickedTab = children.slice(0, index);
  return getTotalWidth(childrenUpToClickedTab);
}
export function isNotSameChildren(children, prevChildren) {
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
export function getUpdatedTabsetChildren(tabsetChildren, tab, nameToUpdate) {
  return tabsetChildren.map(function (child) {
    if (child.name === nameToUpdate) {
      return tab;
    }

    return child;
  });
}
export function getLeftButtonDisabledState(params) {
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
export function getRightButtonDisabledState(params) {
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