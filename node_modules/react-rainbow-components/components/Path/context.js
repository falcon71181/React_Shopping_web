"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = exports.PathContext = exports.Consumer = void 0;

var _react = _interopRequireDefault(require("react"));

var PathContext = _react["default"].createContext();

exports.PathContext = PathContext;
var Provider = PathContext.Provider,
    Consumer = PathContext.Consumer;
exports.Consumer = Consumer;
exports.Provider = Provider;