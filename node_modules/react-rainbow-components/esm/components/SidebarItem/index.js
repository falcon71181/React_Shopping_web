import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { withContext } from '../Sidebar/context';
import RenderIf from '../RenderIf';
import InternalTooltip from '../InternalTooltip';
import useDefaultTooltipConnector from '../InternalTooltip/hooks/useDefaultTooltipConnector';
import StyledLi from './styled/li';
import StyledAnchorContent from './styled/anchorContent';
import StyledButtonContent from './styled/buttonContent';
import ItemContent from './itemContent';

function SidebarItem(props) {
  var label = props.label,
      icon = props.icon,
      selectedIcon = props.selectedIcon,
      name = props.name,
      href = props.href,
      onClick = props.onClick,
      className = props.className,
      style = props.style,
      selectedItem = props.selectedItem,
      onSelect = props.onSelect,
      tooltip = props.tooltip,
      hideSelectedItemIndicator = props.hideSelectedItemIndicator;

  var _triggerRef = useRef();

  var tooltipRef = useRef();
  var isSelected = name === selectedItem;
  var currentIcon = isSelected && !!selectedIcon ? selectedIcon : icon;

  var _useDefaultTooltipCon = useDefaultTooltipConnector({
    tooltipRef: tooltipRef,
    triggerRef: function triggerRef() {
      return _triggerRef;
    }
  }),
      onMouseEnter = _useDefaultTooltipCon.onMouseEnter,
      onMouseLeave = _useDefaultTooltipCon.onMouseLeave,
      isVisible = _useDefaultTooltipCon.isVisible;

  var getAriaCurrent = function getAriaCurrent() {
    if (isSelected) {
      return 'page';
    }

    return undefined;
  };

  var handleOnClick = function handleOnClick(event) {
    onClick(event);
    onSelect(event, name);
  };

  return React.createElement(StyledLi, {
    "data-id": "sidebar-item-li",
    isSelected: isSelected,
    className: className,
    style: style,
    hideSelectedItemIndicator: hideSelectedItemIndicator
  }, React.createElement(RenderIf, {
    isTrue: href
  }, React.createElement(StyledAnchorContent, {
    "data-id": "sidebar-item-clickable-element",
    href: href,
    onClick: handleOnClick,
    "aria-current": getAriaCurrent(),
    isSelected: isSelected,
    ref: _triggerRef,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, React.createElement(ItemContent, {
    isSelected: isSelected,
    label: label,
    icon: currentIcon
  }))), React.createElement(RenderIf, {
    isTrue: !href
  }, React.createElement(StyledButtonContent, {
    "data-id": "sidebar-item-clickable-element",
    onClick: handleOnClick,
    "aria-current": getAriaCurrent(),
    isSelected: isSelected,
    ref: _triggerRef,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, React.createElement(ItemContent, {
    isSelected: isSelected,
    label: label,
    icon: currentIcon
  }))), React.createElement(RenderIf, {
    isTrue: tooltip
  }, React.createElement(InternalTooltip, {
    triggerElementRef: function triggerElementRef() {
      return _triggerRef;
    },
    isVisible: isVisible,
    preferredPosition: "right",
    ref: tooltipRef
  }, tooltip)));
}

SidebarItem.propTypes = {
  name: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.node,
  selectedIcon: PropTypes.node,
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  tooltip: PropTypes.node
};
SidebarItem.defaultProps = {
  name: undefined,
  label: undefined,
  icon: null,
  selectedIcon: null,
  href: undefined,
  onClick: function onClick() {},
  className: undefined,
  style: undefined,
  tooltip: undefined
};
export default withContext(SidebarItem);