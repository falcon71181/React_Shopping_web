"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useDefaultTooltipConnector;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _hooks = require("@rainbow-modules/hooks");

function resolveElement(ref) {
  if (typeof ref === 'function') {
    var ret = ref();
    return ret && ret.current;
  }

  return ref && ref.current;
}

function useDefaultTooltipConnector(_ref) {
  var tooltipRef = _ref.tooltipRef,
      triggerRef = _ref.triggerRef;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isVisible = _useState2[0],
      setVisible = _useState2[1];

  var isFocused = (0, _react.useRef)(false);
  (0, _hooks.useScrollingIntent)({
    callback: function callback() {
      return setVisible(false);
    },
    isListening: isVisible,
    triggerElementRef: triggerRef
  });
  (0, _hooks.useOutsideClick)(tooltipRef, function (event) {
    if (!resolveElement(triggerRef).contains(event.target)) {
      setVisible(false);
    }
  }, isVisible);
  var onFocus = (0, _react.useCallback)(function () {
    isFocused.current = true;
    setVisible(true);
  }, []);
  var onBlur = (0, _react.useCallback)(function () {
    isFocused.current = false;
    setVisible(false);
  }, []);
  var onMouseEnter = (0, _react.useCallback)(function () {
    setVisible(true);
  }, []);
  var onMouseLeave = (0, _react.useCallback)(function () {
    if (!isFocused.current) {
      setVisible(false);
    }
  }, []);
  return {
    onFocus: onFocus,
    onBlur: onBlur,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    isVisible: isVisible
  };
}