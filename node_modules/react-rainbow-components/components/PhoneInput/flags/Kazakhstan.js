"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgKazakhstan(_ref) {
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
    fill: "#338AF3",
    cx: 16,
    cy: 16,
    r: 16
  }), _react["default"].createElement("path", {
    d: "M25.044 16.174H6.956c0 1.249 1.088 2.26 2.337 2.26h-.076a2.26 2.26 0 002.261 2.262 2.26 2.26 0 002.261 2.26h4.522a2.26 2.26 0 002.26-2.26 2.26 2.26 0 002.262-2.261h-.076c1.249 0 2.337-1.012 2.337-2.261z",
    fill: "#FFDA44"
  }), _react["default"].createElement("path", {
    d: "M22.26 13.217a6.26 6.26 0 01-12.52 0",
    fill: "#338AF3"
  }), _react["default"].createElement("path", {
    fill: "#FFDA44",
    d: "M20.782 13.217l-1.954.92 1.04 1.892-2.121-.406-.27 2.144L16 16.19l-1.478 1.577-.269-2.144-2.122.406 1.04-1.893-1.953-.919 1.954-.919-1.04-1.892 2.121.406.27-2.144L16 10.245l1.478-1.577.269 2.144 2.122-.406-1.04 1.892z"
  })));
}

SvgKazakhstan.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgKazakhstan.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgKazakhstan;
exports["default"] = _default;