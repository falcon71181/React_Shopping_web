import getCurrentSelectionLength from './getCurrentSelectionLength';
export default function getBulkSelectionState() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var maxRowSelection = params.maxRowSelection,
      _params$selectedRowsK = params.selectedRowsKeys,
      selectedRowsKeys = _params$selectedRowsK === void 0 ? {} : _params$selectedRowsK;
  var selected = getCurrentSelectionLength(selectedRowsKeys);

  if (selected === 0) {
    return 'none';
  }

  if (selected === maxRowSelection) {
    return 'all';
  }

  return 'some';
}