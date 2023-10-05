import _toArray from "@babel/runtime/helpers/toArray";

function getRefIndex(nodes, ref) {
  return nodes.indexOf(ref);
}

function sortChildren(children, nodes) {
  var _children = _toArray(children),
      newChildren = _children.slice(0);

  newChildren.sort(function (childA, childB) {
    return getRefIndex(nodes, childA.ref) - getRefIndex(nodes, childB.ref);
  });
  return newChildren;
}

export default function insertChildOrderly(children, child, nodes) {
  var newChildren = children.concat([child]);
  var sortedChildren = sortChildren(newChildren, nodes);
  return sortedChildren;
}