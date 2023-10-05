"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useRangeFromValue;

var _react = require("react");

var _helpers = require("../helpers");

function useRangeFromValue(value, selectionType) {
  return (0, _react.useMemo)(function () {
    if (selectionType === 'single') return undefined;

    if (value && Array.isArray(value)) {
      if ((0, _helpers.isEmptyRange)(value)) return [];
      return (0, _helpers.normalizeRange)(value);
    }

    return value ? [(0, _helpers.normalizeDate)(value)] : [];
  }, [value, selectionType]);
}