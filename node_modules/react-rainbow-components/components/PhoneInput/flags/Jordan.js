"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgJordan(_ref) {
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
    cx: 16.031,
    cy: 15.969,
    r: 15.969
  }), _react["default"].createElement("path", {
    d: "M9.783 10.414h21.224C28.75 4.334 22.897 0 16.03 0c-4.41 0-8.401 1.788-11.29 4.678l5.042 5.736z",
    fill: "#000"
  }), _react["default"].createElement("path", {
    d: "M9.783 21.523h21.224c-2.257 6.081-8.11 10.415-14.976 10.415-4.41 0-8.401-1.788-11.29-4.678l5.042-5.737z",
    fill: "#6DA544"
  }), _react["default"].createElement("path", {
    d: "M4.74 4.677c-6.237 6.236-6.237 16.347 0 22.584L16.03 15.969 4.74 4.677z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    fill: "#F0F0F0",
    d: "M6.4 12.497l.877 1.833 1.979-.457-.887 1.827 1.592 1.262-1.982.447.006 2.031L6.4 18.17l-1.584 1.27.005-2.031-1.981-.447L4.43 15.7l-.886-1.827 1.979.457z"
  })));
}

SvgJordan.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgJordan.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgJordan;
exports["default"] = _default;