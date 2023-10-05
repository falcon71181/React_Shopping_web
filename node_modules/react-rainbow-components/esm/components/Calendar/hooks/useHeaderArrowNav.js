import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useState, useMemo, useEffect, useCallback } from 'react';
import { RIGHT_KEY, LEFT_KEY, TAB_KEY } from '../../../libs/constants';
export default function useHeaderArrowNav(_ref) {
  var disableNextMonth = _ref.disableNextMonth,
      disablePreviousMonth = _ref.disablePreviousMonth,
      refs = _ref.refs,
      firstIndex = _ref.firstIndex,
      lastIndex = _ref.lastIndex,
      delta = _ref.delta;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      enableNavKeys = _useState2[0],
      setEnableNavKeys = _useState2[1];

  var _useState3 = useState(-1),
      _useState4 = _slicedToArray(_useState3, 2),
      focusedItemIndex = _useState4[0],
      setFocusedItemIndex = _useState4[1];

  var updateFocusedItem = useCallback(function (index) {
    setFocusedItemIndex(index);
    setEnableNavKeys(true);
  }, []);
  var clearFocusedItems = useCallback(function () {
    setEnableNavKeys(false);
  }, []);
  var keyHandlerMap = useMemo(function () {
    var _ref2;

    return _ref2 = {}, _defineProperty(_ref2, LEFT_KEY, function () {
      setFocusedItemIndex(Math.max(focusedItemIndex - delta, firstIndex));
    }), _defineProperty(_ref2, RIGHT_KEY, function () {
      setFocusedItemIndex(Math.min(focusedItemIndex + delta, lastIndex));
    }), _ref2;
  }, [focusedItemIndex, lastIndex, firstIndex, delta]);
  var handleKeyDown = useCallback(function (event) {
    if (disableNextMonth && disablePreviousMonth) return;

    if (enableNavKeys) {
      var keyCode = event.keyCode;

      if (keyHandlerMap[keyCode]) {
        event.preventDefault();
        keyHandlerMap[keyCode]();
      } else if (keyCode === TAB_KEY) {
        setEnableNavKeys(false);
      }
    }
  }, [enableNavKeys, keyHandlerMap, disableNextMonth, disablePreviousMonth]);
  useEffect(function () {
    if (enableNavKeys && refs[focusedItemIndex].current) {
      refs[focusedItemIndex].current.focus();
    }
  }, [enableNavKeys, focusedItemIndex, refs]);
  return {
    updateFocusedItem: updateFocusedItem,
    clearFocusedItems: clearFocusedItems,
    handleKeyDown: handleKeyDown
  };
}