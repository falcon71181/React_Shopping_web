"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgJamaica(_ref) {
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
  }), _react["default"].createElement("path", {
    d: "M25.741 3.308A15.928 15.928 0 0016 0a15.929 15.929 0 00-9.741 3.308L16 13.047l9.741-9.74z",
    fill: "#6DA544"
  }), _react["default"].createElement("path", {
    d: "M3.307 6.259A15.929 15.929 0 000 16c0 3.666 1.234 7.043 3.308 9.741L13.047 16l-9.74-9.741z",
    fill: "#000"
  }), _react["default"].createElement("path", {
    d: "M6.259 28.692A15.928 15.928 0 0016 32c3.666 0 7.043-1.234 9.741-3.308L16 18.953l-9.741 9.74z",
    fill: "#6DA544"
  }), _react["default"].createElement("path", {
    d: "M28.692 25.741A15.928 15.928 0 0032 16c0-3.666-1.234-7.043-3.308-9.741L18.953 16l9.74 9.741z",
    fill: "#000"
  })));
}

SvgJamaica.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgJamaica.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgJamaica;
exports["default"] = _default;