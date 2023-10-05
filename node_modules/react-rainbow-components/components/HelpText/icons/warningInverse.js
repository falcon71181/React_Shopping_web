"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _hooks = require("../../../libs/hooks");

function WarningInverseIcon(_ref) {
  var className = _ref.className,
      style = _ref.style;
  var color = (0, _hooks.useTheme)().rainbow.palette.warning.main;
  return _react["default"].createElement("svg", {
    width: 23,
    height: 21,
    viewBox: "0 0 23 21",
    className: className,
    style: style
  }, _react["default"].createElement("path", {
    fill: color,
    d: "M11.5.5c1.333 0 2.541.712 3.196 1.843l7.31 12.638c.322.555.494 1.185.494 1.838a3.685 3.685 0 01-3.689 3.681H4.19A3.685 3.685 0 01.5 16.819c0-.561.127-1.106.376-1.618l.117-.22L8.304 2.343a3.695 3.695 0 012.96-1.835zm0 1.055l-.182.006c-.88.06-1.662.556-2.099 1.31L1.917 15.49l-.099.186a2.629 2.629 0 002.371 3.768H18.81a2.629 2.629 0 002.632-2.626c0-.467-.122-.915-.351-1.31L13.78 2.87a2.63 2.63 0 00-2.281-1.316zm.057 13.86A.793.793 0 1111.556 17a.793.793 0 01.001-1.585zM11.545 7a1.048 1.048 0 011.041 1.139l-.417 5.158a.627.627 0 01-1.248 0l-.417-5.158A1.046 1.046 0 0111.545 7z"
  }));
}

WarningInverseIcon.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
WarningInverseIcon.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = WarningInverseIcon;
exports["default"] = _default;