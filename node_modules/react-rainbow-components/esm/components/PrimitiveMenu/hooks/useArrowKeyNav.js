import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useState, useMemo, useCallback } from 'react';
import { UP_KEY, DOWN_KEY, ENTER_KEY } from '../../../libs/constants';
import { findItemIndex, isPrintableCharacter, findItemByKey } from '../utils';
export default function useArrowKeyNav(_ref) {
  var childrenRefs = _ref.childrenRefs,
      isLoading = _ref.isLoading;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      focusedChildIndex = _useState2[0],
      setFocusedChildIndex = _useState2[1];

  var focusChild = useCallback(function (index) {
    if (isLoading || !childrenRefs[index]) {
      return null;
    }

    setFocusedChildIndex(index);
    return childrenRefs[index].focus();
  }, [childrenRefs, isLoading]);
  var focusMatchedItem = useCallback(function (matchedItem) {
    var itemIndex = findItemIndex(childrenRefs, matchedItem);
    return focusChild(itemIndex);
  }, [childrenRefs, focusChild]);
  var clearFocusedChild = useCallback(function () {
    return setFocusedChildIndex(null);
  }, [setFocusedChildIndex]);
  var keyHandlerMap = useMemo(function () {
    var _ref2;

    return _ref2 = {}, _defineProperty(_ref2, UP_KEY, function () {
      var nextFocusedChildIndex = focusedChildIndex > 0 ? focusedChildIndex - 1 : childrenRefs.length - 1;
      setFocusedChildIndex(nextFocusedChildIndex);
    }), _defineProperty(_ref2, DOWN_KEY, function () {
      var nextFocusedChildIndex = focusedChildIndex < childrenRefs.length - 1 ? focusedChildIndex + 1 : 0;
      setFocusedChildIndex(nextFocusedChildIndex);
    }), _defineProperty(_ref2, ENTER_KEY, function () {
      var isValidIndex = focusedChildIndex >= 0;

      if (isValidIndex) {
        childrenRefs[focusedChildIndex].click();
      }
    }), _ref2;
  }, [childrenRefs, focusedChildIndex]);
  var processPrintableCharacter = useCallback(function (_char) {
    var matchedItem = findItemByKey(_char, childrenRefs, focusedChildIndex);

    if (matchedItem) {
      focusMatchedItem(matchedItem);
    }
  }, [childrenRefs, focusMatchedItem, focusedChildIndex]);
  var handleKeyPress = useCallback(function (event) {
    var keyCode = event.keyCode,
        key = event.key;

    if (keyHandlerMap[keyCode]) {
      keyHandlerMap[keyCode]();
    } else if (isPrintableCharacter(key)) {
      processPrintableCharacter(key);
    }
  }, [keyHandlerMap, processPrintableCharacter]);
  return {
    focusedChildIndex: focusedChildIndex,
    handleKeyPress: handleKeyPress,
    focusMatchedItem: focusMatchedItem,
    focusChild: focusChild,
    clearFocusedChild: clearFocusedChild
  };
}