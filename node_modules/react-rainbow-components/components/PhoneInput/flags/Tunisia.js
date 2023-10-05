"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgTunisia(_ref) {
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
    fill: "#D80027",
    cx: 16,
    cy: 16,
    r: 16
  }), _react["default"].createElement("circle", {
    fill: "#F0F0F0",
    cx: 16,
    cy: 16,
    r: 7.652
  }), _react["default"].createElement("g", {
    fill: "#D80027"
  }, _react["default"].createElement("path", {
    d: "M16.943 13.074l1.312 1.81 2.127-.69L19.066 16l1.312 1.81-2.125-.693-1.315 1.808.001-2.235-2.125-.692 2.126-.69z"
  }), _react["default"].createElement("path", {
    d: "M17.74 20.522a4.522 4.522 0 112.15-8.5 5.565 5.565 0 100 7.956 4.5 4.5 0 01-2.15.544z"
  }))));
}

SvgTunisia.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgTunisia.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgTunisia;
exports["default"] = _default;