"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useHandleBlur;

var _react = require("react");

function useHandleBlur(_ref) {
  var focusIndex = _ref.focusIndex,
      onBlur = _ref.onBlur,
      value = _ref.value;
  return (0, _react.useCallback)(function () {
    if (focusIndex === -1) {
      onBlur(value);
    }
  }, [focusIndex, onBlur, value]);
}