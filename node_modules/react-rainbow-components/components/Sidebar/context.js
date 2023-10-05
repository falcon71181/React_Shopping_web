"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = void 0;
exports.withContext = withContext;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _React$createContext = _react["default"].createContext(),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

exports.Provider = Provider;

function withContext(Component) {
  return function (props) {
    return _react["default"].createElement(Consumer, null, function (context) {
      return _react["default"].createElement(Component, (0, _extends2["default"])({}, props, context));
    });
  };
}