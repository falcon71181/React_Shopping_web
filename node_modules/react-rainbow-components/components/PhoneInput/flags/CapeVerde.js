"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgCapeVerde(_ref) {
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
    d: "M16 32c4.85 0 9.195-2.158 12.129-5.565H3.87A15.963 15.963 0 0016 32zM32 16c0-8.837-7.163-16-16-16S0 7.163 0 16c0 1.444.193 2.843.551 4.174H31.45c.358-1.33.551-2.73.551-4.174z"
  })), _react["default"].createElement("path", {
    d: "M1.272 22.26c.308.726.669 1.423 1.076 2.088h27.304c.407-.665.768-1.362 1.076-2.087H1.272z",
    fill: "#D80027"
  }), _react["default"].createElement("g", {
    fill: "#FFDA44"
  }, _react["default"].createElement("path", {
    d: "M11.437 17.044l.259.797h.838l-.678.492.259.797-.678-.492-.678.492.259-.797-.678-.492h.838zM11.437 27.478l.259.797h.838l-.678.493.259.797-.678-.492-.678.492.259-.797-.678-.493h.838zM6.58 23.95l.259.796h.838l-.678.493.259.797-.678-.492-.679.492.26-.797-.678-.493h.838zM8.435 18.087l.259.797h.838l-.678.493.26.797-.68-.493-.677.493.259-.797-.678-.493h.838zM5.482 21.37h.838l.26-.798.259.798h.838l-.678.492.259.798-.678-.493-.679.492.26-.797zM7.757 28.37l.259-.798-.678-.492h.838l.259-.797.259.797h.838l-.678.492.259.798-.678-.493zM16.292 23.95l-.259.796h-.838l.678.493-.259.797.678-.492.678.492-.259-.797.679-.493h-.839zM14.437 18.087l-.259.797h-.838l.678.493-.26.797.679-.493.678.493-.259-.797.678-.493h-.838zM17.39 21.37h-.839l-.259-.798-.259.798h-.838l.678.492-.259.798.678-.493.678.492-.259-.797zM15.115 28.37l-.259-.798.678-.492h-.838l-.259-.797-.259.797h-.838l.678.492-.26.798.68-.493z"
  }))));
}

SvgCapeVerde.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgCapeVerde.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgCapeVerde;
exports["default"] = _default;