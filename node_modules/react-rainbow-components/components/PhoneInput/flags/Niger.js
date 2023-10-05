"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgNiger(_ref) {
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
    d: "M1.588 9.043A15.936 15.936 0 000 16c0 2.493.57 4.853 1.588 6.956L16 24.348l14.412-1.392A15.936 15.936 0 0032 16c0-2.493-.57-4.853-1.588-6.957L16 7.654 1.588 9.042z",
    fill: "#F0F0F0"
  }), _react["default"].createElement("path", {
    d: "M1.588 22.956C4.176 28.308 9.657 32 16 32s11.824-3.692 14.412-9.044H1.588z",
    fill: "#6DA544"
  }), _react["default"].createElement("g", {
    transform: "translate(1.563)",
    fill: "#FF9811"
  }, _react["default"].createElement("path", {
    d: "M.026 9.043h28.823C26.261 3.692 20.781 0 14.437 0 8.095 0 2.614 3.692.027 9.043z"
  }), _react["default"].createElement("circle", {
    cx: 14.438,
    cy: 16,
    r: 5.565
  }))));
}

SvgNiger.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgNiger.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgNiger;
exports["default"] = _default;