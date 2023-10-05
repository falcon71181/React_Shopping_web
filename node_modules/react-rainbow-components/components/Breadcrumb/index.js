"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Breadcrumb;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _anchor = _interopRequireDefault(require("./styled/anchor"));

var _button = _interopRequireDefault(require("./styled/button"));

var _li = _interopRequireDefault(require("./styled/li"));

function Breadcrumb(props) {
  var href = props.href,
      label = props.label,
      onClick = props.onClick,
      disabled = props.disabled,
      className = props.className,
      style = props.style;
  return _react["default"].createElement(_li["default"], {
    className: className,
    style: style
  }, _react["default"].createElement(_RenderIf["default"], {
    isTrue: href
  }, _react["default"].createElement(_anchor["default"], {
    disabled: disabled,
    href: href,
    "aria-disabled": !!disabled
  }, label)), _react["default"].createElement(_RenderIf["default"], {
    isTrue: onClick && !href
  }, _react["default"].createElement(_button["default"], {
    disabled: disabled,
    onClick: onClick,
    "aria-disabled": !!disabled
  }, label)));
}

Breadcrumb.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  href: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  disabled: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
Breadcrumb.defaultProps = {
  label: undefined,
  href: undefined,
  onClick: function onClick() {},
  disabled: false,
  className: undefined,
  style: undefined
};