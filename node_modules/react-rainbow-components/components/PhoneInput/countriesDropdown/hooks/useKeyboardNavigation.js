"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useKeyboardNavigation;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _constants = require("../../../../libs/constants");

var _getNewIndex = _interopRequireDefault(require("../helpers/getNewIndex"));

var _isOptionVisible = _interopRequireDefault(require("../../../InternalDropdown/helpers/isOptionVisible"));

function useKeyboardNavigation(country, list, ref, scrollableRef, itemsRef, handleCountryChange) {
  var activeIndex = (0, _react.useRef)(0);
  var length = list.length;
  var handleActiveChange = (0, _react.useCallback)(function (newIndex) {
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
  var moveToOption = (0, _react.useCallback)(function (newIndex) {
    var currentItem = itemsRef.current[activeIndex.current];
    var newItem = itemsRef.current[newIndex];

    if (currentItem && newItem) {
      if (!(0, _isOptionVisible["default"])(newItem, scrollableRef.current)) {
        var amount = newItem.offsetTop - currentItem.offsetTop;
        scrollableRef.current.scrollBy(0, amount);
      }

      handleActiveChange(newIndex);
    }
  }, [handleActiveChange, itemsRef, scrollableRef]);
  var handleKeyDown = (0, _react.useCallback)(function (event) {
    if ([_constants.UP_KEY, _constants.DOWN_KEY, _constants.ENTER_KEY, _constants.HOME_KEY, _constants.END_KEY].indexOf(event.keyCode) !== -1) {
      var _keyHandlerMap;

      event.preventDefault();
      var active = activeIndex.current;
      var keyHandlerMap = (_keyHandlerMap = {}, (0, _defineProperty2["default"])(_keyHandlerMap, _constants.UP_KEY, function () {
        return moveToOption((0, _getNewIndex["default"])(active - 1, length));
      }), (0, _defineProperty2["default"])(_keyHandlerMap, _constants.DOWN_KEY, function () {
        return moveToOption((0, _getNewIndex["default"])(active + 1, length));
      }), (0, _defineProperty2["default"])(_keyHandlerMap, _constants.HOME_KEY, function () {
        return moveToOption(0);
      }), (0, _defineProperty2["default"])(_keyHandlerMap, _constants.END_KEY, function () {
        return moveToOption(length - 1);
      }), (0, _defineProperty2["default"])(_keyHandlerMap, _constants.ENTER_KEY, function () {
        return list[active] && handleCountryChange(list[active]);
      }), _keyHandlerMap);
      keyHandlerMap[event.keyCode]();
    }
  }, [handleCountryChange, length, list, moveToOption]);
  (0, _react.useEffect)(function () {
    var element = ref.current || window;
    element.addEventListener('keydown', handleKeyDown);
    return function () {
      element.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, ref]);
  (0, _react.useEffect)(function () {
    handleActiveChange(0);

    if (scrollableRef.current && scrollableRef.current.scrollTo) {
      scrollableRef.current.scrollTo(0, 0);
    }

    activeIndex.current = 0;
  }, [country, handleActiveChange, itemsRef, length, scrollableRef]);
  (0, _react.useEffect)(function () {
    var currentItem = itemsRef.current[activeIndex.current];

    if (currentItem) {
      currentItem.setAttribute('aria-selected', true);
    }
  });
  return handleActiveChange;
}