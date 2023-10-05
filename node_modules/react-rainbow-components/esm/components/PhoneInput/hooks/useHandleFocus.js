import { useCallback } from 'react';
export default function useHandleFocus(_ref) {
  var focusIndex = _ref.focusIndex,
      onFocus = _ref.onFocus,
      setFocusIndex = _ref.setFocusIndex,
      value = _ref.value;
  return useCallback(function (event, index) {
    if (index === 0 && focusIndex === 1 || index === focusIndex) {
      return;
    }

    if (focusIndex === -1) {
      onFocus(value);
    }

    setFocusIndex(index);
  }, [focusIndex, onFocus, setFocusIndex, value]);
}