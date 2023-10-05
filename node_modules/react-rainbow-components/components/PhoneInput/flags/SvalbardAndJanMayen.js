"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgSvalbardAndJanMayen(_ref) {
  var className = _ref.className,
      style = _ref.style;
  return _react["default"].createElement("svg", {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    className: className,
    style: style
  }, _react["default"].createElement("defs", null, _react["default"].createElement("circle", {
    id: "svalbard-and-jan-mayen_svg__a",
    cx: 16,
    cy: 16,
    r: 16
  })), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("mask", {
    id: "svalbard-and-jan-mayen_svg__b",
    fill: "#fff"
  }, _react["default"].createElement("use", {
    xlinkHref: "#svalbard-and-jan-mayen_svg__a"
  })), _react["default"].createElement("use", {
    fill: "#D8D8D8",
    xlinkHref: "#svalbard-and-jan-mayen_svg__a"
  }), _react["default"].createElement("g", {
    mask: "url(#svalbard-and-jan-mayen_svg__b)",
    fillRule: "nonzero"
  }, _react["default"].createElement("path", {
    fill: "#EF2B2D",
    d: "M-4-.91h46.504v33.822H-4z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M8.683-.91h8.455v33.822H8.683z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M-4 11.774h46.504v8.455H-4z"
  }), _react["default"].createElement("path", {
    fill: "#002868",
    d: "M10.797-.91h4.228v33.822h-4.228z"
  }), _react["default"].createElement("path", {
    fill: "#002868",
    d: "M-4 13.888h46.504v4.228H-4z"
  }))));
}

SvgSvalbardAndJanMayen.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgSvalbardAndJanMayen.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgSvalbardAndJanMayen;
exports["default"] = _default;