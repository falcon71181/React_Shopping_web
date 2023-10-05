"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgBurkinaFaso(_ref) {
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
    d: "M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16c-.696 0-16 2.087-16 2.087L0 16z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16",
    fill: "#6DA544"
  }), _react["default"].createElement("path", {
    fill: "#FFDA44",
    d: "M16 10.435l1.209 3.72h3.911l-3.164 2.299 1.208 3.72-3.164-2.3-3.165 2.3 1.21-3.72-3.165-2.3h3.911z"
  })));
}

SvgBurkinaFaso.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgBurkinaFaso.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgBurkinaFaso;
exports["default"] = _default;