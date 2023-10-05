"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getAssignFieldsData;

function getAssignFieldsData(params) {
  var fieldsMap = params.fieldsMap,
      attributes = params.attributes,
      matchField = params.matchField;
  return Object.keys(attributes).map(function (field) {
    return {
      required: attributes[field].required || field === matchField,
      fileField: fieldsMap[field],
      databaseField: field
    };
  });
}