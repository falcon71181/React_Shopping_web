import React, { useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import { TreeContext } from './context';
import TreeChildren from './treeChildren';
import ExpandCollapseButton from './expandCollapseButton';
import ItemContainerLi from './styled/itemContainerLi';
import NodeContainer from './styled/nodeContainer';
import Label from './styled/label';
import IconContainer from './styled/iconContainer';
import InputCheckbox from './styled/inputCheckbox';
import ChildrenContainerUl from './styled/childrenContainer';
import InnerContainer from './styled/innerContainer';
import getNodeLevel from './helpers/getNodeLevel';
import getTabIndex from './helpers/getTabIndex';
import getNodePath from './helpers/getNodePath';
import shouldSelectNode from './helpers/shouldSelectNode';
export default function Child(props) {
  var label = props.label,
      isExpanded = props.isExpanded,
      isLoading = props.isLoading,
      children = props.children,
      isChecked = props.isChecked,
      icon = props.icon,
      nodePath = props.nodePath,
      onNodeExpand = props.onNodeExpand,
      onNodeCheck = props.onNodeCheck,
      onNodeSelect = props.onNodeSelect,
      isSelected = props.isSelected,
      name = props.name,
      selectedNode = props.selectedNode,
      isFirstNode = props.isFirstNode;

  var _useContext = useContext(TreeContext),
      autoFocus = _useContext.autoFocus,
      focusedNode = _useContext.focusedNode,
      onPrivateFocusNode = _useContext.onPrivateFocusNode,
      onPrivateBlurNode = _useContext.onPrivateBlurNode,
      onPrivateKeyDown = _useContext.onPrivateKeyDown;

  var hasChildren = Array.isArray(children);
  var hasCheckbox = typeof isChecked === 'boolean' || isChecked === 'indeterminate';
  var hasIcon = !!icon;
  var ariaLevelValue = getNodeLevel({
    name: name
  });
  var ariaExpandedValue = hasChildren ? isExpanded : undefined;
  var ariaSelectedValue = isSelected === true ? isSelected : undefined;
  var tabIndex = getTabIndex({
    name: name,
    selectedNode: selectedNode,
    focusedNode: focusedNode,
    isFirstNode: isFirstNode,
    isSelected: isSelected
  });
  var itemRef = useRef();

  var handleNodeSelect = function handleNodeSelect(event) {
    if (shouldSelectNode(event.target, name)) {
      onNodeSelect({
        name: name,
        nodePath: nodePath
      });
    }
  };

  var handleNodeExpand = function handleNodeExpand() {
    return onNodeExpand({
      name: name,
      nodePath: nodePath
    });
  };

  var handleNodeCheck = function handleNodeCheck() {
    onNodeCheck({
      name: name,
      nodePath: nodePath
    });
  };

  useEffect(function () {
    if (autoFocus && focusedNode === name && itemRef.current) itemRef.current.focus();
  }, [autoFocus, focusedNode, name]);
  return React.createElement(ItemContainerLi, {
    id: name,
    ref: itemRef,
    "data-id": "node-element-li",
    "data-path": getNodePath(nodePath),
    icon: icon,
    hasChildren: hasChildren,
    onClick: handleNodeSelect,
    onFocus: function onFocus(event) {
      return onPrivateFocusNode(event, name);
    },
    onBlur: function onBlur(event) {
      return onPrivateBlurNode(event, name);
    },
    role: "treeitem",
    "aria-level": ariaLevelValue,
    "aria-expanded": ariaExpandedValue,
    "aria-selected": ariaSelectedValue,
    tabIndex: tabIndex,
    onKeyDown: function onKeyDown(event) {
      return onPrivateKeyDown(event, props);
    }
  }, React.createElement(NodeContainer, {
    "data-id": "node-element",
    isSelected: isSelected,
    ariaLevelValue: ariaLevelValue,
    hasChildren: hasChildren
  }, React.createElement(InnerContainer, {
    "data-id": "no-selectable-container"
  }, React.createElement(ExpandCollapseButton, {
    hasChildren: hasChildren,
    isExpanded: isExpanded === true,
    isLoading: isLoading === true,
    onClick: handleNodeExpand
  }), React.createElement(RenderIf, {
    isTrue: hasCheckbox
  }, React.createElement(InputCheckbox, {
    label: label,
    checked: isChecked,
    onChange: handleNodeCheck
  }))), React.createElement(RenderIf, {
    isTrue: hasIcon
  }, React.createElement(IconContainer, null, icon)), React.createElement(Label, {
    isSelected: isSelected,
    icon: icon
  }, label)), React.createElement(RenderIf, {
    isTrue: hasChildren && isExpanded
  }, React.createElement(ChildrenContainerUl, {
    icon: icon,
    isChecked: isChecked,
    ariaLevelValue: ariaLevelValue,
    role: "group"
  }, React.createElement(TreeChildren, {
    data: children,
    onNodeCheck: onNodeCheck,
    onNodeExpand: onNodeExpand,
    nodePath: nodePath,
    parentName: name,
    onNodeSelect: onNodeSelect,
    selectedNode: selectedNode
  }))));
}
Child.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isChecked: PropTypes.oneOf([true, false, 'indeterminate']),
  isExpanded: PropTypes.bool,
  isLoading: PropTypes.bool,
  icon: PropTypes.node,
  children: PropTypes.array,
  onNodeCheck: PropTypes.func,
  onNodeExpand: PropTypes.func,
  nodePath: PropTypes.array,
  onNodeSelect: PropTypes.func,
  isSelected: PropTypes.bool,
  name: PropTypes.string,
  selectedNode: PropTypes.string,
  isFirstNode: PropTypes.bool
};
Child.defaultProps = {
  label: undefined,
  isChecked: undefined,
  isExpanded: undefined,
  isLoading: undefined,
  children: undefined,
  icon: null,
  onNodeExpand: function onNodeExpand() {},
  onNodeCheck: function onNodeCheck() {},
  nodePath: [],
  onNodeSelect: undefined,
  isSelected: undefined,
  name: undefined,
  selectedNode: undefined,
  isFirstNode: undefined
};