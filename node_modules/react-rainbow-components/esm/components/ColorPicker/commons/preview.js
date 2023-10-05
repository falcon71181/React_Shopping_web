import React, { useContext } from 'react';
import { ColorPickerContext } from '../context';
import { StyledPreview } from './styled';
import { recomposeColor } from '../../../styles/helpers/color';
export default function Preview() {
  var _useContext = useContext(ColorPickerContext),
      rgba = _useContext.rgba;

  var style = {
    backgroundColor: recomposeColor({
      type: 'rgba',
      values: rgba
    })
  };
  return React.createElement(StyledPreview, {
    style: style
  });
}