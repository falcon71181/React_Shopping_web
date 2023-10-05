"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgPuertoRico(_ref) {
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
  }), _react["default"].createElement("g", {
    fill: "#D80027"
  }, _react["default"].createElement("path", {
    d: "M16.031 0C10.807 0 6.17 2.509 3.255 6.388h25.552C25.894 2.509 21.255 0 16.03 0zM16.031 31.938c5.224 0 9.863-2.51 12.776-6.388H3.255c2.914 3.879 7.552 6.388 12.776 6.388zM.062 15.969c0 1.094.11 2.162.32 3.194H31.68c.21-1.032.32-2.1.32-3.194 0-1.094-.11-2.162-.32-3.194H.382c-.21 1.032-.32 2.1-.32 3.194z"
  })), _react["default"].createElement("path", {
    d: "M4.74 4.677c-6.237 6.236-6.237 16.347 0 22.584L16.03 15.969 4.74 4.677z",
    fill: "#0052B4"
  }), _react["default"].createElement("path", {
    fill: "#F0F0F0",
    d: "M6.525 11.803l1.034 3.182h3.347l-2.707 1.967 1.033 3.183-2.707-1.967-2.707 1.967 1.034-3.183-2.707-1.967h3.346z"
  })));
}

SvgPuertoRico.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgPuertoRico.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgPuertoRico;
exports["default"] = _default;