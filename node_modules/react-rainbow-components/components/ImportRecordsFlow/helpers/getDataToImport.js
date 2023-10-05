"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getDataToImport;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _ = _interopRequireDefault(require(".."));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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

function getDataToImport(params) {
  var actionTypeMap = {
    'add-records': _["default"].ADD_RECORDS,
    'merge-records': _["default"].MERGE_RECORDS
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
        return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, field, getNormalizedFieldValue(value, schemaField)));
      }, {}));
    })
  };
}