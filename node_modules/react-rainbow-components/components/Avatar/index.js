"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Avatar;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _avatarContent = _interopRequireDefault(require("./avatarContent"));

var _AssistiveText = _interopRequireDefault(require("../AssistiveText"));

var _container = _interopRequireDefault(require("./styled/container"));

var _excluded = ["className", "style", "size", "assistiveText", "backgroundColor"];

function Avatar(props) {
  var className = props.className,
      style = props.style,
      size = props.size,
      assistiveText = props.assistiveText,
      backgroundColor = props.backgroundColor,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_container["default"], {
    className: className,
    style: style,
    size: size,
    backgroundColor: backgroundColor
  }, _react["default"].createElement(_avatarContent["default"], (0, _extends2["default"])({}, rest, {
    assistiveText: assistiveText
  })), _react["default"].createElement(_AssistiveText["default"], {
    text: assistiveText
  }));
}

Avatar.propTypes = {
  src: _propTypes["default"].string,
  initials: _propTypes["default"].string,
  icon: _propTypes["default"].node,
  size: _propTypes["default"].oneOf(['x-small', 'small', 'medium', 'large']),
  initialsVariant: _propTypes["default"].oneOf(['default', 'inverse']),
  title: _propTypes["default"].string,
  assistiveText: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  backgroundColor: _propTypes["default"].string
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