import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from './closeIcon';
import RenderIf from '../RenderIf';
import Icon from './icons';
import Title from './title';
import Description from './description';
import StyledContainer from './styled/container';
import StyledAnchor from './styled/anchor';
import StyledCloseButton from './styled/closeButton';
export default function Notification(props) {
  var className = props.className,
      style = props.style,
      icon = props.icon,
      title = props.title,
      description = props.description,
      onRequestClose = props.onRequestClose,
      hideCloseButton = props.hideCloseButton;
  return React.createElement(StyledContainer, {
    className: className,
    style: style
  }, React.createElement(StyledAnchor, null, React.createElement(RenderIf, {
    isTrue: icon
  }, React.createElement(Icon, {
    icon: icon
  })), React.createElement("span", null, React.createElement(RenderIf, {
    isTrue: title
  }, React.createElement(Title, {
    text: title
  })), React.createElement(RenderIf, {
    isTrue: description
  }, React.createElement(Description, {
    text: description
  })))), React.createElement(RenderIf, {
    isTrue: !hideCloseButton
  }, React.createElement(StyledCloseButton, {
    icon: React.createElement(CloseIcon, null),
    size: "small",
    title: "Close",
    onClick: onRequestClose
  })));
}
Notification.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.oneOf(['info', 'success', 'warning', 'error'])]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onRequestClose: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  hideCloseButton: PropTypes.bool
};
Notification.defaultProps = {
  icon: null,
  title: null,
  description: null,
  onRequestClose: function onRequestClose() {},
  className: undefined,
  style: undefined,
  hideCloseButton: false
};