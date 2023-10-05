"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AvatarMenu;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PrimitiveMenu = _interopRequireDefault(require("../PrimitiveMenu"));

var _avatarButton = _interopRequireDefault(require("./avatarButton"));

var _excluded = ["src", "initials", "icon", "avatarSize", "initialsVariant", "title", "assistiveText", "disabled", "tabIndex", "onClick", "onFocus", "onBlur", "children"];

function AvatarMenu(props) {
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
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_PrimitiveMenu["default"], (0, _extends2["default"])({}, rest, {
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
    trigger: _avatarButton["default"]
  }), children);
}

AvatarMenu.propTypes = {
  src: _propTypes["default"].string,
  initials: _propTypes["default"].string,
  icon: _propTypes["default"].node,
  avatarSize: _propTypes["default"].oneOf(['x-small', 'small', 'medium', 'large']),
  avatarBackgroundColor: _propTypes["default"].string,
  initialsVariant: _propTypes["default"].oneOf(['default', 'inverse']),
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].object]),
  menuSize: _propTypes["default"].oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
  menuAlignment: _propTypes["default"].oneOf(['left', 'right', 'bottom', 'center', 'bottom-right', 'bottom-left']),
  isLoading: _propTypes["default"].bool,
  title: _propTypes["default"].string,
  assistiveText: _propTypes["default"].string,
  tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  disabled: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  id: _propTypes["default"].string
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