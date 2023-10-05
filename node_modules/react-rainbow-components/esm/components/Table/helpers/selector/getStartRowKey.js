import getLastRowSelection from './getLastRowSelection';
export default function getStartRowKey(params) {
  var isMultiple = params.isMultiple,
      rowKeyValue = params.rowKeyValue,
      indexes = params.indexes,
      lastSelectedRowKey = params.lastSelectedRowKey;
  var fromRowKey = rowKeyValue;

  if (isMultiple) {
    fromRowKey = getLastRowSelection(indexes, lastSelectedRowKey) || rowKeyValue;
  }

  return fromRowKey;
}