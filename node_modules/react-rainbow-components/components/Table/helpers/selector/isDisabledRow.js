"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isDisabledRow;

var _isSelectedRow = _interopRequireDefault(require("./isSelectedRow"));

var _getCurrentSelectionLength = _interopRequireDefault(require("./getCurrentSelectionLength"));

function isDisabledRow() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var rowKeyValue = params.rowKeyValue,
      maxRowSelection = params.maxRowSelection,
      _params$selectedRowsK = params.selectedRowsKeys,
      selectedRowsKeys = _params$selectedRowsK === void 0 ? {} : _params$selectedRowsK;

  if (!(0, _isSelectedRow["default"])(selectedRowsKeys, rowKeyValue)) {
    return maxRowSelection !== 1 && (0, _getCurrentSelectionLength["default"])(selectedRowsKeys) === maxRowSelection;
  }

  return false;
}