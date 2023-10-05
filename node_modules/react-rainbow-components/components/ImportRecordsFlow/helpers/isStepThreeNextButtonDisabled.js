"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isStepThreeNextButtonDisabled;

function isStepThreeNextButtonDisabled(params) {
  var fieldsMap = params.fieldsMap,
      attributes = params.attributes,
      matchField = params.matchField;
  var fieldsArray = Object.keys(attributes);
  return fieldsArray.some(function (field) {
    return (attributes[field].required || field === matchField) && !fieldsMap[field];
  }) || fieldsArray.every(function (field) {
    return !fieldsMap[field];
  });
}