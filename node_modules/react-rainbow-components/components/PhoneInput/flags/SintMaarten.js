"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgSintMaarten(_ref) {
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
    d: "M14.643 17.357S4.749 4.675 4.739 4.677A15.919 15.919 0 0116.031 0C24.851 0 32 7.15 32 15.969l-17.357 1.388z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    d: "M14.643 15.969S4.749 27.263 4.739 27.26a15.919 15.919 0 0011.292 4.678c8.82 0 15.969-7.15 15.969-15.97H14.643z",
    fill: "#0052B4"
  }), _react["default"].createElement("path", {
    d: "M4.74 4.677c-6.237 6.236-6.237 16.347 0 22.584L16.03 15.969 4.74 4.677z",
    fill: "#F0F0F0"
  }), _react["default"].createElement("g", {
    transform: "translate(1.747 11.103)",
    fill: "#FFDA44"
  }, _react["default"].createElement("path", {
    d: "M.066 4.866a4.513 4.513 0 108.997 0H.066z"
  }), _react["default"].createElement("circle", {
    cx: 4.564,
    cy: 1.394,
    r: 1.389
  })), _react["default"].createElement("path", {
    d: "M3.187 12.15v4.513c0 2.392 3.124 3.124 3.124 3.124s3.124-.732 3.124-3.124V12.15H3.187z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    d: "M6.313 18.334c-.58-.208-1.738-.741-1.738-1.67v-3.125h3.472v3.124c0 .933-1.158 1.464-1.734 1.671z",
    fill: "#338AF3"
  }), _react["default"].createElement("path", {
    fill: "#F3F3F3",
    d: "M7.005 15.275v-.695l-.694-.347-.694.347v.695l-.347.347v1.388h2.083v-1.388z"
  })));
}

SvgSintMaarten.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgSintMaarten.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgSintMaarten;
exports["default"] = _default;