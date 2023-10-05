"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgChristmasIsland(_ref) {
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
    d: "M27.27 27.207c-6.224 6.225-16.316 6.225-22.54 0-6.224-6.224-6.224-16.315 0-22.539.49.49 12.74 9.8 12.74 9.8l9.8 12.74z",
    fill: "#0052B4"
  }), _react["default"].createElement("path", {
    d: "M4.73 4.668c6.224-6.224 16.316-6.224 22.54 0s6.224 16.315 0 22.54",
    fill: "#6DA544"
  }), _react["default"].createElement("circle", {
    fill: "#FFDA44",
    cx: 16,
    cy: 15.938,
    r: 4.158
  }), _react["default"].createElement("g", {
    fill: "#F0F0F0"
  }, _react["default"].createElement("path", {
    d: "M5.997 22.867l.437.915.988-.229-.442.913.794.63-.99.222.004 1.014-.791-.634-.79.634.002-1.014-.989-.223.794-.63-.442-.912.988.229zM3.136 15.245l.437.914.988-.228-.442.912.794.63-.989.223.003 1.014-.791-.635-.79.635.002-1.014-.989-.223.794-.63-.442-.912.988.228zM5.997 9.008l.437.915.988-.229-.442.913.794.63-.99.222.004 1.014-.791-.634-.79.634.002-1.014-.989-.223.794-.63-.442-.912.988.229zM9.55 13.859l.438.914.988-.228-.443.912.795.63-.99.223.003 1.014-.79-.635-.791.635.003-1.014-.99-.223.795-.63-.442-.912.987.228zM7.01 18.017l.344 1.058h1.113l-.9.655.343 1.058-.9-.654-.901.654.344-1.058-.9-.655h1.113z"
  })), _react["default"].createElement("path", {
    d: "M16 18.71h1.386s.6-1.063 0-2.08l1.386-1.385-.693-1.386h-.693s-.346 1.04-1.732 1.04c-1.386 0-1.733-1.04-1.733-1.04h-.693l.693 1.386-.693 1.386.693.693s.693-1.386 2.08-.693c-.001 0 .588.866-.001 2.079z",
    fill: "#6DA544"
  }), _react["default"].createElement("path", {
    d: "M26.344 8.73a2.772 2.772 0 00-1.867-3.163 5.174 5.174 0 01.467 3.106 2.845 2.845 0 00-3.988-.87 5.311 5.311 0 012.179 1.036c.517.411.935.968 1.255 1.505l-4.232 1.325c4.157.693 7.622-2.079 7.622-2.079-.384-.768-.98-.897-1.436-.86z",
    fill: "#FFDA44"
  })));
}

SvgChristmasIsland.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgChristmasIsland.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgChristmasIsland;
exports["default"] = _default;