import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import ImportRecordsFlow from '..';

function getDateValue(value) {
  var date = new Date(value);
  var isValidDate = !isNaN(date.getTime());
  return isValidDate ? date : '';
}

function getTypeValue(value, dataType) {
  switch (dataType.name) {
    case 'String':
      return value;

    case 'Number':
      return !isNaN(Number(value)) ? Number(value) : '';

    case 'Boolean':
      return !!value;

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

export default function getDataToImport(params) {
  var actionTypeMap = {
    'add-records': ImportRecordsFlow.ADD_RECORDS,
    'merge-records': ImportRecordsFlow.MERGE_RECORDS
  };
  var data = params.data,
      fieldsMap = params.fieldsMap,
      schema = params.schema,
      actionOption = params.actionOption,
      matchField = params.matchField;
  return {
    collection: schema.collection,
    actionType: actionTypeMap[actionOption],
    mergeByKey: matchField === 'default' ? '' : matchField,
    data: data.map(function (item) {
      return _objectSpread({}, Object.keys(fieldsMap).reduce(function (acc, field) {
        var keys = fieldsMap[field].split(',');
        var schemaField = schema.attributes[field];
        var value = keys.reduce(function (accumulator, key) {
          return "".concat(accumulator, " ").concat(item[key] || '').trim();
        }, '') || schemaField.defaultTo;
        return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, field, getNormalizedFieldValue(value, schemaField)));
      }, {}));
    })
  };
}