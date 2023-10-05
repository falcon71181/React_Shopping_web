"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgZambia(_ref) {
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
    fill: "#496E2D",
    cx: 16,
    cy: 16,
    r: 16
  }), _react["default"].createElement("path", {
    d: "M22.26 16H16v16c1.87 0 3.665-.322 5.333-.912L22.261 16z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    d: "M26.667 27.925A15.959 15.959 0 0032 16h-6.26l.927 11.925z",
    fill: "#FF9811"
  }), _react["default"].createElement("path", {
    d: "M21.333 16v15.088a15.99 15.99 0 005.334-3.163V16h-5.334z",
    fill: "#000"
  }), _react["default"].createElement("path", {
    d: "M29.565 10.435h-4.174a1.391 1.391 0 00-2.782 0h-4.174c0 .768.669 1.391 1.437 1.391h-.046c0 .769.623 1.391 1.391 1.391 0 .769.623 1.392 1.392 1.392h2.782c.769 0 1.392-.623 1.392-1.392.768 0 1.39-.622 1.39-1.39h-.045c.768 0 1.437-.624 1.437-1.392z",
    fill: "#FF9811"
  })));
}

SvgZambia.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgZambia.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgZambia;
exports["default"] = _default;