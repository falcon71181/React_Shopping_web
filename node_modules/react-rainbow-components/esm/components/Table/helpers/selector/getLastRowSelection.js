import getRowIndexByKey from '../rows/getRowIndexByKey';
export default function getLastRowSelection(indexes, lastSelectedRowKey) {
  var keyIsValid = lastSelectedRowKey !== undefined && getRowIndexByKey(indexes, lastSelectedRowKey) !== undefined;
  return keyIsValid ? lastSelectedRowKey : undefined;
}