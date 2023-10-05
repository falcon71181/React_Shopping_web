"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgQatar(_ref) {
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
    d: "M32 16c0-8.837-7.163-16-16-16-3.13 0-6.05.9-8.516 2.453l3.507 1.49-4.73 2.01 4.73 2.01-4.73 2.01 4.73 2.01-4.73 2.009 4.73 2.01-4.73 2.009 4.73 2.01-4.73 2.009 4.73 2.01-4.73 2.01 4.73 2.009-3.505 1.489A15.925 15.925 0 0016 32c8.837 0 16-7.163 16-16z",
    fill: "#751A46"
  })));
}

SvgQatar.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgQatar.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgQatar;
exports["default"] = _default;