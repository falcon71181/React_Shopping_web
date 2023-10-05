import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useState, useRef, useEffect, useCallback } from 'react';
import { isScrollPositionAtScrollable } from '../helpers';
export default function useScrollControls(scrollableRef) {
  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      showScrollUp = _useState2[0],
      setShowScrollUp = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      showScrollDown = _useState4[0],
      setShowScrollDown = _useState4[1];

  var timer = useRef();
  var handleScrollScrollable = useCallback(function () {
    setShowScrollUp(scrollableRef.current.scrollTop > 0);
    setShowScrollDown(!isScrollPositionAtScrollable(scrollableRef.current));
  }, [scrollableRef]);
  var stopScroll = useCallback(function () {
    if (timer.current) {
      clearTimeout(timer.current);
    }
  }, []);
  var handleScrollUpMouseEnter = useCallback(function () {
    stopScroll();
    timer.current = setTimeout(function next() {
      if (scrollableRef.current.scrollTop > 0) {
        scrollableRef.current.scrollBy(0, -1);
        timer.current = setTimeout(next, 5);
      } else {
        stopScroll();
      }
    }, 5);
  }, [scrollableRef, stopScroll]);
  var handleScrollDownouseEnter = useCallback(function () {
    stopScroll();
    timer.current = setTimeout(function next() {
      if (!isScrollPositionAtScrollable(scrollableRef.current)) {
        scrollableRef.current.scrollBy(0, 1);
        timer.current = setTimeout(next, 5);
      } else {
        stopScroll();
      }
    }, 5);
  }, [scrollableRef, stopScroll]);
  useEffect(function () {
    var scrollable = scrollableRef.current;
    scrollable.addEventListener('scroll', handleScrollScrollable);
    return function () {
      scrollable.removeEventListener('scroll', handleScrollScrollable);
    };
  }, [handleScrollDownouseEnter, handleScrollScrollable, handleScrollUpMouseEnter, scrollableRef, stopScroll]);
  useEffect(function () {
    return handleScrollScrollable();
  });
  return {
    showScrollUp: showScrollUp,
    showScrollDown: showScrollDown,
    handleScrollUpMouseEnter: handleScrollUpMouseEnter,
    handleScrollDownouseEnter: handleScrollDownouseEnter,
    stopScroll: stopScroll
  };
}