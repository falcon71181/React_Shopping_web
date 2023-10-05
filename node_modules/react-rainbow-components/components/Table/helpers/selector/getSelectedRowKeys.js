"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getSelectedRowKeys;

var _getFieldValue = _interopRequireDefault(require("../rows/getFieldValue"));

function getSelectedRowKeys(selectedRows, keyField) {
  return selectedRows.reduce(function (selectedRowsKeys, row) {
    var key = (0, _getFieldValue["default"])(row, keyField);
    selectedRowsKeys[key] = true;
    return selectedRowsKeys;
  }, {});
}