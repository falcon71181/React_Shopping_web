"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = shouldOpenMenu;

var _constants = require("../../../libs/constants");

function shouldOpenMenu(keyCode) {
  return [_constants.LEFT_KEY, _constants.RIGHT_KEY, _constants.UP_KEY, _constants.DOWN_KEY, _constants.SPACE_KEY, _constants.ENTER_KEY].includes(keyCode);
}