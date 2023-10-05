"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getStartRowKey;

var _getLastRowSelection = _interopRequireDefault(require("./getLastRowSelection"));

function getStartRowKey(params) {
  var isMultiple = params.isMultiple,
      rowKeyValue = params.rowKeyValue,
      indexes = params.indexes,
      lastSelectedRowKey = params.lastSelectedRowKey;
  var fromRowKey = rowKeyValue;

  if (isMultiple) {
    fromRowKey = (0, _getLastRowSelection["default"])(indexes, lastSelectedRowKey) || rowKeyValue;
  }

  return fromRowKey;
}