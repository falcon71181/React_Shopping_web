"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = computeUniqueRowKey;

var _getFieldValue = _interopRequireDefault(require("./getFieldValue"));

var rowIndex = 0;

function computeUniqueRowKey(rowData, keyField) {
  var value = (0, _getFieldValue["default"])(rowData, keyField);

  if (value && typeof value === 'string') {
    return value;
  }

  if (typeof value === 'number') {
    return "row-".concat(value);
  }

  if (rowIndex === 0) {
    console.error('The "keyField" passed is not valid.');
  }

  rowIndex += 1;
  return "row-".concat(rowIndex);
}