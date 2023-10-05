"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgSouthAfrica(_ref) {
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
    cx: 16.031,
    cy: 15.969,
    r: 15.969
  }), _react["default"].createElement("path", {
    d: "M4.74 27.26c-6.237-6.236-6.237-16.347 0-22.583l9.208 11.292L4.74 27.26z",
    fill: "#000"
  }), _react["default"].createElement("path", {
    d: "M13.948 15.969L2.18 8.016a15.914 15.914 0 00-.963 1.982l5.958 5.97-5.958 5.972c.277.685.598 1.347.963 1.98l11.768-7.951z",
    fill: "#FFDA44"
  }), _react["default"].createElement("path", {
    d: "M31.865 13.886H13.948L4.739 4.677a16.03 16.03 0 00-2.559 3.34l7.937 7.952L2.18 23.92a16.03 16.03 0 002.56 3.34l9.208-9.208h17.917a16.127 16.127 0 000-4.166z",
    fill: "#6DA544"
  }), _react["default"].createElement("path", {
    d: "M6.309 28.636a15.898 15.898 0 009.722 3.302c7.378 0 13.586-5.004 15.419-11.803H14.81L6.31 28.636z",
    fill: "#0052B4"
  }), _react["default"].createElement("path", {
    d: "M31.45 11.803C29.617 5.004 23.41 0 16.03 0c-3.659 0-7.03 1.231-9.722 3.301l8.502 8.502H31.45z",
    fill: "#D80027"
  })));
}

SvgSouthAfrica.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgSouthAfrica.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgSouthAfrica;
exports["default"] = _default;