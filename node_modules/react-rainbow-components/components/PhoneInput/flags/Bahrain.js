"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgBahrain(_ref) {
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
    d: "M16 0c-3.211 0-6.2.947-8.706 2.575l4.115 2.758L6.26 8l5.148 2.666-5.148 2.667 5.148 2.666-5.148 2.667 5.148 2.666L6.26 24l5.148 2.667-4.116 2.759A15.923 15.923 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0z",
    fill: "#D80027"
  })));
}

SvgBahrain.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgBahrain.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgBahrain;
exports["default"] = _default;