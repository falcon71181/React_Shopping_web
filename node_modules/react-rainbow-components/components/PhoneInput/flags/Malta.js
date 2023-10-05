"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgMalta(_ref) {
  var className = _ref.className,
      style = _ref.style;
  return _react["default"].createElement("svg", {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    className: className,
    style: style
  }, _react["default"].createElement("g", {
    fillRule: "nonzero",
    fill: "none"
  }, _react["default"].createElement("circle", {
    fill: "#F0F0F0",
    cx: 16,
    cy: 16,
    r: 16
  }), _react["default"].createElement("path", {
    d: "M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    fill: "#ACABB1",
    d: "M11.13 6.26V4.175H9.043V6.26H6.957v2.087h2.087v2.087h2.086V8.348h2.087V6.26z"
  })));
}

SvgMalta.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgMalta.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgMalta;
exports["default"] = _default;