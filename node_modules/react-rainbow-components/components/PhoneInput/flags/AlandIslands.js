"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgAlandIslands(_ref) {
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
    d: "M31.449 20.174c.358-1.33.551-2.73.551-4.174 0-1.444-.192-2.843-.551-4.174L14.609.061A15.919 15.919 0 006.26 3.306l-5.71 8.52A16.018 16.018 0 000 16c0 1.436.19 2.827.545 4.15l5.716 8.544a15.918 15.918 0 008.348 3.245l16.84-11.765z",
    fill: "#FFDA44"
  }), _react["default"].createElement("g", {
    fill: "#0052B4"
  }, _react["default"].createElement("path", {
    d: "M.551 20.174a16.013 16.013 0 005.71 8.52v-8.52H.55zM14.609 31.94c.458.039.922.06 1.391.06 7.392 0 13.613-5.014 15.449-11.826h-16.84v11.765zM31.449 11.826C29.613 5.014 23.392 0 16 0c-.469 0-.933.021-1.391.06v11.766h16.84zM6.26 3.306a16.014 16.014 0 00-5.709 8.52h5.71v-8.52z"
  })), _react["default"].createElement("path", {
    d: "M31.865 13.913H12.522V.38c-1.479.328-2.88.86-4.174 1.565v11.968H.135a16.138 16.138 0 000 4.174h8.213v11.968a15.891 15.891 0 004.174 1.565V18.087h19.343a16.16 16.16 0 000-4.174z",
    fill: "#D80027"
  })));
}

SvgAlandIslands.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgAlandIslands.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgAlandIslands;
exports["default"] = _default;