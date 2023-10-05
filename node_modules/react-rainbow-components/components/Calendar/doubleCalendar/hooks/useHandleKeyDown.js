"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useHandleKeyDown;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _constants = require("../../../../libs/constants");

var _helpers = require("../../helpers");

var _shouldUpdateCurrentMonth = _interopRequireDefault(require("../helpers/shouldUpdateCurrentMonth"));

var _useMoveFocusedDay = _interopRequireDefault(require("./useMoveFocusedDay"));

var _useMoveFocusedMonth = _interopRequireDefault(require("./useMoveFocusedMonth"));

function useHandleKeyDown(focusedDate, currentMonth, rightCalendarMonth, minDate, maxDate, onChange, enableNavKeys, setFocusedDate, setCurrentMonth) {
  var moveFocusedDay = (0, _useMoveFocusedDay["default"])(focusedDate, currentMonth, minDate, maxDate);
  var moveFocusedMonth = (0, _useMoveFocusedMonth["default"])(focusedDate, minDate, maxDate);
  var shouldUpdateCurrentMonth = (0, _react.useCallback)(function (value) {
    return (0, _shouldUpdateCurrentMonth["default"])(value, currentMonth, rightCalendarMonth);
  }, [currentMonth, rightCalendarMonth]);
  var keyHandlerMap = (0, _react.useMemo)(function () {
    var _ref;

    return _ref = {}, (0, _defineProperty2["default"])(_ref, _constants.UP_KEY, function () {
      var result = moveFocusedDay(-7);
      return {
        day: result.day,
        month: shouldUpdateCurrentMonth(result.day) ? result.month : undefined
      };
    }), (0, _defineProperty2["default"])(_ref, _constants.DOWN_KEY, function () {
      var result = moveFocusedDay(7);
      return {
        day: result.day,
        month: shouldUpdateCurrentMonth(result.day) ? result.month : undefined
      };
    }), (0, _defineProperty2["default"])(_ref, _constants.LEFT_KEY, function () {
      var result = moveFocusedDay(-1);
      return {
        day: result.day,
        month: shouldUpdateCurrentMonth(result.day) ? result.month : undefined
      };
    }), (0, _defineProperty2["default"])(_ref, _constants.RIGHT_KEY, function () {
      var result = moveFocusedDay(1);
      return {
        day: result.day,
        month: shouldUpdateCurrentMonth(result.day) ? result.month : undefined
      };
    }), (0, _defineProperty2["default"])(_ref, _constants.HOME_KEY, function () {
      var result = moveFocusedDay(-focusedDate.getDay());
      return {
        day: result.day,
        month: shouldUpdateCurrentMonth(result.day) ? result.month : undefined
      };
    }), (0, _defineProperty2["default"])(_ref, _constants.END_KEY, function () {
      var result = moveFocusedDay(6 - focusedDate.getDay());
      return {
        day: result.day,
        month: shouldUpdateCurrentMonth(result.day) ? result.month : undefined
      };
    }), (0, _defineProperty2["default"])(_ref, _constants.PAGEUP_KEY, function () {
      var result = moveFocusedMonth(-1);
      return {
        day: result.day,
        month: shouldUpdateCurrentMonth(result.month) ? result.month : undefined
      };
    }), (0, _defineProperty2["default"])(_ref, _constants.PAGEDN_KEY, function () {
      var result = moveFocusedMonth(1);
      return {
        day: result.day,
        month: shouldUpdateCurrentMonth(result.month) ? rightCalendarMonth : undefined
      };
    }), (0, _defineProperty2["default"])(_ref, _constants.SPACE_KEY, function () {
      return onChange(new Date(focusedDate));
    }), (0, _defineProperty2["default"])(_ref, _constants.ENTER_KEY, function () {
      return onChange(new Date(focusedDate));
    }), _ref;
  }, [focusedDate, moveFocusedDay, moveFocusedMonth, onChange, rightCalendarMonth, shouldUpdateCurrentMonth]);
  var keyHandlerMapAlt = (0, _react.useMemo)(function () {
    var _ref2;

    return _ref2 = {}, (0, _defineProperty2["default"])(_ref2, _constants.HOME_KEY, function () {
      var result = moveFocusedDay(-focusedDate.getDay());
      return {
        day: result.day,
        month: shouldUpdateCurrentMonth(result.day) ? result.month : undefined
      };
    }), (0, _defineProperty2["default"])(_ref2, _constants.END_KEY, function () {
      var result = moveFocusedDay(6 - focusedDate.getDay());
      return {
        day: result.day,
        month: shouldUpdateCurrentMonth(result.day) ? result.month : undefined
      };
    }), (0, _defineProperty2["default"])(_ref2, _constants.PAGEUP_KEY, function () {
      var result = moveFocusedMonth(-12);
      return {
        day: result.day,
        month: (0, _helpers.isSameMonth)(result.month, rightCalendarMonth) ? (0, _helpers.addMonths)(result.month, -1) : result.month
      };
    }), (0, _defineProperty2["default"])(_ref2, _constants.PAGEDN_KEY, function () {
      var result = moveFocusedMonth(12);
      return {
        day: result.day,
        month: (0, _helpers.isSameMonth)(result.month, rightCalendarMonth) ? (0, _helpers.addMonths)(result.month, -1) : result.month
      };
    }), _ref2;
  }, [focusedDate, moveFocusedDay, moveFocusedMonth, rightCalendarMonth, shouldUpdateCurrentMonth]);
  return (0, _react.useCallback)(function (event) {
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