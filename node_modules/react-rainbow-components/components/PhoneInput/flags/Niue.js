"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgNiue(_ref) {
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
    d: "M16.019 0h-.022.022z",
    fill: "#F0F0F0"
  }), _react["default"].createElement("path", {
    d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16C0 16.004 16 .002 16 0c8.837 0 16 7.163 16 16z",
    fill: "#FFDA44"
  }), _react["default"].createElement("g", {
    fill: "#0052B4"
  }, _react["default"].createElement("path", {
    d: "M16 7.652v5.397l-5.565-5.397zM8.348 16h4.7l-4.7-6.26-.696 4.869z"
  })), _react["default"].createElement("g", {
    fill: "#F0F0F0"
  }, _react["default"].createElement("path", {
    d: "M15.957 16.3h.343v-.343l-.343.343zM16 8.348V0h-.003C7.162.002 0 7.164 0 16h8.348v-4.7l4.7 4.7h2.91l.042-.043V13.05l-4.7-4.701H16z"
  })), _react["default"].createElement("g", {
    fill: "#D80027"
  }, _react["default"].createElement("path", {
    d: "M16 14.032l-5.685-5.684H8.348L16 16v-1.968z"
  }), _react["default"].createElement("path", {
    d: "M8.095 2.087c-.617.351-1.208.743-1.77 1.17h.656l-1.735 1.26.663 2.04-1.735-1.26-.185.134c-.72.818-1.359 1.71-1.902 2.664V16H6.26V6.261H16V2.087H8.095z"
  })), _react["default"].createElement("path", {
    d: "M6.835 2.885c-.173.12-.343.245-.51.372l-1.079 1.26-1.072.78-.186.135c-.393.446-.762.915-1.104 1.403a2.956 2.956 0 003.95-3.95z",
    fill: "#0052B4"
  }), _react["default"].createElement("g", {
    fill: "#FFDA44"
  }, _react["default"].createElement("path", {
    d: "M3.988 5.432l.186-.135 1.735 1.26-.663-2.04 1.735-1.26h-.656a16.1 16.1 0 00-2.337 2.175zM11.059 2.783l.345 1.062h1.118l-.904.657.345 1.063-.904-.657-.904.657.345-1.063-.904-.657h1.117zM4.174 9.74l.345 1.062h1.118l-.904.657.345 1.063-.904-.657-.904.657.345-1.063-.904-.657h1.117z"
  }))));
}

SvgNiue.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgNiue.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgNiue;
exports["default"] = _default;