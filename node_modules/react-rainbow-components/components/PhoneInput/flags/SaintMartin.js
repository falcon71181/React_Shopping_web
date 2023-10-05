"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgSaintMartin(_ref) {
  var className = _ref.className,
      style = _ref.style;
  return _react["default"].createElement("svg", {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    className: className,
    style: style
  }, _react["default"].createElement("defs", null, _react["default"].createElement("circle", {
    id: "saint-martin_svg__a",
    cx: 16,
    cy: 16,
    r: 16
  })), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("mask", {
    id: "saint-martin_svg__b",
    fill: "#fff"
  }, _react["default"].createElement("use", {
    xlinkHref: "#saint-martin_svg__a"
  })), _react["default"].createElement("use", {
    fill: "#D8D8D8",
    xlinkHref: "#saint-martin_svg__a"
  }), _react["default"].createElement("g", {
    mask: "url(#saint-martin_svg__b)",
    fillRule: "nonzero"
  }, _react["default"].createElement("g", {
    transform: "translate(-11 -3)"
  }, _react["default"].createElement("path", {
    fill: "#003787",
    d: "M0 0h54v36H0z"
  }), _react["default"].createElement("path", {
    fill: "#F1F2F2",
    d: "M0 0h54L30 24v12h-6V24z"
  }), _react["default"].createElement("circle", {
    fill: "#F9D90F",
    cx: 27,
    cy: 15,
    r: 4
  }), _react["default"].createElement("path", {
    fill: "#F1F2F2",
    d: "M22 15h10l-5 9z"
  }), _react["default"].createElement("path", {
    fill: "#CF142B",
    d: "M27 24l-8-7.5h16z"
  })))));
}

SvgSaintMartin.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgSaintMartin.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgSaintMartin;
exports["default"] = _default;