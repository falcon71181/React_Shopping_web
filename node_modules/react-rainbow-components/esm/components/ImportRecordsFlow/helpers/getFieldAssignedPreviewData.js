import _defineProperty from "@babel/runtime/helpers/defineProperty";

function getDateValue(value) {
  var date = new Date(value);
  var isValidDate = !isNaN(date.getTime());
  return isValidDate ? value : '';
}

function getTypeValue(value, dataType) {
  switch (dataType.name) {
    case 'String':
      return value;

    case 'Number':
      return !isNaN(Number(value)) ? value : '';

    case 'Boolean':
      return value ? 'true' : 'false';

    case 'Date':
      return getDateValue(value);

    default:
      return value || '';
  }
}

function getNormalizedFieldValue(value, attributeDef) {
  if (typeof attributeDef === 'function') {
    return getTypeValue(value, attributeDef);
  }

  if (typeof attributeDef.type === 'function') {
    return getTypeValue(value, attributeDef.type);
  }

  return value || '';
}

export default function getFieldAssignedPreviewData(data, field, fileFields, attributes) {
  return data.map(function (item) {
    var value = fileFields.reduce(function (acc, fileField) {
      return "".concat(acc, " ").concat(item[fileField] || '').trim();
    }, '') || attributes[field].defaultTo;
    return _defineProperty({}, field, getNormalizedFieldValue(value, attributes[field]));
  });
}