"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgMalaysia(_ref) {
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
    fill: "#D80027"
  }, _react["default"].createElement("path", {
    d: "M15.304 16H32c0-1.444-.192-2.843-.551-4.174H15.304V16zM15.304 7.652h14.348a16.083 16.083 0 00-3.692-4.174H15.304v4.174zM16 32c3.766 0 7.227-1.302 9.96-3.478H6.04A15.932 15.932 0 0016 32zM2.348 24.348h27.304a15.906 15.906 0 001.797-4.174H.55a15.904 15.904 0 001.797 4.174z"
  })), _react["default"].createElement("path", {
    d: "M16 16V0C7.163 0 0 7.163 0 16h16z",
    fill: "#0052B4"
  }), _react["default"].createElement("g", {
    fill: "#FFDA44"
  }, _react["default"].createElement("path", {
    d: "M10.64 13.696a3.957 3.957 0 111.882-7.438 4.87 4.87 0 100 6.962 3.94 3.94 0 01-1.882.476z"
  }), _react["default"].createElement("path", {
    d: "M11.755 6.957l.702 1.468 1.586-.366-.71 1.465 1.276 1.011-1.589.359.005 1.628-1.27-1.019-1.27 1.019.004-1.628-1.589-.359 1.276-1.011-.71-1.465 1.586.366z"
  }))));
}

SvgMalaysia.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgMalaysia.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgMalaysia;
exports["default"] = _default;