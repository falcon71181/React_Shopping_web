import React, { useRef, useContext, useImperativeHandle } from 'react';
import { ColorPickerContext } from '../context';
import { StyledFlexContainer } from '../styled';
import { StyledSaturationContainer, StyledSlidersContainer, StyledHexColorContainer, StyledRgbaColorContainer } from './styled';
import { Saturation, Hue, Alpha, Preview, Hex, Rgba, DefaultColors } from '../commons';
import RenderIf from '../../RenderIf';
var Default = React.forwardRef(function (_props, ref) {
  var _useContext = useContext(ColorPickerContext),
      colors = _useContext.colors;

  var firstRef = useRef();
  var lastRef = useRef();
  useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        firstRef.current.focus();
      },
      click: function click() {
        firstRef.current.click();
      },
      blur: function blur() {
        lastRef.current.blur();
      }
    };
  });
  var hasColors = colors.length > 0;
  return React.createElement(React.Fragment, null, React.createElement(StyledSaturationContainer, null, React.createElement(Saturation, {
    ref: firstRef
  })), React.createElement(StyledFlexContainer, null, React.createElement(StyledSlidersContainer, null, React.createElement(Hue, null), React.createElement(Alpha, null)), React.createElement(Preview, null)), React.createElement(StyledFlexContainer, null, React.createElement(StyledHexColorContainer, null, React.createElement(Hex, null)), React.createElement(StyledRgbaColorContainer, null, React.createElement(RenderIf, {
    isTrue: hasColors
  }, React.createElement(Rgba, null)), React.createElement(RenderIf, {
    isTrue: !hasColors
  }, React.createElement(Rgba, {
    ref: lastRef
  })))), React.createElement(RenderIf, {
    isTrue: hasColors
  }, React.createElement(DefaultColors, {
    ref: lastRef
  })));
});
export default Default;