"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgTurkey(_ref) {
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
  }), _react["default"].createElement("g", {
    fill: "#F0F0F0"
  }, _react["default"].createElement("path", {
    d: "M15.345 13.074l1.313 1.81 2.126-.69L17.469 16l1.313 1.81-2.126-.693-1.315 1.808.002-2.235-2.126-.692 2.127-.69z"
  }), _react["default"].createElement("path", {
    d: "M11.762 20.522a4.522 4.522 0 112.151-8.5 5.565 5.565 0 100 7.956 4.5 4.5 0 01-2.15.544z"
  }))));
}

SvgTurkey.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgTurkey.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgTurkey;
exports["default"] = _default;