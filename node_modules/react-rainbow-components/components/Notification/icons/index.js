"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Icon;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _infoIcon = _interopRequireDefault(require("./infoIcon"));

var _errorIcon = _interopRequireDefault(require("./errorIcon"));

var _successIcon = _interopRequireDefault(require("./successIcon"));

var _warningIcon = _interopRequireDefault(require("./warningIcon"));

var _iconContainer = _interopRequireDefault(require("../styled/iconContainer"));

var iconMap = {
  info: function info() {
    return _react["default"].createElement(_infoIcon["default"], null);
  },
  error: function error() {
    return _react["default"].createElement(_errorIcon["default"], null);
  },
  warning: function warning() {
    return _react["default"].createElement(_warningIcon["default"], null);
  },
  success: function success() {
    return _react["default"].createElement(_successIcon["default"], null);
  }
};

function VariantIcon(_ref) {
  var icon = _ref.icon;

  if (iconMap[icon]) {
    return _react["default"].createElement(_iconContainer["default"], {
      icon: icon
    }, iconMap[icon]());
  }

  return null;
}

function Icon(_ref2) {
  var icon = _ref2.icon;

  if (typeof icon === 'string') {
    return _react["default"].createElement(VariantIcon, {
      icon: icon
    });
  }

  return _react["default"].createElement(_iconContainer["default"], null, icon);
}

Icon.propTypes = {
  icon: _propTypes["default"].node
};
Icon.defaultProps = {
  icon: null
};