"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgCuracao(_ref) {
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
    fill: "#FFDA44",
    cx: 16,
    cy: 16,
    r: 16
  }), _react["default"].createElement("g", {
    fill: "#0052B4"
  }, _react["default"].createElement("path", {
    d: "M16 32c5.25 0 9.91-2.529 12.827-6.434H3.173C6.091 29.47 10.75 32 16 32zM32 16c0-8.837-7.163-16-16-16S0 7.163 0 16c0 1.892.33 3.707.932 5.392h30.136c.603-1.685.932-3.5.932-5.392z"
  })), _react["default"].createElement("g", {
    fill: "#F0F0F0"
  }, _react["default"].createElement("path", {
    d: "M10.951 10.261l.864 2.657h2.794l-2.26 1.643.863 2.657-2.26-1.642-2.26 1.642.862-2.657-2.26-1.643h2.794zM6.153 7.479l.518 1.594h1.677l-1.356.985.518 1.595-1.357-.986-1.356.986.518-1.595-1.356-.985h1.676z"
  }))));
}

SvgCuracao.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgCuracao.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgCuracao;
exports["default"] = _default;