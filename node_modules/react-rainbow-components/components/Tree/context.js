"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeContext = exports.Provider = exports.Consumer = void 0;

var _react = _interopRequireDefault(require("react"));

var TreeContext = _react["default"].createContext();

exports.TreeContext = TreeContext;
var Provider = TreeContext.Provider,
    Consumer = TreeContext.Consumer;
exports.Consumer = Consumer;
exports.Provider = Provider;