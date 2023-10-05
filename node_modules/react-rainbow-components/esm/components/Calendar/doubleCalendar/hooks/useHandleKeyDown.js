import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { useMemo, useCallback } from 'react';
import { UP_KEY, DOWN_KEY, RIGHT_KEY, LEFT_KEY, HOME_KEY, END_KEY, PAGEUP_KEY, PAGEDN_KEY, SPACE_KEY, ENTER_KEY } from '../../../../libs/constants';
import { isSameMonth, addMonths } from '../../helpers';
import getShouldUpdateCurrentMonth from '../helpers/shouldUpdateCurrentMonth';
import useMoveFocusedDay from './useMoveFocusedDay';
import useMoveFocusedMonth from './useMoveFocusedMonth';
export default function useHandleKeyDown(focusedDate, currentMonth, rightCalendarMonth, minDate, maxDate, onChange, enableNavKeys, setFocusedDate, setCurrentMonth) {
  var moveFocusedDay = useMoveFocusedDay(focusedDate, currentMonth, minDate, maxDate);
  var moveFocusedMonth = useMoveFocusedMonth(focusedDate, minDate, maxDate);
  var shouldUpdateCurrentMonth = useCallback(function (value) {
    return getShouldUpdateCurrentMonth(value, currentMonth, rightCalendarMonth);
  }, [currentMonth, rightCalendarMonth]);
  var keyHandlerMap = useMemo(function () {
    var _ref;

    return _ref = {}, _defineProperty(_ref, UP_KEY, function () {
      var result = moveFocusedDay(-7);
      return {
        day: result.day,
        month: shouldUpdateCurrentMonth(result.day) ? result.month : undefined
      };
    }), _defineProperty(_ref, DOWN_KEY, function () {
      var result = moveFocusedDay(7);
      return {
        day: result.day,
        month: shouldUpdateCurrentMonth(result.day) ? result.month : undefined
      };
    }), _defineProperty(_ref, LEFT_KEY, function () {
      var result = moveFocusedDay(-1);
      return {
        day: result.day,
        month: shouldUpdateCurrentMonth(result.day) ? result.month : undefined
      };
    }), _defineProperty(_ref, RIGHT_KEY, function () {
      var result = moveFocusedDay(1);
      return {
        day: result.day,
        month: shouldUpdateCurrentMonth(result.day) ? result.month : undefined
      };
    }), _defineProperty(_ref, HOME_KEY, function () {
      var result = moveFocusedDay(-focusedDate.getDay());
      return {
        day: result.day,
        month: shouldUpdateCurrentMonth(result.day) ? result.month : undefined
      };
    }), _defineProperty(_ref, END_KEY, function () {
      var result = moveFocusedDay(6 - focusedDate.getDay());
      return {
        day: result.day,
        month: shouldUpdateCurrentMonth(result.day) ? result.month : undefined
      };
    }), _defineProperty(_ref, PAGEUP_KEY, function () {
      var result = moveFocusedMonth(-1);
      return {
        day: result.day,
        month: shouldUpdateCurrentMonth(result.month) ? result.month : undefined
      };
    }), _defineProperty(_ref, PAGEDN_KEY, function () {
      var result = moveFocusedMonth(1);
      return {
        day: result.day,
        month: shouldUpdateCurrentMonth(result.month) ? rightCalendarMonth : undefined
      };
    }), _defineProperty(_ref, SPACE_KEY, function () {
      return onChange(new Date(focusedDate));
    }), _defineProperty(_ref, ENTER_KEY, function () {
      return onChange(new Date(focusedDate));
    }), _ref;
  }, [focusedDate, moveFocusedDay, moveFocusedMonth, onChange, rightCalendarMonth, shouldUpdateCurrentMonth]);
  var keyHandlerMapAlt = useMemo(function () {
    var _ref2;

    return _ref2 = {}, _defineProperty(_ref2, HOME_KEY, function () {
      var result = moveFocusedDay(-focusedDate.getDay());
      return {
        day: result.day,
        month: shouldUpdateCurrentMonth(result.day) ? result.month : undefined
      };
    }), _defineProperty(_ref2, END_KEY, function () {
      var result = moveFocusedDay(6 - focusedDate.getDay());
      return {
        day: result.day,
        month: shouldUpdateCurrentMonth(result.day) ? result.month : undefined
      };
    }), _defineProperty(_ref2, PAGEUP_KEY, function () {
      var result = moveFocusedMonth(-12);
      return {
        day: result.day,
        month: isSameMonth(result.month, rightCalendarMonth) ? addMonths(result.month, -1) : result.month
      };
    }), _defineProperty(_ref2, PAGEDN_KEY, function () {
      var result = moveFocusedMonth(12);
      return {
        day: result.day,
        month: isSameMonth(result.month, rightCalendarMonth) ? addMonths(result.month, -1) : result.month
      };
    }), _ref2;
  }, [focusedDate, moveFocusedDay, moveFocusedMonth, rightCalendarMonth, shouldUpdateCurrentMonth]);
  return useCallback(function (event) {
    if (enableNavKeys) {
      var keyCode = event.keyCode,
          altKey = event.altKey;
      var keyHandler = altKey ? keyHandlerMapAlt : keyHandlerMap;

      if (keyHandler[keyCode]) {
        event.preventDefault();
        event.stopPropagation();
        var result = keyHandler[keyCode]();
        if (result && result.day) setFocusedDate(result.day);
        if (result && result.month) setCurrentMonth(result.month);
      }
    }
  }, [enableNavKeys, keyHandlerMap, keyHandlerMapAlt, setCurrentMonth, setFocusedDate]);
}