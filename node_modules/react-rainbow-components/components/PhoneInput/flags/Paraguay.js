"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgParaguay(_ref) {
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
    d: "M16 0C9.657 0 4.176 3.692 1.588 9.043h28.824C27.824 3.692 22.343 0 16 0z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    d: "M16 32c6.343 0 11.824-3.692 14.412-9.044H1.588C4.176 28.308 9.657 32 16 32z",
    fill: "#0052B4"
  }), _react["default"].createElement("path", {
    d: "M19.935 11.37l-1.476 1.475a3.478 3.478 0 11-4.919 0l-1.475-1.476a5.565 5.565 0 107.87 0z",
    fill: "#6DA544"
  }), _react["default"].createElement("path", {
    fill: "#FFDA44",
    d: "M16 13.217l.518 1.595h1.676l-1.356.985.518 1.594L16 16.406l-1.356.985.518-1.594-1.356-.985h1.676z"
  })));
}

SvgParaguay.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgParaguay.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgParaguay;
exports["default"] = _default;