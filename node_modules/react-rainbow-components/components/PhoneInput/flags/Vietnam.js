"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgVietnam(_ref) {
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
    fill: "#FFDA44",
    d: "M16 8.348l1.727 5.314h5.588l-4.521 3.284 1.727 5.315L16 18.976l-4.52 3.285 1.726-5.314-4.52-3.285h5.587z"
  })));
}

SvgVietnam.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgVietnam.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgVietnam;
exports["default"] = _default;