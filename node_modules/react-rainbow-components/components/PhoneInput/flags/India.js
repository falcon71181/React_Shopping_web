"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgIndia(_ref) {
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
    d: "M16 0C9.657 0 4.176 3.692 1.588 9.043h28.824C27.824 3.692 22.343 0 16 0z",
    fill: "#FF9811"
  }), _react["default"].createElement("path", {
    d: "M16 32c6.343 0 11.824-3.692 14.412-9.044H1.588C4.176 28.308 9.657 32 16 32z",
    fill: "#6DA544"
  }), _react["default"].createElement("circle", {
    fill: "#0052B4",
    cx: 16,
    cy: 16,
    r: 5.565
  }), _react["default"].createElement("circle", {
    fill: "#F0F0F0",
    cx: 16,
    cy: 16,
    r: 3.478
  }), _react["default"].createElement("path", {
    fill: "#0052B4",
    d: "M16 11.708l1.073 2.434 2.644-.288L18.147 16l1.57 2.146-2.644-.288L16 20.293l-1.073-2.434-2.644.288L13.853 16l-1.57-2.146 2.644.288z"
  })));
}

SvgIndia.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgIndia.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgIndia;
exports["default"] = _default;