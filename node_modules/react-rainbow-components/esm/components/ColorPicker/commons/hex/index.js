import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState, useEffect, useContext } from 'react';
import { StyledHexColorIcon, StyledHexInput } from './styled';
import { hexToRgba, rgbToHsv, isValidColor, decomposeColor } from '../../../../styles/helpers/color';
import { ColorPickerContext } from '../../context';
export default function Hex() {
  var _useContext = useContext(ColorPickerContext),
      hex = _useContext.hex,
      tabIndex = _useContext.tabIndex,
      onChange = _useContext.onChange;

  var _useState = useState(hex.substr(1)),
      _useState2 = _slicedToArray(_useState, 2),
      color = _useState2[0],
      setColor = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isFocused = _useState4[0],
      setIsFocused = _useState4[1];

  useEffect(function () {
    if (!isFocused) {
      setColor(hex.substr(1));
    }
  }, [hex, isFocused]);

  var handleChange = function handleChange(event) {
    var newHex = "#".concat(event.target.value);
    setColor(event.target.value);
    var rgba = hexToRgba(newHex);

    if (isValidColor(rgba)) {
      onChange({
        hex: newHex,
        rgba: decomposeColor(rgba).values,
        hsv: decomposeColor(rgbToHsv(rgba)).values
      });
    }
  };

  var handleBlur = function handleBlur() {
    setIsFocused(false);
    setColor(hex.substr(1));
  };

  return React.createElement(StyledHexInput, {
    value: color,
    bottomHelpText: "HEX",
    onChange: handleChange,
    onFocus: function onFocus() {
      return setIsFocused(true);
    },
    onBlur: handleBlur,
    icon: React.createElement(StyledHexColorIcon, null, "#"),
    tabIndex: tabIndex
  });
}