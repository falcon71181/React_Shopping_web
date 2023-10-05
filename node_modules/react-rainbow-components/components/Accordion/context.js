"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = exports.Consumer = exports.AccordionContext = void 0;

var _react = _interopRequireDefault(require("react"));

var AccordionContext = _react["default"].createContext();

exports.AccordionContext = AccordionContext;
var Provider = AccordionContext.Provider,
    Consumer = AccordionContext.Consumer;
exports.Consumer = Consumer;
exports.Provider = Provider;