"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isSelectedRow;

function isSelectedRow() {
  var selectedRowsKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var rowKeyValue = arguments.length > 1 ? arguments[1] : undefined;
  return !!selectedRowsKeys[rowKeyValue];
}