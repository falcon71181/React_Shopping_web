"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgJersey(_ref) {
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
    d: "M28.694 25.742L18.95 16l9.743-9.742a16.17 16.17 0 00-2.952-2.952L16 13.05 6.258 3.306a16.153 16.153 0 00-2.952 2.952L13.05 16l-9.743 9.742a16.17 16.17 0 002.952 2.952L16 18.95l9.742 9.743a16.161 16.161 0 002.952-2.952z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    fill: "#FFDA44",
    d: "M13.217 4.87L16 5.565l2.783-.695V2.504l-1.113.557L16 1.39l-1.67 1.67-1.113-.557z"
  }), _react["default"].createElement("path", {
    d: "M13.217 4.87v1.739C13.217 8.739 16 9.39 16 9.39s2.783-.652 2.783-2.782v-1.74h-5.566z",
    fill: "#D80027"
  })));
}

SvgJersey.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgJersey.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgJersey;
exports["default"] = _default;