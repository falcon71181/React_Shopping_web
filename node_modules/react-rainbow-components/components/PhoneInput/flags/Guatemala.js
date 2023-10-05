"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgGuatemala(_ref) {
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
    fill: "#338AF3"
  }, _react["default"].createElement("path", {
    d: "M32 16c0-6.343-3.692-11.824-9.044-14.412v28.824C28.308 27.824 32 22.343 32 16zM0 16c0 6.343 3.692 11.824 9.043 14.412V1.588C3.692 4.176 0 9.657 0 16z"
  })), _react["default"].createElement("path", {
    fill: "#ACABB1",
    d: "M20.181 18.706L17.476 16l2.575-2.575-.117-1.36-.737-.738L16 14.524l-3.197-3.197-.737.738-.117 1.36L14.524 16l-2.705 2.706 1.476 1.475L16 17.476l2.705 2.705z"
  }), _react["default"].createElement("path", {
    d: "M19.935 12.065L18.46 13.54a3.478 3.478 0 11-4.919 0l-1.475-1.476a5.565 5.565 0 107.87 0z",
    fill: "#6DA544"
  })));
}

SvgGuatemala.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgGuatemala.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgGuatemala;
exports["default"] = _default;