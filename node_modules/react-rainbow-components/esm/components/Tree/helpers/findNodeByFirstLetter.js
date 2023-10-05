import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
export default function findNodeByFirstLetter(nodes, searchTerm, fromIndex) {
  var head = nodes.slice(0, fromIndex);
  var tail = nodes.slice(fromIndex + 1);
  return [].concat(_toConsumableArray(tail), _toConsumableArray(head)).find(function (node) {
    if (typeof node.label === 'string') {
      return node.label.indexOf(searchTerm.toLowerCase()) === 0;
    }

    return false;
  });
}