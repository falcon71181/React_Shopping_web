"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgIsrael(_ref) {
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
  }), _react["default"].createElement("g", {
    fill: "#0052B4"
  }, _react["default"].createElement("path", {
    d: "M22.025 12.522h-4.017L16 9.043l-2.008 3.479H9.975L11.984 16l-2.009 3.478h4.017L16 22.956l2.008-3.478h4.017L20.016 16l2.009-3.478zM18.467 16l-1.233 2.137h-2.467L13.533 16l1.233-2.137h2.468L18.467 16zM16 11.726l.46.796h-.919l.459-.796zm-3.7 2.137h.917l-.459.796-.459-.796zm0 4.274l.458-.796.46.796h-.919zm3.7 2.136l-.46-.795h.92l-.46.795zm3.7-2.136h-.917l.459-.796.459.796zm-.917-4.274h.918l-.46.796-.458-.796zM25.96 3.478H6.04a16.08 16.08 0 00-3.692 4.174h27.304a16.084 16.084 0 00-3.692-4.174zM6.04 28.522h19.92a16.08 16.08 0 003.692-4.174H2.348a16.084 16.084 0 003.692 4.174z"
  }))));
}

SvgIsrael.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgIsrael.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgIsrael;
exports["default"] = _default;