"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgIsleOfMan(_ref) {
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
    fill: "#F0F0F0",
    d: "M21.924 10.726l-1.13 4.035-3.394-.626-2.184-4.502-5.9 2.094-.466-1.312-1.543-.19 1.163 3.278 4.06-1.038 1.154 3.252-2.807 4.142 4.764 4.063-.903 1.059.607 1.432 2.257-2.647-2.93-2.997 2.24-2.625 4.991.36 1.137-6.158 1.368.253.937-1.242z"
  })));
}

SvgIsleOfMan.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgIsleOfMan.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgIsleOfMan;
exports["default"] = _default;