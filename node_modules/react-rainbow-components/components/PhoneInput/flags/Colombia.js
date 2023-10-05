"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgColombia(_ref) {
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
    d: "M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16l-16 1.391L0 16z",
    fill: "#FFDA44"
  }), _react["default"].createElement("path", {
    d: "M2.141 24c2.767 4.782 7.937 8 13.859 8s11.092-3.218 13.859-8L16 22.956 2.141 24z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    d: "M29.859 24A15.926 15.926 0 0032 16H0c0 2.914.78 5.647 2.141 8h27.718z",
    fill: "#0052B4"
  })));
}

SvgColombia.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgColombia.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgColombia;
exports["default"] = _default;