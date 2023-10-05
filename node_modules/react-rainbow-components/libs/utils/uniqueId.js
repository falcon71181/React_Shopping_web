"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = uniqueId;
var idCounter = 0;

function uniqueId(prefix) {
  idCounter += 1;
  return prefix ? "".concat(prefix, "-").concat(idCounter) : String(idCounter);
}