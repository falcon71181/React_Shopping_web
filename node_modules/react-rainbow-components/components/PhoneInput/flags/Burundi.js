"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgBurundi(_ref) {
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
  }), _react["default"].createElement("g", {
    fill: "#D80027"
  }, _react["default"].createElement("path", {
    d: "M25.742 3.306C20.014-1.1 11.986-1.1 6.258 3.306L16 13.05l9.742-9.743zM16 18.951l-9.742 9.743c5.728 4.408 13.756 4.408 19.484 0L16 18.95z"
  })), _react["default"].createElement("g", {
    fill: "#6DA544"
  }, _react["default"].createElement("path", {
    d: "M13.049 16L3.306 6.258c-4.407 5.728-4.407 13.756 0 19.484L13.05 16zM18.951 16l9.743 9.742c4.408-5.728 4.408-13.756 0-19.484L18.952 16z"
  })), _react["default"].createElement("circle", {
    fill: "#F0F0F0",
    cx: 16,
    cy: 16,
    r: 6.957
  }), _react["default"].createElement("g", {
    fill: "#D80027"
  }, _react["default"].createElement("path", {
    d: "M16 11.13l.602 1.044h1.205l-.602 1.043.602 1.044h-1.205L16 15.304l-.602-1.043h-1.205l.602-1.044-.602-1.043h1.205zM12.938 16l.602 1.043h1.205l-.602 1.044.602 1.043H13.54l-.602 1.044-.603-1.044H11.13l.603-1.043-.603-1.043h1.205zM19.062 16l.603 1.043h1.205l-.603 1.044.603 1.043h-1.205l-.603 1.044-.602-1.044h-1.205l.602-1.043-.602-1.043h1.205z"
  }))));
}

SvgBurundi.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgBurundi.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgBurundi;
exports["default"] = _default;