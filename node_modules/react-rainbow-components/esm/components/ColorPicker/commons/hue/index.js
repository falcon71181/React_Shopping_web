import React, { useContext } from 'react';
import StyledHueSlider from './styled';
import { hsvToRgb, rgbToRgba, recomposeColor, rgbaToHex, decomposeColor } from '../../../../styles/helpers/color';
import { ColorPickerContext } from '../../context';
export default function Hue() {
  var _useContext = useContext(ColorPickerContext),
      hsv = _useContext.hsv,
      rgba = _useContext.rgba,
      tabIndex = _useContext.tabIndex,
      onChange = _useContext.onChange;

  var handleChange = function handleChange(event) {
    var value = parseInt(event.target.value, 10);
    hsv[0] = isNaN(value) ? 0 : Math.max(0, Math.min(value, 360));
    var rgbColor = hsvToRgb(recomposeColor({
      type: 'hsv',
      values: hsv
    }));
    var rgbaColor = rgbToRgba(rgbColor, rgba[3]);
    onChange({
      hex: "#".concat(rgbaToHex(rgbaColor)),
      rgba: decomposeColor(rgbaColor).values,
      hsv: hsv
    });
  };

  return React.createElement(StyledHueSlider, {
    value: hsv[0],
    min: 0,
    max: 360,
    onChange: handleChange,
    tabIndex: tabIndex
  });
}