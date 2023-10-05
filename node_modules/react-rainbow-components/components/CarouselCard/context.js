"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = exports.Consumer = exports.CarouselCardContext = void 0;

var _react = _interopRequireDefault(require("react"));

var CarouselCardContext = _react["default"].createContext();

exports.CarouselCardContext = CarouselCardContext;
var Provider = CarouselCardContext.Provider,
    Consumer = CarouselCardContext.Consumer;
exports.Consumer = Consumer;
exports.Provider = Provider;