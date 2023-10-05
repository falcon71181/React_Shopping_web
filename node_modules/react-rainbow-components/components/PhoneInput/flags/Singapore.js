"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgSingapore(_ref) {
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
    d: "M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16",
    fill: "#D80027"
  }), _react["default"].createElement("g", {
    fill: "#F0F0F0"
  }, _react["default"].createElement("path", {
    d: "M9.74 8.348a4.87 4.87 0 013.825-4.757 4.87 4.87 0 100 9.513A4.87 4.87 0 019.74 8.348zM16 3.826l.345 1.063h1.118l-.904.657.345 1.063L16 5.952l-.904.657.345-1.063-.904-.657h1.118z"
  }), _react["default"].createElement("path", {
    d: "M13.29 5.913l.344 1.063h1.118l-.904.657.345 1.063-.904-.657-.904.657.345-1.063-.904-.657h1.118zM18.711 5.913l.345 1.063h1.118l-.904.657.345 1.063-.904-.657-.904.657.345-1.063-.904-.657h1.118zM17.668 9.043l.345 1.063h1.117l-.904.657.346 1.063-.904-.657-.905.657.346-1.063-.904-.657h1.117zM14.332 9.043l.346 1.063h1.117l-.904.657.346 1.063-.905-.657-.904.657.346-1.063-.904-.657h1.117z"
  }))));
}

SvgSingapore.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgSingapore.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgSingapore;
exports["default"] = _default;