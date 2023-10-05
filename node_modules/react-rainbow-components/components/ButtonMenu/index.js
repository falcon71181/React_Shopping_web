"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ButtonMenu;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PrimitiveMenu = _interopRequireDefault(require("../PrimitiveMenu"));

var _buttonTrigger = _interopRequireDefault(require("./buttonTrigger"));

var _excluded = ["label", "icon", "iconPosition", "buttonSize", "title", "assistiveText", "buttonVariant", "buttonShaded", "disabled", "tabIndex", "onClick", "onFocus", "onBlur", "children"];

function ButtonMenu(props) {
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
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_PrimitiveMenu["default"], (0, _extends2["default"])({}, rest, {
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
    trigger: _buttonTrigger["default"]
  }), children);
}

ButtonMenu.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  icon: _propTypes["default"].node,
  iconPosition: _propTypes["default"].oneOf(['left', 'right']),
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].object]),
  buttonVariant: _propTypes["default"].oneOf(['base', 'brand', 'success', 'destructive', 'neutral', 'outline-brand', 'border', 'border-filled', 'inverse', 'border-inverse']),
  buttonSize: _propTypes["default"].oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
  buttonShaded: _propTypes["default"].bool,
  menuSize: _propTypes["default"].oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
  menuAlignment: _propTypes["default"].oneOf(['left', 'right', 'bottom', 'center', 'bottom-right', 'bottom-left']),
  disabled: _propTypes["default"].bool,
  isLoading: _propTypes["default"].bool,
  title: _propTypes["default"].string,
  assistiveText: _propTypes["default"].string,
  tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  onClick: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  id: _propTypes["default"].string,
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
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