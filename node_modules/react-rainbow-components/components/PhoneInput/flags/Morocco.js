"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgMorocco(_ref) {
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
    fill: "#D80027",
    cx: 16,
    cy: 16,
    r: 16
  }), _react["default"].createElement("path", {
    d: "M25.456 13.13h-7.224L16 6.26l-2.232 6.87H6.544l5.844 4.246-2.232 6.87L16 20.001l5.844 4.245-2.232-6.87 5.844-4.245zm-11.432 3.715l.755-2.323h2.442l.755 2.323L16 18.281l-1.976-1.436zm2.745-3.714h-1.538L16 10.763l.77 2.368zm2.39 2.854l-.475-1.463h2.49l-2.014 1.463zm-5.843-1.463l-.476 1.463-2.014-1.463h2.49zm-.513 6.082l.769-2.368 1.245.905-2.014 1.463zm4.38-1.463l1.245-.905.77 2.368-2.015-1.463z",
    fill: "#FFDA44"
  })));
}

SvgMorocco.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgMorocco.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgMorocco;
exports["default"] = _default;