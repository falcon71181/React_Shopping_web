"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgSlovakia(_ref) {
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
    d: "M16 32c8.837 0 16-7.163 16-16 0-1.957-.352-3.832-.995-5.565H.995A15.965 15.965 0 000 16c0 8.837 7.163 16 16 16z",
    fill: "#0052B4"
  }), _react["default"].createElement("path", {
    d: "M16 32c6.88 0 12.744-4.342 15.005-10.435H.995C3.255 27.658 9.121 32 16 32z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    d: "M4.137 9.043v7.982c0 4.54 5.932 5.932 5.932 5.932s5.93-1.392 5.93-5.932V9.044H4.138z",
    fill: "#F0F0F0"
  }), _react["default"].createElement("path", {
    d: "M5.529 9.043v7.982c0 .533.118 1.037.353 1.508h8.374c.234-.471.353-.975.353-1.508V9.044h-9.08z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    fill: "#F0F0F0",
    d: "M12.851 14.609h-2.087v-1.392h1.392v-1.39h-1.392v-1.392h-1.39v1.391H7.981v1.391h1.391v1.392H7.286V16h2.087v1.391h1.391V16h2.087z"
  }), _react["default"].createElement("path", {
    d: "M7.78 20.476c.896.563 1.817.89 2.289 1.036a9.993 9.993 0 002.289-1.036c.904-.569 1.538-1.218 1.898-1.943a2.423 2.423 0 00-1.958-.382 2.435 2.435 0 00-4.458 0 2.437 2.437 0 00-1.958.382c.36.724.993 1.374 1.897 1.943z",
    fill: "#0052B4"
  })));
}

SvgSlovakia.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgSlovakia.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgSlovakia;
exports["default"] = _default;