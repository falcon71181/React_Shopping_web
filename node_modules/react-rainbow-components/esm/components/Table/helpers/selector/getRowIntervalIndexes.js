import getRowIndexByKey from '../rows/getRowIndexByKey';
export default function getRowIntervalIndexes(_ref) {
  var indexes = _ref.indexes,
      startRowKey = _ref.startRowKey,
      endRowKey = _ref.endRowKey;
  var start = getRowIndexByKey(indexes, startRowKey);
  var end = getRowIndexByKey(indexes, endRowKey);
  return {
    start: Math.min(start, end),
    end: Math.max(start, end)
  };
}