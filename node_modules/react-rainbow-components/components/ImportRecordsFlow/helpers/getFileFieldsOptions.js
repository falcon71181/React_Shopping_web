"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getFileFieldsOptions;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

function getFileFieldsOptions(fields) {
  var defaultOption = {
    label: 'Select database field to assign',
    value: 'default',
    disabled: true
  };
  var hasFields = Array.isArray(fields) && fields.length;

  if (hasFields) {
    var options = fields.map(function (field) {
      return {
        label: field,
        value: field
      };
    });
    return [defaultOption].concat((0, _toConsumableArray2["default"])(options));
  }

  return [defaultOption];
}