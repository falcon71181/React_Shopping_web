"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgChile(_ref) {
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
    d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16s16 0 16 0h16z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    d: "M0 16C0 7.163 7.163 0 16 0v16H0z",
    fill: "#0052B4"
  }), _react["default"].createElement("path", {
    fill: "#F0F0F0",
    d: "M9.524 5.565l1.036 3.189h3.353l-2.712 1.97 1.036 3.19-2.713-1.972-2.712 1.971 1.036-3.189-2.712-1.97h3.352z"
  })));
}

SvgChile.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgChile.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgChile;
exports["default"] = _default;