"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgTonga(_ref) {
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
    d: "M10.435 8.348V6.26H8.348v2.087H6.26v2.087h2.087v2.087h2.087v-2.087h2.087V8.348z"
  }), _react["default"].createElement("path", {
    d: "M16 0v16H0c0 8.837 7.163 16 16 16s16-7.163 16-16S24.837 0 16 0z"
  }))));
}

SvgTonga.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgTonga.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgTonga;
exports["default"] = _default;