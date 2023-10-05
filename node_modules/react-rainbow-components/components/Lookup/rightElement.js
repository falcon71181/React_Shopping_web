"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RightElement;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ButtonIcon = _interopRequireDefault(require("../ButtonIcon"));

var _closeIcon = _interopRequireDefault(require("./styled/closeIcon"));

var _closeButton = _interopRequireDefault(require("./styled/closeButton"));

var _inputIcon = _interopRequireDefault(require("./styled/inputIcon"));

function RightElement(_ref) {
  var showCloseButton = _ref.showCloseButton,
      onClear = _ref.onClear,
      icon = _ref.icon,
      error = _ref.error;

  if (showCloseButton) {
    return _react["default"].createElement(_closeButton["default"], null, _react["default"].createElement(_ButtonIcon["default"], {
      assistiveText: "close",
      size: "small",
      title: "close",
      tabIndex: -1,
      icon: _react["default"].createElement(_closeIcon["default"], null),
      onClick: onClear
    }));
  }

  return _react["default"].createElement(_inputIcon["default"], {
    error: error
  }, icon);
}

RightElement.propTypes = {
  icon: _propTypes["default"].node,
  showCloseButton: _propTypes["default"].bool,
  onClear: _propTypes["default"].func,
  error: _propTypes["default"].node
};
RightElement.defaultProps = {
  icon: undefined,
  showCloseButton: false,
  error: null,
  onClear: function onClear() {}
};