"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgPanama(_ref) {
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
    d: "M0 16c0 8.837 7.163 16 16 16V16H0z",
    fill: "#0052B4"
  }), _react["default"].createElement("path", {
    d: "M16 0c8.837 0 16 7.163 16 16H16V0z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    fill: "#0052B4",
    d: "M9.524 5.565l1.036 3.189h3.353l-2.712 1.97 1.036 3.19-2.713-1.972-2.712 1.971 1.036-3.189-2.712-1.97h3.352z"
  }), _react["default"].createElement("path", {
    fill: "#D80027",
    d: "M22.476 18.087l1.036 3.189h3.352l-2.712 1.97 1.036 3.189-2.712-1.97-2.713 1.97 1.036-3.189-2.712-1.97h3.353z"
  })));
}

SvgPanama.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgPanama.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgPanama;
exports["default"] = _default;