import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "style", "size", "assistiveText", "backgroundColor"];
import React from 'react';
import PropTypes from 'prop-types';
import AvatarContent from './avatarContent';
import AssistiveText from '../AssistiveText';
import StyledContainer from './styled/container';
export default function Avatar(props) {
  var className = props.className,
      style = props.style,
      size = props.size,
      assistiveText = props.assistiveText,
      backgroundColor = props.backgroundColor,
      rest = _objectWithoutProperties(props, _excluded);

  return React.createElement(StyledContainer, {
    className: className,
    style: style,
    size: size,
    backgroundColor: backgroundColor
  }, React.createElement(AvatarContent, _extends({}, rest, {
    assistiveText: assistiveText
  })), React.createElement(AssistiveText, {
    text: assistiveText
  }));
}
Avatar.propTypes = {
  src: PropTypes.string,
  initials: PropTypes.string,
  icon: PropTypes.node,
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
  initialsVariant: PropTypes.oneOf(['default', 'inverse']),
  title: PropTypes.string,
  assistiveText: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  backgroundColor: PropTypes.string
};
Avatar.defaultProps = {
  src: undefined,
  initials: undefined,
  icon: null,
  size: 'medium',
  initialsVariant: 'default',
  title: undefined,
  assistiveText: undefined,
  className: undefined,
  style: undefined,
  backgroundColor: ''
};