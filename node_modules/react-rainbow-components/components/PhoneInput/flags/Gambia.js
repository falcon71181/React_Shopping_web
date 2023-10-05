"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgGambia(_ref) {
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
    d: "M16 0C9.385 0 3.709 4.014 1.272 9.74h29.456C28.291 4.013 22.615 0 16 0z",
    fill: "#FF4B55"
  }), _react["default"].createElement("path", {
    d: "M16 32c6.615 0 12.291-4.014 14.728-9.74H1.272C3.709 27.987 9.385 32 16 32z",
    fill: "#73AF00"
  }), _react["default"].createElement("path", {
    d: "M31.449 11.826H.55A16.017 16.017 0 000 16c0 1.444.193 2.843.551 4.174H31.45c.358-1.33.551-2.73.551-4.174 0-1.444-.192-2.843-.551-4.174z",
    fill: "#41479B"
  })));
}

SvgGambia.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgGambia.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgGambia;
exports["default"] = _default;