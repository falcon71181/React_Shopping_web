"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgBotswana(_ref) {
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
    d: "M.756 11.13A15.985 15.985 0 000 16c0 1.698.265 3.334.756 4.87L16 21.564l15.244-.696A15.99 15.99 0 0032 16c0-1.698-.265-3.334-.756-4.87L16 10.435.756 11.13z",
    fill: "#F0F0F0"
  }), _react["default"].createElement("path", {
    d: "M32 16c0-.95-.083-1.879-.242-2.783H.242a16.085 16.085 0 000 5.566h31.516c.159-.904.242-1.834.242-2.783z",
    fill: "#000"
  }), _react["default"].createElement("g", {
    fill: "#338AF3"
  }, _react["default"].createElement("path", {
    d: "M16 32c7.139 0 13.184-4.675 15.244-11.13H.756C2.816 27.324 8.862 32 16 32zM16 0C8.862 0 2.816 4.675.756 11.13h30.488C29.184 4.675 23.138 0 16 0z"
  }))));
}

SvgBotswana.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgBotswana.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgBotswana;
exports["default"] = _default;