"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgBritishVirginIslands(_ref) {
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
    d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16C0 16.004 16 .002 16 0c8.837 0 16 7.163 16 16z",
    fill: "#0052B4"
  }), _react["default"].createElement("g", {
    fill: "#F0F0F0"
  }, _react["default"].createElement("path", {
    d: "M16.019 0h-.022.022zM15.957 16.3h.343v-.343l-.343.343zM16 8.348V0h-.003C7.162.002 0 7.164 0 16h8.348v-4.7l4.7 4.7h2.91l.042-.043V13.05l-4.7-4.701H16z"
  })), _react["default"].createElement("path", {
    d: "M8.095 2.087a16.076 16.076 0 00-6.008 6.008V16H6.26V6.261H16V2.087H8.095z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    d: "M22.956 16l-4.324 4.325a4.868 4.868 0 008.65 0L22.955 16z",
    fill: "#FFDA44"
  }), _react["default"].createElement("path", {
    d: "M16 14.032l-5.685-5.684H8.348L16 16v-1.968z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    d: "M18.087 8.348V16c0 3.727 4.87 4.87 4.87 4.87s4.869-1.143 4.87-4.87V8.348h-9.74z",
    fill: "#6DA544"
  }), _react["default"].createElement("g", {
    fill: "#496E2D"
  }, _react["default"].createElement("path", {
    d: "M27.826 16.188zM18.087 16.188z"
  })), _react["default"].createElement("path", {
    fill: "#F0F0F0",
    d: "M21.913 11.826H24v5.565h-2.087z"
  }), _react["default"].createElement("circle", {
    fill: "#A2001D",
    cx: 22.956,
    cy: 11.826,
    r: 1.044
  }), _react["default"].createElement("g", {
    fill: "#FFDA44"
  }, _react["default"].createElement("path", {
    d: "M19.479 9.74h1.39v1.39h-1.39zM19.479 12.87h1.39v1.39h-1.39zM19.479 16h1.39v1.391h-1.39zM25.044 9.74h1.39v1.39h-1.39zM25.044 12.87h1.39v1.39h-1.39zM25.044 16h1.39v1.391h-1.39z"
  }))));
}

SvgBritishVirginIslands.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgBritishVirginIslands.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgBritishVirginIslands;
exports["default"] = _default;