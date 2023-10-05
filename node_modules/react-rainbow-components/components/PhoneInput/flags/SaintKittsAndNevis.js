"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgSaintKittsAndNevis(_ref) {
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
  }), _react["default"].createElement("path", {
    d: "M4.686 27.314c.671.67 1.388 1.27 2.139 1.796L29.11 6.825a16.083 16.083 0 00-3.935-3.935L2.89 25.175a16.084 16.084 0 001.796 2.139z",
    fill: "#000"
  }), _react["default"].createElement("path", {
    d: "M4.686 4.686C-.36 9.734-1.33 17.315 1.777 23.336l21.56-21.559C17.314-1.33 9.733-.36 4.686 4.687z",
    fill: "#6DA544"
  }), _react["default"].createElement("path", {
    d: "M27.314 27.314c5.047-5.048 6.016-12.629 2.909-18.65L8.663 30.223c6.022 3.107 13.603 2.138 18.65-2.91z",
    fill: "#D80027"
  }), _react["default"].createElement("g", {
    fill: "#F0F0F0"
  }, _react["default"].createElement("path", {
    d: "M10.173 18.876l1.494.76 1.185-1.185-.262 1.656 1.493.76-1.655.263-.262 1.656-.761-1.494-1.656.262 1.185-1.185zM18.875 10.173l1.494.761 1.185-1.185-.262 1.655 1.494.762-1.656.262-.262 1.655-.761-1.493-1.656.262 1.186-1.185z"
  }))));
}

SvgSaintKittsAndNevis.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgSaintKittsAndNevis.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgSaintKittsAndNevis;
exports["default"] = _default;