import getFieldValue from '../rows/getFieldValue';
export default function getSelectedRowKeys(selectedRows, keyField) {
  return selectedRows.reduce(function (selectedRowsKeys, row) {
    var key = getFieldValue(row, keyField);
    selectedRowsKeys[key] = true;
    return selectedRowsKeys;
  }, {});
}