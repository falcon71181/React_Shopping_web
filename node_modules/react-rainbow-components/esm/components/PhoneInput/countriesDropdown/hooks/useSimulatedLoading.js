import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useRef, useReducer, useEffect } from 'react';
export default function useSimulatedLoading(list, delta) {
  var loading = useRef(true);

  var _useReducer = useReducer(function (value) {
    return value + 1;
  }, 0),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      forceUpdate = _useReducer2[1];

  useEffect(function () {
    if (loading.current) {
      loading.current = false;
      forceUpdate();
    } else {
      loading.current = true;
    }
  });

  if (loading.current) {
    return list.slice(0, delta);
  }

  return list;
}