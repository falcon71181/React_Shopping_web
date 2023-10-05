"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getLocale;

var _getBrowserLocale = _interopRequireDefault(require("./getBrowserLocale"));

function getLocale(context, localProp) {
  return localProp || context && context.locale || (0, _getBrowserLocale["default"])();
}