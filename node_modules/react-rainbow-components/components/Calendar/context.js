"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = exports.Consumer = exports.CalendarContext = void 0;

var _react = _interopRequireDefault(require("react"));

var CalendarContext = _react["default"].createContext();

exports.CalendarContext = CalendarContext;
var Provider = CalendarContext.Provider,
    Consumer = CalendarContext.Consumer;
exports.Consumer = Consumer;
exports.Provider = Provider;