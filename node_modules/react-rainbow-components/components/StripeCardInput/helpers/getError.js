"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getError;

function getError(error) {
  if (error) {
    return {
      code: error.code,
      type: error.type,
      message: error.message
    };
  }

  return undefined;
}