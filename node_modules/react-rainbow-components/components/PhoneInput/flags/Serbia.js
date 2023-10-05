"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgSerbia(_ref) {
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
    d: "M16 0C7.163 0 0 7.163 0 16c0 1.957.352 3.832.995 5.565h30.01C31.648 19.832 32 17.957 32 16c0-8.837-7.163-16-16-16z",
    fill: "#0052B4"
  }), _react["default"].createElement("g", {
    fill: "#D80027"
  }, _react["default"].createElement("path", {
    d: "M16 0C9.12 0 3.256 4.342.995 10.435h30.01C28.745 4.342 22.879 0 16 0z"
  }), _react["default"].createElement("path", {
    d: "M4.137 9.043v7.982c0 4.54 5.932 5.932 5.932 5.932s5.93-1.392 5.93-5.932V9.044H4.138z"
  })), _react["default"].createElement("g", {
    fill: "#FFDA44"
  }, _react["default"].createElement("path", {
    d: "M6.59 10.435h6.957V7.652l-1.391.696-2.087-2.087-2.087 2.087-1.392-.696zM14.609 18.136l-4.522-4.521-4.522 4.521 1.476 1.476 3.046-3.046 3.046 3.046z"
  })), _react["default"].createElement("path", {
    d: "M14.609 13.913h-2.11a1.391 1.391 0 10-2.43-1.352 1.39 1.39 0 10-2.43 1.352H5.564c0 .768.67 1.391 1.438 1.391h-.046c0 .769.622 1.392 1.39 1.392 0 .68.49 1.245 1.135 1.366l-1.096 2.475a4.508 4.508 0 003.403 0l-1.097-2.475a1.391 1.391 0 001.134-1.366c.769 0 1.391-.623 1.391-1.392h-.046c.768 0 1.438-.623 1.438-1.39z",
    fill: "#F0F0F0"
  })));
}

SvgSerbia.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgSerbia.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgSerbia;
exports["default"] = _default;