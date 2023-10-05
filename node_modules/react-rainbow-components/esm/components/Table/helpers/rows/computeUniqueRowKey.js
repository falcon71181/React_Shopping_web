import getFieldValue from './getFieldValue';
var rowIndex = 0;
export default function computeUniqueRowKey(rowData, keyField) {
  var value = getFieldValue(rowData, keyField);

  if (value && typeof value === 'string') {
    return value;
  }

  if (typeof value === 'number') {
    return "row-".concat(value);
  }

  if (rowIndex === 0) {
    console.error('The "keyField" passed is not valid.');
  }

  rowIndex += 1;
  return "row-".concat(rowIndex);
}