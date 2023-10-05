import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["src", "initials", "icon", "avatarSize", "initialsVariant", "title", "assistiveText", "disabled", "tabIndex", "onClick", "onFocus", "onBlur", "children"];
import React from 'react';
import PropTypes from 'prop-types';
import PrimitiveMenu from '../PrimitiveMenu';
import AvatarButton from './avatarButton';
export default function AvatarMenu(props) {
  var src = props.src,
      initials = props.initials,
      icon = props.icon,
      avatarSize = props.avatarSize,
      initialsVariant = props.initialsVariant,
      title = props.title,
      assistiveText = props.assistiveText,
      disabled = props.disabled,
      tabIndex = props.tabIndex,
      onClick = props.onClick,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded);

  return React.createElement(PrimitiveMenu, _extends({}, rest, {
    src: src,
    icon: icon,
    initials: initials,
    disabled: disabled,
    tabIndex: tabIndex,
    avatarSize: avatarSize,
    initialsVariant: initialsVariant,
    title: title,
    assistiveText: assistiveText,
    onClick: onClick,
    onFocus: onFocus,
    onBlur: onBlur,
    trigger: AvatarButton
  }), children);
}
AvatarMenu.propTypes = {
  src: PropTypes.string,
  initials: PropTypes.string,
  icon: PropTypes.node,
  avatarSize: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
  avatarBackgroundColor: PropTypes.string,
  initialsVariant: PropTypes.oneOf(['default', 'inverse']),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
  menuSize: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
  menuAlignment: PropTypes.oneOf(['left', 'right', 'bottom', 'center', 'bottom-right', 'bottom-left']),
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  assistiveText: PropTypes.string,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string
};
AvatarMenu.defaultProps = {
  src: undefined,
  initials: undefined,
  icon: null,
  avatarSize: 'medium',
  avatarBackgroundColor: '',
  initialsVariant: 'default',
  title: undefined,
  assistiveText: undefined,
  className: undefined,
  style: undefined,
  children: null,
  menuSize: 'xx-small',
  menuAlignment: 'left',
  isLoading: false,
  id: undefined,
  disabled: false,
  tabIndex: undefined,
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {}
};