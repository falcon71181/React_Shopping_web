"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgMongolia(_ref) {
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
    d: "M16 32c1.957 0 3.832-.352 5.565-.995L22.261 16 21.565.995A15.966 15.966 0 0016 0c-1.957 0-3.832.352-5.565.995L9.739 16l.696 15.005c1.733.643 3.608.995 5.565.995z",
    fill: "#0052B4"
  }), _react["default"].createElement("g", {
    fill: "#A2001D"
  }, _react["default"].createElement("path", {
    d: "M0 16c0 6.88 4.342 12.744 10.435 15.005V.995C4.342 3.255 0 9.121 0 16zM21.565.995v30.01C27.658 28.745 32 22.879 32 16 32 9.12 27.658 3.256 21.565.995z"
  })), _react["default"].createElement("g", {
    transform: "translate(2.063 8.313)",
    fill: "#FFDA44"
  }, _react["default"].createElement("path", {
    d: "M5.59 7.688h1.391v5.565H5.59zM.024 7.688h1.391v5.565H.024z"
  }), _react["default"].createElement("circle", {
    cx: 3.503,
    cy: 9.774,
    r: 1.391
  }), _react["default"].createElement("circle", {
    cx: 3.503,
    cy: 4.905,
    r: 1
  }), _react["default"].createElement("path", {
    d: "M2.111 11.861h2.783v1.391H2.111zM2.111 6.296h2.783v1.391H2.111zM3.503.035l.492 1.517H5.59l-1.29.937.492 1.516-1.29-.937-1.289.937.492-1.516-1.29-.937H3.01z"
  }))));
}

SvgMongolia.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgMongolia.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgMongolia;
exports["default"] = _default;