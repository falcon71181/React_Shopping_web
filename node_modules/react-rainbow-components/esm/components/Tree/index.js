import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import TreeChildren from './treeChildren';
import TreeContainerUl from './styled/treeContainerUl';
import getNode from './helpers/getNode';
import useKeyNavigation from './hooks/useKeyNavigation';
import useTreeNodesAsPlainList from './hooks/useTreeNodesAsPlainList';
export default function Tree(props) {
  var data = props.data,
      onNodeExpand = props.onNodeExpand,
      onNodeCheck = props.onNodeCheck,
      onNodeSelect = props.onNodeSelect,
      selectedNode = props.selectedNode,
      className = props.className,
      style = props.style,
      id = props.id,
      ariaLabel = props.ariaLabel,
      ariaLabelledBy = props.ariaLabelledBy;
  var visibleNodes = useTreeNodesAsPlainList(data);

  var _useKeyNavigation = useKeyNavigation({
    visibleNodes: visibleNodes,
    selectedNode: selectedNode,
    onNodeSelect: onNodeSelect,
    onNodeExpand: onNodeExpand
  }),
      autoFocus = _useKeyNavigation.autoFocus,
      focusedNode = _useKeyNavigation.focusedNode,
      setFocusedNode = _useKeyNavigation.setFocusedNode,
      clearFocusedNode = _useKeyNavigation.clearFocusedNode,
      keyDownHandler = _useKeyNavigation.keyDownHandler;

  var treeData = Array.isArray(data) ? data : [];
  return React.createElement(Provider, {
    value: {
      autoFocus: autoFocus,
      focusedNode: focusedNode,
      onPrivateFocusNode: setFocusedNode,
      onPrivateBlurNode: clearFocusedNode,
      onPrivateKeyDown: keyDownHandler
    }
  }, React.createElement(TreeContainerUl, {
    className: className,
    style: style,
    id: id,
    role: "tree",
    "aria-labelledby": ariaLabelledBy,
    "aria-label": ariaLabel
  }, React.createElement(TreeChildren, {
    data: treeData,
    onNodeExpand: onNodeExpand,
    onNodeCheck: onNodeCheck,
    nodePath: [],
    selectedNode: selectedNode,
    onNodeSelect: onNodeSelect
  })));
}
Tree.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.node,
    icon: PropTypes.node,
    isExpanded: PropTypes.bool,
    isLoading: PropTypes.bool,
    isChecked: PropTypes.oneOf([true, false, 'indeterminate']),
    children: PropTypes.array
  })),
  onNodeExpand: PropTypes.func,
  onNodeCheck: PropTypes.func,
  onNodeSelect: PropTypes.func,
  selectedNode: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  ariaLabel: PropTypes.string
};
Tree.defaultProps = {
  data: [],
  onNodeExpand: function onNodeExpand() {},
  onNodeCheck: function onNodeCheck() {},
  onNodeSelect: function onNodeSelect() {},
  selectedNode: undefined,
  className: undefined,
  style: undefined,
  id: undefined,
  ariaLabelledBy: undefined,
  ariaLabel: undefined
};
Tree.getNode = getNode;