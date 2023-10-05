import _extends from "@babel/runtime/helpers/extends";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import React from 'react';
import PropTypes from 'prop-types';
import Child from './child';
import getNodeName from './helpers/getNodeName';
export default function TreeChildren(props) {
  var data = props.data,
      onNodeCheck = props.onNodeCheck,
      onNodeExpand = props.onNodeExpand,
      nodePath = props.nodePath,
      parentName = props.parentName,
      selectedNode = props.selectedNode,
      onNodeSelect = props.onNodeSelect;
  return data.map(function (nodeProps, index) {
    var nodeName = getNodeName({
      parentName: parentName,
      index: index
    });
    var isSelected = selectedNode === nodeName;
    var isFirstNode = !parentName && index === 0;
    return React.createElement(Child, _extends({}, nodeProps, {
      key: nodeName,
      onNodeCheck: onNodeCheck,
      onNodeExpand: onNodeExpand,
      nodePath: [].concat(_toConsumableArray(nodePath), [index]),
      isSelected: isSelected,
      name: nodeName,
      onNodeSelect: onNodeSelect,
      selectedNode: selectedNode,
      isFirstNode: isFirstNode
    }));
  });
}
TreeChildren.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.node,
    icon: PropTypes.node,
    isExpanded: PropTypes.bool,
    isLoading: PropTypes.bool,
    isChecked: PropTypes.oneOf([true, false, 'indeterminate']),
    children: PropTypes.array
  })),
  onNodeCheck: PropTypes.func,
  onNodeCollapse: PropTypes.func,
  parentName: PropTypes.string,
  nodePath: PropTypes.array,
  onNodeSelect: PropTypes.func,
  selectedNode: PropTypes.string
};
TreeChildren.defaultProps = {
  data: [],
  onNodeCheck: function onNodeCheck() {},
  onNodeExpand: function onNodeExpand() {},
  onNodeSelect: function onNodeSelect() {},
  parentName: undefined,
  nodePath: undefined,
  selectedNode: undefined
};