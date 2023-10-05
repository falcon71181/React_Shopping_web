import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import getNodeName from './getNodeName';
import getNodeLevel from './getNodeLevel';
export default function buildPlainListFromTree(tree, parentName, parentPath) {
  if (!Array.isArray(tree)) return [];
  return tree.reduce(function (result, node, index) {
    var nodeName = getNodeName({
      parentName: parentName,
      index: index
    });
    var level = getNodeLevel({
      name: nodeName
    });
    var nodePath = parentPath ? [].concat(_toConsumableArray(parentPath), [index]) : [index];
    var nodeLabel = typeof node.label === 'string' ? node.label.toLowerCase() : node.label;

    if (node.isExpanded) {
      return [].concat(_toConsumableArray(result), [{
        name: nodeName,
        label: nodeLabel,
        level: level,
        nodePath: nodePath,
        isExpanded: node.isExpanded,
        hasChildren: node.children && node.children.length > 0
      }], _toConsumableArray(buildPlainListFromTree(node.children, nodeName, nodePath)));
    }

    return [].concat(_toConsumableArray(result), [{
      name: nodeName,
      label: nodeLabel,
      level: level,
      nodePath: nodePath,
      isExpanded: node.isExpanded,
      hasChildren: node.children && node.children.length > 0
    }]);
  }, []);
}