"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getUpdatedRowsWhenDeselect;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _getStartRowKey = _interopRequireDefault(require("./getStartRowKey"));

var _getCurrentSelectionLength = _interopRequireDefault(require("./getCurrentSelectionLength"));

var _getRowIntervalIndexes = _interopRequireDefault(require("./getRowIntervalIndexes"));

var _isSelectedRow = _interopRequireDefault(require("./isSelectedRow"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function getUpdatedRowsWhenDeselect() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var maxRowSelection = params.maxRowSelection,
      _params$rows = params.rows,
      rows = _params$rows === void 0 ? [] : _params$rows,
      _params$indexes = params.indexes,
      indexes = _params$indexes === void 0 ? {} : _params$indexes,
      isMultiple = params.isMultiple,
      rowKeyValue = params.rowKeyValue,
      lastSelectedRowKey = params.lastSelectedRowKey,
      _params$selectedRowsK = params.selectedRowsKeys,
      selectedRowsKeys = _params$selectedRowsK === void 0 ? {} : _params$selectedRowsK;
  var startRowKey = (0, _getStartRowKey["default"])({
    isMultiple: isMultiple,
    rowKeyValue: rowKeyValue,
    indexes: indexes,
    lastSelectedRowKey: lastSelectedRowKey
  });

  var _getRowIntervalIndexe = (0, _getRowIntervalIndexes["default"])({
    indexes: indexes,
    startRowKey: startRowKey,
    endRowKey: rowKeyValue
  }),
      start = _getRowIntervalIndexe.start,
      end = _getRowIntervalIndexe.end;

  var rowsWithSelection = rows.map(function (row, index) {
    var currentSelectionLength = (0, _getCurrentSelectionLength["default"])(selectedRowsKeys);
    var maxSelectionReached = currentSelectionLength > maxRowSelection;

    if (index >= start && index <= end && !maxSelectionReached) {
      selectedRowsKeys[row.key] = false;
      return _objectSpread(_objectSpread({}, row), {}, {
        isSelected: false
      });
    }

    return row;
  });
  return rowsWithSelection.map(function (row) {
    var maxSelectionReached = (0, _getCurrentSelectionLength["default"])(selectedRowsKeys) <= maxRowSelection - 1;

    if (maxSelectionReached && !(0, _isSelectedRow["default"])(selectedRowsKeys, row.key)) {
      return _objectSpread(_objectSpread({}, row), {}, {
        isDisabled: false
      });
    }

    return row;
  });
}