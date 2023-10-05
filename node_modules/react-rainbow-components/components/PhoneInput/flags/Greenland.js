"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgGreenland(_ref) {
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
  }, _react["default"].createElement("path", {
    d: "M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16c-.696 0-16 2.087-16 2.087L0 16z",
    fill: "#F0F0F0"
  }), _react["default"].createElement("path", {
    d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16",
    fill: "#D80027"
  }), _react["default"].createElement("circle", {
    fill: "#F0F0F0",
    cx: 11.13,
    cy: 16,
    r: 7.652
  }), _react["default"].createElement("path", {
    d: "M3.478 16a7.652 7.652 0 0115.305 0",
    fill: "#D80027"
  })));
}

SvgGreenland.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgGreenland.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgGreenland;
exports["default"] = _default;