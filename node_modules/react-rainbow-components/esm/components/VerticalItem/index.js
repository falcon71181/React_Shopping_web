import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import { Consumer as NavigationConsumer } from '../VerticalNavigation/context';
import { Consumer as SectionConsumer } from '../VerticalSection/context';
import { Consumer as SectionOverflowConsumer } from '../VerticalSectionOverflow/context';
import RenderIf from '../RenderIf';
import StyledLi from './styled/li';
import StyledAnchor from './styled/anchor';
import StyledIcon from './styled/icon';
import StyledButton from './styled/button';
import ItemContent from './itemContent';

function Item(props) {
  var label = props.label,
      icon = props.icon,
      name = props.name,
      href = props.href,
      onClick = props.onClick,
      notification = props.notification,
      className = props.className,
      style = props.style,
      selectedItem = props.selectedItem,
      onSelect = props.onSelect,
      entityHeaderId = props.entityHeaderId,
      isExpanded = props.isExpanded;
  var isSelected = name === selectedItem;

  var getAriaCurrent = function getAriaCurrent() {
    if (isSelected) {
      return 'page';
    }

    return undefined;
  };

  var hanldeOnClick = function hanldeOnClick(event) {
    onClick(event);
    onSelect(event, name);
  };

  var resolveTabIndex = function resolveTabIndex() {
    if (isExpanded === false) {
      return -1;
    }

    return 0;
  };

  return React.createElement(StyledLi, {
    className: className,
    style: style,
    "data-active": isSelected,
    isSelected: isSelected,
    "data-id": "vertical-item"
  }, React.createElement(RenderIf, {
    isTrue: href
  }, React.createElement(StyledAnchor, {
    "data-id": "vertical-item-clickable-element",
    className: "rainbow-vertical-item_action",
    href: href,
    onClick: hanldeOnClick,
    "aria-describedby": entityHeaderId,
    "aria-current": getAriaCurrent(),
    tabIndex: resolveTabIndex(),
    isSelected: isSelected
  }, React.createElement(RenderIf, {
    isTrue: icon
  }, React.createElement(StyledIcon, null, icon)), React.createElement(ItemContent, {
    label: label,
    notification: notification
  }))), React.createElement(RenderIf, {
    isTrue: !href
  }, React.createElement(StyledButton, {
    "data-id": "vertical-item-clickable-element",
    className: "rainbow-vertical-item_action",
    onClick: hanldeOnClick,
    "aria-describedby": entityHeaderId,
    "aria-current": getAriaCurrent(),
    tabIndex: resolveTabIndex(),
    isSelected: isSelected
  }, React.createElement(RenderIf, {
    isTrue: icon
  }, React.createElement(StyledIcon, null, icon)), React.createElement(ItemContent, {
    label: label,
    notification: notification
  }))));
}

export default function VerticalItem(props) {
  return React.createElement(NavigationConsumer, null, function (context) {
    return React.createElement(SectionConsumer, null, function (entityHeaderId) {
      return React.createElement(SectionOverflowConsumer, null, function (isExpanded) {
        return React.createElement(Item, _extends({}, props, context, {
          entityHeaderId: entityHeaderId,
          isExpanded: isExpanded
        }));
      });
    });
  });
}
VerticalItem.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  icon: PropTypes.node,
  href: PropTypes.string,
  notification: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
};
VerticalItem.defaultProps = {
  label: '',
  name: undefined,
  icon: undefined,
  href: undefined,
  onClick: function onClick() {},
  notification: null,
  className: undefined,
  style: undefined
};