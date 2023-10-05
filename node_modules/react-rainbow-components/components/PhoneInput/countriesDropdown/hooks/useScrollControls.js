"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useScrollControls;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _helpers = require("../helpers");

function useScrollControls(scrollableRef) {
  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      showScrollUp = _useState2[0],
      setShowScrollUp = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      showScrollDown = _useState4[0],
      setShowScrollDown = _useState4[1];

  var timer = (0, _react.useRef)();
  var handleScrollScrollable = (0, _react.useCallback)(function () {
    setShowScrollUp(scrollableRef.current.scrollTop > 0);
    setShowScrollDown(!(0, _helpers.isScrollPositionAtScrollable)(scrollableRef.current));
  }, [scrollableRef]);
  var stopScroll = (0, _react.useCallback)(function () {
    if (timer.current) {
      clearTimeout(timer.current);
    }
  }, []);
  var handleScrollUpMouseEnter = (0, _react.useCallback)(function () {
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
  var handleScrollDownouseEnter = (0, _react.useCallback)(function () {
    stopScroll();
    timer.current = setTimeout(function next() {
      if (!(0, _helpers.isScrollPositionAtScrollable)(scrollableRef.current)) {
        scrollableRef.current.scrollBy(0, 1);
        timer.current = setTimeout(next, 5);
      } else {
        stopScroll();
      }
    }, 5);
  }, [scrollableRef, stopScroll]);
  (0, _react.useEffect)(function () {
    var scrollable = scrollableRef.current;
    scrollable.addEventListener('scroll', handleScrollScrollable);
    return function () {
      scrollable.removeEventListener('scroll', handleScrollScrollable);
    };
  }, [handleScrollDownouseEnter, handleScrollScrollable, handleScrollUpMouseEnter, scrollableRef, stopScroll]);
  (0, _react.useEffect)(function () {
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