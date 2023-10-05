"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgBahamas(_ref) {
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
  }, _react["default"].createElement("ellipse", {
    fill: "#FFDA44",
    cx: 16.031,
    cy: 16,
    rx: 15.969,
    ry: 16
  }), _react["default"].createElement("g", {
    fill: "#338AF3"
  }, _react["default"].createElement("path", {
    d: "M9.783 10.435h21.224C28.75 4.342 22.897 0 16.03 0c-4.41 0-8.401 1.791-11.29 4.687l5.042 5.748zM9.783 21.565h21.224C28.75 27.658 22.897 32 16.03 32c-4.41 0-8.401-1.791-11.29-4.687l5.042-5.748z"
  })), _react["default"].createElement("path", {
    d: "M4.74 4.686c-6.237 6.249-6.237 16.38 0 22.628L16.03 16 4.74 4.686z",
    fill: "#000"
  })));
}

SvgBahamas.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgBahamas.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgBahamas;
exports["default"] = _default;