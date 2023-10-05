"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgOman(_ref) {
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
    fill: "#D80027"
  }, _react["default"].createElement("path", {
    d: "M0 16c0 6.065 3.374 11.34 8.348 14.055V1.945C3.374 4.66 0 9.935 0 16z"
  }), _react["default"].createElement("path", {
    d: "M31.005 21.565C31.648 19.832 32 17.957 32 16c0-1.957-.352-3.832-.995-5.565H.995A15.964 15.964 0 000 16c0 1.957.352 3.832.995 5.565L16 22.956l15.005-1.39z"
  })), _react["default"].createElement("path", {
    d: "M16 32c6.88 0 12.744-4.342 15.005-10.435H.995C3.255 27.658 9.121 32 16 32z",
    fill: "#6DA544"
  }), _react["default"].createElement("path", {
    d: "M0 16c0 7.392 5.014 13.613 11.826 15.449V.55C5.014 2.387 0 8.608 0 16z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    fill: "#F0F0F0",
    d: "M9.789 7.04L8.313 5.566l-.984.984-.984-.984L4.87 7.041l.984.984-.984.984 1.475 1.475.984-.984.984.984L9.789 9.01l-.984-.984z"
  })));
}

SvgOman.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgOman.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgOman;
exports["default"] = _default;