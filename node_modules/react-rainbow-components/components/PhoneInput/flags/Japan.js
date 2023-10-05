"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgJapan(_ref) {
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
  }), _react["default"].createElement("circle", {
    fill: "#D80027",
    cx: 16,
    cy: 16,
    r: 6.957
  })));
}

SvgJapan.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgJapan.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgJapan;
exports["default"] = _default;