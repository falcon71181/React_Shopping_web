"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgCzechRepublic(_ref) {
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
    d: "M14.643 15.969S4.749 27.263 4.739 27.26a15.919 15.919 0 0011.292 4.678c8.82 0 15.969-7.15 15.969-15.97H14.643z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    d: "M4.74 4.677c-6.237 6.236-6.237 16.347 0 22.584L16.03 15.969 4.74 4.677z",
    fill: "#0052B4"
  })));
}

SvgCzechRepublic.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgCzechRepublic.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgCzechRepublic;
exports["default"] = _default;