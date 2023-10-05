"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getRowIndexByKey;

function getRowIndexByKey() {
  var indexes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!indexes[key]) {
    return undefined;
  }

  return indexes[key].rowIndex;
}