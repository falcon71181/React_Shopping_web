import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["label", "icon", "iconPosition", "buttonSize", "title", "assistiveText", "buttonVariant", "buttonShaded", "disabled", "tabIndex", "onClick", "onFocus", "onBlur", "children"];
import React from 'react';
import PropTypes from 'prop-types';
import PrimitiveMenu from '../PrimitiveMenu';
import ButtonTrigger from './buttonTrigger';
export default function ButtonMenu(props) {
  var label = props.label,
      icon = props.icon,
      iconPosition = props.iconPosition,
      buttonSize = props.buttonSize,
      title = props.title,
      assistiveText = props.assistiveText,
      buttonVariant = props.buttonVariant,
      buttonShaded = props.buttonShaded,
      disabled = props.disabled,
      tabIndex = props.tabIndex,
      onClick = props.onClick,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded);

  return React.createElement(PrimitiveMenu, _extends({}, rest, {
    label: label,
    icon: icon,
    iconPosition: iconPosition,
    size: buttonSize,
    assistiveText: assistiveText,
    disabled: disabled,
    tabIndex: tabIndex,
    variant: buttonVariant,
    shaded: buttonShaded,
    title: title,
    onClick: onClick,
    onFocus: onFocus,
    onBlur: onBlur,
    trigger: ButtonTrigger
  }), children);
}
ButtonMenu.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
  buttonVariant: PropTypes.oneOf(['base', 'brand', 'success', 'destructive', 'neutral', 'outline-brand', 'border', 'border-filled', 'inverse', 'border-inverse']),
  buttonSize: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
  buttonShaded: PropTypes.bool,
  menuSize: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
  menuAlignment: PropTypes.oneOf(['left', 'right', 'bottom', 'center', 'bottom-right', 'bottom-left']),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  assistiveText: PropTypes.string,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string,
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
ButtonMenu.defaultProps = {
  label: undefined,
  icon: null,
  iconPosition: 'left',
  children: null,
  buttonVariant: 'border-filled',
  buttonSize: 'medium',
  buttonShaded: false,
  menuSize: 'xx-small',
  menuAlignment: 'left',
  disabled: false,
  isLoading: false,
  tabIndex: undefined,
  title: undefined,
  assistiveText: undefined,
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  className: undefined,
  style: undefined,
  id: undefined,
  borderRadius: 'rounded'
};