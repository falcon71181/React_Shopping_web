"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgKenya(_ref) {
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
  }), _react["default"].createElement("path", {
    d: "M16 0C9.657 0 4.176 3.692 1.588 9.043h28.824C27.824 3.692 22.343 0 16 0z",
    fill: "#000"
  }), _react["default"].createElement("path", {
    d: "M16 32c-6.343 0-11.824-3.692-14.412-9.044h28.824C27.824 28.308 22.343 32 16 32z",
    fill: "#496E2D"
  }), _react["default"].createElement("path", {
    d: "M31.244 11.13H.756A15.988 15.988 0 000 16c0 1.698.265 3.334.756 4.87h30.488c.49-1.536.756-3.172.756-4.87s-.265-3.334-.756-4.87z",
    fill: "#A2001D"
  }), _react["default"].createElement("g", {
    fill: "#F0F0F0"
  }, _react["default"].createElement("path", {
    d: "M20.982 7.394l-1.895-.875L16 13.51l-3.087-6.99-1.895.875L14.85 16l-3.833 8.606 1.895.875L16 18.49l3.087 6.99 1.895-.875L17.15 16z"
  }), _react["default"].createElement("path", {
    d: "M17.287 8.218C16.553 7.417 16 6.957 16 6.957s-.553.46-1.287 1.261v15.564c.734.801 1.287 1.262 1.287 1.262s.553-.46 1.287-1.262V8.218z"
  })), _react["default"].createElement("g", {
    fill: "#A2001D"
  }, _react["default"].createElement("path", {
    d: "M12.522 11.203v9.594c.775 1.374 1.724 2.5 2.435 3.246V7.957c-.711.747-1.66 1.872-2.435 3.246zM19.478 11.203c-.775-1.374-1.724-2.5-2.435-3.246v16.086c.711-.747 1.66-1.872 2.435-3.246v-9.594z"
  })), _react["default"].createElement("path", {
    d: "M19.478 11.203v9.594c.785-1.39 1.392-3.035 1.392-4.797 0-1.762-.607-3.407-1.392-4.797zM12.522 11.203v9.594c-.785-1.39-1.392-3.035-1.392-4.797 0-1.762.607-3.407 1.392-4.797z",
    fill: "#000"
  })));
}

SvgKenya.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgKenya.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgKenya;
exports["default"] = _default;