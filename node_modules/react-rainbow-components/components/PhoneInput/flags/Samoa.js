"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgSamoa(_ref) {
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
    d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16L16 0c8.837 0 16 7.163 16 16z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    d: "M16 16V0C7.163 0 0 7.163 0 16h16z",
    fill: "#0052B4"
  }), _react["default"].createElement("g", {
    fill: "#F0F0F0"
  }, _react["default"].createElement("path", {
    d: "M12.816 10.435l.259.797h.838l-.678.493.259.797-.678-.493-.678.493.259-.797-.678-.493h.838zM8.606 4.174l.432 1.329h1.397l-1.13.82.431 1.33-1.13-.822-1.13.821.432-1.328-1.13-.821h1.396zM12.78 5.565l.432 1.329h1.397l-1.13.82.431 1.33-1.13-.822-1.13.822.432-1.33-1.13-.82h1.396zM9.48 11.13l.433 1.33h1.396l-1.13.82.432 1.329-1.13-.821-1.13.82.431-1.328-1.13-.82H9.05zM5.824 7.652l.431 1.329h1.397l-1.13.82.432 1.33-1.13-.822-1.13.821.431-1.328-1.13-.821h1.397z"
  }))));
}

SvgSamoa.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgSamoa.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgSamoa;
exports["default"] = _default;