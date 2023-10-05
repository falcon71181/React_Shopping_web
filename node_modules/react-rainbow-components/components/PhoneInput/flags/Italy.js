"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgItaly(_ref) {
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
    d: "M.552 12.156C2.669 3.576 11.316-1.65 19.875.473c8.558 2.122 13.77 10.792 11.654 19.372-2.118 8.572-10.765 13.806-19.324 11.683-8.55-2.131-13.77-10.8-11.653-19.372",
    fill: "#F1F2F2"
  }), _react["default"].createElement("path", {
    d: "M10.675.924A15.952 15.952 0 00.533 12.152c-1.988 8.06 2.497 16.202 10.142 18.916V.924z",
    fill: "#00A94F"
  }), _react["default"].createElement("path", {
    d: "M21.39.932v30.12c4.856-1.75 8.784-5.817 10.117-11.22 1.988-8.045-2.489-16.178-10.117-18.9",
    fill: "#EF3827"
  })));
}

SvgItaly.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgItaly.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgItaly;
exports["default"] = _default;