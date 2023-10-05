"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = exports.MonthCalendarContext = exports.Consumer = void 0;

var _react = _interopRequireDefault(require("react"));

var MonthCalendarContext = _react["default"].createContext();

exports.MonthCalendarContext = MonthCalendarContext;
var Provider = MonthCalendarContext.Provider,
    Consumer = MonthCalendarContext.Consumer;
exports.Consumer = Consumer;
exports.Provider = Provider;