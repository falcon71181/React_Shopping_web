"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgMaldives(_ref) {
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
    fill: "#D80027",
    cx: 16,
    cy: 16,
    r: 16
  }), _react["default"].createElement("path", {
    fill: "#6DA544",
    d: "M5.565 8.348h20.87v15.304H5.565z"
  }), _react["default"].createElement("path", {
    d: "M18.577 20.522a4.522 4.522 0 112.15-8.5 5.565 5.565 0 100 7.956 4.5 4.5 0 01-2.15.544z",
    fill: "#F0F0F0"
  })));
}

SvgMaldives.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgMaldives.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgMaldives;
exports["default"] = _default;