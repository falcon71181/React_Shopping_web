"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgLatvia(_ref) {
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
    fill: "#A2001D"
  }, _react["default"].createElement("path", {
    d: "M16 0C8.608 0 2.387 5.014.551 11.826H31.45C29.613 5.014 23.392 0 16 0zM16 32c7.392 0 13.613-5.014 15.449-11.826H.55C2.387 26.986 8.608 32 16 32z"
  }))));
}

SvgLatvia.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgLatvia.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgLatvia;
exports["default"] = _default;