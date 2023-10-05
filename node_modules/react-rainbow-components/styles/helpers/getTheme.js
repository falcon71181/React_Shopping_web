"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getTheme;

var _defaultTheme = _interopRequireDefault(require("../defaultTheme"));

function getTheme(props) {
  return props.theme.rainbow || _defaultTheme["default"];
}