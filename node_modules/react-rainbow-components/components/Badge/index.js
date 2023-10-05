"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Badge;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _container = _interopRequireDefault(require("./styled/container"));

var _content = _interopRequireDefault(require("./content"));

function Badge(props) {
  var className = props.className,
      style = props.style,
      label = props.label,
      title = props.title,
      children = props.children,
      variant = props.variant,
      size = props.size,
      borderRadius = props.borderRadius;

  if (children === null && label === null) {
    return null;
  }

  return _react["default"].createElement(_container["default"], {
    className: className,
    style: style,
    variant: variant,
    title: title,
    size: size,
    borderRadius: borderRadius
  }, _react["default"].createElement(_content["default"], {
    label: label
  }, children));
}

Badge.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  title: _propTypes["default"].string,
  children: _propTypes["default"].node,
  variant: _propTypes["default"].oneOf(['default', 'inverse', 'lightest', 'outline-brand', 'brand', 'warning', 'success', 'error']),
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
Badge.defaultProps = {
  label: null,
  title: undefined,
  children: null,
  variant: 'default',
  size: 'medium',
  className: undefined,
  style: undefined,
  borderRadius: 'rounded'
};