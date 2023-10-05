"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgKosovo(_ref) {
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
    fill: "#0052B4",
    cx: 16,
    cy: 16,
    r: 16
  }), _react["default"].createElement("g", {
    fill: "#F0F0F0"
  }, _react["default"].createElement("path", {
    d: "M7.028 9.74l.345 1.062h1.118l-.904.657.345 1.063-.904-.657-.904.657.345-1.063-.904-.657h1.118zM10.506 8.696l.346 1.063h1.117l-.904.657.345 1.062-.904-.656-.904.656.346-1.062-.905-.657h1.118zM13.985 7.652l.345 1.063h1.117l-.904.657.346 1.063-.904-.657-.905.657.346-1.063-.904-.657h1.117zM24.972 9.74l-.345 1.062h-1.118l.904.657-.345 1.063.904-.657.904.657-.345-1.063.904-.657h-1.118zM21.494 8.696l-.346 1.063h-1.117l.904.657-.345 1.062.904-.656.904.656-.346-1.062.904-.657H21.84zM18.015 7.652l-.345 1.063h-1.117l.904.657-.346 1.063.904-.657.905.657-.346-1.063.904-.657h-1.117z"
  })), _react["default"].createElement("path", {
    d: "M18.783 16.696L16 13.217l-1.391.696v1.391l-2.087 1.392H11.13v1.797a5.566 5.566 0 013.479 5.16H16V22.26l1.391-1.391 1.392 1.39 1.39-1.39v-1.392l1.392-2.087-2.782-.695z",
    fill: "#FFDA44"
  })));
}

SvgKosovo.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgKosovo.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgKosovo;
exports["default"] = _default;