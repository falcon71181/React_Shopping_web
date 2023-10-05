"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgNigeria(_ref) {
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
  }), _react["default"].createElement("g", {
    fill: "#6DA544"
  }, _react["default"].createElement("path", {
    d: "M0 16c0 6.88 4.342 12.744 10.435 15.005V.995C4.342 3.255 0 9.121 0 16zM32 16C32 9.12 27.658 3.256 21.565.995v30.01C27.658 28.745 32 22.88 32 16z"
  }))));
}

SvgNigeria.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgNigeria.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgNigeria;
exports["default"] = _default;