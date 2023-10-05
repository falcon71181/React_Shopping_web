"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgMauritius(_ref) {
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
    d: "M1.945 8.348L16 9.739l14.055-1.391C27.34 3.374 22.065 0 16 0 9.935 0 4.66 3.374 1.945 8.348z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    d: "M1.945 23.652L16 25.044l14.055-1.392A15.929 15.929 0 0032 16l-16-1.391L0 16c0 2.772.705 5.379 1.945 7.652z",
    fill: "#FFDA44"
  }), _react["default"].createElement("path", {
    d: "M1.945 8.348A15.929 15.929 0 000 16h32c0-2.772-.705-5.379-1.945-7.652H1.945z",
    fill: "#0052B4"
  }), _react["default"].createElement("path", {
    d: "M16 32c6.065 0 11.34-3.374 14.055-8.348H1.945C4.66 28.626 9.935 32 16 32z",
    fill: "#6DA544"
  })));
}

SvgMauritius.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgMauritius.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgMauritius;
exports["default"] = _default;