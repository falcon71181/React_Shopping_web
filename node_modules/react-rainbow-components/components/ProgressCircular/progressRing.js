"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ProgressRing;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ringContainer = _interopRequireDefault(require("./styled/ringContainer"));

var _ringPath = _interopRequireDefault(require("./styled/ringPath"));

var _ringFill = _interopRequireDefault(require("./styled/ringFill"));

var _svg = _interopRequireDefault(require("./styled/svg"));

function ProgressRing(_ref) {
  var percent = _ref.percent,
      variant = _ref.variant;
  return _react["default"].createElement(_ringContainer["default"], null, _react["default"].createElement(_svg["default"], {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    version: "1.1",
    width: "140",
    height: "140",
    viewBox: "-16.8 -16.8 33.6 33.6"
  }, _react["default"].createElement(_ringPath["default"], {
    strokeWidth: "1.6",
    fill: "none",
    cx: "0",
    cy: "0",
    r: "16"
  }), _react["default"].createElement(_ringFill["default"], {
    variant: variant,
    strokeWidth: "1.6",
    strokeDasharray: "".concat(percent, " ").concat(100 - percent),
    fill: "none",
    cx: "0",
    cy: "0",
    r: "16",
    transform: "rotate(-90)"
  })));
}

ProgressRing.propTypes = {
  percent: _propTypes["default"].number.isRequired,
  variant: _propTypes["default"].oneOf(['brand', 'success', 'warning', 'error']).isRequired
};