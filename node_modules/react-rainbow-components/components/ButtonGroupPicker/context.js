"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = exports.Consumer = exports.ButtonGroupPickerContext = void 0;

var _react = _interopRequireDefault(require("react"));

var ButtonGroupPickerContext = _react["default"].createContext();

exports.ButtonGroupPickerContext = ButtonGroupPickerContext;
var Provider = ButtonGroupPickerContext.Provider,
    Consumer = ButtonGroupPickerContext.Consumer;
exports.Consumer = Consumer;
exports.Provider = Provider;