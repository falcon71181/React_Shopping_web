export default function getSelectedRowKeysFromSelectedRows() {
  var selectedRows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var indexes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return selectedRows.reduce(function (selectedRowsKeys, key) {
    if (indexes[key]) {
      selectedRowsKeys[key] = true;
    }

    return selectedRowsKeys;
  }, {});
}