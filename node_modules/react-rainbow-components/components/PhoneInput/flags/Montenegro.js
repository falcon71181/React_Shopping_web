"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgMontenegro(_ref) {
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
    fill: "#FFDA44",
    cx: 16,
    cy: 16,
    r: 16
  }), _react["default"].createElement("path", {
    d: "M32 16c0-5.491-2.767-10.336-6.982-13.217H6.982C2.767 5.664 0 10.509 0 16c0 5.491 2.767 10.336 6.982 13.217h18.036C29.233 26.336 32 21.491 32 16z",
    fill: "#A2001D"
  }), _react["default"].createElement("g", {
    fill: "#FFDA44"
  }, _react["default"].createElement("path", {
    d: "M12.522 11.826h6.956V9.043l-1.391.696L16 7.652 13.913 9.74l-1.391-.696zM22.26 16h-3.476a1.605 1.605 0 10-2.805-1.559A1.605 1.605 0 1013.174 16H9.739c0 1.064.927 1.926 1.99 1.926h-.064c0 .873.58 1.61 1.377 1.847l-1.564 1.563 1.476 1.476 2.093-2.093c.082.03.167.054.255.07l-1.265 2.856a5.199 5.199 0 001.963.383 5.2 5.2 0 001.963-.383l-1.265-2.856c.088-.016.173-.04.255-.07l2.093 2.093 1.476-1.476-1.564-1.563a1.927 1.927 0 001.376-1.847h-.064c1.064 0 1.99-.862 1.99-1.926z"
  })), _react["default"].createElement("path", {
    fill: "#6DA544",
    d: "M16 17.044l-2.26 1.043v2.087L16 21.565l2.26-1.391v-2.087z"
  }), _react["default"].createElement("path", {
    fill: "#0052B4",
    d: "M13.739 16h4.522v2.783h-4.522z"
  })));
}

SvgMontenegro.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgMontenegro.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgMontenegro;
exports["default"] = _default;