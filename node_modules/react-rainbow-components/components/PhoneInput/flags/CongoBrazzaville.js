"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgCongoBrazzaville(_ref) {
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
    d: "M8.656 30.169l11.731-9.782 9.782-11.73a16.04 16.04 0 00-6.878-6.883L11.55 11.55 1.773 23.29a16.038 16.038 0 006.882 6.879z",
    fill: "#FFDA44"
  }), _react["default"].createElement("path", {
    d: "M27.26 27.261c5.039-5.038 6.006-12.604 2.904-18.614L8.647 30.164c6.01 3.102 13.576 2.135 18.614-2.903z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    d: "M4.677 4.677C-.361 9.715-1.328 17.28 1.773 23.29L23.291 1.773C17.28-1.329 9.715-.36 4.677 4.677z",
    fill: "#6DA544"
  })));
}

SvgCongoBrazzaville.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgCongoBrazzaville.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgCongoBrazzaville;
exports["default"] = _default;