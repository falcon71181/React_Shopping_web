import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useState, useEffect } from 'react';
export default function useFocusIndex() {
  for (var _len = arguments.length, refsMap = new Array(_len), _key = 0; _key < _len; _key++) {
    refsMap[_key] = arguments[_key];
  }

  var _useState = useState(-1),
      _useState2 = _slicedToArray(_useState, 2),
      focusIndex = _useState2[0],
      setFocusIndex = _useState2[1];

  useEffect(function () {
    if (focusIndex > -1) {
      refsMap[focusIndex].current.focus();
    }
  }, [focusIndex, refsMap]);
  return [focusIndex, setFocusIndex];
}