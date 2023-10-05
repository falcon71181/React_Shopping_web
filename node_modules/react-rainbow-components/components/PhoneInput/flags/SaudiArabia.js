"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgSaudiArabia(_ref) {
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
    fill: "#6DA544",
    cx: 16,
    cy: 16,
    r: 16
  }), _react["default"].createElement("g", {
    fill: "#F0F0F0"
  }, _react["default"].createElement("path", {
    d: "M9.043 19.13c0 1.153.935 2.087 2.087 2.087h6.261c0 .96.779 1.74 1.74 1.74h2.086c.96 0 1.74-.78 1.74-1.74V19.13H9.042zM23.13 9.043v4.87c0 .767-.624 1.391-1.39 1.391v2.087a3.482 3.482 0 003.477-3.478v-4.87H23.13zM8.174 13.913c0 .767-.624 1.391-1.391 1.391v2.087a3.482 3.482 0 003.478-3.478v-4.87H8.174v4.87z"
  }), _react["default"].createElement("path", {
    d: "M20 9.043h2.087v4.87H20zM16.87 11.826a.348.348 0 01-.696 0V9.043h-2.087v2.783a.348.348 0 01-.696 0V9.043h-2.087v2.783a2.438 2.438 0 002.435 2.435 2.42 2.42 0 001.392-.439 2.42 2.42 0 001.698.419 1.393 1.393 0 01-1.35 1.063v2.087a3.482 3.482 0 003.478-3.478v-4.87H16.87v2.783z"
  }), _react["default"].createElement("path", {
    d: "M11.304 15.304h3.13v2.087h-3.13z"
  }))));
}

SvgSaudiArabia.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgSaudiArabia.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgSaudiArabia;
exports["default"] = _default;