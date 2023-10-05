"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useArrowKeyNav;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _constants = require("../../../libs/constants");

var _utils = require("../utils");

function useArrowKeyNav(_ref) {
  var childrenRefs = _ref.childrenRefs,
      isLoading = _ref.isLoading;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      focusedChildIndex = _useState2[0],
      setFocusedChildIndex = _useState2[1];

  var focusChild = (0, _react.useCallback)(function (index) {
    if (isLoading || !childrenRefs[index]) {
      return null;
    }

    setFocusedChildIndex(index);
    return childrenRefs[index].focus();
  }, [childrenRefs, isLoading]);
  var focusMatchedItem = (0, _react.useCallback)(function (matchedItem) {
    var itemIndex = (0, _utils.findItemIndex)(childrenRefs, matchedItem);
    return focusChild(itemIndex);
  }, [childrenRefs, focusChild]);
  var clearFocusedChild = (0, _react.useCallback)(function () {
    return setFocusedChildIndex(null);
  }, [setFocusedChildIndex]);
  var keyHandlerMap = (0, _react.useMemo)(function () {
    var _ref2;

    return _ref2 = {}, (0, _defineProperty2["default"])(_ref2, _constants.UP_KEY, function () {
      var nextFocusedChildIndex = focusedChildIndex > 0 ? focusedChildIndex - 1 : childrenRefs.length - 1;
      setFocusedChildIndex(nextFocusedChildIndex);
    }), (0, _defineProperty2["default"])(_ref2, _constants.DOWN_KEY, function () {
      var nextFocusedChildIndex = focusedChildIndex < childrenRefs.length - 1 ? focusedChildIndex + 1 : 0;
      setFocusedChildIndex(nextFocusedChildIndex);
    }), (0, _defineProperty2["default"])(_ref2, _constants.ENTER_KEY, function () {
      var isValidIndex = focusedChildIndex >= 0;

      if (isValidIndex) {
        childrenRefs[focusedChildIndex].click();
      }
    }), _ref2;
  }, [childrenRefs, focusedChildIndex]);
  var processPrintableCharacter = (0, _react.useCallback)(function (_char) {
    var matchedItem = (0, _utils.findItemByKey)(_char, childrenRefs, focusedChildIndex);

    if (matchedItem) {
      focusMatchedItem(matchedItem);
    }
  }, [childrenRefs, focusMatchedItem, focusedChildIndex]);
  var handleKeyPress = (0, _react.useCallback)(function (event) {
    var keyCode = event.keyCode,
        key = event.key;

    if (keyHandlerMap[keyCode]) {
      keyHandlerMap[keyCode]();
    } else if ((0, _utils.isPrintableCharacter)(key)) {
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