"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgThailand(_ref) {
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
    d: "M31.005 10.435H.995A15.964 15.964 0 000 16c0 1.957.352 3.832.995 5.565h30.01C31.648 19.832 32 17.957 32 16c0-1.957-.352-3.832-.995-5.565z",
    fill: "#0052B4"
  }), _react["default"].createElement("g", {
    fill: "#D80027"
  }, _react["default"].createElement("path", {
    d: "M16 0C11.15 0 6.805 2.158 3.871 5.565H28.13A15.963 15.963 0 0016 0zM28.129 26.435H3.87A15.963 15.963 0 0016 32c4.85 0 9.195-2.158 12.129-5.565z"
  }))));
}

SvgThailand.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgThailand.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgThailand;
exports["default"] = _default;