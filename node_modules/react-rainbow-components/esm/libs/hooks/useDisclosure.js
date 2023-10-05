import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useState, useCallback } from 'react';
export default function useDisclosure(defaultIsOpen) {
  var _useState = useState(Boolean(defaultIsOpen)),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var close = useCallback(function () {
    return setIsOpen(false);
  }, []);
  var open = useCallback(function () {
    return setIsOpen(true);
  }, []);
  var toggle = useCallback(function () {
    return setIsOpen(function (prevIsOpen) {
      return !prevIsOpen;
    });
  }, []);
  return {
    isOpen: isOpen,
    open: open,
    close: close,
    toggle: toggle
  };
}