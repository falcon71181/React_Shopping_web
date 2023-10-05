"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgGibraltar(_ref) {
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
    fill: "#F9F9F9",
    cx: 16,
    cy: 16,
    r: 16
  }), _react["default"].createElement("g", {
    fill: "#D80027"
  }, _react["default"].createElement("path", {
    d: "M16 32c6.88 0 12.744-4.342 15.005-10.435H.995C3.255 27.658 9.121 32 16 32zM22.26 13.217V11.13h.696V9.74h-1.39v.695h-1.392v-.696h-1.391v1.391h.695v2.087h-1.391v-4.87h.696v-1.39H17.39v.695h-.695v-.695h-1.392v.695h-.695v-.695h-1.392v1.39h.696v4.87h-1.391V11.13h.695V9.74h-1.39v.695h-1.392v-.696H9.043v1.391h.696v2.087H8.348v5.566h15.304v-5.566z"
  })), _react["default"].createElement("path", {
    d: "M16 18.087a2.087 2.087 0 00-.696 4.055v2.902h-2.087v2.782h3.479v-5.684A2.088 2.088 0 0016 18.087zm0 2.783a.696.696 0 110-1.392.696.696 0 010 1.392z",
    fill: "#FFDA44"
  })));
}

SvgGibraltar.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgGibraltar.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgGibraltar;
exports["default"] = _default;