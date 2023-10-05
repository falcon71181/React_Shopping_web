import _toArray from "@babel/runtime/helpers/toArray";
export function getChildTabNodes(ref) {
  if (ref) {
    return ref.querySelectorAll('[role="tab"]');
  }

  return [];
}

function getRefIndex(nodes, ref) {
  return nodes.indexOf(ref.current);
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