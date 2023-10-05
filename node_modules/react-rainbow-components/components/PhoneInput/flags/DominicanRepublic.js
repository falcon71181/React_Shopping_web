"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgDominicanRepublic(_ref) {
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
    d: "M.551 20.174a16.028 16.028 0 0011.275 11.275V20.174H.551z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    d: "M11.826.551A16.028 16.028 0 00.551 11.826h11.275V.551z",
    fill: "#0052B4"
  }), _react["default"].createElement("path", {
    d: "M31.449 11.826A16.028 16.028 0 0020.174.551v11.275h11.275z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    d: "M20.174 31.449a16.028 16.028 0 0011.275-11.275H20.174v11.275z",
    fill: "#0052B4"
  }), _react["default"].createElement("path", {
    d: "M20.174 16a4.174 4.174 0 11-8.348 0c0-2.305 4.174-4.174 4.174-4.174s4.174 1.869 4.174 4.174z",
    fill: "#496E2D"
  }), _react["default"].createElement("path", {
    d: "M11.826 16a4.174 4.174 0 118.348 0",
    fill: "#0052B4"
  }), _react["default"].createElement("path", {
    d: "M13.652 13.913v2.609a2.348 2.348 0 104.696 0v-2.609h-4.696z",
    fill: "#D80027"
  })));
}

SvgDominicanRepublic.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgDominicanRepublic.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgDominicanRepublic;
exports["default"] = _default;