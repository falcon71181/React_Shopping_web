"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Notification;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _closeIcon = _interopRequireDefault(require("./closeIcon"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _icons = _interopRequireDefault(require("./icons"));

var _title = _interopRequireDefault(require("./title"));

var _description = _interopRequireDefault(require("./description"));

var _container = _interopRequireDefault(require("./styled/container"));

var _anchor = _interopRequireDefault(require("./styled/anchor"));

var _closeButton = _interopRequireDefault(require("./styled/closeButton"));

function Notification(props) {
  var className = props.className,
      style = props.style,
      icon = props.icon,
      title = props.title,
      description = props.description,
      onRequestClose = props.onRequestClose,
      hideCloseButton = props.hideCloseButton;
  return _react["default"].createElement(_container["default"], {
    className: className,
    style: style
  }, _react["default"].createElement(_anchor["default"], null, _react["default"].createElement(_RenderIf["default"], {
    isTrue: icon
  }, _react["default"].createElement(_icons["default"], {
    icon: icon
  })), _react["default"].createElement("span", null, _react["default"].createElement(_RenderIf["default"], {
    isTrue: title
  }, _react["default"].createElement(_title["default"], {
    text: title
  })), _react["default"].createElement(_RenderIf["default"], {
    isTrue: description
  }, _react["default"].createElement(_description["default"], {
    text: description
  })))), _react["default"].createElement(_RenderIf["default"], {
    isTrue: !hideCloseButton
  }, _react["default"].createElement(_closeButton["default"], {
    icon: _react["default"].createElement(_closeIcon["default"], null),
    size: "small",
    title: "Close",
    onClick: onRequestClose
  })));
}

Notification.propTypes = {
  icon: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].oneOf(['info', 'success', 'warning', 'error'])]),
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  description: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  onRequestClose: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  hideCloseButton: _propTypes["default"].bool
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