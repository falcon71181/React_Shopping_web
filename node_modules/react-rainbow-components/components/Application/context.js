"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = exports.Consumer = exports.AppContext = void 0;

var _react = _interopRequireDefault(require("react"));

var AppContext = _react["default"].createContext();

exports.AppContext = AppContext;
var Provider = AppContext.Provider,
    Consumer = AppContext.Consumer;
exports.Consumer = Consumer;
exports.Provider = Provider;