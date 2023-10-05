import _toArray from "@babel/runtime/helpers/toArray";
export function getItemIndex(children, id) {
  return children.findIndex(function (child) {
    return child.indicatorID === id;
  });
}
export function getChildTabNodes(ref) {
  if (ref) {
    return ref.querySelectorAll('[role="tabpanel"]');
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
export function getCarouselCardContainerStyles(ref) {
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