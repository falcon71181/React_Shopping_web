"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getRows;

var _getRowSelectionInputType = _interopRequireDefault(require("./getRowSelectionInputType"));

var _computeUniqueRowKey = _interopRequireDefault(require("./computeUniqueRowKey"));

var _isSelectedRow = _interopRequireDefault(require("../selector/isSelectedRow"));

var _isDisabledRow = _interopRequireDefault(require("../selector/isDisabledRow"));

function getKey(row, keyField) {
  if (row.key) {
    return row.key;
  }

  return (0, _computeUniqueRowKey["default"])(row, keyField);
}

function getRows() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$rows = params.rows,
      rows = _params$rows === void 0 ? [] : _params$rows,
      maxRowSelection = params.maxRowSelection,
      keyField = params.keyField,
      selectedRowsKeys = params.selectedRowsKeys;
  var inputType = (0, _getRowSelectionInputType["default"])(maxRowSelection, rows.length);
  return rows.map(function (row) {
    var key = getKey(row, keyField);
    return {
      key: key,
      inputType: inputType,
      isSelected: (0, _isSelectedRow["default"])(selectedRowsKeys, key),
      isDisabled: (0, _isDisabledRow["default"])({
        rowKeyValue: key,
        maxRowSelection: maxRowSelection,
        selectedRowsKeys: selectedRowsKeys
      })
    };
  });
}