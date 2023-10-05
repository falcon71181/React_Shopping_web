"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var isButtonDisabled = function isButtonDisabled(isMinOrMax, disable, readOnly) {
  if (isMinOrMax || disable || readOnly) {
    return true;
  }

  return false;
};

var _default = isButtonDisabled;
exports["default"] = _default;