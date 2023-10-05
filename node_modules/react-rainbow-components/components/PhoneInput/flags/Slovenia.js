"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgSlovenia(_ref) {
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
    d: "M31.005 10.435H13.913V6.26H5.565v4.174H.995A15.965 15.965 0 000 16c0 1.957.352 3.832.995 5.565L16 22.956l15.005-1.39C31.648 19.831 32 17.956 32 16c0-1.957-.352-3.832-.995-5.565z",
    fill: "#0052B4"
  }), _react["default"].createElement("path", {
    d: "M16 32c6.88 0 12.744-4.342 15.005-10.435H.995C3.255 27.658 9.121 32 16 32z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    d: "M5.565 10.435v1.391C5.565 15.021 9.74 16 9.74 16s4.174-.979 4.174-4.174v-1.391l-1.391 1.391L9.739 9.74l-2.783 2.087-1.39-1.391z",
    fill: "#F0F0F0"
  })));
}

SvgSlovenia.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgSlovenia.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgSlovenia;
exports["default"] = _default;