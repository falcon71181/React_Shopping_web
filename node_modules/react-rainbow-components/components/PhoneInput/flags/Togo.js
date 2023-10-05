"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgTogo(_ref) {
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
    fill: "#FFDA44",
    cx: 16,
    cy: 16,
    r: 16
  }), _react["default"].createElement("g", {
    fill: "#496E2D"
  }, _react["default"].createElement("path", {
    d: "M16 0c-.012 0-.696 6.4-.696 6.4h13.497C25.88 2.514 21.235 0 16 0zM16 32c5.235 0 9.882-2.514 12.8-6.4H3.2C6.117 29.486 10.765 32 16 32zM31.68 12.8H15.304L16 19.2h15.68c.21-1.034.32-2.104.32-3.2s-.11-2.166-.32-3.2z"
  })), _react["default"].createElement("path", {
    d: "M16 19.2V0C7.163 0 0 7.163 0 16c0 1.096.11 2.166.32 3.2H16z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    fill: "#F0F0F0",
    d: "M8.829 7.652l1.036 3.189h3.352l-2.712 1.97L11.541 16l-2.712-1.97L6.116 16l1.036-3.189-2.712-1.97h3.353z"
  })));
}

SvgTogo.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgTogo.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgTogo;
exports["default"] = _default;