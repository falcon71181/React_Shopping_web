import isSelectedRow from './isSelectedRow';
import getCurrentSelectionLength from './getCurrentSelectionLength';
export default function isDisabledRow() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var rowKeyValue = params.rowKeyValue,
      maxRowSelection = params.maxRowSelection,
      _params$selectedRowsK = params.selectedRowsKeys,
      selectedRowsKeys = _params$selectedRowsK === void 0 ? {} : _params$selectedRowsK;

  if (!isSelectedRow(selectedRowsKeys, rowKeyValue)) {
    return maxRowSelection !== 1 && getCurrentSelectionLength(selectedRowsKeys) === maxRowSelection;
  }

  return false;
}