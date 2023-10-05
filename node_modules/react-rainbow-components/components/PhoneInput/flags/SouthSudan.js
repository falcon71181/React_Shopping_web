"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgSouthSudan(_ref) {
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
    d: "M30.754 9.778C28.336 4.033 22.655 0 16.031 0c-4.41 0-8.401 1.788-11.29 4.678l3.998 5.1h22.015z",
    fill: "#000"
  }), _react["default"].createElement("path", {
    d: "M8.784 22.102L4.74 27.26a15.917 15.917 0 0011.291 4.678c6.646 0 12.343-4.06 14.748-9.836H8.784z",
    fill: "#496E2D"
  }), _react["default"].createElement("path", {
    d: "M3.534 11.745v8.39H31.45c.358-1.329.55-2.725.55-4.166 0-1.462-.197-2.878-.565-4.224H3.534z",
    fill: "#A2001D"
  }), _react["default"].createElement("path", {
    d: "M4.74 4.677c-6.237 6.236-6.237 16.347 0 22.584L16.03 15.969 4.74 4.677z",
    fill: "#0052B4"
  }), _react["default"].createElement("path", {
    fill: "#FFDA44",
    d: "M5.264 11.999l1.949 2.72 3.19-1.014-1.985 2.694 1.949 2.72-3.176-1.054-1.984 2.694.022-3.346-3.176-1.055 3.19-1.013z"
  })));
}

SvgSouthSudan.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgSouthSudan.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgSouthSudan;
exports["default"] = _default;