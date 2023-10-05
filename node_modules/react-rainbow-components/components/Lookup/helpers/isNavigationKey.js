"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isNavigationKey;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _constants = require("../../../libs/constants");

var _KEYS;

var KEYS = (_KEYS = {}, (0, _defineProperty2["default"])(_KEYS, _constants.UP_KEY, true), (0, _defineProperty2["default"])(_KEYS, _constants.DOWN_KEY, true), (0, _defineProperty2["default"])(_KEYS, _constants.ENTER_KEY, true), _KEYS);

function isNavigationKey(keyCode) {
  return !!KEYS[keyCode];
}