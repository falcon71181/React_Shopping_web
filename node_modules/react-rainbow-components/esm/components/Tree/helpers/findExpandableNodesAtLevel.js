import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
export default function findExpandableNodesAtLevel(nodes, level) {
  return nodes.reduce(function (list, node) {
    if (node.hasChildren && !node.isExpanded && node.level === level) {
      return [].concat(_toConsumableArray(list), [node]);
    }

    return list;
  }, []);
}