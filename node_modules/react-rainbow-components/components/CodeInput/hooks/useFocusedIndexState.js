"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useFocusedIndexState;

var _react = require("react");

function useFocusedIndexState(value, length, disabled, readOnly) {
  return (0, _react.useMemo)(function () {
    var canBeFocused = !disabled && !readOnly;

    if (canBeFocused) {
      var currentLength = value.join('').trim('').length;
      var newFocusedIndex = currentLength < length ? currentLength : length - 1;
      return newFocusedIndex;
    }

    return undefined;
  }, [value, length, disabled, readOnly]);
}