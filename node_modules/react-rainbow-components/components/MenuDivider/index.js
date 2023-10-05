"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MenuDivider;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _divider = _interopRequireDefault(require("./styled/divider"));

function MenuDivider(props) {
  var variant = props.variant,
      className = props.className,
      style = props.style;
  return _react["default"].createElement(_divider["default"], {
    className: className,
    style: style,
    variant: variant,
    role: "separator"
  });
}

MenuDivider.propTypes = {
  variant: _propTypes["default"].oneOf(['default', 'space']),
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
MenuDivider.defaultProps = {
  variant: 'default',
  className: undefined,
  style: undefined
};