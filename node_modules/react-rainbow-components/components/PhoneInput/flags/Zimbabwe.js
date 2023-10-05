"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgZimbabwe(_ref) {
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
    fill: "#FFDA44"
  }, _react["default"].createElement("path", {
    d: "M30.469 9.163a16.04 16.04 0 00-3.263-4.582L16 3.478 4.794 4.581l-.106.107 4.475 4.475L16 9.372l14.469-.21zM4.688 27.312c.058.06.117.118.177.176L16 28.522l11.135-1.034a16.043 16.043 0 003.301-4.581L9.74 22.26l-5.051 5.051z"
  })), _react["default"].createElement("path", {
    d: "M31.84 13.744l-18.623-.527L16 16l-2.783 2.783 18.614-.457a16.12 16.12 0 00.01-4.582z",
    fill: "#000"
  }), _react["default"].createElement("path", {
    d: "M16 0C11.636 0 7.68 1.748 4.794 4.581h22.412A15.947 15.947 0 0016 0z",
    fill: "#6DA544"
  }), _react["default"].createElement("g", {
    fill: "#D80027"
  }, _react["default"].createElement("path", {
    d: "M13.744 13.744h18.097a15.887 15.887 0 00-1.372-4.581H9.163l4.581 4.581zM9.093 22.907h21.343a15.888 15.888 0 001.395-4.582H13.675l-4.582 4.582z"
  })), _react["default"].createElement("path", {
    d: "M16 32c4.328 0 8.255-1.72 11.135-4.512H4.865A15.946 15.946 0 0016 32z",
    fill: "#6DA544"
  }), _react["default"].createElement("path", {
    d: "M5.713 3.746c-.355.299-.698.612-1.027.94L16 16 4.686 27.314c.329.328.672.641 1.027.94L17.968 16 5.713 3.746z",
    fill: "#000"
  }), _react["default"].createElement("path", {
    fill: "#D80027",
    d: "M6.433 11.826l1.036 3.189h3.353l-2.713 1.97 1.036 3.189-2.712-1.97-2.713 1.97 1.036-3.189-2.712-1.97h3.353z"
  }), _react["default"].createElement("path", {
    d: "M9.282 16.26l-2.7-.956s-.199-1.871-.211-1.934a1.044 1.044 0 10-2.03.47l-.758.763H4.93C4.93 16 3.887 16 3.887 17.39l.578 1.392h3.478l.58-1.392a1.39 1.39 0 00.108-.408c.5-.203.651-.722.651-.722z",
    fill: "#FFDA44"
  })));
}

SvgZimbabwe.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgZimbabwe.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgZimbabwe;
exports["default"] = _default;