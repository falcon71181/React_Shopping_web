"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Content;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _buttonContent = _interopRequireDefault(require("./buttonContent"));

var _spinner = _interopRequireDefault(require("./styled/spinner"));

var _content = _interopRequireDefault(require("./styled/content"));

var variantMap = {
  base: 'base',
  neutral: 'base',
  brand: 'inverse',
  destructive: 'inverse',
  success: 'inverse',
  inverse: 'inverse',
  'outline-brand': 'brand',
  'border-inverse': 'inverse',
  'border-filled': 'base'
};
var spinnerMap = {
  small: 'x-small',
  medium: 'small',
  large: 'medium'
};

function Content(_ref) {
  var label = _ref.label,
      children = _ref.children,
      variant = _ref.variant,
      isLoading = _ref.isLoading,
      size = _ref.size;

  if (isLoading) {
    return _react["default"].createElement(_content["default"], null, _react["default"].createElement(_buttonContent["default"], {
      label: label
    }, children), _react["default"].createElement(_spinner["default"], {
      isVisible: isLoading,
      variant: variantMap[variant],
      size: spinnerMap[size]
    }));
  }

  return _react["default"].createElement(_buttonContent["default"], {
    label: label
  }, children);
}

Content.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  children: _propTypes["default"].node,
  variant: _propTypes["default"].string,
  isLoading: _propTypes["default"].bool,
  size: _propTypes["default"].string
};
Content.defaultProps = {
  label: undefined,
  children: null,
  variant: 'neutral',
  isLoading: false,
  size: 'medium'
};