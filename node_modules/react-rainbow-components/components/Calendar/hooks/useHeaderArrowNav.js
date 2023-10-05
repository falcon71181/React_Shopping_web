"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useHeaderArrowNav;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _constants = require("../../../libs/constants");

function useHeaderArrowNav(_ref) {
  var disableNextMonth = _ref.disableNextMonth,
      disablePreviousMonth = _ref.disablePreviousMonth,
      refs = _ref.refs,
      firstIndex = _ref.firstIndex,
      lastIndex = _ref.lastIndex,
      delta = _ref.delta;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      enableNavKeys = _useState2[0],
      setEnableNavKeys = _useState2[1];

  var _useState3 = (0, _react.useState)(-1),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      focusedItemIndex = _useState4[0],
      setFocusedItemIndex = _useState4[1];

  var updateFocusedItem = (0, _react.useCallback)(function (index) {
    setFocusedItemIndex(index);
    setEnableNavKeys(true);
  }, []);
  var clearFocusedItems = (0, _react.useCallback)(function () {
    setEnableNavKeys(false);
  }, []);
  var keyHandlerMap = (0, _react.useMemo)(function () {
    var _ref2;

    return _ref2 = {}, (0, _defineProperty2["default"])(_ref2, _constants.LEFT_KEY, function () {
      setFocusedItemIndex(Math.max(focusedItemIndex - delta, firstIndex));
    }), (0, _defineProperty2["default"])(_ref2, _constants.RIGHT_KEY, function () {
      setFocusedItemIndex(Math.min(focusedItemIndex + delta, lastIndex));
    }), _ref2;
  }, [focusedItemIndex, lastIndex, firstIndex, delta]);
  var handleKeyDown = (0, _react.useCallback)(function (event) {
    if (disableNextMonth && disablePreviousMonth) return;

    if (enableNavKeys) {
      var keyCode = event.keyCode;

      if (keyHandlerMap[keyCode]) {
        event.preventDefault();
        keyHandlerMap[keyCode]();
      } else if (keyCode === _constants.TAB_KEY) {
        setEnableNavKeys(false);
      }
    }
  }, [enableNavKeys, keyHandlerMap, disableNextMonth, disablePreviousMonth]);
  (0, _react.useEffect)(function () {
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