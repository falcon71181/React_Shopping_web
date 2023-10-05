import getRowSelectionInputType from './getRowSelectionInputType';
import computeUniqueRowKey from './computeUniqueRowKey';
import isSelectedRow from '../selector/isSelectedRow';
import isDisabledRow from '../selector/isDisabledRow';

function getKey(row, keyField) {
  if (row.key) {
    return row.key;
  }

  return computeUniqueRowKey(row, keyField);
}

export default function getRows() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$rows = params.rows,
      rows = _params$rows === void 0 ? [] : _params$rows,
      maxRowSelection = params.maxRowSelection,
      keyField = params.keyField,
      selectedRowsKeys = params.selectedRowsKeys;
  var inputType = getRowSelectionInputType(maxRowSelection, rows.length);
  return rows.map(function (row) {
    var key = getKey(row, keyField);
    return {
      key: key,
      inputType: inputType,
      isSelected: isSelectedRow(selectedRowsKeys, key),
      isDisabled: isDisabledRow({
        rowKeyValue: key,
        maxRowSelection: maxRowSelection,
        selectedRowsKeys: selectedRowsKeys
      })
    };
  });
}