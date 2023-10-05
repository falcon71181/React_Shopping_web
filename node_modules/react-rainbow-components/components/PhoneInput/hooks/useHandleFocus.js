"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useHandleFocus;

var _react = require("react");

function useHandleFocus(_ref) {
  var focusIndex = _ref.focusIndex,
      onFocus = _ref.onFocus,
      setFocusIndex = _ref.setFocusIndex,
      value = _ref.value;
  return (0, _react.useCallback)(function (event, index) {
    if (index === 0 && focusIndex === 1 || index === focusIndex) {
      return;
    }

    if (focusIndex === -1) {
      onFocus(value);
    }

    setFocusIndex(index);
  }, [focusIndex, onFocus, setFocusIndex, value]);
}