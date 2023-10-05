"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ClockLine;

var _react = _interopRequireDefault(require("react"));

var _hooks = require("../hooks");

var _hooks2 = require("./hooks");

var _clockLine = _interopRequireDefault(require("./styled/clockLine"));

var _circle = _interopRequireDefault(require("./styled/circle"));

var _line = _interopRequireDefault(require("./styled/line"));

function ClockLine() {
  var clock = (0, _hooks.useTimer)();
  var style = (0, _hooks2.useClockLineStyle)(clock);
  return _react["default"].createElement(_clockLine["default"], {
    style: style
  }, _react["default"].createElement(_circle["default"], null), _react["default"].createElement(_line["default"], null));
}