"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getNormalizedOptions;

function getNormalizedOptions(options) {
  var isArray = Array.isArray;

  if (isArray(options)) {
    return options.reduce(function (arr, item) {
      if (item.type === 'section') {
        arr.push({
          label: item.label,
          type: 'header'
        });
        return arr.concat(isArray(item.options) ? item.options : []);
      }

      arr.push(item);
      return arr;
    }, []);
  }

  return [];
}