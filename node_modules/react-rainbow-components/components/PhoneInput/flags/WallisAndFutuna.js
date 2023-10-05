"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgWallisAndFutuna(_ref) {
  var className = _ref.className,
      style = _ref.style;
  return _react["default"].createElement("svg", {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    className: className,
    style: style
  }, _react["default"].createElement("defs", null, _react["default"].createElement("circle", {
    id: "wallis-and-futuna_svg__a",
    cx: 16,
    cy: 16,
    r: 16
  })), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("mask", {
    id: "wallis-and-futuna_svg__b",
    fill: "#fff"
  }, _react["default"].createElement("use", {
    xlinkHref: "#wallis-and-futuna_svg__a"
  })), _react["default"].createElement("use", {
    fill: "#D8D8D8",
    xlinkHref: "#wallis-and-futuna_svg__a"
  }), _react["default"].createElement("g", {
    fillRule: "nonzero",
    mask: "url(#wallis-and-futuna_svg__b)"
  }, _react["default"].createElement("path", {
    d: "M40.373.099H20.186v13.878H0v13.878A5.047 5.047 0 005.047 32.9h35.326a5.047 5.047 0 005.046-5.046V5.145A5.047 5.047 0 0040.373.1z",
    fill: "#ED2939"
  }), _react["default"].createElement("path", {
    d: "M7.57.099H5.047A5.047 5.047 0 000 5.145v10.093h7.57V.098z",
    fill: "#002395"
  }), _react["default"].createElement("path", {
    fill: "#EEE",
    d: "M7.57.099v15.14H0V16.5h23.971V.099z"
  }), _react["default"].createElement("path", {
    fill: "#ED2939",
    d: "M22.71 15.238h-7.57V.098h7.57z"
  }), _react["default"].createElement("path", {
    fill: "#EEE",
    d: "M15.14 15.238H7.57V.098h7.57v15.14z"
  }))));
}

SvgWallisAndFutuna.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgWallisAndFutuna.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgWallisAndFutuna;
exports["default"] = _default;