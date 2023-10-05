"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = normalizeValue;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function normalizeValue(value) {
  if (!value || (0, _typeof2["default"])(value) !== 'object') {
    return [];
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return [];
    }

    return value.map(function (item) {
      var icon = item.icon,
          label = item.label,
          name = item.name,
          itemValue = item.value;
      return {
        icon: icon,
        label: label,
        name: name,
        value: itemValue
      };
    });
  }

  var icon = value.icon,
      label = value.label,
      name = value.name,
      itemValue = value.value;
  return {
    icon: icon,
    label: label,
    name: name,
    value: itemValue
  };
}