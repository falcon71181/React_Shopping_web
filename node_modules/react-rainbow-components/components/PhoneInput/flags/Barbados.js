"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgBarbados(_ref) {
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
    fill: "#FFDA44"
  }), _react["default"].createElement("g", {
    fill: "#0052B4"
  }, _react["default"].createElement("path", {
    d: "M9.043 1.588C3.692 4.176 0 9.657 0 16s3.692 11.824 9.043 14.412V1.588zM22.956 1.588v28.824C28.308 27.824 32 22.343 32 16S28.308 4.176 22.956 1.588z"
  })), _react["default"].createElement("path", {
    d: "M20.87 9.74l.933.466-.933-.467-.934-.466c-.056.112-1.275 2.592-1.474 6.38h-1.418V9.738L16 8.348l-1.043 1.391v5.913h-1.42c-.198-3.787-1.417-6.267-1.473-6.38l-1.867.934c.013.025 1.281 2.607 1.281 6.49v1.043h3.479v5.913h2.087V17.74h3.478v-1.043c0-2.008.347-3.663.639-4.698.317-1.129.64-1.788.643-1.795l-.934-.464z",
    fill: "#000"
  })));
}

SvgBarbados.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgBarbados.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgBarbados;
exports["default"] = _default;