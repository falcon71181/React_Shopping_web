"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgMauritania(_ref) {
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
    fill: "#496E2D",
    cx: 16,
    cy: 16,
    r: 16
  }), _react["default"].createElement("g", {
    fill: "#FFDA44"
  }, _react["default"].createElement("path", {
    d: "M16 18.484a5.566 5.566 0 01-5.436-4.372 5.565 5.565 0 1010.872 0A5.566 5.566 0 0116 18.484z"
  }), _react["default"].createElement("path", {
    d: "M16 11.13l.518 1.595h1.676l-1.356.985.518 1.594L16 14.32l-1.356.985.518-1.594-1.356-.985h1.676z"
  }))));
}

SvgMauritania.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgMauritania.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgMauritania;
exports["default"] = _default;