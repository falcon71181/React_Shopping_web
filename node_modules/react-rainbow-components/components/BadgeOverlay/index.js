"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BadgeOverlay;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _container = _interopRequireDefault(require("./styled/container"));

var _badge = _interopRequireDefault(require("./styled/badge"));

var _utils = require("../../libs/utils");

function BadgeOverlay(props) {
  var className = props.className,
      style = props.style,
      value = props.value,
      overlap = props.overlap,
      children = props.children,
      variant = props.variant,
      isHidden = props.isHidden,
      position = props.position;

  if (children === null) {
    return null;
  }

  return _react["default"].createElement(_container["default"], {
    className: className,
    style: style,
    overlap: overlap
  }, children, _react["default"].createElement(_badge["default"], {
    variant: variant,
    position: position,
    overlap: overlap,
    value: value,
    isHidden: isHidden
  }, (0, _utils.getSuffixSI)(value)));
}

BadgeOverlay.propTypes = {
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  overlap: _propTypes["default"].oneOf(['circle', 'rectangle']),
  children: _propTypes["default"].node,
  variant: _propTypes["default"].oneOf(['brand', 'success', 'error', 'warning']),
  isHidden: _propTypes["default"].bool,
  position: _propTypes["default"].oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
BadgeOverlay.defaultProps = {
  value: undefined,
  overlap: 'rectangle',
  children: null,
  variant: 'error',
  isHidden: false,
  position: 'top-right',
  className: undefined,
  style: undefined
};