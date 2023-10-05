"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = exports.Consumer = exports.ColorPickerContext = void 0;

var _react = _interopRequireDefault(require("react"));

var ColorPickerContext = _react["default"].createContext();

exports.ColorPickerContext = ColorPickerContext;
var Provider = ColorPickerContext.Provider,
    Consumer = ColorPickerContext.Consumer;
exports.Consumer = Consumer;
exports.Provider = Provider;