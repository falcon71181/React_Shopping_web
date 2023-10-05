"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getFieldValue;

function getFieldValue(obj, field) {
  if (typeof field === 'string') {
    return field.split('.').reduce(function (acc, item) {
      var value = acc[item];

      if (value !== undefined) {
        return value;
      }

      return '';
    }, obj);
  }

  return '';
}