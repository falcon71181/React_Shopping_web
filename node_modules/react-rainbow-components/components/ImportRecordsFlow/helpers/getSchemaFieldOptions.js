"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getSchemaFieldOptions;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

function getSchemaFieldOptions(schemaFields) {
  var defaultOption = {
    label: 'Select the Field do you want match',
    value: 'default',
    disabled: true
  };
  var hasFields = Array.isArray(schemaFields) && schemaFields.length;

  if (hasFields) {
    var options = schemaFields.map(function (attr) {
      return {
        label: attr,
        value: attr
      };
    });
    return [defaultOption].concat((0, _toConsumableArray2["default"])(options));
  }

  return [defaultOption];
}