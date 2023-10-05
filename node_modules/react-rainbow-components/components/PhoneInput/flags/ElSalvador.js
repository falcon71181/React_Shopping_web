"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgElSalvador(_ref) {
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
    fill: "#0052B4"
  }, _react["default"].createElement("path", {
    d: "M16 0C9.657 0 4.176 3.692 1.588 9.043h28.824C27.824 3.692 22.343 0 16 0zM16 32c6.343 0 11.824-3.692 14.412-9.044H1.588C4.176 28.308 9.657 32 16 32z"
  })), _react["default"].createElement("path", {
    fill: "#FFDA44",
    d: "M12.787 16.696L16 11.13l3.213 5.566z"
  }), _react["default"].createElement("path", {
    fill: "#6DA544",
    d: "M20.174 18.533L16 20.62l-4.174-2.087v-2.782h8.348z"
  }), _react["default"].createElement("path", {
    d: "M19.935 11.37l-1.476 1.475a3.478 3.478 0 11-4.919 0l-1.475-1.476a5.565 5.565 0 107.87 0z",
    fill: "#FFDA44"
  })));
}

SvgElSalvador.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgElSalvador.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgElSalvador;
exports["default"] = _default;