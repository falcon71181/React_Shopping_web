import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
export default function getNextFocusedNode(nodes, currentFocusedNode, dir) {
  if (nodes.length === 0) return undefined;
  var namesList = nodes.reduce(function (result, node) {
    return [].concat(_toConsumableArray(result), [node.name]);
  }, []);
  var currentIndex = namesList.indexOf(currentFocusedNode);
  var nextIndex = Math.max(0, Math.min(nodes.length, currentIndex + dir));
  return namesList[nextIndex];
}