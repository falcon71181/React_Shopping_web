"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgReunion(_ref) {
  var className = _ref.className,
      style = _ref.style;
  return _react["default"].createElement("svg", {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    className: className,
    style: style
  }, _react["default"].createElement("defs", null, _react["default"].createElement("circle", {
    id: "reunion_svg__a",
    cx: 16,
    cy: 16,
    r: 16
  })), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("mask", {
    id: "reunion_svg__b",
    fill: "#fff"
  }, _react["default"].createElement("use", {
    xlinkHref: "#reunion_svg__a"
  })), _react["default"].createElement("use", {
    fill: "#D8D8D8",
    xlinkHref: "#reunion_svg__a"
  }), _react["default"].createElement("g", {
    fillRule: "nonzero",
    mask: "url(#reunion_svg__b)"
  }, _react["default"].createElement("path", {
    d: "M42.73-.533a6.173 6.173 0 00-3.08-2.947 6.127 6.127 0 00-2.449-.508H-5.85c-.87 0-1.698.182-2.45.508a6.174 6.174 0 00-3.079 2.947A6.124 6.124 0 00-12 2.162V29.838c0 1.847.816 3.503 2.105 4.63a6.125 6.125 0 004.045 1.52h43.051c1.55 0 2.964-.574 4.046-1.52a6.134 6.134 0 002.104-4.63V2.162c0-.967-.223-1.881-.621-2.695z",
    fill: "#36F"
  }), _react["default"].createElement("g", {
    fill: "red"
  }, _react["default"].createElement("path", {
    d: "M15.676 16.029l-.045.003-25.526 18.436a6.125 6.125 0 004.045 1.52h43.051c1.55 0 2.964-.574 4.046-1.52L15.72 16.032l-.045-.003z"
  }), _react["default"].createElement("path", {
    d: "M15.805 16.133l.165-.014-.165-.119-.165.119z"
  })), _react["default"].createElement("g", {
    fill: "#FF0"
  }, _react["default"].createElement("path", {
    d: "M15.676 16.029l-.036-.003L-12 13.742v4.574l27.63-2.284zM15.676 16.029l.045.003 27.63 2.284v-4.574l-27.64 2.284zM-8.3-3.48a6.174 6.174 0 00-3.079 2.947L15.676 16-8.3-3.48zM42.73-.533a6.173 6.173 0 00-3.08-2.947L15.676 16 42.73-.533zM17.982-3.988h-4.613L15.676 16z"
  })))));
}

SvgReunion.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgReunion.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgReunion;
exports["default"] = _default;