import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useState, useCallback, useRef } from 'react';
import { useOutsideClick, useScrollingIntent } from '@rainbow-modules/hooks';

function resolveElement(ref) {
  if (typeof ref === 'function') {
    var ret = ref();
    return ret && ret.current;
  }

  return ref && ref.current;
}

export default function useDefaultTooltipConnector(_ref) {
  var tooltipRef = _ref.tooltipRef,
      triggerRef = _ref.triggerRef;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isVisible = _useState2[0],
      setVisible = _useState2[1];

  var isFocused = useRef(false);
  useScrollingIntent({
    callback: function callback() {
      return setVisible(false);
    },
    isListening: isVisible,
    triggerElementRef: triggerRef
  });
  useOutsideClick(tooltipRef, function (event) {
    if (!resolveElement(triggerRef).contains(event.target)) {
      setVisible(false);
    }
  }, isVisible);
  var onFocus = useCallback(function () {
    isFocused.current = true;
    setVisible(true);
  }, []);
  var onBlur = useCallback(function () {
    isFocused.current = false;
    setVisible(false);
  }, []);
  var onMouseEnter = useCallback(function () {
    setVisible(true);
  }, []);
  var onMouseLeave = useCallback(function () {
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