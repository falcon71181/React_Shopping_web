"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgComoros(_ref) {
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
    cx: 16.031,
    cy: 15.969,
    r: 15.969
  }), _react["default"].createElement("path", {
    d: "M32 15.923H14.688c-3.437 3.437-5.515 6.09-7.637 8.212l9.025.813 14.006-1.388A15.897 15.897 0 0032 15.969v-.046z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    d: "M7.052 8.285h22.98C27.318 3.347 22.066 0 16.033 0c-4.399 0-8.38 1.778-11.269 4.655l2.289 3.63z",
    fill: "#FFDA44"
  }), _react["default"].createElement("path", {
    d: "M7.746 23.56c-1.436 1.435-1.99 2.638-3.03 3.677a15.918 15.918 0 0011.315 4.7c6.072 0 11.352-3.388 14.053-8.377H7.746z",
    fill: "#0052B4"
  }), _react["default"].createElement("path", {
    d: "M4.74 4.63c-6.237 6.237-6.237 16.348 0 22.584L16.03 15.923 4.74 4.63z",
    fill: "#6DA544"
  }), _react["default"].createElement("g", {
    fill: "#F0F0F0"
  }, _react["default"].createElement("path", {
    d: "M4.274 15.923a4.86 4.86 0 013.82-4.747 4.86 4.86 0 100 9.494 4.86 4.86 0 01-3.82-4.747z"
  }), _react["default"].createElement("path", {
    d: "M8.04 11.757l.258.795h.837l-.677.492.258.796-.677-.492-.676.492.258-.796-.677-.492h.837zM8.04 13.84l.258.795h.837l-.677.492.258.796-.677-.492-.676.492.258-.796-.677-.492h.837zM8.04 15.923l.258.795h.837l-.677.492.258.795-.677-.491-.676.491.258-.795-.677-.492h.837z"
  }), _react["default"].createElement("path", {
    d: "M8.04 18.005l.258.796h.837l-.677.492.258.795-.677-.491-.676.491.258-.795-.677-.492h.837z"
  }))));
}

SvgComoros.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgComoros.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgComoros;
exports["default"] = _default;