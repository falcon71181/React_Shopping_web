"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgEgypt(_ref) {
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
    d: "M16 0C9.12 0 3.256 4.342.995 10.435h30.01C28.745 4.342 22.879 0 16 0z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    d: "M16 32c6.88 0 12.744-4.342 15.005-10.435H.995C3.255 27.658 9.121 32 16 32z",
    fill: "#000"
  }), _react["default"].createElement("path", {
    d: "M21.565 14.26h-4.174a1.391 1.391 0 00-2.782 0h-4.174c0 .77.669 1.392 1.437 1.392h-.046c0 .769.623 1.392 1.391 1.392 0 .768.623 1.39 1.392 1.39h2.782c.769 0 1.392-.622 1.392-1.39.768 0 1.39-.623 1.39-1.392h-.045c.768 0 1.437-.623 1.437-1.391z",
    fill: "#FF9811"
  })));
}

SvgEgypt.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgEgypt.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgEgypt;
exports["default"] = _default;