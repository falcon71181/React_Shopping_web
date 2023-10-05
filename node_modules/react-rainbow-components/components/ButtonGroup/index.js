"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ButtonGroup;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _container = _interopRequireDefault(require("./styled/container"));

function ButtonGroup(props) {
  var className = props.className,
      style = props.style,
      children = props.children,
      variant = props.variant,
      borderRadius = props.borderRadius;
  return _react["default"].createElement(_container["default"], {
    className: className,
    style: style,
    role: "group",
    variant: variant,
    borderRadius: borderRadius
  }, children);
}

ButtonGroup.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].object]),
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  variant: _propTypes["default"].oneOf(['default', 'shaded']),
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
ButtonGroup.defaultProps = {
  children: null,
  className: undefined,
  style: undefined,
  variant: 'default',
  borderRadius: 'rounded'
};