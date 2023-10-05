"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgCameroon(_ref) {
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
    d: "M22.956 1.588A15.937 15.937 0 0016 0c-2.493 0-4.853.57-6.957 1.588L7.654 16l1.39 14.412A15.937 15.937 0 0016 32c2.493 0 4.853-.57 6.956-1.588L24.348 16 22.956 1.588z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    fill: "#FFDA44",
    d: "M16 10.435l1.381 4.251h4.47l-3.616 2.628 1.381 4.251L16 18.938l-3.617 2.627 1.382-4.251-3.617-2.628h4.47z"
  }), _react["default"].createElement("path", {
    d: "M9.043 1.588C3.692 4.176 0 9.657 0 16s3.692 11.824 9.043 14.412V1.588z",
    fill: "#496E2D"
  }), _react["default"].createElement("path", {
    d: "M22.956 1.588v28.824C28.308 27.824 32 22.343 32 16S28.308 4.176 22.956 1.588z",
    fill: "#FFDA44"
  })));
}

SvgCameroon.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgCameroon.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgCameroon;
exports["default"] = _default;