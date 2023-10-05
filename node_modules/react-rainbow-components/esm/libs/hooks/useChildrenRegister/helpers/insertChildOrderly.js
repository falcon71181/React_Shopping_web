import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _toArray from "@babel/runtime/helpers/toArray";

var getRefIndex = function getRefIndex(nodes, ref) {
  return nodes.indexOf(ref);
};

var sortChildren = function sortChildren(childrenRefs, nodes) {
  var _childrenRefs = _toArray(childrenRefs),
      newChildrenRefs = _childrenRefs.slice(0);

  newChildrenRefs.sort(function (refA, refB) {
    return getRefIndex(nodes, refA.ref) - getRefIndex(nodes, refB.ref);
  });
  return newChildrenRefs;
};

var insertChildOrderly = function insertChildOrderly(_ref) {
  var children = _ref.children,
      child = _ref.child,
      nodes = _ref.nodes;
  return sortChildren([].concat(_toConsumableArray(children), [child]), nodes);
};

export default insertChildOrderly;