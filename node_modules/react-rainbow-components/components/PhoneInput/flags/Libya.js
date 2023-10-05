"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgLibya(_ref) {
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
    d: "M1.588 9.043A15.936 15.936 0 000 16c0 2.493.57 4.853 1.588 6.956L16 24.348l14.412-1.392A15.936 15.936 0 0032 16c0-2.493-.57-4.853-1.588-6.957L16 7.654 1.588 9.042z",
    fill: "#000"
  }), _react["default"].createElement("path", {
    d: "M1.588 22.956C4.176 28.308 9.657 32 16 32s11.824-3.692 14.412-9.044H1.588z",
    fill: "#496E2D"
  }), _react["default"].createElement("path", {
    d: "M1.588 9.043h28.824C27.824 3.692 22.343 0 16 0S4.176 3.692 1.588 9.043z",
    fill: "#D80027"
  }), _react["default"].createElement("g", {
    fill: "#F0F0F0"
  }, _react["default"].createElement("path", {
    d: "M19.724 13.074l1.313 1.81 2.126-.69L21.848 16l1.313 1.81-2.126-.693-1.314 1.808V16.69l-2.124-.692 2.126-.69z"
  }), _react["default"].createElement("path", {
    d: "M16.141 20.522a4.522 4.522 0 112.151-8.5 5.565 5.565 0 100 7.956 4.5 4.5 0 01-2.15.544z"
  }))));
}

SvgLibya.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgLibya.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgLibya;
exports["default"] = _default;