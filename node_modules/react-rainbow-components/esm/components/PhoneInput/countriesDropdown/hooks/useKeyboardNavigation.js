import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { useCallback, useEffect, useRef } from 'react';
import { UP_KEY, DOWN_KEY, HOME_KEY, END_KEY, ENTER_KEY } from '../../../../libs/constants';
import getNewIndex from '../helpers/getNewIndex';
import isOptionVisible from '../../../InternalDropdown/helpers/isOptionVisible';
export default function useKeyboardNavigation(country, list, ref, scrollableRef, itemsRef, handleCountryChange) {
  var activeIndex = useRef(0);
  var length = list.length;
  var handleActiveChange = useCallback(function (newIndex) {
    var currentItem = itemsRef.current[activeIndex.current];
    var newItem = itemsRef.current[newIndex];

    if (currentItem) {
      currentItem.setAttribute('aria-selected', false);
    }

    if (newItem) {
      itemsRef.current[newIndex].setAttribute('aria-selected', true);
      activeIndex.current = newIndex;
    }
  }, [itemsRef]);
  var moveToOption = useCallback(function (newIndex) {
    var currentItem = itemsRef.current[activeIndex.current];
    var newItem = itemsRef.current[newIndex];

    if (currentItem && newItem) {
      if (!isOptionVisible(newItem, scrollableRef.current)) {
        var amount = newItem.offsetTop - currentItem.offsetTop;
        scrollableRef.current.scrollBy(0, amount);
      }

      handleActiveChange(newIndex);
    }
  }, [handleActiveChange, itemsRef, scrollableRef]);
  var handleKeyDown = useCallback(function (event) {
    if ([UP_KEY, DOWN_KEY, ENTER_KEY, HOME_KEY, END_KEY].indexOf(event.keyCode) !== -1) {
      var _keyHandlerMap;

      event.preventDefault();
      var active = activeIndex.current;
      var keyHandlerMap = (_keyHandlerMap = {}, _defineProperty(_keyHandlerMap, UP_KEY, function () {
        return moveToOption(getNewIndex(active - 1, length));
      }), _defineProperty(_keyHandlerMap, DOWN_KEY, function () {
        return moveToOption(getNewIndex(active + 1, length));
      }), _defineProperty(_keyHandlerMap, HOME_KEY, function () {
        return moveToOption(0);
      }), _defineProperty(_keyHandlerMap, END_KEY, function () {
        return moveToOption(length - 1);
      }), _defineProperty(_keyHandlerMap, ENTER_KEY, function () {
        return list[active] && handleCountryChange(list[active]);
      }), _keyHandlerMap);
      keyHandlerMap[event.keyCode]();
    }
  }, [handleCountryChange, length, list, moveToOption]);
  useEffect(function () {
    var element = ref.current || window;
    element.addEventListener('keydown', handleKeyDown);
    return function () {
      element.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, ref]);
  useEffect(function () {
    handleActiveChange(0);

    if (scrollableRef.current && scrollableRef.current.scrollTo) {
      scrollableRef.current.scrollTo(0, 0);
    }

    activeIndex.current = 0;
  }, [country, handleActiveChange, itemsRef, length, scrollableRef]);
  useEffect(function () {
    var currentItem = itemsRef.current[activeIndex.current];

    if (currentItem) {
      currentItem.setAttribute('aria-selected', true);
    }
  });
  return handleActiveChange;
}