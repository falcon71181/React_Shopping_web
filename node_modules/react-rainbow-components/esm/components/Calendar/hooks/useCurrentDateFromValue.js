import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useMemo } from 'react';
export default function useCurrentDateFromValue(value) {
  return useMemo(function () {
    if (!Array.isArray(value)) return value;

    var _value = _slicedToArray(value, 2),
        rangeStart = _value[0],
        rangeEnd = _value[1];

    return rangeStart || rangeEnd;
  }, [value]);
}