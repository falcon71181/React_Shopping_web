"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgBermuda(_ref) {
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
    d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16C0 16.004 16 .002 16 0c8.837 0 16 7.163 16 16z",
    fill: "#D80027"
  }), _react["default"].createElement("g", {
    fill: "#0052B4"
  }, _react["default"].createElement("path", {
    d: "M16 7.652v5.397l-5.565-5.397zM8.348 16h4.7l-4.7-6.26-.696 4.869z"
  })), _react["default"].createElement("g", {
    fill: "#F0F0F0"
  }, _react["default"].createElement("path", {
    d: "M16.019 0h-.022.022zM15.957 16.3h.343v-.343l-.343.343zM16 8.348V0h-.003C7.162.002 0 7.164 0 16h8.348v-4.7l4.7 4.7h2.91l.042-.043V13.05l-4.7-4.701H16z"
  })), _react["default"].createElement("g", {
    fill: "#D80027"
  }, _react["default"].createElement("path", {
    d: "M8.095 2.087a16.076 16.076 0 00-6.008 6.008v8.6H6.26V6.262h10.435V2.087H8.095z"
  }), _react["default"].createElement("path", {
    d: "M16.636 14.668l-6.32-6.32H8.347l8.288 8.288v-1.968z"
  })), _react["default"].createElement("path", {
    d: "M18.087 8.348V16c0 3.727 9.74 3.727 9.74 0V8.348h-9.74z",
    fill: "#F3F3F3"
  }), _react["default"].createElement("path", {
    d: "M18.087 16c0 3.727 4.87 4.87 4.87 4.87s4.87-1.143 4.87-4.87h-9.74z",
    fill: "#6DA544"
  }), _react["default"].createElement("path", {
    fill: "#A2001D",
    d: "M22.956 12.94l-2.26.973V16l2.26 1.391L25.217 16v-2.087z"
  }), _react["default"].createElement("path", {
    fill: "#338AF3",
    d: "M20.696 11.826h4.522v2.087h-4.522z"
  })));
}

SvgBermuda.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgBermuda.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgBermuda;
exports["default"] = _default;