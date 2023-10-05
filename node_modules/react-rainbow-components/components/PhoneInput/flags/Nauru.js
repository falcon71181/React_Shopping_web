"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgNauru(_ref) {
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
  }), _react["default"].createElement("circle", {
    fill: "#FFDA44",
    cx: 16,
    cy: 16,
    r: 16
  }), _react["default"].createElement("g", {
    fill: "#0052B4"
  }, _react["default"].createElement("path", {
    d: "M16 0C7.632 0 .766 6.424.06 14.609h31.88C31.233 6.424 24.367 0 16 0zM16 32c8.368 0 15.234-6.424 15.94-14.609H.06C.767 25.576 7.633 32 16 32z"
  })), _react["default"].createElement("path", {
    fill: "#F0F0F0",
    d: "M13.217 21.565l-1.792.844.954 1.736-1.947-.373-.246 1.967-1.356-1.446-1.356 1.446-.247-1.967-1.947.373.955-1.736-1.793-.844 1.793-.843-.955-1.736 1.947.372.247-1.967 1.356 1.447 1.356-1.447.246 1.967 1.947-.372-.954 1.736z"
  })));
}

SvgNauru.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgNauru.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgNauru;
exports["default"] = _default;