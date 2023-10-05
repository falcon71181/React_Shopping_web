"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getLastRowSelection;

var _getRowIndexByKey = _interopRequireDefault(require("../rows/getRowIndexByKey"));

function getLastRowSelection(indexes, lastSelectedRowKey) {
  var keyIsValid = lastSelectedRowKey !== undefined && (0, _getRowIndexByKey["default"])(indexes, lastSelectedRowKey) !== undefined;
  return keyIsValid ? lastSelectedRowKey : undefined;
}