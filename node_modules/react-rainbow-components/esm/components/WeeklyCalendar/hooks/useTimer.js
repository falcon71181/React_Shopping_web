import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useState, useEffect } from 'react';
export default function useTimer() {
  var _useState = useState(new Date()),
      _useState2 = _slicedToArray(_useState, 2),
      clock = _useState2[0],
      setClock = _useState2[1];

  useEffect(function () {
    var timerRef = setTimeout(function next() {
      setClock(new Date());
      timerRef = setTimeout(next, 60000);
    }, (60 - new Date().getSeconds()) * 1000);
    return function () {
      return clearTimeout(timerRef);
    };
  }, []);
  return clock;
}