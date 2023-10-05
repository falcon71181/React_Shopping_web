"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isEmptyObject;

function isEmptyObject(obj) {
  return obj !== undefined && Object.keys(obj).length === 0;
}