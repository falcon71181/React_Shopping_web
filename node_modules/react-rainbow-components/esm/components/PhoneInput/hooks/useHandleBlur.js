import { useCallback } from 'react';
export default function useHandleBlur(_ref) {
  var focusIndex = _ref.focusIndex,
      onBlur = _ref.onBlur,
      value = _ref.value;
  return useCallback(function () {
    if (focusIndex === -1) {
      onBlur(value);
    }
  }, [focusIndex, onBlur, value]);
}