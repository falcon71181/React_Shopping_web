"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgKuwait(_ref) {
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
    d: "M31.007 21.523c.642-1.73.993-3.6.993-5.554 0-1.953-.351-3.825-.993-5.555L16.03 9.026 1.056 10.414a15.935 15.935 0 00-.994 5.555c0 1.953.352 3.824.994 5.554l14.975 1.389 14.976-1.389z",
    fill: "#F0F0F0"
  }), _react["default"].createElement("path", {
    d: "M16.031 31.938c6.866 0 12.72-4.334 14.976-10.415H1.056c2.256 6.081 8.11 10.415 14.975 10.415z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    d: "M16.031 0C9.165 0 3.311 4.334 1.056 10.414h29.95C28.75 4.334 22.898 0 16.032 0z",
    fill: "#6DA544"
  }), _react["default"].createElement("path", {
    d: "M4.74 4.677c-6.237 6.236-6.237 16.347 0 22.584l5.737-5.738V10.414L4.739 4.677z",
    fill: "#000"
  })));
}

SvgKuwait.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgKuwait.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgKuwait;
exports["default"] = _default;