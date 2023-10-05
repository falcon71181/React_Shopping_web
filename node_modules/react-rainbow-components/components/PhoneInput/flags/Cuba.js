"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgCuba(_ref) {
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
    fill: "#FF9811",
    d: "M0 2.777V29.16 15.97z"
  }), _react["default"].createElement("circle", {
    fill: "#F0F0F0",
    cx: 15.969,
    cy: 15.969,
    r: 15.969
  }), _react["default"].createElement("g", {
    fill: "#0052B4"
  }, _react["default"].createElement("path", {
    d: "M15.969 0C10.745 0 6.107 2.51 3.193 6.388h25.552C25.83 2.509 21.193 0 15.969 0zM15.969 31.938c5.224 0 9.862-2.51 12.776-6.388H3.193c2.913 3.879 7.552 6.388 12.776 6.388zM0 15.969c0 1.094.11 2.162.32 3.194h31.298c.21-1.032.32-2.1.32-3.194 0-1.094-.11-2.162-.32-3.194H.32C.11 13.807 0 14.875 0 15.97z"
  })), _react["default"].createElement("path", {
    d: "M4.677 4.677c-6.236 6.236-6.236 16.347 0 22.584L15.97 15.969 4.677 4.677z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    fill: "#F0F0F0",
    d: "M6.463 11.803l1.034 3.182h3.346l-2.707 1.967 1.034 3.183-2.707-1.967-2.707 1.967 1.034-3.183-2.707-1.967h3.346z"
  })));
}

SvgCuba.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgCuba.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgCuba;
exports["default"] = _default;