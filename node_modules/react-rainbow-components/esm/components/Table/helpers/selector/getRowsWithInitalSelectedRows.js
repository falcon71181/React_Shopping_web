import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import isSelectedRow from './isSelectedRow';
import getCurrentSelectionLength from './getCurrentSelectionLength';

function rowKeyExists(indexes, key) {
  return !!indexes[key];
}

function filterValidKeys(indexes, keys) {
  return keys.filter(function (key) {
    return rowKeyExists(indexes, key);
  });
}

export default function getRowsWithInitalSelectedRows() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$rows = params.rows,
      rows = _params$rows === void 0 ? [] : _params$rows,
      selectedRows = params.selectedRows,
      maxRowSelection = params.maxRowSelection,
      indexes = params.indexes,
      _params$selectedRowsK = params.selectedRowsKeys,
      selectedRowsKeys = _params$selectedRowsK === void 0 ? {} : _params$selectedRowsK;

  if (Array.isArray(selectedRows) && maxRowSelection > 0) {
    var previousSelectionLength = getCurrentSelectionLength(selectedRowsKeys);
    var validSelectedRowsKeys = filterValidKeys(indexes, selectedRows);

    if (validSelectedRowsKeys.length > maxRowSelection) {
      console.warn("The number of keys in selectedRows for Table component\n            exceeds the limit defined by maxRowSelection.");
      validSelectedRowsKeys = validSelectedRowsKeys.slice(0, maxRowSelection);
    }

    validSelectedRowsKeys.forEach(function (item) {
      selectedRowsKeys[item] = true;
    });

    if (validSelectedRowsKeys.length === maxRowSelection && maxRowSelection > 1) {
      return rows.map(function (row) {
        if (!isSelectedRow(selectedRowsKeys, row.key)) {
          return _objectSpread(_objectSpread({}, row), {}, {
            isDisabled: true
          });
        }

        return _objectSpread(_objectSpread({}, row), {}, {
          isSelected: true
        });
      });
    }

    if (selectedRows.length < maxRowSelection && previousSelectionLength === maxRowSelection) {
      return rows.map(function (row) {
        return _objectSpread(_objectSpread({}, row), {}, {
          isDisabled: false
        });
      });
    }

    return rows.map(function (row) {
      return _objectSpread(_objectSpread({}, row), {}, {
        isSelected: isSelectedRow(selectedRowsKeys, row.key)
      });
    });
  }

  return rows;
}