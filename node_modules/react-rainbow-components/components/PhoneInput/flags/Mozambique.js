"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgMozambique(_ref) {
  var className = _ref.className,
      style = _ref.style;
  return _react["default"].createElement("svg", {
    width: 33,
    height: 32,
    className: className,
    style: style
  }, _react["default"].createElement("g", {
    fillRule: "nonzero",
    fill: "none"
  }, _react["default"].createElement("circle", {
    fill: "#F0F0F0",
    cx: 16.063,
    cy: 16,
    r: 16
  }), _react["default"].createElement("path", {
    d: "M8.71 22.26l-3.96 5.053A15.948 15.948 0 0016.062 32c6.614 0 12.29-4.014 14.726-9.74H8.711z",
    fill: "#FFDA44"
  }), _react["default"].createElement("path", {
    d: "M30.814 9.797C28.391 4.041 22.7 0 16.062 0A15.948 15.948 0 004.75 4.687l4.007 5.11h22.058z",
    fill: "#496E2D"
  }), _react["default"].createElement("path", {
    d: "M3.54 11.768v8.406h27.971c.36-1.33.552-2.73.552-4.174a16.01 16.01 0 00-.567-4.232H3.541z",
    fill: "#000"
  }), _react["default"].createElement("path", {
    d: "M4.749 4.686c-6.249 6.249-6.249 16.38 0 22.628L16.062 16 4.75 4.686z",
    fill: "#A2001D"
  }), _react["default"].createElement("path", {
    fill: "#FFDA44",
    d: "M6.538 11.826l1.036 3.189h3.353l-2.712 1.97 1.035 3.189-2.712-1.97-2.712 1.97 1.036-3.189-2.713-1.97h3.353z"
  }), _react["default"].createElement("path", {
    fill: "#F0F0F0",
    d: "M3.507 16h6.064v2.783H3.507z"
  }), _react["default"].createElement("path", {
    fill: "#000",
    d: "M10.719 12.81l-.984-.984-3.197 3.197-3.197-3.197-.983.984 3.2 3.194-3.2 3.2.983.97 3.197-3.191 3.197 3.19.984-.97-3.2-3.2z"
  })));
}

SvgMozambique.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgMozambique.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgMozambique;
exports["default"] = _default;