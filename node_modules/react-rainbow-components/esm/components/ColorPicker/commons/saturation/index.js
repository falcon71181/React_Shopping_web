import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useRef, useContext } from 'react';
import { UP_KEY, DOWN_KEY, RIGHT_KEY, LEFT_KEY } from '../../../../libs/constants';
import { hsvToRgb, rgbToRgba, recomposeColor, decomposeColor, rgbaToHex } from '../../../../styles/helpers/color';
import { StyledColor, StyledCircle } from './styled';
import { ColorPickerContext } from '../../context';
import { calculateSaturation, calculateBright } from './helpers';
var Saturation = React.forwardRef(function (_props, ref) {
  var _keyHandlerMap;

  var _useContext = useContext(ColorPickerContext),
      rgba = _useContext.rgba,
      hsv = _useContext.hsv,
      tabIndex = _useContext.tabIndex,
      onChange = _useContext.onChange;

  var containerRef = useRef();
  var isMouseDown = useRef(false);

  var _hsv = _slicedToArray(hsv, 3),
      h = _hsv[0],
      s = _hsv[1],
      v = _hsv[2];

  var a = rgba[3];

  var change = function change(_ref) {
    var saturation = _ref.saturation,
        bright = _ref.bright;

    if (saturation >= 0) {
      hsv[1] = saturation;
    }

    if (bright >= 0) {
      hsv[2] = bright;
    }

    var rgbaColor = rgbToRgba(hsvToRgb(recomposeColor({
      type: 'hsv',
      values: hsv
    })), a);
    onChange({
      hex: "#".concat(rgbaToHex(rgbaColor)),
      rgba: decomposeColor(rgbaColor).values,
      hsv: hsv
    });
  };

  var handleChange = function handleChange(event) {
    var rect = containerRef.current.getBoundingClientRect();
    var saturation = calculateSaturation(event, rect);
    var bright = calculateBright(event, rect);
    change({
      saturation: saturation,
      bright: bright
    });
  };

  var handleMouseDown = function handleMouseDown(event) {
    handleChange(event);
    isMouseDown.current = true;
  };

  var handleMouseMove = function handleMouseMove(event) {
    if (isMouseDown.current) {
      handleChange(event);
    }
  };

  var handleMouseUp = function handleMouseUp() {
    isMouseDown.current = false;
  };

  var handleMouseLeave = function handleMouseLeave(event) {
    if (isMouseDown.current) {
      handleChange(event);
      isMouseDown.current = false;
    }
  };

  var keyHandlerMap = (_keyHandlerMap = {}, _defineProperty(_keyHandlerMap, UP_KEY, function () {
    var bright = Math.min(100, v + 1);
    change({
      bright: bright
    });
  }), _defineProperty(_keyHandlerMap, DOWN_KEY, function () {
    var bright = Math.max(0, v - 1);
    change({
      bright: bright
    });
  }), _defineProperty(_keyHandlerMap, LEFT_KEY, function () {
    var saturation = Math.max(0, s - 1);
    change({
      saturation: saturation
    });
  }), _defineProperty(_keyHandlerMap, RIGHT_KEY, function () {
    var saturation = Math.min(100, s + 1);
    change({
      saturation: saturation
    });
  }), _keyHandlerMap);

  var handleKeyDown = function handleKeyDown(event) {
    var keyCode = event.keyCode;

    if (keyHandlerMap[keyCode]) {
      event.preventDefault();
      keyHandlerMap[keyCode]();
    }
  };

  var handleClick = function handleClick() {
    ref.current.focus();
  };

  var hsl = "hsl(".concat(h, ",100%, 50%)");
  var styleColor = {
    background: hsl
  };
  var stylePointer = {
    top: "".concat(100 - v, "%"),
    left: "".concat(s, "%")
  };
  return React.createElement(StyledColor, {
    ref: containerRef,
    style: styleColor,
    onTouchMove: handleChange,
    onTouchStart: handleChange,
    onKeyDown: handleKeyDown,
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUp,
    onMouseLeave: handleMouseLeave,
    onClick: handleClick
  }, React.createElement(StyledCircle, {
    ref: ref,
    type: "button",
    tabIndex: tabIndex,
    style: stylePointer
  }));
});
export default Saturation;