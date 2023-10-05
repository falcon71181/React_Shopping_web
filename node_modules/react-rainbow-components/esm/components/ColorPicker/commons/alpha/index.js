import React, { useContext } from 'react';
import StyledAlphaSlider from './styled';
import { ColorPickerContext } from '../../context';
export default function Alpha() {
  var _useContext = useContext(ColorPickerContext),
      hex = _useContext.hex,
      rgba = _useContext.rgba,
      hsv = _useContext.hsv,
      tabIndex = _useContext.tabIndex,
      onChange = _useContext.onChange;

  var handleChange = function handleChange(event) {
    var value = parseInt(event.target.value, 10);
    rgba[3] = isNaN(value) ? 1 : Math.max(0, Math.min(value, 100)) / 100;
    onChange({
      hex: hex,
      rgba: rgba,
      hsv: hsv
    });
  };

  var alpha = Math.round(rgba[3] * 100);
  return React.createElement(StyledAlphaSlider, {
    value: alpha,
    min: 0,
    max: 100,
    onChange: handleChange,
    tabIndex: tabIndex
  });
}