"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgMarshallIsland(_ref) {
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
    d: "M16 32c8.837 0 16-7.163 16-16 0-2.685-.663-5.215-1.831-7.438L15.98 16.02 23.438 1.83A15.929 15.929 0 0016 0C7.163 0 0 7.163 0 16a15.95 15.95 0 004.686 11.314A15.95 15.95 0 0016 32z",
    fill: "#0052B4"
  }), _react["default"].createElement("path", {
    d: "M30.152 8.58a15.997 15.997 0 00-2.857-3.875 15.993 15.993 0 00-3.875-2.857L4.668 27.332 30.152 8.58z",
    fill: "#F0F0F0"
  }), _react["default"].createElement("path", {
    d: "M4.668 27.332L30.152 8.58a15.997 15.997 0 00-2.857-3.875L4.668 27.332z",
    fill: "#FF9811"
  }), _react["default"].createElement("path", {
    fill: "#F0F0F0",
    d: "M13.894 9.383l-1.954.919 1.04 1.892-2.121-.406-.269 2.144-1.478-1.577-1.478 1.577-.269-2.144-2.122.406 1.04-1.892-1.953-.92 1.954-.919-1.04-1.892 2.121.406.27-2.144L9.111 6.41l1.478-1.577.269 2.144 2.122-.406-1.04 1.893z"
  })));
}

SvgMarshallIsland.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgMarshallIsland.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgMarshallIsland;
exports["default"] = _default;