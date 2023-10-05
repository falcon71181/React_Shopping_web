"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getValueNames;

function getValueNames(value) {
  if (Array.isArray(value)) {
    return value.reduce(function (seed, item) {
      if (item.name) {
        seed.push(item.name);
      }

      return seed;
    }, []);
  }

  if (value && value.name) {
    return [value.name];
  }

  return [];
}