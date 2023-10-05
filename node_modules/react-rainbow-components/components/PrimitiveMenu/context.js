"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = exports.PrimitiveMenuContext = exports.Consumer = void 0;

var _react = _interopRequireDefault(require("react"));

var PrimitiveMenuContext = _react["default"].createContext();

exports.PrimitiveMenuContext = PrimitiveMenuContext;
var Provider = PrimitiveMenuContext.Provider,
    Consumer = PrimitiveMenuContext.Consumer;
exports.Consumer = Consumer;
exports.Provider = Provider;