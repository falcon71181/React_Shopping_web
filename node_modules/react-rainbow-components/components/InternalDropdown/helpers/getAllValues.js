"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getAllValues;

function getAllValues(children) {
  if (!Array.isArray(children)) {
    return [];
  }

  var values = children.reduce(function (accumulator, child) {
    var icon = child.icon,
        label = child.label,
        name = child.name,
        value = child.value,
        variant = child.variant;

    if (variant === 'default') {
      accumulator.push({
        icon: icon,
        label: label,
        name: name,
        value: value
      });
    }

    return accumulator;
  }, []);
  return values;
}