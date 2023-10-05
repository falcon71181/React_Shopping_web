"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgBelize(_ref) {
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
  }, _react["default"].createElement("path", {
    d: "M32 16c0-5.491-2.767-10.336-6.982-13.217L16 2.087l-9.018.696C2.767 5.664 0 10.509 0 16c0 5.491 2.767 10.336 6.982 13.217l9.018.696 9.018-.696C29.233 26.336 32 21.491 32 16z",
    fill: "#0052B4"
  }), _react["default"].createElement("g", {
    fill: "#A2001D"
  }, _react["default"].createElement("path", {
    d: "M25.018 2.783A15.925 15.925 0 0016 0c-3.345 0-6.45 1.027-9.018 2.783h18.036zM6.982 29.217A15.925 15.925 0 0016 32c3.345 0 6.45-1.027 9.018-2.783H6.982z"
  })), _react["default"].createElement("circle", {
    fill: "#F0F0F0",
    cx: 16,
    cy: 16,
    r: 7.652
  }), _react["default"].createElement("circle", {
    fill: "#6DA544",
    cx: 16,
    cy: 16,
    r: 6.261
  }), _react["default"].createElement("circle", {
    fill: "#F0F0F0",
    cx: 16,
    cy: 16,
    r: 4.174
  }), _react["default"].createElement("path", {
    fill: "#0052B4",
    d: "M16 14.957L13.74 16v1.74L16 19.13l2.26-1.39V16z"
  }), _react["default"].createElement("path", {
    fill: "#FFDA44",
    d: "M13.739 13.913h4.522V16h-4.522z"
  })));
}

SvgBelize.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgBelize.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgBelize;
exports["default"] = _default;