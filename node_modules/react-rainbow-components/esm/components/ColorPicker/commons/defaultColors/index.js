import React, { useContext } from 'react';
import { ColorPickerContext } from '../../context';
import { StyledContainer, StyledColors } from './styled';
import { colorToRgba, recomposeColor } from '../../../../styles/helpers/color';
import { useUniqueIdentifier } from '../../../../libs/hooks';
import Color from './color';
var DefaultColors = React.forwardRef(function (_props, ref) {
  var _useContext = useContext(ColorPickerContext),
      colors = _useContext.colors,
      rgba = _useContext.rgba,
      tabIndexProp = _useContext.tabIndex,
      onChange = _useContext.onChange;

  var rgbaColor = recomposeColor({
    type: 'rgba',
    values: rgba
  });
  var name = useUniqueIdentifier('color-picker-default');
  var listColors = colors.map(function (color, index) {
    var tabIndex = index === 0 ? tabIndexProp : -1;
    var isSelected = colorToRgba(color) === rgbaColor;
    var isFirstInput = index === 0;
    var inputRef = isFirstInput ? ref : undefined;
    return React.createElement(Color, {
      key: color,
      color: color,
      name: name,
      isChecked: isSelected,
      onChange: onChange,
      ref: inputRef,
      tabIndex: tabIndex
    });
  });
  return React.createElement(StyledContainer, null, React.createElement(StyledColors, null, listColors));
});
export default DefaultColors;