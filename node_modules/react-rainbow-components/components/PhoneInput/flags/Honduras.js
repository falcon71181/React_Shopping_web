"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgHonduras(_ref) {
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
    fill: "#338AF3"
  }, _react["default"].createElement("path", {
    d: "M16 32c6.343 0 11.824-3.692 14.412-9.044H1.588C4.176 28.308 9.657 32 16 32zM16 0C9.657 0 4.176 3.692 1.588 9.043h28.824C27.824 3.692 22.343 0 16 0zM9.847 10.435l.518 1.594h1.676l-1.356.985.518 1.595-1.356-.986-1.357.986.518-1.595-1.356-.985H9.33zM9.847 17.391l.518 1.595h1.676l-1.356.985.518 1.594-1.356-.985-1.357.985.518-1.594-1.356-.985H9.33zM22.153 10.435l.519 1.594h1.676l-1.356.985.518 1.595-1.357-.986-1.356.986.518-1.595-1.356-.985h1.676zM22.153 17.391l.519 1.595h1.676l-1.356.985.518 1.594-1.357-.985-1.356.985.518-1.594-1.356-.985h1.676zM16 13.913l.518 1.594h1.676l-1.356.986.518 1.594L16 17.102l-1.356.985.518-1.594-1.356-.986h1.676z"
  }))));
}

SvgHonduras.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgHonduras.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgHonduras;
exports["default"] = _default;