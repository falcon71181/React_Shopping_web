"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgLaos(_ref) {
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
  }, _react["default"].createElement("g", {
    fill: "#D80027"
  }, _react["default"].createElement("path", {
    d: "M30.412 9.043C27.824 3.692 22.343 0 16 0S4.176 3.692 1.588 9.043L16 10.435l14.412-1.392zM1.588 22.956C4.176 28.308 9.657 32 16 32s11.824-3.692 14.412-9.044L16 21.566l-14.412 1.39z"
  })), _react["default"].createElement("path", {
    d: "M30.412 9.043H1.588A15.936 15.936 0 000 16c0 2.493.57 4.853 1.588 6.956h28.824A15.935 15.935 0 0032 16c0-2.493-.57-4.853-1.588-6.957z",
    fill: "#0052B4"
  }), _react["default"].createElement("circle", {
    fill: "#F0F0F0",
    cx: 16,
    cy: 16,
    r: 5.565
  })));
}

SvgLaos.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgLaos.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgLaos;
exports["default"] = _default;