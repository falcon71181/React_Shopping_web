import { useMemo } from 'react';
export default function useFocusedIndexState(value, length, disabled, readOnly) {
  return useMemo(function () {
    var canBeFocused = !disabled && !readOnly;

    if (canBeFocused) {
      var currentLength = value.join('').trim('').length;
      var newFocusedIndex = currentLength < length ? currentLength : length - 1;
      return newFocusedIndex;
    }

    return undefined;
  }, [value, length, disabled, readOnly]);
}