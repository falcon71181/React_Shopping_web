function getSelectedRowsKeys(selectedRowsKeys) {
  return Object.keys(selectedRowsKeys).filter(function (key) {
    return selectedRowsKeys[key];
  });
}

export default function getCurrentSelectionLength(selectedRowsKeys) {
  return getSelectedRowsKeys(selectedRowsKeys).length;
}