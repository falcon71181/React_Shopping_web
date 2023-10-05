"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgEthiopia(_ref) {
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
    d: "M0 16c0 1.957.352 3.832.995 5.565L16 22.956l15.005-1.39C31.648 19.831 32 17.956 32 16c0-1.93-.342-3.78-.968-5.494L16 9.043.968 10.506A15.967 15.967 0 000 16z",
    fill: "#FFDA44"
  }), _react["default"].createElement("path", {
    d: "M16 32c6.88 0 12.744-4.342 15.005-10.435H.995C3.255 27.658 9.121 32 16 32z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    d: "M16 0C9.12 0 3.256 4.342.995 10.435h30.01C28.745 4.342 22.879 0 16 0z",
    fill: "#6DA544"
  }), _react["default"].createElement("circle", {
    fill: "#0052B4",
    cx: 16,
    cy: 16,
    r: 7.652
  }), _react["default"].createElement("g", {
    fill: "#FFDA44"
  }, _react["default"].createElement("path", {
    d: "M15.998 10.074l1.382 4.252h4.477l-3.624 2.627 1.393 4.264-3.628-2.64-3.621 2.635 1.386-4.259-3.62-2.627h4.474z"
  }), _react["default"].createElement("path", {
    d: "M21.508 17.058l-4.382-1.424 2.708-3.727-1.126-.818L16 14.817l-2.708-3.728-1.126.818 2.708 3.727-4.382 1.424.43 1.323 4.382-1.423v4.607h1.392v-4.608l4.382 1.424z"
  }))));
}

SvgEthiopia.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgEthiopia.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgEthiopia;
exports["default"] = _default;