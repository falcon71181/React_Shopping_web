"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _RainbowThemeContainer = _interopRequireDefault(require("../../../components/RainbowThemeContainer"));

var withRainbowTheme = function withRainbowTheme(Component, theme) {
  return function (props) {
    return _react["default"].createElement(_RainbowThemeContainer["default"], {
      theme: theme
    }, _react["default"].createElement(Component, props));
  };
};

var _default = withRainbowTheme;
exports["default"] = _default;