"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgBrunei(_ref) {
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
    r: 15.997
  }), _react["default"].createElement("path", {
    d: "M2.146 8.001a16.008 16.008 0 00-1.61 3.89L27.29 27.337a16.011 16.011 0 002.564-3.339L2.146 8.001z",
    fill: "#000"
  }), _react["default"].createElement("g", {
    fill: "#FFDA44"
  }, _react["default"].createElement("path", {
    d: "M23.998 2.146C17.598-1.55 9.705-.318 4.71 4.662L31.463 20.11C33.28 13.292 30.4 5.84 23.998 2.146zM8.001 29.854c6.4 3.695 14.294 2.464 19.289-2.517L.536 11.89C-1.279 18.707 1.6 26.158 8.001 29.854z"
  })), _react["default"].createElement("g", {
    fill: "#D80027"
  }, _react["default"].createElement("path", {
    d: "M20.52 14.26a4.521 4.521 0 11-8.498-2.15 5.564 5.564 0 107.955 0 4.5 4.5 0 01.544 2.15z"
  }), _react["default"].createElement("path", {
    d: "M14.957 9.044h2.086v10.433h-2.086z"
  }), _react["default"].createElement("path", {
    d: "M19.477 11.13h-6.955c0 .481.418.87.899.87h-.03c0 .48.39.87.87.87 0 .48.39.87.87.87h1.738c.48 0 .87-.39.87-.87.48 0 .87-.39.87-.87h-.03c.48 0 .898-.389.898-.87zM11.131 20.173h9.738v2.087h-9.738z"
  }), _react["default"].createElement("path", {
    d: "M18.087 20.868h4.173v2.087h-4.173zM9.74 20.868h4.172v2.087H9.74z"
  }))));
}

SvgBrunei.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgBrunei.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgBrunei;
exports["default"] = _default;