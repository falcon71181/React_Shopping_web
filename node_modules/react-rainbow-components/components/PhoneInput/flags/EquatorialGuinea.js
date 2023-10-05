"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgEquatorialGuinea(_ref) {
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
    cx: 16.031,
    cy: 15.969,
    r: 15.969
  }), _react["default"].createElement("path", {
    d: "M9.783 10.414h21.224C28.75 4.334 22.897 0 16.03 0c-4.41 0-8.401 1.788-11.29 4.678l5.042 5.736z",
    fill: "#6DA544"
  }), _react["default"].createElement("path", {
    d: "M9.783 21.523h21.224c-2.257 6.081-8.11 10.415-14.976 10.415-4.41 0-8.401-1.788-11.29-4.678l5.042-5.737z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    d: "M4.74 4.677c-6.237 6.236-6.237 16.347 0 22.584L16.03 15.969 4.74 4.677z",
    fill: "#0052B4"
  }), _react["default"].createElement("path", {
    d: "M18.808 13.192v3.471c0 2.126 2.778 2.777 2.778 2.777s2.777-.651 2.777-2.777v-3.471h-5.555z",
    fill: "#DEDDE0"
  }), _react["default"].createElement("path", {
    fill: "#786145",
    d: "M20.891 16.038h1.389v2.013h-1.389z"
  }), _react["default"].createElement("path", {
    d: "M22.974 15.275a1.389 1.389 0 10-2.777 0 .694.694 0 100 1.388h2.777a.694.694 0 100-1.388z",
    fill: "#6DA544"
  })));
}

SvgEquatorialGuinea.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgEquatorialGuinea.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgEquatorialGuinea;
exports["default"] = _default;